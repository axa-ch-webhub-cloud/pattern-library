/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Checkbox', module)
  .addDecorator(withMarkdown(Readme))
  .add('Checkbox - preselected, clickable, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox';
    checkbox.id = 'checkbox01';
    checkbox.label = 'mit Label';
    checkbox.checked = true;
    checkbox.onChange = () =>
      // eslint-disable-next-line no-console
      console.log(
        'checkbox "',
        checkbox.name,
        '" changed to:',
        checkbox.checked
      );
    return checkbox;
  })
  .add('Checkbox - deselected, clickable, no label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox02';
    checkbox.checked = false;
    checkbox.onChange = () =>
      // eslint-disable-next-line no-console
      console.log(
        'checkbox "',
        checkbox.name,
        '" changed to:',
        checkbox.checked
      );
    return checkbox;
  })
  .add('Checkbox - disabled, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox03';
    checkbox.checked = false;
    checkbox.label = 'mit Label';
    checkbox.disabled = true;
    checkbox.onChange = () =>
      // eslint-disable-next-line no-console
      console.log(
        'checkbox "',
        checkbox.name,
        '" changed to:',
        checkbox.checked
      );
    return checkbox;
  })
  .add('Checkbox - disabled + checked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox03';
    checkbox.checked = true;
    checkbox.label = 'mit Label';
    checkbox.disabled = true;
    checkbox.onChange = () =>
      // eslint-disable-next-line no-console
      console.log(
        'checkbox "',
        checkbox.name,
        '" changed to:',
        checkbox.checked
      );
    return checkbox;
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
  .add('Checkbox - error, checked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox05';
    checkbox.checked = true;
    checkbox.label = `Ja, ich möchte online einen
    Versicherungsvertrag abschliessen.
    Die <a href="#" target="_blank">Allgemeinen Vertragsbedingungen (AVB)</a>,
    die Beraterinformation, sowie die Hinweise zum Datenschutz habe ich zur
    Kenntnis genommen und bin damit einverstanden.`;
    checkbox.error =
      'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.';
    return checkbox;
  })
  .add('Checkbox - error, unchecked, with label', () => {
    const checkbox = document.createElement('axa-checkbox');
    checkbox.name = 'my-checkbox1';
    checkbox.id = 'checkbox06';
    checkbox.checked = false;
    checkbox.label = `Ja, ich möchte online einen
    Versicherungsvertrag abschliessen.
    Die <a href="#" target="_blank">Allgemeinen Vertragsbedingungen (AVB)</a>,
    die Beraterinformation, sowie die Hinweise zum Datenschutz habe ich zur
    Kenntnis genommen und bin damit einverstanden.`;
    checkbox.error =
      'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.';
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
