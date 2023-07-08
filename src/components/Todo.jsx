import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'
import { TodoListArr } from '../App'
import { useState, useEffect, useContext } from 'react'

const Todo = () => {
    const storedCheckedTodos = JSON.parse(localStorage.getItem('checkedTodos'));
    const [isAllChecked, setIsAllChecked] = useState(storedCheckedTodos || []);
    const [todoList, setTodoList] = useContext(TodoListArr);
    const [todoPage, setTodoPage] = useState('normal');
    const [todoEdit, setTodoEdit] = useState({});
    
    const handleChecked = (e) => {
      const todoId = e.target.value;
      const isChecked = e.target.checked;

      if (isChecked) {
        setIsAllChecked((isAllChecked) => [...isAllChecked, todoId]);
      } else {
        setIsAllChecked((isAllChecked) => isAllChecked.filter((id) => id !== todoId));
      }
    };

    const handleEdit = (e) => {
      setTodoEdit((todoEdit) => ({ ...todoEdit, todoTask: e.target.value }));
    };
  
    const updateTodoHandler = () => {
      setTodoList((todoList) =>
        todoList.map((todo) => {
          if (todo.id === todoEdit.id) {
            return { ...todo, todoTask: todoEdit.todoTask };
          }
          return todo;
        })
      );
      setTodoPage('normal');
      setTodoEdit({});
    };
  
    const editTodoHandler = (id) => {
      setTodoPage(todoPage === 'normal' ? 'edit' : 'normal');
      const todoForEdit = todoList.find((todo) => todo.id === id);
      setTodoEdit(todoForEdit);
    };
  
    const deleteTodo = (id) => {
      setTodoList(todoList.filter((todo) => todo.id !== id));
      setIsAllChecked((isAllChecked.filter((todo) => todo !== id.toString())))
    };
  
    useEffect(() => {
      localStorage.setItem('checkedTodos', JSON.stringify(isAllChecked));
    }, [isAllChecked]);
  
    return (
      <>
        {todoList.length === 0 ? (
          <h3>No todos yet, Add a todo</h3>
        ) : (
          todoList.map((todo, index) => {
            const isChecked = isAllChecked.includes(todo.id.toString());
  
            return (
              <div className="todo-container" key={index}>
                {todoPage === 'edit' && todo.id === todoEdit.id ? (
                  <>
                  <div>
                    <div>
                      <input type="text" name="todo" value={todoEdit.todoTask} onChange={handleEdit} />
                      <button onClick={updateTodoHandler}><FontAwesomeIcon icon={faAdd} /></button>
                    </div>
                    <div>
                      <span>{'tag'}</span>
                    </div>
                  </div>
                  <hr />
                  <div className='display-flex'>
                    <div>
                      <span>{todo.date}</span>
                      <span>{todo.time}</span>
                    </div>
                    <div>
                      <button onClick={() => deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                  </div>
                </>
                ) : (
                  <>
                    <div className="display-flex">
                      <div>
                        {isChecked ? (
                          <p>
                            <del>{todo.todoTask}</del>
                          </p>
                        ) : (
                          <p>{todo.todoTask}</p>
                        )}
                        <span>{todo.todoTag || 'tag'}</span>
                      </div>
                      <div>
                        <input type="checkbox" value={todo.id} checked={isChecked} onChange={handleChecked} />
                      </div>
                    </div>
                    <hr />
                    <div className="display-flex">
                      <div>
                        <span>{todo.date}</span>
                        <span>{todo.time}</span>
                      </div>
                      <div>
                      {!isChecked && (<button onClick={() => editTodoHandler(todo.id)}><FontAwesomeIcon icon={faPenToSquare} /></button> )}
                        <button onClick={() => deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </>
    );
  };
  
  export default Todo;