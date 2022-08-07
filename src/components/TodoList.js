import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
// import Todo from './Todo'

function TodoList() {

    const [Todos, setTodos] = useState([]);

    const Add = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...Todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, nuValue) => {
        if (!nuValue.text || /^\s*$/.test(nuValue.text)) {
          return;
        }
        setTodos(pre => pre.map(item => (item.id === todoId ? nuValue : item)));
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
        <TodoForm  onSubmit={Add}/>
        <Todo 
            Todos={Todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList