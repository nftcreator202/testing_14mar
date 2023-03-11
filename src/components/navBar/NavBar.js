import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css";


 const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md"
            fixed="top"
             className="animate-navbar nav-theme justify-content-between"
             variant="dark">
                <Navbar.Brand className="logo" href="#home">
                    Enter the Void
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#mint">Mint</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar