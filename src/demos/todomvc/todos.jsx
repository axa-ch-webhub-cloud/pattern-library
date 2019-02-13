import React, { Component } from "react";
import TodoHeader from "./todo-header";
import TodosList from "./todos-list";
import TodoFooter from "./todo-footer";
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from "./utils";

import withReact from "../../js/with-react";
import AXADatepicker from "../../components/o-datepicker";

const AXADatepickerReact = withReact(AXADatepicker);

const ENTER_KEY = 13;

class Todos extends Component {
  constructor(props, context) {
    super(props, context);

    this.toggleAll = this.toggleAll.bind(this);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
    this.handleDatepickerChange = this.handleDatepickerChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.nowShowing = this.nowShowing.bind(this);

    this.state = {
      nowShowing: ALL_TODOS,
      editing: null,
      newTodo: "",
      toggleAll: false
    };
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleDatepickerChange(event) {
    const date = new Date(event.detail);
    console.log(date, event);
    // eslint-disable-next-line
    alert(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const val = this.state.newTodo.trim();

    if (val) {
      this.props.model.addTodo(val);
      this.setState({ newTodo: "" });
    }
  }

  toggleAll(event) {
    const {
      state: { toggleAll }
    } = this;

    event.preventDefault();

    this.props.model.toggleAll(!toggleAll);

    this.setState({ toggleAll: !toggleAll });
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

  nowShowing(event) {
    const {
      detail: { state }
    } = event;

    event.preventDefault();

    this.setState({
      nowShowing: state
    });
  }

  render() {
    const {
      props: {
        model: { todos }
      }
    } = this;
    const { state } = this;

    const shownTodos = todos.filter(todo => {
      switch (state.nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });

    const activeTodoCount = todos.reduce(
      (accum, todo) => (todo.completed ? accum : accum + 1),
      0
    );
    const completedCount = todos.length - activeTodoCount;

    return (
      <div>
        <TodoHeader
          newTodo={state.newTodo}
          handleNewTodoKeyDown={this.handleNewTodoKeyDown}
          handleChange={this.handleChange}
          toggleAll={this.toggleAll}
          key={0}
        />

        <TodosList
          shownTodos={shownTodos}
          onToggle={this.toggle}
          onDestroy={this.destroy}
          onEdit={this.edit}
          editing={state.editing}
          onSave={this.save}
          onCancel={this.cancel}
          key={1}
        />

        <AXADatepickerReact onAxaChange={this.handleDatepickerChange} />

        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={state.nowShowing}
          onClearCompleted={this.clearCompleted}
          onNowShowing={this.nowShowing}
          key={2}
        />
      </div>
    );
  }
}

export default Todos;
