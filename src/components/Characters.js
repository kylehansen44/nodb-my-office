import React, { Component } from 'react'
import axios from 'axios'

class Characters extends Component {
  constructor() {
    super()
    this.state = {
      
    }
    }
    
    addCharacter

    searchCharacter

    render(){
        return(
            <div className='characters'>
                <div className="inputBars">
                    <input placeholder='First Name'></input>
                    <input placeholder='Last Name'></input>
                    <input placeholder='Position'></input>
                    <input placeholder='Birthday mm/dd/yyyy'></input>
                </div>
                <div className="buttons">
                    <button>Search</button>
                    <button>Add Character</button>
                </div>
            </div>
        )
    }
}  

export default Characters