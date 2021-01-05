import React, { Fragment } from 'react'

export default function Nav({ isPublic, isVerified, link: Link }) {
  const unVerifiedNav = [
    {
      label: 'Overview',
      href: '/home'
    },
    {
      label: 'Homebuyer',
      href: '/mortgage'
    },
    {
      label: 'Loans',
      href: '/offers/personal-loans'
    },
    {
      label: 'Credit Card',
      href: '/offers/credit-cards'
    },
    {
      label: 'Insurance',
      href: '/landing-insurance'
    },
    {
      label: 'Fraud',
      href: '/fraud'
    },
    {
      label: 'Blog',
      href: '/blog/'
    }
  ]

  const verifiedNav = [
    {
      label: 'Overview',
      href: '/home'
    },
    {
      label: 'Homebuyer',
      href: '/mortgage'
    },
    {
      label: 'Loans',
      href: '/offers/personal-loans'
    },
    {
      label: 'Credit Card',
      href: '/offers/credit-cards'
    },
    {
      label: 'Insurance',
      href: '/landing-insurance'
    },
    {
      label: 'Fraud',
      href: '/fraud'
    },
    {
      label: 'Blog',
      href: '/blog/'
    }
  ]

  const publicNav = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Credit Builder',
      href: '/credit-builder'
    },
    {
      label: 'Homebuyer',
      href: '/homebuyer-mortgage'
    },
    {
      label: 'Insurance',
      href: '/landing-insurance'
    },
    {
      label: 'ID Fraud Monitor',
      href: '/fraud-monitor'
    },
    {
      label: 'Blog',
      href: '/blog/'
    }
  ]

  let nav = []
  if (isPublic) {
    nav = publicNav
  } else if (isVerified) {
    nav = verifiedNav
  } else {
    nav = unVerifiedNav
  }

  return (
    <nav className='header__nav'>
      <ul className='top-navigation header__links top-navigation_active-item_'>
        {nav.map((item, key) => {
          return (
            <li key={key} className='top-navigation__item'>
              {item.href && (
                <Link href={`${item.href}`} className='top-navigation__link'>
                  {item.label}
                  {item.new && <span className='top-navigation__new'>New</span>}
                  {item.beta && (
                    <span className='top-navigation__new'>Beta</span>
                  )}
                  {item.arrow && (
                    <Fragment>
                      &nbsp;<i className='fa fa-chevron-down' />
                    </Fragment>
                  )}
                  <span className='top-navigation__highlight' />
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
