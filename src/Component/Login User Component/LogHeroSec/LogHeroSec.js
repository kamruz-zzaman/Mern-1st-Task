import React from 'react';
import img from '../../../Images/HeroSec/image.png'
import '../../HeroSection/HeroSection.css'
import back from '../../../Images/HeroSec/Rectangle 3.png'
import mobileHero from '../../../Images/HeroSec/mobile-head.png'
import mobileHeroShadow from '../../../Images/HeroSec/mobile-head-shadow.png'
import './LogHeroSec.css'
const LogHeroSec = () => {
    return (
        <div >
            <div className='position-relative d-none d-sm-block'>
                <div className='position-relative d-none d-sm-block'>
                    <div className='position-absolute'>
                        <img className='w-100 ' src={img} alt="" />
                    </div>
                    <div className='position-relative'>
                        <img className='w-100' src={back} alt="" />
                    </div>
                </div>
                <div className='container'>
                    <div className='position-absolute top-50 ms-5 lh-base font-family'>
                        <span className=' text-light fs-2 fw-bolder '>Computer Engineering</span><br />
                        <span className=' text-light'>142,765 Computer Engineers follow this.</span>
                    </div>
                </div>
            </div>
            <div className='position-relative d-sm-none'>
                <div className='position-relative d-sm-none'>
                    <div className='position-absolute w-100'>
                        <img className='w-100' src={mobileHero} alt="" />
                    </div>
                    <div className='position-relative'>
                        <img className='w-100' src={mobileHeroShadow} alt="" />
                    </div>
                </div>
                <div className='position-absolute  top-0 mt-3'>
                    <div className=' d-flex justify-content-between ms-1'>
                        <p className='margin-right'><i class="fas fa-arrow-left text-light fw-bold"></i></p>
                        <button className='btn btn-transparent border ms-5 text-light'>Leave Group</button>
                    </div>
                </div>
                <div className=''>
                    <div className='position-absolute top-50 ms-2 lh-base font-family'>
                        <span className=' text-light fs-6 fw-bolder '>Computer Engineering</span><br />
                        <span className=' text-light'>142,765 Computer Engineers follow this.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogHeroSec;