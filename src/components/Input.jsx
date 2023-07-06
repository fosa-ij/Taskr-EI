import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'


const Input = () => {
const[todoList, setTodoList] = useState([])
const [todoItem, setTodoItem] = useState('')

const handleInput = (e) =>{
setTodoItem(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault()
    const list = {todoTask: todoItem, date: Date.now(), todoTag:'tag', completed: true}
    setTodoList([...todoList, list])
}
// console.log(todoList);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList));
  console.log(todoList)
}, [todoList]);


    return (
        <>
            <form action='' method='post' >
                <input type="text" name="todo" value={todoItem} onChange={handleInput} />   
            </form>
            <button onClick={handleSubmit}><FontAwesomeIcon icon={faPlus}/></button>
        </>
    )
}

export default Input