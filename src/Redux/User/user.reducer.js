import userActionConstants  from './userActionConstants'
const INITIAL_STATE={
    currentUser:null,
    error:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userActionConstants.SIGNIN_SUCCESS:
                    return{
                ...state,
                currentUser:action.payload,
                error:null
            };
        case userActionConstants.SIGNIN_FAILED:
        case userActionConstants.SIGNOUT_FAILED:
        case userActionConstants.SIGNUP_FAILED:
                   return{
                ...state,
                error:action.payload
            };
        case userActionConstants.SIGNOUT_SUCCESS:
                   return{
                ...state,
                currentUser:null
            };
       
        
        default:
            return state;
    }
}
export default userReducer