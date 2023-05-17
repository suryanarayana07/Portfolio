import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import comingsoon from '../../img/coomingSoon.avif'
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
            spaceBetween={90}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={comingsoon} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={comingsoon} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={comingsoon} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={comingsoon} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
