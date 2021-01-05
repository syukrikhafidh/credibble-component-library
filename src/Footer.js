import React from 'react'
import Icon from './Icon'

export default function Footer({
  isSidebarOpen,
  className,
  isLandingPage,
  link: Link
}) {
  const footerLinks = [
    {
      label: 'About us',
      href: '/blog/about-us/'
    },
    {
      label: 'Contact us',
      href: '/contactus'
    },
    {
      label: 'Terms & conditions',
      href: '/blog/terms-and-conditions/'
    },

    {
      label: 'Report fraud',
      href: '/contactus',
      className: 'btn btn-danger'
    },
    {
      label: 'Terms of use',
      href: '/blog/terms-of-use/'
    },
    {
      label: 'PRIVACY POLICY',
      href: '/blog/privacy-policy/'
    },
    {
      label: 'FAQ',
      href: '/blog/faq/'
    },
    {
      label: 'Sitemaps',
      href: '/sitemaps'
    },
    {
      label: 'Blog',
      href: '/blog/'
    }
  ]

  return (
    <div
      className={`footer-wrapper ease ${
        isLandingPage ? 'landing-footer' : ''
      } ${isSidebarOpen ? 'slided' : ''} ${className}`}
    >
      <div className='container px-lg-0'>
        <footer className='footer pt-4 pt-md-5'>
          <section className='footer__section'>
            <ul className='footer__list'>
              {footerLinks.map((item, i) => {
                return (
                  <li key={i} className='footer__item'>
                    <Link
                      href={item.href}
                      className={`footer__link ${item.className}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link href='/' className='footer__logo'>
              <Icon name='logo' classSvg='svg-icon_gray' />
            </Link>
          </section>
          <section className='footer__section'>
            <p className='footer__desc'>
              Credibble Limited is authorised and regulated by the Financial
              Conduct Authority (FCA) under firm registration numbers (FRN’s)
              713043 and 795412. Credibble Limited is registered with the
              Information Commissioners Office under registration reference
              ICOZA749004. VAT registration number 236554009. Credibble Limited
              is registered in England and Wales with company number 9511750.
              Contact us at: Rainham House, Manor Way, RM13 8RH. We use cookies
              to give you the best experience. By using our website you agree to
              our use of cookies in accordance with our{' '}
              <Link
                className='footer__txt-link text-white'
                title=''
                href='/blog/cookie-policy/'
              >
                cookie policy.
              </Link>
            </p>
          </section>
        </footer>
        <div className='disclamer'>
          <p>
            © Credibble Limited {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
