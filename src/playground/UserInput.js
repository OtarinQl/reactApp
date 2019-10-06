import React from 'react'

const UserInput = ( props )=>{
    return (
        <form>
            <input maxLength="100" placeholder="Inserte algo, lo que sea" onChange={ props.changeName }/>
            <p>{ props.counter }/100 caracteres</p>
        </form>
    )
}

export default UserInput