import React from 'react';
import img from '../../Images/HeroSec/image.png'
import './HeroSection.css'
import heroTitle from '../../Images/HeroSec/Computer Engineering.png'
import back from '../../Images/HeroSec/Rectangle 3.png'

const HeroSection = () => {
    return (
        <div >
            <div className='position-relative '>
                <div className='position-absolute'>
                    <img className='w-100 ' src={img} alt="" />
                </div>
                <div className='position-relative'>
                    <img className='w-100 ' src={back} alt="" />
                </div>
            </div>
            <div className='container'>
                <div className='position-absolute top-50 ms-5 lh-base font-family'>
                    <span className=' text-light fs-2 fw-bolder '>Computer Engineering</span><br />
                    <span className=' text-light'>142,765 Computer Engineers follow this.</span>
                </div>
            </div>
            <div className='position-relative'></div>
        </div>
    );
};

export default HeroSection;