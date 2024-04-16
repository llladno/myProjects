import {UserInfo} from "os";

const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

export interface userState {
    user: any[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUserActionSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}

interface FetchUserActionError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface userAction {
    type: string;
    payload?: any

}

export type UserAction = FetchUserAction | FetchUserActionError | FetchUserActionSuccess