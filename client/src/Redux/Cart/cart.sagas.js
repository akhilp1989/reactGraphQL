import {takeLatest,all,call,put} from 'redux-saga/effects'
import   './cartActionConstants'

import {clearCart} from './cart.actions'
import userActionConstants from '../User/userActionConstants';


export function* clearCartOnSignOut(){
    //yield console.log('Clear Cart')
    yield put(clearCart());

}
export function* onSignOutSuccess(){
   yield takeLatest(userActionConstants.SIGNOUT_SUCCESS,clearCartOnSignOut)
}
export function* onCartSagas(){
    yield all([call(onSignOutSuccess)])
}