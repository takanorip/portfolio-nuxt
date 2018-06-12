import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import BannerLanding from '../components/BannerLanding'

class WorksIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const websites = posts.filter(({ node }) => {
      return node.frontmatter.category === 'WebSite'
    })
    const books = posts.filter(({ node }) => {
      return node.frontmatter.category === 'Book'
    })

    return (
      <div>
        <Helmet>
          <title>Works | Takanori Oki</title>
          <meta name="description" content="Works | Takanori Oki" />
        </Helmet>

        <BannerLanding title="Works" descriptionTop="My Works" descriptionBottom="" type="2" />

        <div id="main" className="">
          <section>
            <div className="inner">
              <header className="major">
                <h2>WebSites</h2>
              </header>
              <div className="works-items">
                {websites.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.frontmatter.path
                  return (
                    <Link className="works-item" to={node.frontmatter.path} key={node.frontmatter.title}>
                      <Img sizes={{...node.frontmatter.cover.childImageSharp.sizes, aspectRatio: 16/9}} />
                      <h4 className="works-title">{title}</h4>
                      <p className="works-category">{node.frontmatter.category}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
          <section>
            <div className="inner">
              <header className="major">
                <h2>Books</h2>
              </header>
              <div className="works-items">
                {books.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.frontmatter.path
                  return (
                    <Link className="works-item" to={node.frontmatter.path} key={node.frontmatter.title}>
                      <Img sizes={{...node.frontmatter.cover.childImageSharp.sizes, aspectRatio: 16/9}} />
                      <h4 className="works-title">{title}</h4>
                      <p className="works-category">{node.frontmatter.category}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
          <section>
            <div className="inner">
              <header className="major">
                <h2>Slides</h2>
              </header>
              <section className="works-slide">
                <h3>Speaker Deck</h3>
                <p><a className="button icon fa-desktop" href="https://speakerdeck.com/takanorip" target="_blank" rel="noopener">View Slides</a></p>
              </section>
              <section className="works-slide">
                <h3>Slides</h3>
                <p><a className="button icon fa-desktop" href="https://slides.com/takanorip" target="_blank" rel="noopener">View Slides</a></p>
              </section>
            </div>
          </section>
        </div>

      </div>
    )
  }
}

export default WorksIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY/MM")
            title
            path
            category
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
