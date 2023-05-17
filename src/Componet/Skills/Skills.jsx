import React from 'react'
import './Skills.css'
import Skill from '../Skill/Skill'

const Skills = () => {
    return (
        <div className="skill" id='Skill'>
            <span>Skill</span>
            <div className='containers'>
                <Skill
                    percentage={80}
                    txt1='html'
                />

                <Skill
                    percentage={80}
                    txt1='css'
                />

                <Skill
                    percentage={80}
                    txt1='boostrap'
                />

                <Skill
                    percentage={80}
                    txt1='java script'
                />

                <Skill
                    percentage={80}
                    txt1='react'
                />
            </div>
        </div>
    )
}

export default Skills
