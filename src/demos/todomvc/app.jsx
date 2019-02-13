import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import Todos from './todos';
import TodoModel from './todo-model';
import styles from './index.scss';

const todoModel = new TodoModel('react-todos');

const TodoApp = ({ model }) => (
  <article className="o-todo">
    <Todos model={model} />
  </article>
);

function render() {
  ReactDOM.render(<TodoApp model={todoModel} />, document.getElementById('my-todo-demo-react'));
}

todoModel.subscribe(render);

BaseComponentGlobal.appendGlobalStyles(styles);
render();
