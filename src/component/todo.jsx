import { useState } from 'react';

function TodoList () {
  const [todoTask, setTodoTask] = useState('');

  const handleChange = (event) => {
    setTodoTask(event.target.value);
  };

  return (
    <div>
      <input type="text" value={todoTask} onChange={handleChange} />
      <button>Add Todo</button>
    </div>
  );
}

export default TodoList;