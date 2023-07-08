import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import Todo from './Todo'
import { CheckContext, CheckTodo } from '../App'


const Input = () => {


const [todoList, setTodoList] = useContext(CheckTodo);
const [todoItem, setTodoItem] = useState("");
const [tag, setTag] = useState("");
const [isChecked, setIsChecked] = useContext(CheckContext);

const handleInput = (e) => {
    setTodoItem(e.target.value);
};
const list = {
    todoTask: todoItem,
    date: new Date().toString().split(" ").slice(0, 4).join(" "),
    time: new Date().toString().split(" ").slice(4, 5).join(" "),
    todoTag: tag,
    completed: isChecked,
    id: Math.random() * 1e7,
};
const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((todoList) => [list, ...todoList]);
    setTodoItem('')
};
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
}, [todoList]);


return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="todo"
          value={todoItem}
          onChange={handleInput}
        />
        {/* <input type="text" name="tag" /> */}
        <label htmlFor="tag">Urgent</label>
        <input type="radio" id="tag" value={"urgent"} name="tag" />
        <label htmlFor="tag2">Important</label>
        <input type="radio" id="tag2" value={"important"} name="tag" />
      </form>
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <Todo todoList={todoList} />
    </>
  );
}


export default Input