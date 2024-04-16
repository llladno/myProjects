import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";
import {setTodoPage} from "../store/action-creator/todo";

const TodoList:React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
const {fetchTodo, setTodoPage} = useAction()

    const pages = [1,2,3,4,5]

    useEffect(()=>{
        fetchTodo(page, limit)
    }, [page])


    if (loading) {
        return <h1>Идёт загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map((todo:any) => <div
            key={todo.id}>{todo.id} - {todo.title}
            </div>)}
            <button onClick={()=>{console.log(todos)}}>Ccccc</button>
            <div style={{display: 'flex'}}>
                {pages.map((p)=> <div
                    onClick={() => setTodoPage(p)}
                style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}>
                    {p}
                </div>)}
            </div>
        </div>
    );
};

export default TodoList;