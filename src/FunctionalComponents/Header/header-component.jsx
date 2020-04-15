import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo } from '../../images/header.svg'
import {Link} from 'react-router-dom'

const headerComponent=(props)=>{
    return(
        <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
                <div className='options'>
                <Link className='option' to='/shop' >
                Shop Now
                </Link>
                <Link className='option' to='/shop' >
                Contact
                </Link>

                </div>
       
       </div>

        
    )
}

export default headerComponent