/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

// value
// controlled

// required
// show counter
// show counterError
// show error

storiesOf('Atoms/Textarea', module)
  .addDecorator(withMarkdown(Readme))
  .add('Textarea - default', () => '<axa-textarea></axa-textarea>')
  .add('Textarea - label', () => '<axa-textarea label="Label"></axa-textarea>')
  .add('Textarea - value', () => '<axa-textarea value="prefilled value" label="Label"></axa-textarea>')
  // show error if (error und (!valid || required && !this.value)
  .add('Textarea - error', () => '<axa-textarea ></axa-textarea>')

  // show counter if (maxlength und counter)
  .add('Textarea - counter', () => '<axa-textarea counter="Noch ##counter##" maxlength="3"></axa-textarea>')
  // show counterError if
  .add('Textarea - counterError', () => '<axa-textarea counter="Noch ##counter##" counterError="maximum character length is reached" value="12" maxlength="3"></axa-textarea>')
