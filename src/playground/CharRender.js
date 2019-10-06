import React from 'react'
import Radium from 'radium'

const CharRender = ( props )=>{
    return (
        <div>
            <p style={ props.style } 
            onClick={ props.deleteChar }>{ props.char }</p>
        </div>
    )
}

export default Radium(CharRender)