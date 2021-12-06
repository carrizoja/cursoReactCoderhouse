import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Logo from '../../assets/img/ijac_logo.png'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>

            <Navbar fixed="top" bg="light" expand="xxl" style={{color: "grey"}} >
                <Container>
                    <img src={Logo} alt="Logo" className="logo" style={{height: 50, backgroundColor:"black"}}  />              
                    {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Artículos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Motherboards</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Microprocesadores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Memorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Discos</NavDropdown.Item>
                            </NavDropdown>                    
                        </Nav>
                        
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>      
            </Navbar>
            

        </>
    )
}

export default NavBar;
