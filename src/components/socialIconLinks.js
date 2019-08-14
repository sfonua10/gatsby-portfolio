import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconCodepen from './images/codepen'
import IconCodewars from './images/codewars'


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/sfonua10" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/saiafonua/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://twitter.com/saiafonua" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/saiafonua" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
      <a href="https://codepen.io/saiafonua/" target="_blank" rel="noopener noreferrer">
        <IconCodepen classes={`${iconClasses}`}  />
      </a>
      <a href="https://codewars.com/users/ck1" target="_blank" rel="noopener noreferrer">
        <IconCodewars classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
