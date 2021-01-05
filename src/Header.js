import React, { Fragment } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import LeftMenu from './LeftMenu'

export default function Header({
  firstName,
  isMortgage,
  isPublic,
  isVerified,
  isSidebarOpen,
  link: Link,
  onLogout
}) {
  return (
    <header
      className={`header position-fixed w-100${
        isPublic ? ' landingHeader' : ''
      } ${isSidebarOpen ? 'slided' : ''} ${
        isMortgage ? 'landingMortgage' : ''
      }`}
    >
      <div className='container container_header'>
        <section className='header__box'>
          <Logo href='/' link={Link} />
          <Nav isPublic={isPublic} isVerified={isVerified} link={Link} />
          {!isPublic && (
            <LeftMenu link={Link} firstName={firstName} onLogout={onLogout} />
          )}
          {isPublic && (
            <Fragment>
              <aside className='user-menu header__user-menu'>
                <Link href='/login' className='button'>
                  Log in
                </Link>
                <Link href='/register' className='button button_type_primary'>
                  Sign up
                </Link>
              </aside>
            </Fragment>
          )}
        </section>
      </div>
    </header>
  )
}
