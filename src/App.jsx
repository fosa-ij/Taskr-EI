import './App.css'
import Input from './components/Input'
import { useState, createContext } from 'react'

export const TodoListArr = createContext()

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todoList, setTodoList] = useState(storedTodos || []);

  return (
    <>
     <section>
      <div>
        <TodoListArr.Provider value={[todoList, setTodoList]}>
          <Input />
        </TodoListArr.Provider>
      </div>
      </section>
    </>
  );
}

export default App