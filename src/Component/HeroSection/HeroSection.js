import React from 'react';
import img from '../../Images/HeroSec/image.png'
import './HeroSection.css'
import heroTitle from '../../Images/HeroSec/Computer Engineering.png'
import back from '../../Images/HeroSec/Rectangle 3.png'

const HeroSection = () => {
    return (
        <div className='position-relative'>
            <div className=''>
                <img width='100%' className='w-100 position-absolute' src={img} alt="" />
                <img className='w-100 position-absolute' src={back} alt="" />
            </div>
            <div>
                <p className='position-absolute heroTitle text-light'>Computer Engineering</p>
                <p className='position-absolute heroSubTitle text-light'>142,765 Computer Engineers follow this.</p>
            </div>
        </div>
    );
};

export default HeroSection;