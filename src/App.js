import React from 'react';
import logo from './logo.svg';
import Componente from './componentes/Componente';
import Propiedades from './componentes/Propiedades';
import './App.css';

function App() {

  return (

    <>
      <div className="App">
        <header className="App-header">

          <section>

            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Editar <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          
          </section>

          <section>

            <Componente msg="Hola soy un componente desde una prop arrow function" />

            <hr />

            <Propiedades
              cadena="Esto es un string" 
              numero={66} 
              booleano={false} 
              arreglo={[1,2,3]} 
              objeto={{nombre:"Juan",correo:"juan@gmail.com"}}
              porDefecto="Prop ingresada y no por defecto" 
              elementoReact={<i>Esto es un elemento React</i>} 
              componenteReact={<Componente msg="Soy un componente pasado como prop" />}
              funcion={num => num * num}
            />

          </section>

        </header>

      </div>
    </>
  );
}

export default App;
