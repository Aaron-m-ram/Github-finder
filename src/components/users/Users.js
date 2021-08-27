import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

/* if the page is still loading it will return the loading screen else it will do an array map of the user with the user items 
    requires the user to array and loading to be a boolean
    have userStyle to dictate how the users will pop up*/

const Users = ()=> {
    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;

        if(loading){
            return <Spinner />
        }else{
            return (
                <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            )
        }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
