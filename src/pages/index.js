import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>I'm a Frontend Developer based in Tokyo. I develop WebApplications and WebSites. I am good at designing HTML / CSS, markup and developing with JavaScript. Recently I have developed with React, Vue.js and Polymer.</p>
              <ul className="actions">
                <li><Link to="/about" className="button icon fa-user">More</Link></li>
              </ul>
            </div>
          </section>
          <section id="two" className="tiles">
            <article style={{backgroundImage: `url(${pic01})`}}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic02})`}}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic03})`}}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic04})`}}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic05})`}}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic06})`}}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <section id="three">
            <div className="inner">
              <ul className="actions">
                <li><Link to="/works" className="button icon fa-folder-open-o">More Works</Link></li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
query PageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
