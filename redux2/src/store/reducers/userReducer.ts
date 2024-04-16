import {UserAction, UserActionTypes, userState} from "../../types/user";


const initialState: userState = {
    user: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction):userState =>{
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, user:[]}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, user:action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, user:[]}
        default:
            return state
    }
}