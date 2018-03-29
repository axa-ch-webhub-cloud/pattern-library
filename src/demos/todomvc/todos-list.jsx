import React from 'react';
import TodoItem from './todo-item';

const TodosList = ({
  shownTodos,
  editing,
  ...props,
}) => Array.isArray(shownTodos) && shownTodos.length ? (
  <ul className="m-todo__list">
    {shownTodos.map(todo => (
      <TodoItem todo={todo} {...props} editing={editing === todo.id} id={todo.id} key={todo.id} />
    ))}
  </ul>
) : null;

export default TodosList;
