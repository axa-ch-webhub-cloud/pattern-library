import React, { Component } from 'react';
import TodosList from './todos-list';

const ENTER_KEY = 13;
const app = app || {};

app.ALL_TODOS = 'all';
app.ACTIVE_TODOS = 'active';
app.COMPLETED_TODOS = 'completed';

class Todos extends Component {
  constructor(props, context) {
    super(props, context);

    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      nowShowing: app.ALL_TODOS,
      editing: null,
      newTodo: '',
    };
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const val = this.state.newTodo.trim();

    if (val) {
      this.props.model.addTodo(val);
      this.setState({ newTodo: '' });
    }
  }

  toggleAll(event) {
    const { target: { checked } } = event;

    this.props.model.toggleAll(checked);
  }

  toggle(todoToToggle) {
    this.props.model.toggle(todoToToggle);
  }

  destroy(todo) {
    this.props.model.destroy(todo);
  }

  edit(todo) {
    this.setState({ editing: todo.id });
  }

  save(todoToSave, text) {
    this.props.model.save(todoToSave, text);
    this.setState({ editing: null });
  }

  cancel() {
    this.setState({ editing: null });
  }

  clearCompleted() {
    this.props.model.clearCompleted();
  }

  render() {
    const { props: { model: { todos } } } = this;

    const shownTodos = todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case app.ACTIVE_TODOS:
          return !todo.completed;
        case app.COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });

    return (
      <TodosList
        shownTodos={shownTodos}
        onToggle={this.toggle}
        onDestroy={this.destroy}
        onEdit={this.edit}
        editing={this.state.editing}
        onSave={this.save}
        onCancel={this.cancel}
      />
    );
  }
}

export default Todos;
