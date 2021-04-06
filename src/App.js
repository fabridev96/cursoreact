import React from 'react';
import logo from './logo.svg';
import Componente from './componentes/Componente';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoElementos from './componentes/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './componentes/Eventos';
import './App.css';

function App() {

  return (

    <>
      <div className="App">
        <header className="App-header">

          <section>

            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Editar <code>src/App.js</code> y guardar para recargar.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende React
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

            <hr />

            <Estado />

            <hr />

            <RenderizadoCondicional />
            
            <hr />

            <RenderizadoElementos /> 

            <hr />

            <EventosES6 />

            <hr />

            <EventosES7 />

            <hr />

            <MasSobreEventos />

          </section>

        </header>

      </div>
    </>
  );
}

export default App;
