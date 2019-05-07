import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';
import DemoTable from './DemoTable';
import DemoControlledInputsApp from '../demo-controlled-inputs/App';
import DemoDynamicChildrenApp from '../demo-dynamic-children/App';
import DemoFooterSmall from '../footer-small/FooterSmall';

import { withMarkdown } from '../../../.storybook/addons/markdown';

storiesOf('Demos', module)
  .addDecorator(withMarkdown())
  .add('Controlled Inputs React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledInputsApp />, div);
    return div;
  })
  .add('Dynamic Children React', () => {
    const div = document.createElement('div');
    div.id = 'root-dynamic-children';
    ReactDOM.render(<DemoDynamicChildrenApp />, div);
    return div;
  })
  .add('Footer with callbacks on language', () => {
    const div = document.createElement('div');
    div.id = 'footer-small';
    ReactDOM.render(<DemoFooterSmall />, div);
  })
  .add('Table React', () => {
    const div = document.createElement('div');
    div.id = 'root-table-react';
    ReactDOM.render(<DemoTable />, div);
    return div;
  });
