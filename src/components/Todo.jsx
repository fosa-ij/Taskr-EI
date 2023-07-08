import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'
import { CheckContext, CheckTodo } from '../App'
import { useState, useContext } from 'react'


const Todo = () => {
const [isChecked, setIsChecked] = useContext(CheckContext);
const [todoList, setTodoList] = useContext(CheckTodo)

const handleToggle = () => {
setIsChecked((isChecked) => !isChecked);
};

//function to delete a todo
const  deleteTodo = (id) => {
const newList = todoList.filter((todo) => todo.id !== id);
setTodoList(newList);
}

  // console.log(todoList, isChecked)

return todoList.length === 0 ? (
<h3>No Todos yet, Add a todo</h3>
  ) : (
    todoList.map((todo, index) => {
      return (
      <div className="todo-container" key={index}>
        <div className="display-flex">
            <div>
              {isChecked ? (
                <p>
                  <del>{todo.todoTask}</del>
                </p>
              ) : (
                <p>{todo.todoTask}</p>
              )}
              <span>{todo.todoTag}</span>
            </div>
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
            </div>
          </div>
          <hr />
          <div className="display-flex">
            <div>
              <span>{todo.date}</span>
              <span>{todo.time}</span>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
                    </div>
  );
    })
  );
} 
export default Todo;




