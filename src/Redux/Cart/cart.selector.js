import {createSelector} from 'reselect'

const selectCart=state=>state.cart;

export const selectCartItem=createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount =createSelector(
    [selectCartItem],
    cartItem=>cartItem.reduce(
      (totalValue,cartItem)=>(
            totalValue+cartItem.quantity

      ),0
    )
)