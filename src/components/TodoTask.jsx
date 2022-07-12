import React, { useState } from 'react'

const TodoTask = ({ task, handleTaskDelete }) => {
    const [completed,setComplete]=useState(false)
    return (
        <div>
            <h4 style={{textDecoration:completed && "line-through"}}>{task}</h4>
            <input type="checkbox" checked={completed}
                onChange={e => setComplete(e.target.checked)} />
            <button onClick={handleTaskDelete}>Delete</button>
        </div>
    )
}

export default TodoTask
