import React, { Component } from 'react';
import classnames from 'classnames';
import withReact from '../../js/with-react';
import AXAButton from '../../components/m-button';
import AXAIcon from '../../components/a-icon';

const withReactBound = withReact(React);
const AXAButtonReact = withReactBound(AXAButton);
const AXAIconReact = withReactBound(AXAIcon);

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRef = this.handleRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      editText: props.todo.title,
    };
  }

  /**
   * This is a completely optional performance enhancement that you can
   * implement on any React component. If you were to delete this method
   * the app would still work correctly (and still be very performant!), we
   * just use it as an example of how little code it takes to get an order
   * of magnitude performance improvement.
   */
  shouldComponentUpdate(nextProps, nextState) {
    const { props } = this;

    return (
      nextProps.todo !== props.todo ||
      nextProps.editing !== props.editing ||
      nextState.editText !== this.state.editText
    );
  }

  /**
   * Safely manipulate the DOM after updating the state when invoking
   * `this.props.onEdit()` in the `handleEdit` method above.
   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing) {
      const { editField } = this;

      editField.focus();
      editField.setSelectionRange(editField.value.length, editField.value.length);
    }
  }

  handleRef(ref) {
    this.editField = ref;
  }

  handleSubmit() {
    const val = this.state.editText.trim();
    const { props } = this;
    const { todo } = props;

    if (val) {
      props.onSave(todo, val);
      this.setState({ editText: val });
    } else {
      props.onDestroy(todo);
    }
  }

  handleEdit() {
    const { props } = this;
    const { todo } = props;

    props.onEdit(todo);
    this.setState({ editText: todo.title });
  }

  handleChange(event) {
    if (this.props.editing) {
      this.setState({ editText: event.target.value });
    }
  }

  handleKeyDown(event) {
    const { which } = event;

    if (which === ESCAPE_KEY) {
      const { props } = this;

      this.setState({ editText: props.todo.title });
      props.onCancel(event);
    } else if (which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  render() {
    const { props, state } = this;
    const { todo, editing, onToggle, onDestroy } = props;
    const { title, completed, id } = todo;
    const htmlFor = `m-todo-${id}`;

    return (
      <li className="m-todo__item">
        <div className="m-todo__wrap">
          <input
            className="m-todo__toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(todo)}
          />

          <label className={classnames('m-todo__label', { 'is-todo-completed': completed })} onDoubleClick={this.handleEdit} htmlFor={htmlFor}>
            {title}
          </label>

          <AXAButtonReact onClick={() => onDestroy(todo)}>
            <AXAIconReact icon="cross-gap" classes="m-todo__destroy-icon" />
          </AXAButtonReact>
        </div>

        {editing ?
          <input
            ref={this.handleRef}
            className="m-todo__edit"
            id={htmlFor}
            value={state.editText}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          : null}
      </li>
    );
  }
}

export default TodoItem;
