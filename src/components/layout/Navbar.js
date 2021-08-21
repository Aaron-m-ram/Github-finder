import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons' */

/* just the red bar on top. you have props to define the classname which gives you the icon as well as the title. 
    you hvae them required to be strings as well */
const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} /> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </nav>
        )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default Navbar
