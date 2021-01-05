import React, { Fragment, useState } from 'react'
import Icon from './Icon'

export default function LeftMenu({ link: Link, firstName, onLogout }) {
  const [active, setActive] = useState(false)

  return (
    <Fragment>
      <aside className='user-menu header__user-menu'>
        <Link
          href='#'
          className={`user-menu__info-box ${active ? 'active' : ''}`}
          onClick={() => setActive(!active)}
        >
          <span className='user-menu__name'>Hello, {firstName || 'Mate'}</span>
          <Icon name='chevron' classSvg='svg-icon_gray user-menu__arrow' />
        </Link>
        <ul className={`user-menu__menu${active ? '_active' : ''}`}>
          <li className='user-menu__item'>
            <Link
              href='/profile'
              className='user-menu__link'
              onClick={() => setActive(!active)}
            >
              Profile
            </Link>
          </li>
          <li className='user-menu__item'>
            <Link
              href='/profile/settings'
              className='user-menu__link'
              onClick={() => setActive(!active)}
            >
              <i className='fa fa-cog' /> Settings
            </Link>
          </li>
          <li className='user-menu__item'>
            <div className='user-menu__link' onClick={onLogout}>
              <i className='fa fa-sign-out' /> Log out
            </div>
          </li>
        </ul>
        {active && (
          <div
            className='user-menu__overlay'
            onClick={() => setActive(!active)}
          />
        )}
      </aside>
    </Fragment>
  )
}
