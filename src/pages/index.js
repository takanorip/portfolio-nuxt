import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../posts/hieida/cover.jpg'
import pic02 from '../posts/inutetraplus/cover.png'
import pic03 from '../posts/webfont/cover.jpg'
import pic04 from '../posts/webcomponents/cover.jpg'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={siteDescription} />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                I'm a Frontend Developer based in Tokyo. I develop
                WebApplications and WebSites. I am good at designing HTML / CSS,
                markup and developing with JavaScript. Recently I have developed
                with React, Vue.js and Polymer.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/about" className="button icon fa-user">
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section id="two" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Chie Hieda</h3>
                <p>WebSite</p>
              </header>
              <Link to="/works/chie-hieida" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>犬テトラ+</h3>
                <p>WebSite</p>
              </header>
              <Link to="/works/inutetraplus" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>
                  イヌでもわかる
                  <br className="u-sp" />
                  ウェブフォント
                </h3>
                <p>Book</p>
              </header>
              <Link to="/works/webfont" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>イヌでもわかるWeb Components</h3>
                <p>Book</p>
              </header>
              <Link to="/works/webcomponents" className="link primary" />
            </article>
          </section>
          <section id="three">
            <div className="inner">
              <ul className="actions">
                <li>
                  <Link to="/works" className="button icon fa-folder-open-o">
                    More Works
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
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
