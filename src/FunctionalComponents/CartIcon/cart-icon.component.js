import React from 'react'
import {connect} from 'react-redux';
import {toggleCartShow} from '../../Redux/Cart/cart.actions'
import  './cart-icon.styles.scss'
import {ReactComponent as CartIcon } from '../../images/shoppingCart.svg'

const cartIcon =(props)=>{
    return(
    <div className ='cart-icon' onClick={props.toggleCartShow}>
       <CartIcon className='shopping-icon' />
       <span className='item-count'>0</span> 
    </div>
    )
}
const mapDispatchToProps=dispatch=>({
    toggleCartShow :()=>dispatch(toggleCartShow())
});

export default connect (null,mapDispatchToProps) (cartIcon);
