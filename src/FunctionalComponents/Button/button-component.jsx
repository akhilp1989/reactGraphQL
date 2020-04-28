import React from 'react'
import './button.styles.scss'
const buttonComponent =({children,isGoogleSignIn,inverted,...otherProps})=>{
    
    return(
        <button styles={ `
        ${isGoogleSignIn ? 'google-sign-in' :''}
        ${inverted ? 'inverted' :''}
        custom-button`} 
        {...otherProps} >
        {children}
        </button>
    )
}

export default buttonComponent