import React, { Component } from 'react';
import withReact from '../../js/with-react';
import AXAHeader from '../../components/o-header';
import AXAHeaderMain from '../../components/m-header-main';
import AXAHeaderLogo from '../../components/m-header-logo';

const AXAHeaderReact = withReact(AXAHeader);
const AXAHeaderMainReact = withReact(AXAHeaderMain);
const AXAHeaderLogoReact = withReact(AXAHeaderLogo);

const TodoHeader = ({
  newTodo,
  handleNewTodoKeyDown,
  handleChange,
  toggleAll,
}) => (
  <AXAHeaderReact>
    <AXAHeaderMainReact firstLeft>
      <AXAHeaderLogoReact onAxaClick={toggleAll} />
      <h1 className="m-todo-header__title">Todos</h1>

      <input
        className="m-todo-header__new"
        placeholder="What needs to be done?"
        value={newTodo}
        onKeyDown={handleNewTodoKeyDown}
        onChange={handleChange}
        autoFocus={true}
      />
    </AXAHeaderMainReact>
  </AXAHeaderReact>
);

export default TodoHeader;
