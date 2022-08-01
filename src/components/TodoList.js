import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
// import Todo from './Todo'

function TodoList() {

    const [Todos, setTodos] = useState([]);

    const Add = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            console.log('hi')
            return;
        }
        const newTodos = [todo, ...Todos];
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const removeArray = [...Todos].filter(todo => todo.id !== id)
        setTodos(removeArray)
    }

    const completeTodo = id => {
        let updatedTodos = Todos.map(todo => {
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        });
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>List</h1>
        <TodoForm  onSubmit={Add}/>
        <Todo 
            Todos={Todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
        />
    </div>
  )
}

export default TodoList