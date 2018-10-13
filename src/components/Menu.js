import React from 'react'
import Link from 'gatsby-link'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            TOP
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/works">
            Works
          </Link>
        </li>
      </ul>
    </div>
    <button type="button" className="close" onClick={props.onToggleMenu}>
      Close
    </button>
  </nav>
)

export default Menu
