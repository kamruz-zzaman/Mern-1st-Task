import React from 'react';
import path1 from '../../Images/Logo/Path 963.png'
import path2 from '../../Images/Logo/Path 964.png'
import path3 from '../../Images/Logo/Path 965.png'
import path4 from '../../Images/Logo/Path 966.png'
import path5 from '../../Images/Logo/Path 967.png'
import path6 from '../../Images/Logo/Path 968.png'
import path7 from '../../Images/Logo/Path 969.png'
import path8 from '../../Images/Logo/Path 970.png'
import path9 from '../../Images/Logo/Union 1.png'
import create from '../../Images/Navbar option/Create account.png'
import dropdown from '../../Images/Navbar option/Vector.png'
import search from '../../Images/Search texxt/Vector (1).png'
import SecondNav from '../SecondNav/SecondNav';


const HeroNavbar = () => {
    return (
        <>
            <div className='row mt-4'>
                <div className='col-4'>
                    <img src={path1} alt="" /><img src={path2} alt="" />
                    <img src={path3} alt="" /><img className='mt-3' src={path4} alt="" /><img src={path5} alt="" />
                    <img src={path9} alt="" /><img src={path6} alt="" /><img src={path7} alt="" />
                    <img src={path8} alt="" />
                </div>
                <div className='col-4'>
                    <input type="text" name="" placeholder={search} className='rounded-pill px-2 py-1 w-75' id="" />
                </div>
                <div className='col-4'>
                    <img src={create} alt="" /> <img src={dropdown} alt="" />
                </div>
            </div>
            <SecondNav></SecondNav>
        </>
    );
};

export default HeroNavbar;