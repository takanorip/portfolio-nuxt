import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import BannerLanding from '../components/BannerLanding'

import pic11 from '../assets/images/pic11.jpg'

class WorksIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
          <title>Works | Takanori Oki</title>
          <meta name="description" content="Works | Takanori Oki" />
        </Helmet>

        <BannerLanding title="Works" descriptionTop="My Works" descriptionBottom="" />

        <div id="main" className="alt">
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.frontmatter.path
            return (
              <section key={node.frontmatter.path}>
                <div className="inner">
                  <header className="major">
                    <h3>
                      <Link to={node.frontmatter.path}>
                        {title}
                      </Link>
                    </h3>
                  </header>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </section>
            )
          })}
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
            date(formatString: "DD MMMM, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
