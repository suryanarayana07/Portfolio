import React from 'react'
import Arrow from '@iconscout/react-unicons/icons/uil-top-arrow-from-top'
import './FixedBtn.css'
import { Link } from 'react-scroll'

const FixedBtn = () => {
    return (
        <div>
            <div className="f-btn">
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <Arrow color='var(--orange)' size='3rem' />
                </Link>
            </div>
        </div>
    )
}

export default FixedBtn
