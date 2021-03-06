
import React, {useState} from "react";
import { useResource } from "react-request-hook";

export default function CreateTodo({ user, dispatch,todos }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const[time,setTimeCreated] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescription(evt.target.value) }

  const [todo, CreateTodo] = useResource(({ title, description, dateCreated,dateCompleted,id }) => ({
    url: '/todos',
    method: 'post',
    data: { title, description, dateCreated,dateCompleted,id }
  }))
  function handleCreate (evt) {
    const dateCreated = new Date().toLocaleString();
    const id2 = Math.floor(Math.random() * 1000000)
    CreateTodo({ title, description, dateCreated,dateCompleted:"",id:id2 }) 
    dispatch({type:"CREATE_TODO",title,description,dateCreated,dateCompleted:"",id: id2})

    //const newTodo = { title, description,dateCreated}
     //setTodo([newTodo, ...todos])
  }

  return (
    <>
    <h2>Create a New Todo Item</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <label htmlFor="description">Description:</label>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create" />
    </form>
    </>

  );
}