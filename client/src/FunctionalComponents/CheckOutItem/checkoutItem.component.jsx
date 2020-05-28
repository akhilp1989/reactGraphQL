import React from 'react'
import  './checkoutitem.styles.scss'
import {connect} from 'react-redux'
import {removeItem,addCartItem} from '../../Redux/Cart/cart.actions'

const checkOutItem=({cartItem,clearItem,addCartItem})=>{
    const {name,quantity,imageUrl,price}=cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />    
            </div> 
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={()=>clearItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>removeItem(cartItem)} >&#10005;</div>
        </div>
    )
}
const mapDispatchToProps =dispatch =>({
    clearItem:(item)=>dispatch(removeItem(item)),
    addCartItem:(item)=>dispatch(addCartItem(item))
      
})

export default connect(null,mapDispatchToProps)(checkOutItem)