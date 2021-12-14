import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import '../../SecondNav/SecondNav.css'
const LogSecondNav = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto mt-3"
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><span>All Posts(32)</span><hr /></Nav.Link>
                            <Nav.Link href="#action2">Article</Nav.Link>
                            <Nav.Link href="#action3">Event</Nav.Link>
                            <Nav.Link href="#action4">Education</Nav.Link>
                            <Nav.Link href="#action5">Job</Nav.Link>
                        </Nav>
                        <button className='btn rounded color'>Write a post <i className="fas fa-caret-down"></i></button>
                        <button className='btn rounded border border-secondary ms-3'><i class="text-dark fas fa-sign-out-alt"></i> Leave Group</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default LogSecondNav;