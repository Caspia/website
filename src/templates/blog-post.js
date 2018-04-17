import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    //console.dir(this.props)
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previousNode, nextNode } = this.props.pathContext

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
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: '1rem',
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previousNode && (
            <li>
              <Link to={previousNode.fields.slug} rel="prev">
                ← {previousNode.frontmatter.title}
              </Link>
            </li>
          )}

          {nextNode && (
            <li>
              <Link to={nextNode.fields.slug} rel="next">
                {nextNode.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
