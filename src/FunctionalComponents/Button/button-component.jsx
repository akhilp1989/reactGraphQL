import React from 'react'
import './button.styles.scss'
const buttonComponent =(props)=>{
    return(
        <button className='custom-button' type={props.type}>
        {props.children}
        </button>
    )
}

export default buttonComponent