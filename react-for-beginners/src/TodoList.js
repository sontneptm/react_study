import { useState, useEffect } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <h1>My to dos </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to-do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todoList.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
