import React from 'react';
import './TodoItem.css';

function TodoItem({task, deleteTask, toggleCompleted}){
    function handleChange() {
        toggleCompleted(task.id);
    }

    return(
        <div className='todod-item'>
            <input type='checkbox' checked={task.completed} onChange={handleChange}/>
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    );
}
export default TodoItem;
