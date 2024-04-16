import {Dispatch} from 'redux'
import axios from 'axios'
import {TodoActions, TodoActionTypes} from "../../types/todo";
//
export const fetchTodo = (page = 1, limit = 10) =>{
    return async (dispatch: Dispatch) =>{
        dispatch({type: TodoActionTypes.FETCH_TODOS})
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            console.log(response)
                dispatch({type:  TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error'})
        }
    }
}


export function setTodoPage(page: number):TodoActions {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}