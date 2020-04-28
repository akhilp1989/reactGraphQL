import React from 'react'
import {connect} from 'react-redux'

import Button from '../Button/button-component'
import CartItem from '../CartItem/cart-item.component'
import './cart-dropDown.styles.scss'

const cartDropDown=({items})=>{
    console.log(items)
    return(
        <div className ='cart-dropdown'>
            <div className='cart-items'>
           {items.map(item=>{
               return <CartItem key={item.id} item={item} />
           })}
            </div>
            <Button  >CheckOut </Button>
            
        </div>
    )
}

const mapStateToProps =({cart})=>({
    items:cart.cartItems
})
export default connect(mapStateToProps)(cartDropDown)