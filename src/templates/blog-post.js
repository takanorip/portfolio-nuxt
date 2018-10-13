import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <div id="main" className="alt">
          <div className="inner">
            <Helmet>
              <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.title} | ${siteTitle}`}
              />
              <meta
                property="og:title"
                content={`${post.frontmatter.title} | ${siteTitle}`}
              />
              <meta
                property="og:description"
                content={`${post.frontmatter.title} | ${siteTitle}`}
              />
              <meta
                property="og:image"
                content={
                  'https://takanorip.com' +
                  post.frontmatter.cover.childImageSharp.sizes.src
                }
              />
            </Helmet>
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
            </header>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        cover {
          childImageSharp {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`
