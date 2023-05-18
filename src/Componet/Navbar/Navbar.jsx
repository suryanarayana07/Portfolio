import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
      <div className="n-left">
        <div className="n-name">Surya</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Servises' smooth={true} activeClass='activeClass'>
              <li>Servises</li>
            </Link>
            {/* <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
              <li>Experience</li>
            </Link> */}
            <Link spy={true} to='Skill' smooth={true} activeClass='activeClass'>
              <li>Skill</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contacts' smooth={true} activeClass='activeClass'>
        <button className="button n-button">Contact us</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
