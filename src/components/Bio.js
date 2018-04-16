import React from 'react'

// Import typefaces
//import 'typeface-montserrat'
//import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
//import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '2rem',
        }}
      >
        <img
          src={profilePic}
          alt={`R. Kent James`}
          style={{
            marginRight: '10px',
            marginBottom: 0,
            width: '4rem',
            height: '4rem',
          }}
        />
        <p>
          I (R. Kent James) currently focus on teaching web development in a Washington state prison,&nbsp;
          <a href="http://www.doc.wa.gov/corrections/incarceration/prisons/mcc.htm" alt="Monroe Correctional Complex (MCC)">WSR</a>. Much of this blog
          will focus on the challenges of that environment, particularly web development with no direct
          internet access.
        </p>
      </div>
    )
  }
}

export default Bio
