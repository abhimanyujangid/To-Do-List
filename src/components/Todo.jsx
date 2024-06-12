import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

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
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Function to toggle the completion status of a todo item by its id
    const toggle = (id) => {
        // Update the todo list state by toggling the iscomplete property of the matched todo
        setTodoList((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    // If the todo item matches the id, toggle its iscomplete status
                    return { ...todo, iscomplete: !todo.iscomplete };
                }
                return todo; // If it doesn't match, return the todo item unchanged
            })
        );
    };

    // useEffect hook to log the todo list whenever it changes
    useEffect(() => {
        console.log(todoList); // Log the current todo list to the console
    }, [todoList]); // Dependency array: only run the effect when todoList changes

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-4 min-h-[550px] rounded-xl'>
            {/* Title Start */}
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt="Todo Icon" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            {/* Input Box Start */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input
                    ref={inputRef}
                    className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                    type="text"
                    placeholder='Add your task'
                />
                <button onClick={add} className='border-none rounded-full bg-red-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
                    ADD
                </button>
            </div>
            {/* ToDo List Start */}
            <div>
                {todoList.map((item, index) => (
                    <TodoItems
                        key={item.id} // It's better to use unique ids instead of indexes
                        text={item.text}
                        id={item.id}
                        isComplete={item.iscomplete}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
