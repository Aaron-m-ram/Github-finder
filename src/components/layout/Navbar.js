import React from 'react'
import PropTypes from 'prop-types'


/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons' */


const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} /> {title}
                </h1>
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
