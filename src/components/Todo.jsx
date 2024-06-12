import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todoList, setTodoList] = useState([]); // Initialize state to hold the list of todos

    const inputRef = useRef(); // Create a ref to access the input element

    // Function to add a new todo item
    const add = () => {
        // Get the trimmed value from the input field (removing leading/trailing whitespace)
        const inputText = inputRef.current.value.trim(); 

        // If the input is empty or just spaces, do nothing
        if (inputText === "") {
            return null;            
        }

        // Create a new todo object with a unique id, the input text, and a completion status
        const newTodo = {
            id: Date.now(), // Generate a unique number based on the current time
            text: inputText,
            iscomplete: false,
        };

        // Update the todo list state by adding the new todo to the end of the array
        setTodoList((prev) => [...prev, newTodo]);

        // Clear the input field after adding the todo
        inputRef.current.value = "";
    };

    // Function to delete a todo item by its id
    const deleteTodo = (id) => {
        // Update the todo list state by filtering out the todo with the given id
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p- min-h-[550px] rounded-xl p-4'>
     {/* ------------Title Start----------------- */}
     <div className='flex item-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
     </div>
     {/* ---------------Input Box Start------------------ */}
     <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-red-600 w-32 h-14 text-white text-lg font-medium cursor-poiter'>ADD</button>
     </div>

     {/* ------------------ToDo list---Start----------------- */}
     <div>
        {todoList.map((item,index)=>{
            return<TodoItems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} deleteTodo={deleteTodo}/>
        })}
     </div>
    </div>
  )
}

export default Todo
