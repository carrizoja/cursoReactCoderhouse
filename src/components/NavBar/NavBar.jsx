import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Logo from '../../assets/img/ijac_logo.png'
import './NavBar.css'
import { Link} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {useCartContext } from '../../CartContext/CartContext'
import { useState, useEffect } from 'react';


export const NavBar = () => {
    const { cartList } = useCartContext();
	const [ units, setUnits ] = useState(0);

	const countItems = function(data){
		let counter = 0;
		cartList.map((item) => {
			counter += item.cantidad;
		});
		return counter;
	}

	useEffect(() => {

		setUnits(countItems);

	}, [cartList])
    return (
        
        <>

            <Navbar fixed="top" bg="light" expand="xxl" style={{}} >
                <Container>
                    <Link to="/"><img src={Logo} alt="Logo" className="logo" style={{ height: 50 }} /></Link>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown  title="Categorías" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/procesadores'>Procesadores</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/motherboards'>Motherboards</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/memorias'>Memorias</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/discos'>Discos</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/placas'>Placas de Video</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/gabinetes'>Gabinetes</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link style={{textDecoration:"none", color: "black"}} className='' to='/categoria/fuentes'>Fuentes</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/cart"><Badge badgeContent={units} color="secondary"><CartWidget></CartWidget></Badge></Link>
                               
                </Container>
            </Navbar>


        </>
    )
}

export default NavBar;
