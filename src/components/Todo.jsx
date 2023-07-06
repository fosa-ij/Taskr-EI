import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    return ( 
        <div>
            <p>A Simple Todo</p>
            <input type="checkbox" />
            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button><FontAwesomeIcon icon={faTrash} /></button>
        </div>
     );
}
 
export default Todo;