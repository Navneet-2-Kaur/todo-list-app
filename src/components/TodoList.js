import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo !== ""){
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos (newTodos);
  };
  return (
  <div className="List-section">
    <h1 style={{paddingLeft:"40px", fontStyle:"italic", color:"white" ,fontSize:"50px"}}>Todo List </h1>
    <input style={{marginLeft:"40px", fontSize:"25px"}} placeholder="Type task here." type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
    <button style={{ marginLeft:"20px", fontSize:"20px", color:"black" ,backgroundColor:"lightgreen" }} onClick={handleAddTodo}>Add</button>
    <ul style={{fontSize:"40px",listStyleType:"none", color:"yellow"}}>
      {todos.map((todo, index) => (
        <li key ={index}>
          <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}/>
          <span style={{ margin: "15px", textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</span>
          <button style={{ fontSize:"20px", color:"white", backgroundColor:"coral" }} onClick={() => handleDeleteTodo(index) } >
            Delete
          </button>
        </li>
      )
      )}
    </ul>
  </div>

  );
};

export default TodoList;