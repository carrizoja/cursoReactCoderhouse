import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Logo from '../../assets/img/ijac_logo.png'
import './NavBar.css'
import { Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <>

            <Navbar fixed="top" bg="light" expand="xxl" style={{ color: "grey" }} >
                <Container>
                    <Link to="/"><img src={Logo} alt="Logo" className="logo" style={{ height: 50, backgroundColor: "black" }} /></Link>
                    {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='' to='/'>Inicio</Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/procesadores'>Procesadores</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/motherboards'>Motherboards</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/memorias'>Memorias</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/discos'>Discos</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/placas'>Placas de Video</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">?</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                    <Link to="/cart"><CartWidget></CartWidget></Link>

                </Container>
            </Navbar>


        </>
    )
}

export default NavBar;
