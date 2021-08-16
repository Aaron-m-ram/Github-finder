import React, { Component } from 'react'

/* creates the search box as well as the search button */

export class search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.text)
    }
    /* e.target.name is so it can be used over and over again not having to retyp name if its email input then date input then last name input etc. */
    onChange = e => this.setState({[e.target.name]: e.target.value})
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input 
                    type='text' 
                    name='text' 
                    placeholder='Search Users...'
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className='btn btn-dark btn-block'/>
                </form>
            </div>
        )
    }
}

export default search
