import React, { useState } from 'react'


function TodoForm({addTodo}) {
   const [value,setValue] =useState("") ;

    const handleSubmit = (e) =>{
        e.preventDefault() ;

        addTodo(value) ;
        setValue("") ;
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" className='form__input' placeholder='Enter the task here' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='form__button'>Add Task</button>
    </form>
  )
}

export default TodoForm