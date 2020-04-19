import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo } from '../../images/header.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../FireBase/firebase.utils'

const headerComponent=({currentUser})=>{
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
                    {currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin' >Sign In</Link>
                    }
                </div>
       
       </div>

        
    )
}

export default headerComponent