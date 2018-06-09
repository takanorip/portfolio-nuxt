import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li><Link onClick={props.onToggleMenu} to="/">TOP</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/experience">Experience</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/works">Works</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/skills">Skills</Link></li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: React.PropTypes.func
}

export default Menu
