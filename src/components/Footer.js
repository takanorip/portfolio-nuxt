import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/takanoripe"
            target="_blank" rel="noopener noreferrer"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/takanorip"
            target="_blank" rel="noopener noreferrer"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/takanorip"
            target="_blank" rel="noopener noreferrer"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Takanori Oki</li>
        <li>
          Design:{' '}
          <a href="https://html5up.net" target="_blank" rel="noopener noreferrer" >
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
