import React from 'react'
import Radium, { StyleRoot } from 'radium'

const Cockpit = props => {
    var hStyle = ''

    if(props.usersLength <= 2){
      hStyle = 'red'
    } else {
      hStyle = 'green'
    }
    
    return(
        <div>
            <StyleRoot>
                <h1 className={ hStyle }>{props.title}</h1>
                { props.children }
            </StyleRoot>
        </div>
    )
}

export default Radium(Cockpit)