import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';




/* creates the search box as well as the search button */
const Search = ({ setAlert}) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please enter something','light');
        }else{
            githubContext.searchUsers(text); //props the text to app.js for centralization
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
            {githubContext.users.length > 0 &&(
                <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
            )}
        </div>
    )
}



export default Search
