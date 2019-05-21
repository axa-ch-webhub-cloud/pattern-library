/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';

storiesOf('Molecules/Top content bar', module)
  .addDecorator(withMarkdown(Readme))
  .addDecorator(withBodyReset())
  .add(
    'Top content bar - Default with button',
    () =>
      `<axa-top-content-bar cta="Click me">
          Some children Some children Some children Some children
          Some children Some children Some children
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Default no button',
    () =>
      `<axa-top-content-bar>
          Some children Some children Some children Some children
          Some children Some children Some children
       </axa-top-content-bar>`
  );
