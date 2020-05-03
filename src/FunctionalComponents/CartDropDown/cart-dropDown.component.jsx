import React from 'react'
import {connect} from 'react-redux'
import Button from '../Button/button-component'
import CartItem from '../CartItem/cart-item.component'
import './cart-dropDown.styles.scss'
import { selectCartItems} from '../../Redux/Cart/cart.selector'
import {withRouter} from 'react-router-dom'
import {toggleCartShow} from '../../Redux/Cart/cart.actions'

const cartDropDown=({items,history,dispatch})=>{
    //console.log(items)
    return(
        <div className ='cart-dropdown'>
            <div className='cart-items'>
           {    items.length ?
               items.map(item=>{
               return <CartItem key={item.id} item={item} />
           }):
           <span className='empty-message'>Cart is empty</span>}
            </div>
            {items.length?  <Button onClick={()=>
                {
                    history.push('/checkout')
                dispatch(toggleCartShow())
               
            }
                } >CheckOut </Button> :null} 
        </div>
    )
}

const mapStateToProps =(state)=>({
    items:selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(cartDropDown))