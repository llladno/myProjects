import { combineReducers} from 'redux'
import {userReducer} from "./userReducer";
import {UserAction, userState} from "../../types/user";
import {todoReducer} from "./todoReducer";



export const rootReducer: any = combineReducers({
    user: userReducer,
    todo: todoReducer
})


export type RootState = ReturnType<typeof rootReducer>