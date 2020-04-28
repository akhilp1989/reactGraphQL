import {cartActionConstants} from './cartActionConstants' 

export const toggleCartShow =()=>({
    type:cartActionConstants.TOGGLE_SHOW_CART
});

export const addCartItem =(item) =>({
    type:cartActionConstants.ADD_ITEM,
    payload:item
});