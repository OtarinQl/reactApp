import React from 'react'
import Example from '../Person/Example'

const Examples = props => (
    <div>
        {
            props.users.map(( user, index )=>{
                user.count = user.name.length
                return <Example 
                  key={ user.id }
                  title={ user.title } 
                  name={ user.name } 
                  count={ user.count }
                  click={ ()=>props.click(index) }
                  changeName={ event =>{ props.changeName(event, user.id) }}
                  />
              }) 
        }
    </div>
)

export default Examples