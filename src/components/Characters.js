import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'

class Characters extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            position: '',
            birthday: '',
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='characters'>
                <div className="inputBars">
                    <input name='first_name' placeholder='First Name' onChange={this.handleInput}></input>
                    <input name='last_name' placeholder='Last Name' onChange={this.handleInput}></input>
                    <input name='position' placeholder='Position' onChange={this.handleInput}></input>
                    <input name='birthday' placeholder='Birthday' onChange={this.handleInput}></input>
                </div>
                <div className="buttons">
                    <input name='input' placeholder="Search" onChange={this.handleInput}></input>
                    <button onClick={() => this.props.searchCharacter(this.state.input)}>Search</button>
                    <button onClick={() => this.props.addCharacter(this.state.first_name, this.state.last_name, this.state.position, this.state.birthday)}>Add Character</button>
                </div>
            </div>
        )
    }
}

export default Characters