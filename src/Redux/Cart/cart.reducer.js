import { cartActionConstants } from "./cartActionConstants";
import { addCartItems,removeItemFromCart ,removeItem} from './cart.utils'
const INITIAL_STATE={
    show:false,
    cartItems:[]
}
const dropDownReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartActionConstants.TOGGLE_SHOW_CART:
            return{
                ...state,
                show:!state.show
            };
            case cartActionConstants.ADD_ITEM:
            return{
                ...state,
               cartItems:addCartItems(state.cartItems,action.payload)
            }
            case cartActionConstants.CLEAR_ITME_FROM_CART:
            return{
                ...state,
               cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
            case cartActionConstants.REMOVE_ITEM:
            return{
                ...state,
               cartItems:removeItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default dropDownReducer