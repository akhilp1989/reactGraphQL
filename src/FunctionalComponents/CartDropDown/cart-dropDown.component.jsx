import React from 'react'

import Button from '../Button/button-component'
import './cart-dropDown.styles.scss'

const cartDropDown=(props)=>{
    return(
        <div className ='cart-dropdown'>
            <div className='cart-items' />
            <Button >CheckOut </Button>
            
        </div>
    )
}

export default cartDropDown