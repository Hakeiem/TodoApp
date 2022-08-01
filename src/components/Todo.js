import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiEditAlt } from 'react-icons/bi'

function Todo({Todos, completeTodo, removeTodo}) {

    const [editor, setEditor] = useState({
        id: null,
        value: ''
    })

  return Todos.map((todo, index) => (
    <div className={todo.isCompleted ? 
        'todo-row complete' : 'todo-row'} 
        key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine 
            onClick={() => removeTodo(todo.id)}
            className="delete"
            />
            <BiEditAlt 
            onClick={() => setEditor({id: todo.id, value: todo.text})}
            className="edit"
            />
        </div>
    </div>
  ));
}

export default Todo