import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import path1 from '../../Images/Logo/Path 963.png'
import path2 from '../../Images/Logo/Path 964.png'
import path3 from '../../Images/Logo/Path 965.png'
import path4 from '../../Images/Logo/Path 966.png'
import path5 from '../../Images/Logo/Path 967.png'
import path6 from '../../Images/Logo/Path 968.png'
import path7 from '../../Images/Logo/Path 969.png'
import path8 from '../../Images/Logo/Path 970.png'
import path9 from '../../Images/Logo/Union 1.png'
import PostData from '../Data/PostData';
import HeroSection from '../HeroSection/HeroSection';
import SecondNav from '../SecondNav/SecondNav';
import SignIn from '../Sign in/SignIn';
import './HeroNav.css'


const HeroNavbar = () => {
    return (
        <>
            <Navbar expand="lg" className='my-1 d-none d-sm-block'>
                <Container>
                    <Navbar.Brand href="#"><img src={path1} alt="" /><img src={path2} alt="" /><img src={path3} alt="" /><img className='mt-3' src={path4} alt="" /><img src={path5} alt="" /><img src={path9} alt="" /><img src={path6} alt="" /><img src={path7} alt="" /><img src={path8} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div class="input-group input-group-lg rounded-pill">
                                <span class="input-group-text bg-light border-end-0" id="inputGroup-sizing-lg"><i class="fas fa-search"></i></span>
                                <input type="text" class="form-control" placeholder='Search for your favorite groups in ATG' aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </Nav>
                        <div className='mt-1'>
                            <p>Create Account. <a href='#'><SignIn></SignIn></a> <i class="fas fa-caret-down"></i></p>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <HeroSection></HeroSection>
            <SecondNav></SecondNav>
            <PostData></PostData>
            <div className='d-flex justify-content-end mb-5 me-5 mt-5'>
                <Link to='loginVersion' ><button className='btn btn-secondery btn-danger'>Login User</button></Link>
            </div>
        </>
    );
};

export default HeroNavbar;