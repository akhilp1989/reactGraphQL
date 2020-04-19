import React from 'react'
import './form-input.styles.scss'

const formInput=(props)=>{
    return(
        <div className='group'>
         {
            props.label?
            <label className='form-label'>{props.label}</label>
            :null
        }
        <input className='form-input'  placeholder={props.label} required={props.required}
        onChange={props.changeHandler} 
        />
       
        </div>    
    )
}

export default formInput