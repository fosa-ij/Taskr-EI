import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Todo from './Todo'
import generateUniqueRandom from '../assets/randomNumbers'


const Input = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))

    const[todoList, setTodoList] = useState(storedTodos || [])
    const [todoItem, setTodoItem] = useState('')

    const handleInput = (e) =>{
        setTodoItem(e.target.value);
    }

    const list = {
        todoTask: todoItem, 
        date: new Date().toString().split(' ').slice(0, 4).join(' '), 
        time: new Date().toString().split(' ').slice(4, 5).join(' '),
        todoTag: 'tag', 
        id: generateUniqueRandom(500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList(todoList => [list, ...todoList])
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList]);

    return (
        <>
            <form action='' method='post' >
                <input type="text" name="todo" value={todoItem} onChange={handleInput} />   
                {/* <input type="text" name="tag" /> */}
                <label htmlFor="tag">Urgent</label>
                <input type='radio'id='tag' value={'urgent'} name='tag' />
                <label htmlFor="tag2">Important</label>
                <input type='radio' id='tag2' value={'important'} name='tag'/>
            <button onClick={handleSubmit}><FontAwesomeIcon icon={faPlus}/></button>
            </form>
            <Todo todoList={todoList} />
        </>
    )
}

export default Input