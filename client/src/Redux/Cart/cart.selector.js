import {createSelector} from 'reselect'

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectShowCart=createSelector(
    [selectCart],
    cart => cart.show
);

export const selectCartItemsCount =createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce(
      (totalValue,cartItem)=>(
            totalValue+cartItem.quantity

      ),0
    )
)
export const selectCartItemsTotal=createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce(
      (totalValue,cartItem)=>(
            totalValue+cartItem.quantity*cartItem.price

      ),0
    )
)