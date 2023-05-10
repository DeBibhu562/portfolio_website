import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>BIBHU'S PORTFOLIO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="services">Services</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        {/* <li><a href="testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/bibhu.dey.98"><FaFacebookF/></a>
        <a href="https://www.instagram.com/debibhu/"><FaInstagram/></a>
        <a href="https://twitter.com/23bibhu"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>Bibhu De. All right reserved.</small>
      </div>
    </footer>
  )
}

export default footer