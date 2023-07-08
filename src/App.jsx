import './App.css'
import Input from './components/Input'
import { useState, createContext } from 'react'

export const TodoListArr = createContext()

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todoList, setTodoList] = useState(storedTodos || []);

  return (
    <>
      <TodoListArr.Provider value={[todoList, setTodoList]}>
        <h1>Todo List</h1>
        <Input />
      </TodoListArr.Provider>
    </>
  );
}

export default App
