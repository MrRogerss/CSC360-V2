import React, { useState,useReducer,useContext, createContext,useEffect } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import UserBar from './UserBar'
import appReducer from "./reducers";
import StateContext from "./Context";
import {useResource} from 'react-request-hook'

function App() {

const [state,dispatch] = useReducer(appReducer,{user: '', todos: []})

const [ todos, getTodos ] = useResource(() => ({
  url: '/todos',
  method: 'get'
  }))


  useEffect(getTodos, [])


  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos])
  //if (todos && todos.data) { dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() }) }

  /////////////////////////////
  //const [user, setUser] = useState("");
 // const [todos, setTodo] = useState([])

 //<UserBar user = {state.user} dispatch = {dispatch}/>

  return (
    <StateContext.Provider value = {{state,dispatch}}>
      <UserBar user = {state.user} dispatch = {dispatch}/>
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch = {dispatch} />}
      <TodoList todos={state.todos} dispatch = {dispatch} />
    </StateContext.Provider>
    

  );
}

export default App;
