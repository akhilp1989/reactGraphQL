import UserActionConstants from './userActionConstants'

export const setCurrentUser = (user) =>( {
    type:UserActionConstants.SET_CURRENT_USER,
    payload:user
})