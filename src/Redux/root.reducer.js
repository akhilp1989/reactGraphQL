import userReducer from './User/user.reducer'
import {combineReducers} from 'redux'
import dropDownReducer from './Cart/dropDown.reducer';

export default combineReducers({
    user:userReducer,
    cart:dropDownReducer
})