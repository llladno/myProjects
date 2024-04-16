import React from 'react';
import UserList from "./components/userList";
import TodoList from "./components/todoList";

const App = () => {
    return (
        <div>
          <UserList></UserList>
            <TodoList></TodoList>
        </div>
    );
};

export default App;