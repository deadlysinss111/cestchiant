import {Link, NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(){
    return <>

     <Navbar id="nav">
            <Nav>
                <Nav.Link id="choice" href="/">Home</Nav.Link>
                <Nav.Link id="choice" href="/about">About</Nav.Link>
                <Nav.Link id="choice" href="/yourpolidex">Polidex</Nav.Link>
                <Nav.Link id="choice" href="/everyone">everyone here</Nav.Link>
            </Nav>
    </Navbar>
    </>
};

export default Menu;