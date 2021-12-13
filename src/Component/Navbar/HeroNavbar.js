import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
import './HeroNav.css'


const HeroNavbar = () => {
    return (
        <>
            <Navbar expand="lg" className='my-1'>
                <Container>
                    <Navbar.Brand href="#"><img src={path1} alt="" /><img src={path2} alt="" /><img src={path3} alt="" /><img className='mt-3' src={path4} alt="" /><img src={path5} alt="" /><img src={path9} alt="" /><img src={path6} alt="" /><img src={path7} alt="" /><img src={path8} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='w-sm-0 w-md-0 w-lg-0'>
                                <input className='customize ps-5 border' placeholder='Search for your favorite groups in ATG' type="text" />
                                <div className='custom-margine mt-1'><i class="position-relative fas fa-search"></i> <br /></div>
                            </div>
                        </Nav>
                        <div className='mt-1'>
                            <p>Create Account. <span>It's Free! </span><i class="fas fa-caret-down"></i></p>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeroNavbar;