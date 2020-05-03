import React from 'react'
import './checkout.styles.scss'
import {connect } from 'react-redux'
import {selectCartItems,selectCartItemsTotal} from '../../Redux/Cart/cart.selector'
import CheckOutItem from '../CheckOutItem/checkoutItem.component'


const checkOutPage =({cartItems,total})=>{
    console.log(cartItems)
return(
<div className='checkout-page'>
   <div className='checkout-header'>
   
        <div className='header-block'>
            <span>Product</span> 
            
        </div>
        <div className='header-block'>
            <span>Description</span>  
        </div>
        <div className='header-block'>
            <span>Quantity</span>  
        </div>
        <div className='header-block'>
            <span>Price</span>  
        </div>
        <div className='header-block'>
            <span>Remove</span>  
        </div>
   </div>
   {cartItems.map(cartItem=>
         <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
       )}
    <div className='total'>
    <span>Total :${total} </span>
    </div>
</div>
)
}

const mapStateToProps=state=>({
    cartItems:selectCartItems(state),
    total:selectCartItemsTotal(state)
})
export default connect(mapStateToProps)(checkOutPage)
