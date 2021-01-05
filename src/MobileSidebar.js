import React, { Fragment } from 'react'
import Icon from './Icon'

const Collapse = ({
  children,
  href,
  subitem,
  onClick,
  icon,
  color,
  link: Link
}) => (
  <div className='link-collapse'>
    <div className='collapse-panel d-flex flex-wrap'>
      {icon && <img src={icon} alt='' />}
      <div className='link-item d-flex w-100'>
        <Link
          href={href}
          onClick={onClick}
          className='mr-auto'
          style={color && { color: `${color}` }}
        >
          {children}
        </Link>
      </div>
    </div>
  </div>
)

const additionalLink = [
  {
    href: '/blog/about-us/',
    icon: 'iconAbout',
    label: 'About us'
  },
  {
    href: '/contactus',
    icon: 'iconContact',
    label: 'Contact us'
  },
  {
    href: '/blog/',
    icon: 'iconBlog',
    label: 'Blog'
  },
  {
    href: '/blog/faq/',
    icon: 'iconFAQ',
    label: 'FAQ'
  }
]

const publicLink = [
  {
    href: '/',
    icon: '',
    label: 'Home'
  },
  {
    href: '/landing-builder',
    icon: '',
    label: 'Credit Builder'
  },
  {
    href: '/landing-mortgage',
    icon: '',
    label: 'Homebuyer'
  },
  {
    href: '/landing-insurance',
    icon: '',
    label: 'Life Insurance'
  },
  {
    href: '/fraud-monitor',
    icon: '',
    label: 'ID Fraud Monitor'
  }
]

const privateLinks = [
  {
    href: '/home',
    icon: '',
    label: 'Overview',
    subItem: [
      {
        label: 'Dashboard',
        href: '/home/dashboard',
        exact: true
      },
      {
        label: 'Credit Builder',
        href: '/home/credit-dashboard'
      },
      {
        label: 'Credit Check',
        href: '/home/credit-check'
      },
      {
        label: 'Credit Report',
        href: '/home/credit-report'
      }
    ]
  },
  // for verified add content here
  {
    href: '/offers/credit-cards',
    label: 'Credit Cards',
    icon: ''
  },
  {
    href: '/landing-insurance',
    label: 'Insurance',
    icon: ''
  },
  {
    href: '/fraud',
    label: 'Fraud',
    icon: ''
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: '',
    subItem: [
      {
        label: 'My account',
        href: '/profile/my-account',
        exact: true
      },
      {
        label: 'Address',
        href: '/profile/home-and-job'
      },
      {
        label: 'Subscription',
        href: '/profile/payment'
      },
      {
        label: 'Account settings',
        href: '/profile/settings'
      }
    ]
  }
]

const verifiedLink = [
  {
    href: '/mortgage',
    label: 'Homebuyer',
    icon: '',
    subItem: [
      {
        label: 'Mortgage',
        href: '/mortgage',
        exact: true
      },
      {
        label: 'Mortgage timeline',
        href: '/mortgage/timeline'
      }
    ]
  },
  {
    href: '/offers/personal-loans',
    label: 'Loans',
    icon: ''
  }
]

export default function MobileSidebar({
  isSidebarOpen,
  version,
  onToggleSidebar,
  onLogout,
  isPublic,
  isVerified,
  link: Link
}) {
  const [homeLink, ...otherLink] = privateLinks
  const allPrivateLinks = isVerified
    ? [homeLink, ...verifiedLink, ...otherLink]
    : privateLinks

  return (
    <div
      className={`menu-mobile-sidebar-v2 d-flex flex-column vh-100 ease${
        isSidebarOpen ? ' slided' : ''
      }`}
    >
      <div className='accordion' id='accordMenu'>
        <h3 className='menu-heading px-3 mb-0'>
          Main Menu
          <button
            className={`close d-block d-lg-none my-3${
              version === 'v2' ? ' v2' : ''
            }`}
            type='button'
            onClick={onToggleSidebar}
          >
            <Icon name='close' />
          </button>
        </h3>
        {!isPublic && (
          <Fragment>
            {allPrivateLinks.map((x) => (
              <Collapse
                href={x.href}
                onClick={onToggleSidebar}
                link={Link}
                key={x.label}
              >
                {x.label}
              </Collapse>
            ))}
          </Fragment>
        )}

        {isPublic && (
          <Fragment>
            {publicLink.map((x) => (
              <Collapse
                href={x.href}
                onClick={onToggleSidebar}
                link={Link}
                key={x.label}
              >
                {x.label}
              </Collapse>
            ))}
          </Fragment>
        )}

        <h3 className='menu-heading px-3 mb-0'>Other</h3>
        {additionalLink.map((x) => (
          <Collapse
            href={x.href}
            onClick={onToggleSidebar}
            link={Link}
            key={x.label}
          >
            {x.label}
          </Collapse>
        ))}

        {!isPublic && (
          <Collapse
            color='#EF6042'
            onClick={() => {
              onToggleSidebar()
              onLogout()
            }}
            link={Link}
          >
            Log out
          </Collapse>
        )}
      </div>
    </div>
  )
}
