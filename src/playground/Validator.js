import React from 'react'
import Radium from 'radium'

const Validator = ( props )=>{
    return (
        <div>
            <h3>Texto a analizar: { props.text }</h3>
            <input placeholder="Ingresa algo" 
            onChange={ props.changeText }
            value={ props.text }/>
            {
                props.text.length >= 5 ?
                <p>Tiene más de 5 caracteres oof</p> 
                : <p>Ta chikito no puele</p>
            }
        </div>
    )
}

export default Radium(Validator)