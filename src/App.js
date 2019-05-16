import React, { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState({id: '', desc: ''})
  const [todos, setTodos] = useState([])
  
  function addTodo(){
    setTodos([...todos, todo])
    setTodo({id: '', desc: ''})
  }

  return (
    <>
      <input name="todo" onChange={e => setTodo({id: todos.length +1, desc: e.target.value})} value={todo.desc}/>
      <button onClick={() => addTodo()}>Add</button>
      {
      todos && todos.map(obj => (
        <li key={obj.id}>{obj.id} - {obj.desc}</li>
      ))
      } 
      
    </>
  );
}
