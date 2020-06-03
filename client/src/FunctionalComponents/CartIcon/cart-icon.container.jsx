import React from 'react'
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';

import CartIcon from './cart-icon.component'

const TOGGLE_CART_HIDDEN =gql`
    mutation ToggleHiddenCart{
        toggleHiddenCart @client
    } 
`
const CartIconContainer =()=>{
    return(
        <Mutation mutation ={TOGGLE_CART_HIDDEN}>
        {
          toggleHiddenCart=><CartIcon toggleCartShow={toggleHiddenCart}/>  
        }
        </Mutation>
    )
}

export default CartIconContainer