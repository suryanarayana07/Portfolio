import React from 'react'
import './Works.css'
import Upwork from "../../img/upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/shopify.png"
import Facebook from "../../img/facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, nihil.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quia?
        </span>
        <button className="button s-button">Download CV</button>
        {/* <div className="w-blur" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: '-80px' }}
        transition={{ duration: 3.5, type: 'spring' }}
        className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Amazon} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Facebook} alt="" />
        </div>
      </motion.div>
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  )
}

export default Works
