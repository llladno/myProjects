import {UserActionTypes} from "../../types/user";
import { Dispatch } from 'redux'
import axios from 'axios'
//
export const fetchUsers:any = () =>{
    return async (dispatch: Dispatch) =>{
        dispatch({type: UserActionTypes.FETCH_USERS})
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response)
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка'})
        }
    }
}