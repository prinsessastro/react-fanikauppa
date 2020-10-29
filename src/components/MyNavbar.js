import React, {useState} from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import forshop from '../forshop.png'
import '../App.css';


const MyNavbar = ({ }) => {
    const[show, setShow] = useState(!true); //TÄMÄ
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img src={forshop} alt="logo" className="navbar-brand imgLogo" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Test</Nav.Link>
                    <Nav.Link href="#pricing">Test</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Lol</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">These</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Are 4</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Show</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MyNavbar;