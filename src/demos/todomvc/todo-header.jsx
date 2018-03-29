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

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleRef = this.handleRef.bind(this);

    this.state = {
      reFocus: false,
    };
  }

  onBlur() {
    const { state: { reFocus } } = this;

    if (reFocus === true) {
      this.setState({
        reFocus: false,
      });

      setTimeout(() => {
        this.input.focus();
      }, 10);
    }
  }

  onChange(event) {
    const { props: { onChange } } = this;

    this.setState({
      reFocus: true,
    });

    onChange(event);
  }

  handleRef(input) {
    this.input = input;
  }

  render() {
    const { handleRef } = this;
    const { onChange, ...props } = this.props;

    return (
      <input
        {...props}
        ref={handleRef}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

const TodoHeader = ({
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
        value={newTodo}
        onKeyDown={handleNewTodoKeyDown}
        onChange={handleChange}
        autoFocus={true}
      />
    </AXAHeaderMainReact>
  </AXAHeaderReact>
);

export default TodoHeader;
