import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className="FloatingDiv">
        <img src={image} alt="" srcSet="" />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv