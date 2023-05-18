import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';


const TextEffect = () => {
  return (
    <div className="effect">
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#F5C32C',
          fontWeight: 500,
          fontSize: '2.5em',
        }}
        startDelay={10}
        cursorColor="#F5C32C"
        multiText={[
          'Web Developer',
          'Freelancer',
          'Student',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop
      />
    </div>
  )
}

export default TextEffect
