import userReducer from './User/user.reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    user:userReducer
})