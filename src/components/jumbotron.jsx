import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../style/jumbotron.css'


import '../style/jumbotron.css'
const Jumbotron = ({user}) => {
        return ( 
            <div>
                <Navbar collapseOnSelect bg="dark" expand="sm" variant="dark">
                    <Navbar.Brand href="/home">INSA OSINT TOOL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/features">Features</Nav.Link>
                            <React.Fragment>
                                {!user && <Nav.Link href="/login">Login</Nav.Link>}
                            </React.Fragment>
                            <React.Fragment>
                                {user && <Nav.Link href="/socialmedias">SocialMedias</Nav.Link>}
                                {user && <Nav.Link href="/logout">Logout</Nav.Link>}
                                {user && <Navbar.Brand  id="userName">{user.name}</Navbar.Brand>}
                            </React.Fragment>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

         );
} 
 
export default Jumbotron;