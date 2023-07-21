import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faArrowAltCircleUp, faPenToSquare, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'
import '../index.css'
import { TodoListArr } from '../App'
import { useState, useContext, useEffect } from 'react'


const Todo = () => {
    const storedCheckedTodos = JSON.parse(localStorage.getItem('checkedTodos'));
    const [isAllChecked, setIsAllChecked] = useState(storedCheckedTodos || []);
    const [todoList, setTodoList] = useContext(TodoListArr);
    const [todoPage, setTodoPage] = useState('normal');
    const [todoEdit, setTodoEdit] = useState({});
    const [page, setPage] = useState('All')
    
    const handlePageChange = (e) => {
        const pageValue = e.target.textContent
        setPage(page => page = pageValue)
    }

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

    const completedTodos = [];
    const openTodos = todoList.map(todo => {
        const isChecked = isAllChecked.includes(todo.id.toString());
        return isChecked ? completedTodos.push(todo) : todo
    }).filter(x => typeof x !== 'number')

    const todos = page === 'All' ? todoList : page === 'Open' ? openTodos : page === 'Closed' && completedTodos

  
    useEffect(() => {
      localStorage.setItem('checkedTodos', JSON.stringify(isAllChecked));
    }, [isAllChecked]);
    
    return (
      <>
        {todoList.length === 0 ? (
          <>
            <h3>No todos yet, Enjoy the peace</h3>
          </>
        ) : (
          <>
            <div className="sectionTag-container">
              <div className={(page == "All" && "active") || ""}>
                <span onClick={handlePageChange}>All</span>
                <span>{todoList.length}</span>
              </div>
              <div className={(page == "Open" && "active") || ""}>
                <span onClick={handlePageChange}>Open</span>
                <span>{openTodos.length}</span>
              </div>
              <div className={(page == "Closed" && "active") || ""}>
                <span onClick={handlePageChange}>Closed</span>
                <span>{completedTodos.length}</span>
              </div>
            </div>
            {/*Todo List Render Here...*/}
            {todos.map((todo, index) => {
              const isChecked = isAllChecked.includes(todo.id.toString());

              return (
                <div className="todo-container" key={index}>
                  {todoPage === "edit" && todo.id === todoEdit.id ? (
                    <>
                    <div>
                        <div className='todo-main edit'>
                        <input className='edit-input' type="text" name="todo" value={todoEdit.todoTask} onChange={handleEdit} />
                        <button className='btn-update' onClick={updateTodoHandler}><FontAwesomeIcon icon={faArrowAltCircleUp} /></button>
                        </div>
                        {/* <div > */}
                        <span className="tag">{todo.todoTag || "todo"}</span>
                        {/* </div> */}
                      </div>
                      <hr />
                      <div className="display-flex">
                        <div className="date">
                          <span>{todo.date}</span>
                          <span>{todo.time}</span>
                        </div>
                        <div className="btn-atn">
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="del-btn"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="display-flex">
                        <div className="todo-main">
                          {isChecked ? (
                            <p>
                              <del>{todo.todoTask}</del>
                            </p>
                          ) : (
                            <p>{todo.todoTask}</p>
                          )}
                          <span className="tag">{todo.todoTag || "todo"}</span>
                        </div>
                        <div className="check">
                          <input
                            type="checkbox"
                            value={todo.id}
                            checked={isChecked}
                            onChange={handleChecked}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="display-flex foot">
                        <div className="date">
                          <span>{todo.date}</span>
                          <span>{todo.time}</span>
                        </div>
                        <div className="btn-atn">
                          {!isChecked && (
                            <button
                              className="update-btn"
                              onClick={() => editTodoHandler(todo.id)}
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          )}
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="del-btn"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </>
        )}
      </>
    );
  };
  
  export default Todo;