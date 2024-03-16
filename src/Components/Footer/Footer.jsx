import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { gmail_link, instagram_link, github_link } from '../../url'
// import { Icon } from 'react-native-elements'

function Footer() {
  return (
    <div className='footer'>
      {/* <FontAwesomeIcon icon="fa-brands fa-square-github" /> */}
      <a href={github_link}>
        <FontAwesomeIcon className='icon' icon={faGithub} />
      </a>
      <a href={instagram_link}>
        <FontAwesomeIcon className='icon' icon={faInstagram} />
      </a>
      <a href={gmail_link}>
        <FontAwesomeIcon className='icon' icon={faEnvelope} />
      </a>
      <h1>Created and Developed by Gayal Melappilly</h1>
      <br />
      <br />
      <p className='credits'>GMS</p>
    </div>
  )
}

export default Footer
