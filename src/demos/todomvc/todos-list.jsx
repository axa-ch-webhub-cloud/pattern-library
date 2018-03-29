import React from 'react';
import TodoItem from './todo-item';

const TodosList = ({
  shownTodos,
  editing,
  ...props,
}) => Array.isArray(shownTodos) && shownTodos.length ? (
  <ul className="m-todo__list">
    {shownTodos.map(({ id, ...todo }) => (
      <TodoItem {...todo} {...props} editing={editing === id} id={id} key={todo.id} />
    ))}
  </ul>
) : null;

export default TodosList;
