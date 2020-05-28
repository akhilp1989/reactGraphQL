import {takeLatest,put,call,all} from 'redux-saga/effects'
import userActionConstants from './userActionConstants'
import {googleProvider,auth,createUserProfileDocument,getCurrentUser} from '../../FireBase/firebase.utils'
import {SignInSuccess,SignInFailed,signOutSuccess,signOutFailed,signUpSuccess,signUpFailed} from './user.action'
//import {onClearCart} from '../Cart/cart.sagas'

export function* getUserAuth(userAuth,additionalData){
    try{
        const userRef=yield call(createUserProfileDocument,userAuth);
       // yield console.log('Getting Inside getUserAuth',userAuth,additionalData)
        const userSnapshot=yield userRef.get()
        //console.log('userSnapshotData->',userSnapshot.data())
        yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }
    catch(error){
        yield put(SignInFailed(error))
    } 
}

export function* signInWithGoogle(){
   try{
    const {user}=yield auth.signInWithPopup(googleProvider);
    yield getUserAuth(user)
}
catch(error){
    yield put(SignInFailed(error))
}
}

export function* signInWithEmail ({payload:{email,password}}){
    try{
        const {user}=yield auth.signInWithEmailAndPassword(email,password)
        yield getUserAuth(user)
    }
    catch(error){
       yield put(SignInFailed(error))
    }
}

export function* onGoogleSignInStart (){
    yield takeLatest(userActionConstants.GOOGLE_SIGNIN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionConstants.EMAIL_SIGNIN_START,signInWithEmail)
}

export function* isUserAuthenticated(){
    //yield console.log('Inside isUserAutenticated');
    try{
       const userAuth= yield getCurrentUser();
       if(!userAuth)
       return
       else{
           yield getUserAuth(userAuth)

       }
        
       
    }catch(error){
        yield put(SignInFailed(error))

    }

}

export function* onCheckUserSession(){
    yield takeLatest(userActionConstants.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* signOut(){
   try{
       auth.signOut();
       yield put(signOutSuccess())
       //yield put(onClearCart())

   }catch(error){
        yield put(signOutFailed(error))
   }

}
export function* onSignOut(){
    yield takeLatest(userActionConstants.SIGNOUT_START,signOut)
}

export function* signUpUser({payload:{email,password,displayName}}){
   //yield console.log('Inside SignUpUser');
    try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
       // const {userProf}=yield createUserProfileDocument(userData,displayName)
        yield put(signUpSuccess({user,additionalData:displayName}))
        
    }catch (error){
        yield put(signUpFailed(error))
    }
}

export function* onSignUp(){
    yield takeLatest(userActionConstants.SIGNUP_STARTED,signUpUser)
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    //yield console.log('SIGINAFtersignup-<',user)
yield getUserAuth(user,additionalData)

}
export function* onSignUpSuccess(){
    yield takeLatest (userActionConstants.SIGNUP_SUCCESS,signInAfterSignUp)
}
export function* userSaga(){
    yield all([call(onGoogleSignInStart),
        call(onEmailSignInStart),call(onCheckUserSession),call(onSignOut),
         call(onSignUpSuccess),
        call(onSignUp)])
}