/* global document */
import { storiesOf } from '@storybook/html';
import './src/index';

storiesOf('Button', module).add('Button Native', () => '<axa-button motion>Im a button</axa-button>');
