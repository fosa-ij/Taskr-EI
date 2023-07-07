import './App.css'
import Input from './components/Input'
import { useState, createContext } from 'react'

export const CheckContext = createContext()

function App() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <CheckContext.Provider value={[isChecked, setIsChecked]}>
        <h1>Todo List</h1>
        <Input />
      </CheckContext.Provider>
    </>
  )
}

export default App
