import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        error: false,
        title: '',
        msg: ''
    }

    componentDidCatch = (error, info)=>{
        this.setState({ 
            error: true,
            title: error,
            msg: info 
        })
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    <h1>{ this.state.error }</h1>
                    <p>{ this.state.msg }</p>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary