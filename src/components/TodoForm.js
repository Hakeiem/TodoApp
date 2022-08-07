import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const[input, setInput] = useState(props.editor ? props.editor.value : '');

    const Ref = useRef(null)

    useEffect(() => {
        Ref.current.focus()
    })

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
        <form className="formBox" onSubmit={Submit}>
            {props.editor ? (
                <>
                <input 
                    type="text" 
                    placeholder="Enter here.." 
                    value={input}
                    name="text"  
                    className="inputBox"
                    onChange={Change}
                    ref={Ref}
                />
            <button className="SubBtn">Upadte</button>
            </>
            ) : (
                <>
                <input 
                    type="text" 
                    placeholder="Enter here.." 
                    value={input}
                    name="text"  
                    className="inputBox"
                    onChange={Change}
                    ref={Ref}
                />
                <button className="SubBtn">Add</button>
                </>
            )
            }
        </form>
    )
}

export default TodoForm;