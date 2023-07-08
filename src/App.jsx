import './App.css'
import Input from './components/Input'
import { useState, createContext, useContext } from 'react'

export const CheckContext = createContext()
export const CheckTodo = createContext()

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  const [isChecked, setIsChecked] = useState(false)
  const [todoList, setTodoList] = useState(storedTodos || "[]");

  return (
    <>
      <CheckContext.Provider value={[isChecked, setIsChecked]}>
        <CheckTodo.Provider value={[todoList, setTodoList]}>
          <h1>Todo List</h1>
          <Input />
        </CheckTodo.Provider>
      </CheckContext.Provider>
    </>
  );
}

export default App
