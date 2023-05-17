import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   

  return (
    <div className="contact-form" id='Contacts'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color : darkMode? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form>
                <input type="text" name="user-name" className="user" placeholder="Name" />
                <input type="email" name="user-email" className="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message" />
                <input type="reset" value="Send" className="button" />
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
