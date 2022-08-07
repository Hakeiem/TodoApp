import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiEditAlt } from 'react-icons/bi'
import { MdDoneOutline } from 'react-icons/md'

function Todo({Todos, completeTodo, doneTodo,removeTodo, updateTodo}) {

    const [editor, setEditor] = useState({
        id: null,
        value: ''
    })

    const Update = value => {
        updateTodo(editor.id, value)
        setEditor({
            id: null,
            value: ''
        })
    }

    if(editor.id) {
        return <TodoForm editor={editor} onSubmit={Update} />
    }



    return (
        <div className='space'>
             {Todos.map((todo, index) => (
            <div className={todo.isCompleted ? 'ListBox completed' : 'ListBox'} key={index}>
                <div key={todo.id} className='cursor' onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="Icons">
                    <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className="DelIcon"
                    />
                    <BiEditAlt 
                    onClick={() => setEditor({id: todo.id, value: todo.text})}
                    className="EditIcon"
                    />
                </div>
            </div>
             ))}
        </div>

    );
}

export default Todo