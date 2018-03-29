import React, { Component } from 'react';
import withReact from '../../js/with-react';
import AXAHeader from '../../components/o-header';
import AXAHeaderMain from '../../components/m-header-main';
import AXAHeaderLogo from '../../components/m-header-logo';

const withReactBound = withReact(React);
const AXAHeaderReact = withReactBound(AXAHeader);
const AXAHeaderMainReact = withReactBound(AXAHeaderMain);
const AXAHeaderLogoReact = withReactBound(AXAHeaderLogo);

// @todo: super hacky way to keep the input's focus within custom elements
class Input extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRef = this.handleRef.bind(this);
  }

  componentDidUpdate() {
    const { props: { editing }, input } = this;

    if (input && !editing) {
      input.autofocus = !editing;

      setTimeout(() => {
        input.focus();
      }, 200);
    }
  }

  handleRef(input) {
    this.input = input;
  }

  render() {
    const { props, handleRef } = this;

    return (
      <input
        ref={handleRef}
        {...props}
      />
    );
  }
}

const TodoHeader = ({
  editing,
  newTodo,
  handleNewTodoKeyDown,
  handleChange,
}) => (
  <AXAHeaderReact>
    <AXAHeaderMainReact firstLeft>
      <AXAHeaderLogoReact />
      <h1 className="m-todo-header__title">Todos</h1>

      <Input
        className="m-todo-header__new"
        placeholder="What needs to be done?"
        editing={editing}
        value={newTodo}
        onKeyDown={handleNewTodoKeyDown}
        onChange={handleChange}
        autoFocus={!editing}
      />
    </AXAHeaderMainReact>
  </AXAHeaderReact>
);

export default TodoHeader;
