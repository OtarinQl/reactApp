import React, { Component } from 'react'
import Radium from 'radium'
import './Example.css'
class Example extends Component {
    static getDerivedStateFromProps(props, state){
        return state
    }
    shouldComponentUpdate(nextProps, nextState){
        return true 
    }

    render(){
        const parStyle = {
            '@media (min-width: 500px)':{
              width: '450px'
            }
          }
    
        return (
            <div className="Example" style={ parStyle }>
                <h2>{ this.props.title }</h2>
                <h3>Bienvenido, { this.props.name }!</h3>
                { this.props.children }
                <form>
                    <input type="text" 
                        placeholder="Ingrese algo" 
                        onChange={ this.props.changeName }
                        value={ this.props.name }/>
                    <button onClick={ this.props.click }>Borrar</button>
                </form>
                <p>{ this.props.name.length } caracteres</p>
            </div>
        )
    }
    
}

export default Radium(Example)