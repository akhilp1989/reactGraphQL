import React from 'react'
import './signIn-Up.styles.scss'
import SignIn from './sign-in.component'
import SignUp from './signUp.component'

const singInUp=(props)=>{
    return(
        <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />

        </div>
    )
}
export default singInUp