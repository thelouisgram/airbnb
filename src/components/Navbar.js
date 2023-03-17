import React from 'react'
import MyLogo from '../../src/images/logo.png'

export default function Navbar() {
  return (
    <nav>
        <img src={MyLogo} alt="logo" className="logo" />
    </nav>
  )
}
