import React, { Component } from 'react'
import PropTypes from 'prop-types'


/* creates the search box as well as the search button */

export class search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchUsers(this.state.text); //props the text to app.js for centralization
        this.setState({text: ''}); //clears the state after the prop is sent up
    }
    /* e.target.name is so it can be used over and over again not having to retyp name if its email input then date input then last name input etc. */
    onChange = e => this.setState({[e.target.name]: e.target.value})
    render() {
        const {showClear, clearUsers} = this.props 

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
                {showClear &&(
                    <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
                )}
            </div>
        )
    }
}

export default search
