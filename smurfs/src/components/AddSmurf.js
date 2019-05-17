import React, { Component } from 'react'

export class AddSmurf extends Component {
    state = {
        name: '',
        age: '',
        height:''
    }

    handleChanges = e => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    submitSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height:''
        })
    }
    

  render() {
    return (
        <form onSubmit={this.submitSmurf}>
            <input 
            name='name' 
            placeholder='name' 
            onChange={this.handleChanges} 
            value={this.state.name} />

            <input 
            name='age' 
            placeholder='age' 
            onChange={this.handleChanges} 
            value={this.state.age} />

            <input 
            name='height' 
            placeholder='height' 
            onChange={this.handleChanges} 
            value={this.state.height} />
            <button>Submit</button>
        </form>
    )
  }
}

export default AddSmurf;
