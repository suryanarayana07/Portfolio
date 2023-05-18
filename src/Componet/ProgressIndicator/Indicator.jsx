import React, { useEffect, useState } from 'react'
import './Indicator.css'

const Indicator = () => {
  const [ScrollTop, SetscrollTop] = useState(0)
  const onScroll = () =>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    SetscrollTop(scrolled)
  }

  useEffect(() =>{
    window.addEventListener("scroll", onScroll)
    return ()=> window.removeEventListener("scroll", onScroll)
  }, []);

  return (
    <div className="main">
      <div className="p-wrapper">
        <div className="p-style" style={{width: `${ScrollTop}%`}} ></div>
      </div>
    </div>
  )
}

export default Indicator
