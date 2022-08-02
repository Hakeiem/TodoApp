import React, { useState } from 'react'

function TodoForm(props) {
    const[input, setInput] = useState('');
    const [id, setId] = useState(1);
    const giveId=()=>{
        setId(id + 1)
        return id;
    }

    const Change = e => {
        setInput(e.target.value)
    }

    const Submit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: giveId(),
            text: input
        });
        setInput('');
    };
    return (
        <form className="form-box" onSubmit={Submit}>
            <input 
                type="text" 
                placeholder="Enter here.." 
                value={input}
                name="text"  
                className="input-box"
                onChange={Change}
            />
            <button className="btn-todo">Add</button>
        </form>
    )
}

export default TodoForm;