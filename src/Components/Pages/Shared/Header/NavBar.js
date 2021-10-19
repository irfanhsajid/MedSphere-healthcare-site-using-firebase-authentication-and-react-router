import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/Logo/logo.png'
import './nav.css'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className="container-fluid nav-container">
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo-img img-fluid" src={logo} alt="logo" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-evenly">
                        <Nav.Link as={HashLink} className="text-dark" to="/home#home"><span className="link-name">Home</span> </Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/home#services"><span className="link-name">Services</span> </Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/doctors"><span className="link-name">Doctors</span> </Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/contact"><span className="link-name">Contact</span> </Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/login"><span className="link-name">Login</span> </Nav.Link>
                        <Navbar.Text >
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;