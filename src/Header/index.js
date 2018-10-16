import React from 'react'
import Nav from './Nav'
export default function Header(props) {
  return (
    <header id="header">
      <img id="header-img" src={require('../assets/Sealofrassilon.png')} />
      <Nav />
    </header>
  )
}
