/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputText from './DemoInputText';
import DemoInputTextonKeyUp from './DemoInputTextonKeyUp';
import AXAInputText from './AXAInputText';

export default {
  title: 'Examples/Input Text/React',
  parameters: {
    readme,
    changelog,
  },
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
