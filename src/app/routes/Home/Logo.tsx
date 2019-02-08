import * as React from 'react'

export default function Logo() {
  const src = 'https://images.pexels.com/photos/373912/'
    + 'pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

  return (
    <img
      alt="Logo"
      src={src}
      width="50%"
      height="50%"
    />
  )
}
