import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Molecules/Dropdown', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Dropdown',
    () => `<axa-dropdown title="Please Select" data-test-id="dropdown"
    items='[
    {"name": "Please Select", "value": "Please Select", "url": "#", "isSelected": true, "isInitialItem": true },
    {"name": "Item 1", "value": "Item 1", "url": "#", "isSelected": false },
    {"name": "Item 2", "value": "Item 2", "url": "#", "isSelected": false },
    {"name": "Item 3", "value": "Item 3", "url": "#", "isSelected": false }
    ]'></axa-dropdown>
    `
  )
  .add(
    'Dropdown Forced Native',
    () => `<axa-dropdown native title="Please Select" data-test-id="dropdown-native"
  items='[
  {"name": "Please Select", "value": "Please Select", "url": "#", "isSelected": true, "isInitialItem": true },
  {"name": "Item 1", "value": "Item 1", "url": "#", "isSelected": false },
  {"name": "Item 2", "value": "Item 2", "url": "#", "isSelected": false },
  {"name": "Item 3", "value": "Item 3", "url": "#", "isSelected": false }
  ]'></axa-dropdown>`
  );
