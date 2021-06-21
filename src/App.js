import './App.css'
import Footer from "./Components/Footer"
import styled from "styled-components";
import Lottery from "./Components/Lottery";
import Prize from "./Components/Prize";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "./img/dice_black.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

function App() {
  const HeaderWrapper=styled.div`
    .navbar-options{
        font-weight: bold;
        font-size: 1.25em;
    };

    .navbar-options a{
      padding:0.5em;
      text-decoration:none;
      color:#126e82;
    };
  `;

  return (
    <div className="App">
      <Router>
      <HeaderWrapper>
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
                    <Link to="/Components/Lottery"><a href="/">Lotería</a></Link>
                    <Link to="/Components/Prize"><a href="/">Sorteos</a></Link>
                    <Link to="/Components/SignIn"><a href="/">Iniciar Sesión</a></Link>
                    <Link to="/Components/SignUp"><a href="/">Registrarse</a></Link>
                </Nav>
              </div>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      </HeaderWrapper>

      <Switch>
        <Route path="/Components/Lottery">
          <Lottery/>
        </Route>
        <Route path="/Components/Prize">
          <Prize/>
        </Route>
        <Route path="/Components/SignIn">
          <SignIn/>
        </Route>
        <Route path="/Components/SignUp">
          <SignUp/>
        </Route>
        <Route path="/">
          <main class="main">
            <div class="main__header">
                <div class="main__header-title">BIENVENIDO</div>            
            </div>
            <div class="main__content">
                <h2>¿En qué consiste?</h2>
                <p>Utiliza esta página web para realizar o participar en loterías y sorteos de manera segura, permitiendote ser parte de la entrega de premios ofrecida por tus amigos y personalidades.</p>
                <h2>¿Como participo?</h2>
                <p>Cada lotería y sorteo posee un código de ingreso único que te permite participar de la misma. En los casos de las loterías ademas del código de ingreso se debe abonar el ticket para poder participar.</p>
                <h2>Lotería pública</h2>
                <p>Semanalmente se realiza una lotería pública en la que cualquier usuario puede participar y solo debe abonar el precio de ticket. Los ganadores tendrán depositados automáticamente en sus billeteras virtuales el dinero ganado.</p>
            </div>
          </main>
        </Route>
      </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
