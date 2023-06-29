import React, { useState } from 'react'
 

function EditTodoForm({editTodo,task}) {
  
    const [value,setValue] =useState(task.task) ;

    const handleSubmit = (e) =>{
        e.preventDefault() ;

        editTodo(task.id,value) ;
        setValue("") ;
    }


  return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" className='form__input' placeholder='Update Task' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='form__button'>Update Task</button>
        </form>
  )
}

export default EditTodoForm;