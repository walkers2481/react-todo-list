import { useState } from "react";
import "./index.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const todoListStyle = {
    backgroundColor: "#afeeee",
    height: "300px",
    maxWidth: "600px",
    margin: "20px auto",
    borderRadius: "15px",
  }

  const inputStyle = {
    border: "none",
    borderRadius: "5px",
    display: "block",
    margin: "0px auto",
    position: "relative",
    top: "10px",
  }

  const ulStyle = {
    position: "relative",
    top: "10px",
    left: "50px",
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, {id: todos.length + 1, text: todo.trim()}]);
    }
    setTodo("");
  };

  return (
    <div 
      className="App"
      style={todoListStyle}>
      <form onSubmit={handleFormSubmit}>
        <input 
          name="todo" 
          type="text" 
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
          style={inputStyle} />
      </form>
      <ul 
        className="todo-list"
        style={ulStyle}>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
      </ul>
    </div>
  );
};

