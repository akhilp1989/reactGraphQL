
import userActionConstants from './userActionConstants';



export const googleSignInStart =()=>({
    type:userActionConstants.GOOGLE_SIGNIN_START
})

export const SignInSuccess =(user)=>({
    type:userActionConstants.SIGNIN_SUCCESS,
    payload:user
})

export const SignInFailed =(error)=>({
    type:userActionConstants.SIGNIN_FAILED,
    payload:error
})

export const emailSignInStart =(emailAndPassword)=>({
    type:userActionConstants.EMAIL_SIGNIN_START,
    payload:emailAndPassword
})

export const checUserSession =()=>({
    type:userActionConstants.CHECK_USER_SESSION
})
export const signOutStart =()=>({
    type:userActionConstants.SIGNOUT_START
})
export const signOutSuccess =()=>({
    type:userActionConstants.SIGNOUT_SUCCESS
})
export const signOutFailed =(error)=>({
    type:userActionConstants.SIGNOUT_FAILED,
    payload:error
})


export const signUpStart =(userCred)=>({
    type:userActionConstants.SIGNUP_STARTED,
    payload:userCred
})

export const signUpSuccess =({user,additionalData})=>({
    type:userActionConstants.SIGNUP_SUCCESS,
    payload:{user,additionalData}
})
export const signUpFailed =(error)=>({
    type:userActionConstants.SIGNUP_FAILED,
    payload:error
})