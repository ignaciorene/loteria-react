import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
