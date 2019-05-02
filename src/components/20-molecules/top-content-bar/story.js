/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import '../../10-atoms/button-link';
import '../../10-atoms/link';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';

storiesOf('Molecules/Top content bar', module)
  .addDecorator(withMarkdown(Readme))
  .addDecorator(withBodyReset())
  .add('Top content bar - default', () => `
    <axa-top-content-bar>
      commercial <axa-link href="www.axa.ch" color="white"></axa-link> stuff
      <axa-button-link variant="inverted">GET IT FOR FREE</axa-button-link>
    </axa-top-content-bar>
  `);
