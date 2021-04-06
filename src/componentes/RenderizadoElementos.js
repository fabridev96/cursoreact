import React, {Component} from 'react';
import data from '../helpers/data.json';

function ElementoLista(props){

    return (
        <li>
            <a 
                href={props.el.web} 
                target="_blank"
                rel="noreferrer"
            >
                {props.el.nombre}
            </a>
        </li>
    );

}

export default class RenderizadoElementos extends Component {

    constructor(props){

        super(props);

        this.state = {

            estaciones: ['Primavera', 'Verano', 'Invierno', 'Otoño']

        }

    }

    render(){

        return (
            <div>

                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año:</h3>

                <ul>

                    {
                        this.state.estaciones.map( (el, indice) => {
                            
                            return (
                                <li key={indice}>{el}</li>
                            );

                        } )
                    }

                </ul>

                <h3>Frameworks frontend JS</h3>

                <ul>

                    {
                        data.frameworks.map( (el, index) => {

                            return <ElementoLista key={el.id} el={el} />

                        } )
                    }

                </ul>

            </div>
        );

    }

}