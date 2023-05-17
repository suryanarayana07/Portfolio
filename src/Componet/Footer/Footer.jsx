import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <div className="f-content">
            <span>mallicksurya31@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.instagram.com/ig_surya_07/">
                <Insta color='white' size='3rem'/>
              </a>
              <a href="https://www.facebook.com/suryanarayanmallick.dipu/">
                <Facebook color='white' size='3rem'/>
              </a>
              <a href="https://github.com/suryanarayana07">
                <Github color='white' size='3rem'/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
