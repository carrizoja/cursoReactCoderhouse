import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


export const NavBar = () => {
    return (
        <Navbar fixed="top" bg="light" expand="xxl">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
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
            </Container>
        </Navbar>


    )
}

export default NavBar;
