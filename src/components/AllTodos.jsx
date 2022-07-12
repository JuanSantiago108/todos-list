import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoTask from './TodoTask'

const AllTodos = () => {
    const [taskList, setTaskList] = useState([])

    const addTask = (task) => {
        setTaskList([...taskList, task])
    
    }
    const handleTaskDelete = (delIdx) =>{
        const filteredTodos = taskList.filter((t,i)=>
            i !== delIdx
        )
        setTaskList(filteredTodos);
    }
    return (
        <div>
            <TodoForm
                addTask={addTask}
            />
            {
                taskList.map((t,i) =>
                <TodoTask
                handleTaskDelete = {()=>handleTaskDelete(i)}
                task = {t}/>
                )
            }
        </div>
    )
}

export default AllTodos
