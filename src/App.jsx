 import { Route, Routes } from 'react-router-dom'
 import './App.css'
 import './index.css'
import Input from './components/Input'
 import { useState, createContext, useEffect } from 'react'
 import SignUp from './components/signup-page'
import Login from './components/login'
import { auth } from './config/todoDatabase'
import { onAuthStateChanged } from '@firebase/auth'

export const UserContext = createContext()
 export const TodoListArr = createContext()

 function App() {
   const storedTodos = JSON.parse(localStorage.getItem("todos"));
   const [todoList, setTodoList] = useState(storedTodos || []);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
         setIsLoggedIn(!isLoggedIn)
      } else {
        console.log('User is Signed out!');
      }
    })
   }, [])

   return (
     <>
       <section>
         <div>
          <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
           <TodoListArr.Provider value={[todoList, setTodoList]}>
             <Routes>
               <Route exact path="/" element={<Input />} />
               <Route exact path="/signup" element={<SignUp />} />
               <Route exact path="/login" element={<Login />} />
             </Routes>
           </TodoListArr.Provider>
          </UserContext.Provider>
         </div>
       </section>
     </>
   );
}

export default App
