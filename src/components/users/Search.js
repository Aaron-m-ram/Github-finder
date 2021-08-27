import React, {useState} from 'react'
import PropTypes from 'prop-types'


/* creates the search box as well as the search button */

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something','light');
        }else{
            searchUsers(text); //props the text to app.js for centralization
            setText('') //clears the state after the prop is sent up
        }
    }
    /* e.target.name is so it can be used over and over again not having to retyp name if its email input then date input then last name input etc. */
    const onChange = e => setText(e.target.value)


    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input 
                type='text' 
                name='text' 
                placeholder='Search Users...'
                value={text}
                onChange={onChange}
                />
                <input type="submit" value="Search" className='btn btn-dark btn-block'/>
            </form>
            {showClear &&(
                <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,  
};

export default Search
