import React from 'react'
import logo from "./logo.svg"
import './navBar.scss';

const NavBar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo Kasa" />
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
    </nav>
  )
}

export default NavBar