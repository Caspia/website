import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'

import 'bootstrap/dist/css/bootstrap.css'

class Template extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    //console.log('this.props: ' + JSON.stringify(this.props))
    const { location, children } = this.props

    let header = <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary'
           style={{marginBottom: '1em', paddingTop: '0em', paddingBottom: '0em'}}>
        <Link
          className='navbar-brand'
          to={'/'}
        >
          Caspia
        </Link>
        <img src='/caspiantern210x64.png' alt='Caspian Tern' title='Caspian Tern, By Ed Dunens - Caspian Tern, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=64582408'/>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='navbar-nav'>
              <a className='nav-link' href='/blog'>Blog</a>
            </li>
            <li className='navbar-nav'>
              <a className='nav-link' href='/resources'>Resources</a>
            </li>
            <li className='navbar-nav'>
              <a className='nav-link' href='/about'>About Me</a>
            </li>
            <li className='navbar-nav'>
              <a className='nav-link' href='/contacts'>Contacts</a>
            </li>
            <li className='navbar-nav'>
              <a className='nav-link' href='/links'>Links</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    let footer =
      <div style={{
        fontStyle: 'italic',
        marginBottom: '1rem'
        }}>
        <hr />
        <p>
  Caspia is my personal project dedicated to help prisoners in the state of Washington learn to
  code. I lead a technical seminar at <a href='http://www.doc.wa.gov/corrections/incarceration/prisons/mcc.htm'>WSR </a>
  in Monroe, Washington where a group of prisoners is learning web design using the nodejs platform.
        </p>
      </div>
    return (
      <div className = 'container'>
        {header}
        {children()}
        {footer}
      </div>
    )
  }
}

export default Template

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

