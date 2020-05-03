import {cartActionConstants} from './cartActionConstants' 

export const toggleCartShow =()=>({
    type:cartActionConstants.TOGGLE_SHOW_CART
});

export const addCartItem =(item) =>({
    type:cartActionConstants.ADD_ITEM,
    payload:item
});
export const clearItemFromCart=(item)=>({
    type:cartActionConstants.CLEAR_ITME_FROM_CART,
    payload:item
});
export const removeItem=(item)=>({
    type:cartActionConstants.REMOVE_ITEM,
    payload:item
})