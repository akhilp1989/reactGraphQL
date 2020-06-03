import React from 'react'
import {connect} from 'react-redux';
import  './cart-icon.styles.scss'
import {ReactComponent as CartIcon } from '../../images/shoppingCart.svg'
import {selectCartItemsCount} from '../../Redux/Cart/cart.selector'

const cartIcon =({toggleCartShow,itemsCount})=>{
    return(
    <div className ='cart-icon' onClick={toggleCartShow}>
       <CartIcon className='shopping-icon' />
       <span className='item-count'>{itemsCount}</span> 
    </div>
    )
}

const mapStateToProps=state=>({
    itemsCount:selectCartItemsCount(state)

})

export default connect (mapStateToProps) (cartIcon);
