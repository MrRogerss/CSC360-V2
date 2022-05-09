import React, { useState,useReducer } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import UserBar from './UserBar'
import appReducer from "./reducers";

function App() {

const [state,dispatch] = useReducer(appReducer,{user: '', todos: []})
  /////////////////////////////
  //const [user, setUser] = useState("");
 // const [todos, setTodo] = useState([])


  return (
    <div>
      <UserBar user = {state.user} dispatch = {dispatch}/>
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch = {dispatch} />}
      <TodoList todos={state.todos} />

    </div>

  );
}

export default App;
