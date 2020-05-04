import userReducer from './User/user.reducer'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import dropDownReducer from './Cart/cart.reducer';

const persistConfig={
    key:'root',
    storage:storage,
    whitelist:['cart']
}

const rootReducer= combineReducers({
    user:userReducer,
    cart:dropDownReducer
})

export default persistReducer(persistConfig,rootReducer)
