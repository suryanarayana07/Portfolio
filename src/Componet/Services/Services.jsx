import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import don from "../../img/don.png"
import Resume from "./resume.pdf"
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Servises">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          asperiores explicabo
          <br /> necessitatibus est ab ratione officia sed dicta
          iure facilis
        </span>
        <a href={Resume}><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">

        <motion.div
          initial={{ left: '34rem', top: '3rem' }}
          whileInView={{ left: '19rem', top: '3rem' }}
          transition={{ duration: 2.1, type: 'spring' }}
          style={{ left: '28rem', top: '3rem' }}>
          <Card
            emoji={don}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        <motion.div
          initial={{ left: '-13rem', top: '12rem' }}
          whileInView={{ left: '2rem', top: '12rem' }}
          transition={{ duration: 2.5, type: 'spring' }}
          style={{ top: "12rem", left: '2rem' }}>
          <Card
            emoji={don}
            heading={'Developer'}
            detail={"Html, Css, Boostrap, Javascript,React, Adobe xd"}
          />
        </motion.div>

        <motion.div
          initial={{ left: '37rem', top: '23rem' }}
          whileInView={{ left: '22rem', top: '23rem' }}
          transition={{ duration: 3.3, type: 'spring' }}
          style={{ top: "23rem", left: '22rem' }}>
          <Card
            emoji={don}
            heading={'UI/UX'}
            detail={"Lorem ipsum dolor sit, amet consectetur adipisicing elit"}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
