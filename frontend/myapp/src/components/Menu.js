import {Link, NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(){
    return <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/YourPolidex">Polidex</Nav.Link>
                <Nav.Link href="/everyone">evryone here</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};

export default Menu;