import Radium from 'radium'
import React, { Component } from 'react'

import './App.css'
import Examples from '../playground/Persons/Examples'
import Cockpit from '../playground/Cockpit/Cockpit'
import HidingDiv from '../playground/HidingDiv/HidingDiv'

class App extends Component {
  constructor(props){
    //Constructor. Sirve para inicializar el valor de state
    super(props)
    console.log('[App.js] constructor')
    this.state = { 
      users: [
        { title: 'Aló', name: 'Sera', id: 1001 },
        { title: 'Hewwo ówò', name: 'Ose', id: 1010 },
        { title: 'Konnichiha', name: 'Otaku Culiao', id: 1069 }
      ],
      showing: props.showing === 'true'
    }
  }

  static getDerivedStateFromProps(props, state){
    //Funciona para actualizar state. No recomendable debido a
    //la existencia de otros métodos
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  changeUserNameHandler = (event, id)=>{
    const index = this.state.users.findIndex((u)=>{
      return u.id === id
    })
    const users = [ ...this.state.users ]
    users[index].name = event.target.value
    this.setState({ users })
  }

  deleteUserHandler = (index)=>{
    const users = this.state.users
    users.splice(index, 1)
    this.setState({ users: users })
  }

  hidingDivHandler = ()=>{
    const condUpt = !this.state.showing
    this.setState({ showing: condUpt })
    
  }

  render(){
    console.log('[App.js] render')
    var users = (<div></div>)

    if(this.state.users){
      users = (
        <Examples
          users={ this.state.users }
          click={ this.deleteUserHandler }
          changeName={ this.changeUserNameHandler }
        />
      )
    } else { users = (<div>No hay ningún usuario </div>) }

    return (
      <div className="App">
        <Cockpit usersLength={ this.state.users.length } title={this.props.title}>
          { users }
          <HidingDiv 
          showing={ this.state.showing } 
          hiding={ this.hidingDivHandler } />    
        </Cockpit>
      </div>
    )
  }
}

export default Radium(App)