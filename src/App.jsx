import './App.css'
import Input from './components/Input'
import { useState, createContext } from 'react'

export const CheckContext = createContext()

function App() {

  return (
    <>
        <h1>Todo List</h1>
        <Input />
    </>
  )
}

export default App
