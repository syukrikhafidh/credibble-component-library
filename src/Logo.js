import React from 'react'

export default function Logo({ href, link: Link }) {
  return (
    <Link href={href} title='Go to homepage' className='header__logo'>
      <span className='logo_white'>Credibble</span>
    </Link>
  )
}
