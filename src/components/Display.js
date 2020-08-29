import React, { Component } from 'react'
import Characters from './Characters'
import List from './List'
import axios from 'axios'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      characters:[]
    }
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

    

    render(){
        return(
            <div className='display'>
                display.js
                <Characters/>
                <List/>
            </div>
        )
    }
}  

export default Display