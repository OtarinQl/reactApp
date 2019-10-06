import React from 'react'
import Radium from 'radium'
import './Example.css'
const Example = (props) => {
    const parStyle = {
        '@media (min-width: 500px)':{
          width: '450px'
        }
      }

    return (
        <div className="Example" style={ parStyle }>
            <h2>{ props.title }</h2>
            <h3>Bienvenido, { props.name }!</h3>
            {props.children}
            <form>
                <input type="text" 
                    placeholder="Ingrese algo" 
                    onChange={ props.changeName }
                    value={ props.name }/>
                <button onClick={ props.click }>Borrar</button>
            </form>
            <p>{ props.name.length } caracteres</p>
        </div>
    )
}

export default Radium(Example)