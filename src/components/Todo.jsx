import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'
import { useState, useContext, useEffect } from 'react'


const Todo = ({todoList}) => {
    const storedCheckedTodos = JSON.parse(localStorage.getItem('checkedTodos'))

    const [isAllChecked, setIsAllChecked] = useState(storedCheckedTodos || []);

    const handleToggle = (e) => {
        const todoId = e.target.value

        if (e.target.checked) {
            setIsAllChecked([...isAllChecked, todoId])
        } else {
            setIsAllChecked(isAllChecked.filter(todo => todo != todoId))
        }
    }

    console.log(isAllChecked);

    useEffect(() => {
        localStorage.setItem("checkedTodos", JSON.stringify(isAllChecked))
    }, [isAllChecked]);


    return (
        todoList.length === 0 ? <h3>Create A Todo Task</h3> :
        todoList.map((todo, index)=>{
            const isChecked = isAllChecked.includes(todo.id.toString());

            return (
                <div className='todo-container' key={index}>
                    <div className='display-flex'>
                    <div>
                        {isChecked ? <p><del>{todo.todoTask}</del></p> : <p>{todo.todoTask}</p>}
                        <span>{'tag'}</span>
                    </div>
                    <div>
                        <input type="checkbox" value={todo.id} checked={isChecked} onChange={handleToggle} /> 
                    </div>
                    </div>
                    <hr />
                    <div className='display-flex'>
                        <div>
                            <span>{todo.date}</span>
                            <span>{todo.time}</span>
                        </div>
                        <div>
                            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            )
        })
    );
}
 
export default Todo;