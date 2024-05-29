import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../menu/menu.css";

function Menu() {
    return (
    <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Motors</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Apresentação</Nav.Link>
                <NavDropdown title="Modelos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ferrari</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Lexus
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Lamborghini
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Ver todos
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
}

export default Menu;
