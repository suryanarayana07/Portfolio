import React from 'react'
import './Skill.css'

const Skill = ({percentage, txt1}) => {
  return (
   <div className='container'>

    <div className="box">
      <div className="content">
        <span>{txt1}</span>
        <div className="percent">
          <div className="dot"></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle cx={70} cy={70} r={70}></circle>
          </svg>
        </div>
        <div className="number">
          <h2>{percentage} <span>%</span></h2>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Skill
