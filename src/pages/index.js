/**
 * Main page for caspia.org
 */
import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class MainIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
<h3>
Caspia - Creating Accomplished Software Professionals In Absentia
</h3>
<p>
Hi, I'm R. Kent James, sometimes using the handle rkent. You can read a little more about me on
the <a href='/about'>About</a> page. 
</p><p>
This is the main website for my personal initiative to work
with software professionals who are incarcerated in Washington state prisons. This includes some people who are beginners, as well as some who were software
professionals before they entered prison. Generally the goal is to allow them to continue to develop their skills
while in prison.
</p>
<p>
One of the main challenges of doing modern software development in prison is that so much of what is needed is located
on the internet, but the prisoners do not have internet access. As a result, I spend a great deal of my effort developing
various projects to provide offline access to software development tools and documentation.. Much of this site describes those
tools, and tries to make them available for others in similar situations.
</p>
      </div>
    )
  }
}

export default MainIndex

export const pageQuery = graphql`
  query MainIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
