import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../img/dice_black.png";
import styled from "styled-components";
import Lottery from "./Lottery";
import Prize from "./Prize";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

const HeaderWrapper=styled.div`
    .navbar-options{
        font-weight: bold;
        font-size: 1.25em;
    };
`;

const Header=()=>{
    return(
        <HeaderWrapper>
            <Router>
                <Switch>
                    <Route path="/src/Components/Lottery">
                        <Lottery/>
                    </Route>
                    <Route path="/Prize">
                        <Prize/>
                    </Route>
                    <Route path="/SignIn">
                        <SignIn/>
                    </Route>
                    <Route path="/SignUp">
                        <SignUp/>
                    </Route>
                </Switch>
            
            <header>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <Link to="/"><img src={Logo} width="70em" height="70em" alt="logo loteria"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <div class="navbar-options">
                        <Nav>
                            <Link to="/src/Components/Lottery"><Nav.Link href="">Lotería</Nav.Link></Link>
                            <Link to="/Prize"><Nav.Link href="">Sorteos</Nav.Link></Link>
                            <Link to="/SignIn"><Nav.Link href="">Iniciar Sesión</Nav.Link></Link>
                            <Link to="/SignUp"><Nav.Link href="">Registrarse</Nav.Link></Link>
                        </Nav>
                    </div>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
            </Router>
        </HeaderWrapper> 
    );
}

export default Header;
