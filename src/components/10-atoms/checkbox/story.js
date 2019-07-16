/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import './index';
import Readme from './README.md';



storiesOf('Atoms/Checkbox', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const label = text('Label Text', 'this is a label');
    const checked = boolean('checked', true);
    const disabled = boolean('disabled', false);
    const errortext = boolean('Error Text', false);

    return `
        <axa-checkbox
          name = 'my-checkbox'
          label = '${label}'
          ${checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
          onChange = 'console.log("checkbox", this.name, " changed to: ", this.checked)'
          error = '${errortext ? 'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.' : ''}'
        </axa-checkbox>`;
  })



  .add('Checkbox - hover, unchecked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox04';
    checkbox.label = 'mit Label';
    checkbox.className = 'hover';
    return checkbox;
  })
  .add('Checkbox - hover, checked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox04a';
    checkbox.checked = true;
    checkbox.label = 'mit Label';
    checkbox.className = 'hover';
    return checkbox;
  })


  .add('Checkbox - alternating checked/unchecked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox07';
    checkbox.checked = false;
    checkbox.label = 'changes every 1 second';
    setInterval(() => {
      checkbox.checked = !checkbox.checked;
    }, 1000);
    return checkbox;
  });
