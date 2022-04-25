import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import UserBar from './UserBar'

function App() {
  const [user, setUser] = useState("");
  const [todos, setTodo] = useState([])
  return (
    <div>
      <UserBar user = {user} setUser ={setUser}/>
      {user && <CreateTodo user={user} todos={todos} setTodo={setTodo} />}
      <TodoList todos={todos} />

    </div>

  );
}

export default App;
