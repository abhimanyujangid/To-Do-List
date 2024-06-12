# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# To-Do List Application

This is a simple To-Do List application built using React. It allows users to add, toggle, and delete tasks.

## Project Structure

TODO-LIST/
│
├── node_modules/
│
├── public/
│
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Todo.jsx
│ │ ├── TodoItems.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js


## Installation

1. Clone the repository from GitHub:
    ```sh
    git clone https://github.com/abhimanyujangid/To-Do-List.git
    ```

2. Navigate to the project directory:
    ```sh
    cd To-Do-List
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

3. You can now add, toggle, and delete tasks in your To-Do List.

## Components and Functions

### `Todo.jsx`
This is the main component of the application. It manages the state of the to-do list and includes functions to add, delete, and toggle tasks.

- **State Initialization**:
    ```jsx
    const [todoList, setTodoList] = useState([]);
    ```

- **Reference for Input**:
    ```jsx
    const inputRef = useRef();
    ```

- **Add Task Function**:
    ```jsx
    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            iscomplete: false,
        };
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };
    ```

- **Delete Task Function**:
    ```jsx
    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    ```

- **Toggle Task Completion Function**:
    ```jsx
    const toggle = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, iscomplete: !todo.iscomplete };
                }
                return todo;
            })
        );
    };
    ```

- **Effect Hook**:
    ```jsx
    useEffect(() => {
        console.log(todoList);
    }, [todoList]);
    ```

### `TodoItems.jsx`
This component represents an individual to-do item.

- **Props**:
    ```jsx
    const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => { ... }
    ```

- **Rendering**:
    ```jsx
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? tick : not_tick} alt="" className='w-7' />
                <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
            </div>
            <img onClick={() => { deleteTodo(id) }} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
        </div>
    );
    ```

## Assets

- **tick.png**: Image for completed tasks.
- **not_tick.png**: Image for incomplete tasks.
- **delete.png**: Image for the delete button.
- **todo_icon.png**: Icon for the To-Do List title.

## Styling

- The application uses Tailwind CSS for styling. The main styling files are `App.css` and `index.css`.

## Configuration

- **Vite**: The project uses Vite for development and build configurations (`vite.config.js`).
- **Tailwind**: Tailwind CSS is configured in `tailwind.config.js`.
- **PostCSS**: PostCSS configuration is in `postcss.config.js`.

---

This project provides a simple and clean example of a to-do list application using React. Feel free to modify and expand upon it to fit your needs. Contributions and suggestions are welcome!

