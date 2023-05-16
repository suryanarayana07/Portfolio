import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Project1 from "../../img/Project1.jpg"
import Project2 from "../../img/Project2.jpg"
import Project3 from "../../img/Project3.jpg"
import Project4 from "../../img/Project4.jpg"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            <span style={{color : darkMode? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Project1} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={Project2} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={Project3} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={Project4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
