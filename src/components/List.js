import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'

class List extends Component {
    constructor() {
        super()
        this.state = {
            characters: []
        }


    }

    // componentDidMount() {
    //     axios.get('/api/characters').then((res) => {
    //         console.log(res.data)
    //         this.setState({
    //             characters: res.data
    //         })
    //     })
    //         .catch((err) => {
    //             alert(err)
    //         })
    // }




    render() {

        console.log(this.props.character.id)
        return (
            <div className='individuals'>
                <p>First Name: {this.props.character.first_name}</p>
                <p>Last Name: {this.props.character.last_name}</p>
                <p>Position: {this.props.character.position}</p>
                <p>Birthday: {this.props.character.birthday}</p>
                <div className='listButtons'>
                    <button>Edit</button>
                    <button onClick={() => this.props.handleRemoveCharacter(this.props.character.id)}>Delete</button>
                </div>
            </div>
        )

    }
}

export default List