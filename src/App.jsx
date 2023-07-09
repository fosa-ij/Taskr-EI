 import { Route, Routes } from 'react-router-dom'
 import './App.css'
import Input from './components/Input'
 import { useState, createContext } from 'react'
 import SignUp from './components/signup-page'
import Login from './components/login'



 export const TodoListArr = createContext()

 function App() {
   const storedTodos = JSON.parse(localStorage.getItem("todos"));
   const [todoList, setTodoList] = useState(storedTodos || []);

   return (
     <>
       <section>
         <div>
           <TodoListArr.Provider value={[todoList, setTodoList]}>
             <Routes>
               <Route exact path="/" element={<Input />} />
               <Route exact path="/signup" element={<SignUp />} />
               <Route exact path="/login" element={<Login />} />
             </Routes>
           </TodoListArr.Provider>
         </div>
       </section>
     </>
   );
}

export default App
