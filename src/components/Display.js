import React, { Component } from 'react'
import Characters from './Characters'
import List from './List'
import axios from 'axios'


class Display extends Component {
    constructor(a) {
        super()
        this.state = {
            characters: [],
            input: ''
        }
        this.searchCharacter = this.searchCharacter.bind(this)
        this.addCharacter = this.addCharacter.bind(this)
        this.handleRemoveCharacter = this.handleRemoveCharacter.bind(this)
        this.handleEditCharacter = this.handleEditCharacter.bind(this)
    }

    componentDidMount() {
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

    searchCharacter(input) {
        axios.get(`api/characters?search=${input}`).then(res => {
            this.setState({
                characters: res.data
            })
        })
    }

    addCharacter(first_name, last_name, position, birthday) {
        let newCharacters = {
            first_name,
            last_name,
            position,
            birthday
        }

        axios.post(`api/characters`, newCharacters).then((res) => {
            this.setState({
                characters: res.data
            })

        })
    }
    handleRemoveCharacter(id) {
        axios.delete(`api/characters/${id}`).then((res) => {
            this.setState({
                charactersDisplay: res.data.characters
            })
        })
    }
    handleEditCharacter(id) {
        axios.put(`api/characters/${id}`).then((res) => {
            this.setState({
                characters: res.data.characters
            })
        })
    }



    render() {
        // let charactersDisplay = this.state.characters.map(character => {
        //     return (
        //         <div className='display'>
        //             <Characters />
        //             <List />
        //         </div>
        //     )
        // })
        // console.log(charactersDisplay)
        let charactersDisplay = this.state.characters.map(character => {
            return <List handleRemoveCharacter={this.handleRemoveCharacter} character={character} />
        })
        return (
            <div className='list'>
                
                <div className='display'>
                    <Characters searchCharacter={this.searchCharacter} addCharacter={this.addCharacter} />
                    {charactersDisplay}
                    {/* <List characters={this.state.characters} handleRemoveCharacter={this.handleRemoveCharacter} /> */}
                </div>
                <p></p>
            </div>
        )
    }
}

export default Display