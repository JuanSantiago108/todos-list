import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState("")

    const createTask = (e) => {
        e.preventDefault();
        addTask(task)
        setTask("")
    }

    return (
        <div>
            <form onSubmit={createTask}>
                <label>New Task: </label>
                <input type="text" name='task' value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
