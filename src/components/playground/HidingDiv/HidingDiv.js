import React from 'react'
import Radium from 'radium'

const HidingDiv = props => {
    const style = {
        backgroundColor: 'red',
        color: 'white',
        font: 'inherit',
        padding: '8px',
        cursor: 'pointer',
        boxShadow: '5px 5px 5px grey',
        ':hover':{
          backgroundColor: 'salmon'
        }
      }
  
    var container = null
    var msg = '¿Qué andas buscando...?'
    const imgList = [
      'https://static1.e621.net/data/sample/36/87/3687c44955cedbc5654036124a5a6f2a.jpg',
      'https://static1.e621.net/data/sample/c8/e8/c8e8cd744fede4f5938e7df253f01aa4.jpg',
      'https://static1.e621.net/data/sample/1c/f7/1cf7606b9ee182957d95e617e0e261a3.jpg'
    ]

    if(props.showing){
        msg = 'Con que esto~'
        style.backgroundColor = 'green'
        style[':hover'].backgroundColor = 'lightgreen'
        container = (
          <img src={ imgList[parseInt(Math.random()*3)] } width="320" height="250" alt="nom"/> 
        )
      }

    return (
        <div>
            <br />
            <button style={ style } onClick={ props.hiding }>{ msg }</button>
            <br />
            { container }
        </div>
    )
}

export default Radium(HidingDiv)