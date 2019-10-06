import Radium, { StyleRoot } from 'radium'
import React, { Component } from 'react'
import './App.css'
import Example from './playground/Example'
import Validator from './playground/Validator'
import CharRender from './playground/CharRender'

class App extends Component {
  state = { 
    users: [
      { title: 'Aló', name: 'putito', id: 1001 },
      { title: 'Hewwo ówò', name: 'Ose', id: 1010 },
      { title: 'Konnichiha', name: 'Otaku Culiao', id: 1069 }
    ],
    text: '',
    showing: false
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

  deleteCharHandler = (index)=>{
    const textList = [ ...this.state.text.split('') ]
    textList.splice(index, 1)
    this.setState({ text: textList.join('') })
  }

  hidingDivHandler = ()=>{
    const condUpt = !this.state.showing
    this.setState({ showing: condUpt })
    
  }

  changeTextHandler = (event)=>{
    this.setState({ text: event.target.value })
  }

  render(){
    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'blue'
      }
    }

    const botStyle = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    var container = null
    var msg = '¿Qué andas buscando...?'
    
    if(this.state.showing){
      msg = 'Con que esto~'
      style.backgroundColor = 'green'
      container = (
        <img src="https://static1.e621.net/data/sample/c8/e8/c8e8cd744fede4f5938e7df253f01aa4.jpg" width="320" height="250" alt="El almuerzo~" /> 
      )
    }

    var hStyle = ''

    if(this.state.users.length <= 2){
      hStyle = 'red'
    } else if(this.state.users.length === 3){
      hStyle = 'green'
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1 className={hStyle}>Curso de React.Js</h1>
        { 
          this.state.users.map((user, index)=>{
            user.count = user.name.length
            return <Example 
              key={user.id}
              title={user.title} 
              name={user.name} 
              count={user.count}
              click={()=>this.deleteUserHandler(index)}
              changeName={(event)=>{this.changeUserNameHandler(event, user.id)}}/>
          }) 
        }
        <Validator 
        text={ this.state.text }
        changeText={ this.changeTextHandler }/>
        <div>
        {
          this.state.text.split('').map((char, index)=>{
            return <CharRender 
            key={ char +  (Math.random() * 100).toString() }
            char={ char }
            style={ botStyle }
            deleteChar={ ()=>{this.deleteCharHandler(index)} }/>
          })
        }
        </div>
        <p style={ style } onClick={ this.hidingDivHandler }>{ msg }</p>
        { container }
      </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)