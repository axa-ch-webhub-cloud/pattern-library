import React, { useState } from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAInputText from './AXAInputText';

export default {
  title: 'Examples/Input Text/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes: { ...argTypes, defaultValue: { control: 'text' } },
};

const InputTextControlled = props => {
  const [value, setValue] = useState(props.value);

  return (
    <AXAInputText
      {...props}
      value={value}
      onChange={evt => setValue(evt.target.value)}
    />
  );
};

export const InputText = _args =>
  createReactContainer(<InputTextControlled {..._args} />);

/* TODO rewrite this
export const SimulateAutocomplete = _args => {
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

  // there are two input fields because with only one is not possible to
  // activate Safari's autocomplete feature.
  return  createReactContainer(
    <form>
      <AXAInputText refid="fix-id-fake" name="Name" />
      <AXAInputText
        {..._args}
        refid="fix-id-86452623"
        name="Adresse"
        type="text"
        maxlength="5"
      />
    </form>
  );
};
 */
