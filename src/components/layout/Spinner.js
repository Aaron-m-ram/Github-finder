import React, {Fragment} from 'react'
import spinner from './spinner.gif'

/* Just the spinner that loading gif. has an alternate appearance of just text if not working. with sum styling as needed */

const Spinner = () => {
        return(
        <Fragment>
            <img src={spinner} alt="loading..." style={{width: '200px', margin: 'auto', display:'block'}}/>
        </Fragment>
        )
}

export default Spinner
