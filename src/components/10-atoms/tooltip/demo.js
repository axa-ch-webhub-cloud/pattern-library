/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import '../../10-atoms/input-text/index';
import Readme from './README.md';

storiesOf('Atoms/Tooltip/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Tooltip - default', () => `<form action=""><input-text label="Test"></input-text><axa-tooltip>Some children</axa-tooltip></form>`)
