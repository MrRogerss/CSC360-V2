import React from 'react';
import { useResource } from 'react-request-hook';
import Todo from './Todo';

export default function TodoList({ todos = [],dispatch }) {

  const [todo, RemoveTodo] = useResource(({ id }) => ({
    url: '/todos/'+id,
    method: 'DELETE',
    data: { id }
  }))
  const deleteTodo = (id) => {
    RemoveTodo({ id })
    dispatch({type: 'DELETE_TODO',id})
  }
    return (
      <div>
        {todos.map((p, i) => (
          // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
          <Todo {...p} key={p.id}  deleteTodo = {deleteTodo} />
        ))}
      </div>
    );
  }