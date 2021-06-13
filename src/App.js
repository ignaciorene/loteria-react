import './App.css';
import {Navbar,Nav, Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <div
                className="navbar__logo-img d-inline-block align-top"
                alt="Loteria logo"
              ></div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">Lotería</Nav.Link>
                <Nav.Link href="">Sorteos</Nav.Link>
                <Nav.Link href="">Iniciar Sesión</Nav.Link>
                <Nav.Link href="">Registrarse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

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

      <footer class="footer">
          <div class="footer__logo">
              <div class="footer__logo-img"></div>
          </div>
          <div class="footer__contact">
              <div class="footer__contact-title"><strong>Contacto:</strong></div>
              <div class="footer__contact-text"><a href="mailto:ignacio.rene1994@gmail.com">ignacio.rene1994@gmail.com</a></div>
          </div>
          <div class="footer__social">
              <div class="footer__social-text"><strong>Síguenos en nuestras redes sociales:</strong></div>
              <div class="footer__social__icons">
                  
              </div>
          </div>
          <div class="footer-copyright">
              &copy; Lotería
          </div>
      </footer>
    </div>
  );
}

export default App;
