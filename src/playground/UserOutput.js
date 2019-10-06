import React from 'react'

const UserOutput = ( props )=>{
    return (
        <div className="userOutput">
            {props.children}
            <p>{ props.name }, así te llamas?</p>
        </div>
    )
}

export default UserOutput