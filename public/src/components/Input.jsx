import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import Todo from './Todo'
import { CheckContext } from '../App'
import "../index.css"
import { format } from 'date-fns'



const Input = () => {
    const[todoList, setTodoList] = useState([])
    const [todoItem, setTodoItem] = useState('')
    const [tag, setTag] = useState('')
    const [isChecked, setIsChecked] = useContext(CheckContext);

    // const handleInput = (e) =>{
    //     setTodoItem(e.target.value);
    // }

    const handleInput = (e) => {
        const { name, value } = e.target;
        name === 'todo' ? setTodoItem(value) : name === 'tag' && setTag(value);
    }

    const list = {
        todoTask: todoItem, 
        date: new Date().toString().split(' ').slice(0, 4).join(' '), 
        time: new Date().toString().split(' ').slice(4, 5).join(' '),
        todoTag: tag, 
        completed: isChecked
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList(todoList => [...todoList, list])
        setTodoItem('');
    }
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList]);

  const currentDate = format(new Date(), 'MMMM d, yyyy')


    return (
        <div className='main-container'>
            <div className='container-head'>
            <h1>User&apos;s List</h1>
            <p>{currentDate}</p>
          </div>
            <section className='todo-add'>
                <form action='' method='post' >
                    <input type="text" name="todo" value={todoItem} onChange={handleInput} placeholder='Write a New Task' />   
                    <div className='tags'>
                        <label htmlFor="tag1" className='urgent'>
                            <input type='radio'id='tag1' value={'Urgent'} name='tag' onChange={handleInput}/>
                            Urgent
                        </label>
                        <label htmlFor="tag2" className='important'>
                            <input type='radio' id='tag2' value={'Important'} name='tag' onChange={handleInput}/>
                            Important
                        </label>
                    </div>
                </form>
                <button onClick={handleSubmit}><FontAwesomeIcon icon={faPaperPlane}/> Add Todo</button>
                <div className='divider'>
                    <hr/>
                </div>
                <Todo todoList={todoList} />
            </section>
        </div>
    )
}

export default Input