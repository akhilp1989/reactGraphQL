import { cartActionConstants } from "./cartActionConstants";
const INITIAL_STATE={
    show:false
}
const dropDownReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartActionConstants.TOGGLE_SHOW_CART:
            return{
                ...state,
                show:!state.show
            }

        default:
            return state;
    }
}
export default dropDownReducer