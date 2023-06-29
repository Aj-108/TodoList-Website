import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':''}`}> {task.task} </p>
        <div className="icons">
            <EditIcon onClick={()=>{editTodo(task.id)}} className='icon1'/>
            <DeleteIcon onClick={() =>deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo