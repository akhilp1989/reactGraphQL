import {all,call} from 'redux-saga/effects'
import {shopSagas} from './ShopData/shop.sagas'
import {userSaga} from './User/user.sagas'
import {onCartSagas} from './Cart/cart.sagas'

export default function* rootSaga(){
    yield all([call(shopSagas),call(userSaga),call(onCartSagas)])
}