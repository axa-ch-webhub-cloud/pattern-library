import React from 'react';
import withReact from '../../js/with-react';
import AXAHeader from '../../components/o-header';
import AXAHeaderMain from '../../components/m-header-main';
import AXAHeaderLogo from '../../components/m-header-logo';

const withReactBound = withReact(React);
const AXAHeaderReact = withReactBound(AXAHeader);
const AXAHeaderMainReact = withReactBound(AXAHeaderMain);
const AXAHeaderLogoReact = withReactBound(AXAHeaderLogo);

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
      <input
        ref={input => input && !editing && input.focus()}
        className="m-todo-header__new"
        placeholder="What needs to be done?"
        value={newTodo}
        onKeyDown={handleNewTodoKeyDown}
        onChange={handleChange}
        autoFocus={!editing}
      />
    </AXAHeaderMainReact>
  </AXAHeaderReact>
);

export default TodoHeader;
