import React from 'react'

export default function BasicLink({ children, ...props }) {
  return <a {...props}>{children}</a>
}
