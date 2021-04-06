import React, {Component} from 'react';

export class EventosES6 extends Component {

    constructor(props){

        super(props);

        this.state = {

            contador: 0

        }

        // establecer contexto this para la funcion sumar()
        this.sumar = this.sumar.bind(this);

        // establecer contexto this para la funcion restar()
        this.restar = this.restar.bind(this);

    }

    sumar(e){

        this.setState({
            contador: this.state.contador + 1
        });

    }

    restar(e){

        this.setState({
            contador: this.state.contador - 1
        });

    }

    render(){

        return (

            <div>

                <h2>Eventos en componentes de clase ES6</h2>
                
                <nav>

                    <button onClick={this.sumar}>
                        +
                    </button>

                    <button onClick={this.restar}>
                        -
                    </button>

                </nav>

                <h3>{this.state.contador}</h3>
                

            </div>

        );

    }

}

export class EventosES7 extends Component {

    state = {

        contador: 0

    }

    sumar = (e) => {

        this.setState({
            contador: this.state.contador + 1
        });

    }

    restar = (e) => {

        this.setState({
            contador: this.state.contador - 1
        });

    }

    render(){

        return (

            <div>

                <h2>Eventos en componentes de clase ES7</h2>
                
                <nav>

                    <button onClick={this.sumar}>
                        +
                    </button>

                    <button onClick={this.restar}>
                        -
                    </button>

                </nav>

                <h3>{this.state.contador}</h3>
                

            </div>

        );

    }

}