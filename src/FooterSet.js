import BasicLink from './BasicLink'
import events from './pubsub'
import Footer from './Footer'
import MobileSidebar from './MobileSidebar'
import React, { useEffect, useState, Fragment } from 'react'
import { getFirstName, getIsVerified } from './localStorage'

export default function FooterSet({
  footerClassName,
  isAuth,
  isLandingPage,
  isNext,
  linkComponent,
  onLogout,
  onToggleSidebar,
  ...props
}) {
  // replace basic link with next js Link component
  const Link = linkComponent || BasicLink

  // prepare state
  const [isSidebarOpen, setSidebar] = useState(false)
  const [isVerified, setVerified] = useState(props.isVerified || false)
  const [firstName, setFirstName] = useState(null)

  useEffect(() => {
    // only do this on blog
    if (!isNext && typeof window !== 'undefined') {
      // if is not listening yet, set listener on window object
      window.credibbleEvents = window.credibbleEvents || events

      // subscribe to "/sidebar" events
      window.credibbleEvents.subscribe('/sidebar', function (res) {
        // update sidebar
        setSidebar(res)

        // set body overflow and credibble blog div
        // based on the sidebar state
        if (res) {
          document.querySelector('body').style.overflow = 'hidden'
          document.querySelector('.credibble-blog').classList.add('slided')
        } else {
          document.querySelector('body').style.overflow = 'unset'
          document.querySelector('.credibble-blog').classList.remove('slided')
        }
      })

      // subscribe to "/firstName" events
      window.credibbleEvents.subscribe('/firstName', function (res) {
        if (!res) {
          setFirstName(null)
          setVerified(false)
        }
      })

      // get firstName from local storage
      const newFirstName = getFirstName()
      setFirstName(newFirstName)

      // get isEmailVerifiedStatus from local storage
      const newIsVerified = getIsVerified()
      setVerified(newIsVerified)
    }
  }, [])

  function handleToggleSidebar() {
    if (onToggleSidebar) {
      // if a callback is provided run
      onToggleSidebar()
    } else {
      // switch sidebar state
      const now = !isSidebarOpen
      // publish new state
      window.credibbleEvents.publish('/sidebar', now)
      // change local state
      setSidebar(now)
    }
  }

  function handleLogout() {
    if (onLogout) {
      // if props is provided, then it is from a react parent component
      onLogout()
    } else {
      window.credibbleEvents.publish('/firstName', null)
      window.credibbleEvents.publish('/isVerified', false)
      // else remove local storage and current state
      window.localStorage.removeItem('persist:root')
      setFirstName(null)
      setVerified(false)
    }
  }

  return (
    <Fragment>
      <Footer
        className={footerClassName}
        isLandingPage={isLandingPage}
        isSidebarOpen={isNext ? props.isSidebarOpen : isSidebarOpen}
        isVerified={isVerified}
        link={Link}
      />
      <MobileSidebar
        isSidebarOpen={isNext ? props.isSidebarOpen : isSidebarOpen}
        isPublic={isNext ? !isAuth : !firstName}
        onToggleSidebar={handleToggleSidebar}
        onLogout={handleLogout}
        link={Link}
      />
    </Fragment>
  )
}
