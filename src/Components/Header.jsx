import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../img/dice_black.png";
import styled from "styled-components";

const HeaderWrapper=styled.div`
    
`;

const Header=()=>{
    return(
        <HeaderWrapper>
            <header>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img src={Logo} width="70em" height="70em" alt="logo loteria"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="">Lotería</Nav.Link>
                        <Nav.Link href="">Sorteos</Nav.Link>
                        <Nav.Link href="">Iniciar Sesión</Nav.Link>
                        <Nav.Link href="">Registrarse</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
        </HeaderWrapper> 
    );
}

export default Header;
