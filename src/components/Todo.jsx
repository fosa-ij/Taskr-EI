import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'

const Todo = () => {
    return ( 
        <div className='todo-container'>
            <div className='display-flex'>
                <div>
                    <p>A Simple Todo</p>
                    <span>Todo Tag</span>
                </div>
                <div>
                    <input type="checkbox" />   
                </div>
            </div>
            <hr />
            <div className='display-flex'>
                <div>
                    <span>Today</span>
                    <span>11:00PM</span>
                </div>
                <div>
                    <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    );
}
 
export default Todo;