import React from 'react'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>takanorip</strong>
    </Link>
    <nav>
      <button type="button" className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </button>
    </nav>
  </header>
)

export default Header
