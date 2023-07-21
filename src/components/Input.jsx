import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faS, faSignOut, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Todo from './Todo'
import { TodoListArr } from '../App'
import '../index.css'
import { format } from 'date-fns'
import generateUniqueRandom from '../assets/randomNumbers'
import { UserContext } from '../App'
import { auth } from '../config/todoDatabase'
import { signOut } from '@firebase/auth'


const Input = () => {
    const [todoList, setTodoList] = useContext(TodoListArr);
    const [todoItem, setTodoItem] = useState("");
    const [tag, setTag] = useState("");
    const [isLoggedIn, setIsLoggedIn]  = useContext(UserContext)

    const handleInput = (e) =>{
        setTodoItem(e.target.value);
    }

    const handleTag = (e) => {
        setTag(e.target.value);
    }

    const list = {
        todoTask: todoItem, 
        date: new Date().toString().split(' ').slice(0, 4).join(' '), 
        time: format(new Date(), 'HH:mm'),
        todoTag: tag, 
        id: generateUniqueRandom(500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList(todoList => [list, ...todoList])
        setTodoItem('')
        setTag('')
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('User signed out')
            setIsLoggedIn(!isLoggedIn)
        })
        .catch(e => console.error(e))
    }
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
        setTag('')
    }, [todoList, isLoggedIn]);

  const currentDate = format(new Date(), 'MMMM d, yyyy')


    return (
        <div className='main-container'>
            <div className='container-head'>
            <h1>My Todo List</h1>
            <p>{currentDate}</p>
            </div>
            {isLoggedIn ?
                <>
                    <button className='btn-signout' onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</button>
                    <section className='todo-add'>
                        <form action='' method='post' >
                            <input type="text" name="todo" value={todoItem} onChange={handleInput}  placeholder='Write a New Task'/> 
                            <div className='tags'>  
                                <label htmlFor="tag1" className='urgent'>
                                    <input type='radio'id='tag1' value={'urgent'} name='tag' onClick={handleTag} checked={tag === 'urgent'} readOnly />Urgent
                                </label>
                                <label htmlFor="tag2" className='important'>
                                    <input type='radio' id='tag2' value={'important'} name='tag' onClick={handleTag} checked={tag === 'important'} readOnly />Important
                                </label>
                            </div>
                            <button className='btn-add' onClick={handleSubmit}><FontAwesomeIcon icon={faPaperPlane}/> Add Todo</button>
                        </form>
                        <Todo />
                    </section> 
                </>
                :
                <>
                    <h3>No todos yet, Enjoy the peace</h3>
                    <h3>
                    Kindly{" "}
                    <Link className="login" to="/login">
                        Login
                    </Link> to add a todo
                    </h3>
                </>
            }
        </div>
    )
}

export default Input