import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bibhu-de/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/DeBibhu562" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default headerSocial