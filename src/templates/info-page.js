/**
 * Template for a general info page using markdown
 */
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class InfoPageTemplate extends React.Component {
  render() {
    //console.dir(this.props)
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h2>{post.frontmatter.title}</h2>
        <p
          style={{
            display: 'block',
            marginBottom: '1rem',
            marginTop: '0rem',
          }}
        >
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
        </ul>
      </div>
    )
  }
}

export default InfoPageTemplate

export const pageQuery = graphql`
  query InfoPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
