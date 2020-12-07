/* global document */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAInputText from './AXAInputText';
import DemoInputText from './DemoInputText';
import DemoInputTextonKeyUp from './DemoInputTextonKeyUp';

export default {
  title: 'Examples/Input Text/React',
  parameters: {
    readme,
    changelog,
  },
};

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

export const Story = ({
  label,
  name,
  refId,
  placeholder,
  value,
  currency,
  error,
  info,
  checkMark,
  disabled,
  required,
  invalid,
  defaultValue,
  types,
  maxLength,
  counter,
  counterMax,
  pattern,
  inputmode,
  autofocus,
}) => {
  class InputText extends PureComponent {
    constructor() {
      super();

      this.state = {
        value,
      };
    }

    render() {
      return (
        <AXAInputText
          refId={refId}
          name={name}
          label={label}
          placeholder={placeholder}
          checkMark={checkMark}
          disabled={disabled}
          required={required}
          invalid={invalid}
          defaultValue={defaultValue}
          value={this.state.value}
          type={types}
          error={error}
          info={info}
          maxLength={maxLength}
          counter={counter}
          counterMax={counterMax}
          pattern={pattern}
          inputmode={inputmode}
          autofocus={autofocus}
          currency={currency}
          onChange={evt => this.setState({ value: evt.target.value })}
        />
      );
    }
  }

  const wrapper = document.createElement('div');
  ReactDOM.render(<InputText />, wrapper);

  return wrapper;
};

Story.args = {
  label: '',
  name: '',
  refId: '',
  placeholder: '',
  value: '',
  error: '',
  info: '',
  checkMark: false,
  disabled: false,
  required: false,
  invalid: false,
  types: 'text',
  maxLength: 50,
  counter: 'Still ##counter## characters left',
  counterMax: 'Over character limit!',
  pattern: '',
  inputmode: '',
  autofocus: false,
};

Story.argTypes = {
  types: { name: 'type', control: { type: 'radio', options: typeOptions } },
};

export const ControlledAndUncontrolled = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoInputText />, div);
  return div;
};

export const SimulateAutocomplete = () => {
  const wrapper = document.createElement('div');
  // there are two input fields because with only one is not possible to
  // activate the Safari's autocomplete feature.
  ReactDOM.render(
    <form>
      <AXAInputText
        refid="fix-id-fake"
        label="Type in your name, autocolplete feature should be activated"
        name="Name"
      />
      <AXAInputText refid="fix-id-86452623" name="Email" />
    </form>,
    wrapper
  );

  // simulate autocomplete
  setTimeout(() => {
    const input = document.querySelector('#fix-id-86452623');
    input.value = '123456789';
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      input.dispatchEvent(evt);
    } else {
      input.fireEvent('input');
    }
  }, 1);

  return wrapper;
};

export const UsingOnkeyupEvent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoInputTextonKeyUp />, div);
  return div;
};

UsingOnkeyupEvent.story = {
  name: 'Using onKeyUp Event',
};
