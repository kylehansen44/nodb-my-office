import React, { Component } from 'react'
import axios from 'axios'

class List extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
    this.handleRemoveCharacter = this.handleRemoveCharacter.bind(this)
    this.handleEditCharacter = this.handleEditCharacter.bind(this)
    } 

    componentDidMount(){
        axios.get('/api/characters').then((res) => {
            console.log(res.data)
            this.setState({
                characters: res.data
            })
        })
        .catch((err) => {
            alert(err)
        })
    }

    handleRemoveCharacter(){
        axios.delete(`api/characters/`).then((res) => {
            this.setState({
                character: res.data
            })
        })
    }

    handleEditCharacter() {

    }

    render(){

        let charactersDisplay = this.state.characters.map(character => {
            return (
                <div className='individuals'>
                    <p>First Name: {character.first_name}</p>
                    <p>Last Name: {character.last_name}</p>
                    <p>Position: {character.position}</p>
                    <p>Birthday: {character.birthday}</p>
                    <div className='listButtons'>
                        <button>Edit</button>
                        <button onClick={this.handleRemoveCharacter}>Delete</button>
                    </div>
                </div>
            )
        })

        console.log(charactersDisplay)
        
        
        return(
            <div className='list'>
                {charactersDisplay}
                <p></p>
            </div>
        )
    }
}  

export default List