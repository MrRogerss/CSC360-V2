import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos = [] }) {
    return (
      <div>
        {todos.map((p, i) => (
          // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
          <Todo {...p} key={"todo-" + i} />
        ))}
      </div>
    );
  }