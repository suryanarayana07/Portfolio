import React from 'react'
import './Intro.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import surya from '../../img/surya.jpeg'
import thumbup from '../../img/thumbup.png'
import emoji from '../../img/don.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                    <span>Suryanarayana Mallik</span>
                    <span>Frontend Developer with high level of experience in web designing, producting the Quality work</span>
                </div>
                <button className=" button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <a href="https://github.com/suryanarayana07">
                        <Github color='var(--orange)' size='3rem' />
                    </a>
                    <a href="https://www.linkedin.com/in/suryanarayana-mallik-169095243/">
                        <Linkedin color='var(--orange)' size='3rem' />
                    </a>
                    <a href="https://www.instagram.com/ig_surya_07/">
                        <Insta color='var(--orange)' size='3rem' />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img
                    src={surya} alt="" srcset="" />
                <motion.img
                    initial={{ left: '-21%' }}
                    whileInView={{ left: '4%' }}
                    transition={{ duration: 2.5, type: 'spring' }}
                    src={emoji} alt="" srcset="" />

                <motion.div className="Floating-Div"
                    initial={{ left: '82%', top: '-4%' }}
                    whileInView={{ left: '68%' }}
                    transition={{ duration: 2.5, type: 'spring' }}
                    style={{ top: '-4%', left: '79%' }}>
                    <FloatingDiv image={emoji} txt1='Web' txt2='Devloper' />
                </motion.div>

                <motion.div className="Floating-Div"
                    initial={{ left: '5rem', top: '24rem' }}
                    whileInView={{ left: '-8rem' }}
                    transition={{ duration: 2.5, type: 'spring' }}
                    style={{ top: '24rem', left: '-13rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>

                <div className="i-blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
                <div className="i-blur" style={{ background: "rgb(238 210 255)" }}></div>
            </div>
        </div>
    )
}

export default Intro
