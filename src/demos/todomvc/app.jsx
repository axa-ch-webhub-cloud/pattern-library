import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './todos';
import TodoModel from './todo-model';

const todoModel = new TodoModel('react-todos');

const TodoApp = ({
  model,
}) => (
  <div className="m-todo">
    <Todos model={model} />
  </div>
);

function render() {
  ReactDOM.render(
    <TodoApp model={todoModel} />,
    document.getElementsByClassName('my-todo-demo-react')[0],
  );
}

todoModel.subscribe(render);

document.addEventListener('DOMContentLoaded', () => {
  render();
});

