import React from 'react'
import {connect} from 'react-redux';
import {toggleCartShow} from '../../Redux/Cart/cart.actions'
import  './cart-icon.styles.scss'
import {ReactComponent as CartIcon } from '../../images/shoppingCart.svg'
import {selectCartItemsCount} from '../../Redux/Cart/cart.selector'

const cartIcon =(props)=>{
    return(
    <div className ='cart-icon' onClick={props.toggleCartShow}>
       <CartIcon className='shopping-icon' />
       <span className='item-count'>{props.itemsCount}</span> 
    </div>
    )
}
const mapDispatchToProps=dispatch=>({
    toggleCartShow :()=>dispatch(toggleCartShow())
});
const mapStateToProps=state=>({
    itemsCount:selectCartItemsCount(state)

})

export default connect (mapStateToProps,mapDispatchToProps) (cartIcon);
