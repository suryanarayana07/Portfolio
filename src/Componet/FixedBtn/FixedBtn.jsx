import React from 'react'
import Arrow from '@iconscout/react-unicons/icons/uil-top-arrow-from-top'
import './FixedBtn.css'
import { useState, useEffect } from 'react'

const FixedBtn = () => {
    const [backToTop, setbackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 300){
                setbackToTop(true);
            }else{
                setbackToTop(false)
            }
        })
    }, [])

    const scrollUp  = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {backToTop && (
                <button onClick={scrollUp} className="f-btn"><Arrow color='var(--orange)' size='2.4rem' /></button>
            )}
        </div>
    )
}

export default FixedBtn