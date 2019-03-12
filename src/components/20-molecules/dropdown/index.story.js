import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Molecules/Dropdown', module)
  .add(
    'Dropdown',
    () => `<axa-dropdown title="Please Select"
    items='[
    {"name": "Please Select", "value": "Please Select", "url": "#", "isSelected": true, "isInitialItem": true },
    {"name": "Item 1", "value": "Item 1", "url": "#", "isSelected": false },
    {"name": "Item 2", "value": "Item 2", "url": "#", "isSelected": false },
    {"name": "Item 3", "value": "Item 3", "url": "#", "isSelected": false }
    ]'></axa-dropdown>`
  )
  .add(
    'Dropdown Forced Native',
    () => `<axa-dropdown native title="Please Select"
  items='[
  {"name": "Please Select", "value": "Please Select", "url": "#", "isSelected": true, "isInitialItem": true },
  {"name": "Item 1", "value": "Item 1", "url": "#", "isSelected": false },
  {"name": "Item 2", "value": "Item 2", "url": "#", "isSelected": false },
  {"name": "Item 3", "value": "Item 3", "url": "#", "isSelected": false }
  ]'></axa-dropdown>`
  );
