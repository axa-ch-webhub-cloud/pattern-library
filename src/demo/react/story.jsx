import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';
import DemoTable from './DemoTable';
import DemoIconImage from './DemoIconImage';
import DemoControlledInputsApp from '../demo-controlled-inputs/App';
import DemoDynamicChildrenApp from '../demo-dynamic-children/App';

storiesOf('Demos', module)
  .add('Icons and Images overview', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoIconImage />, div);
    return div;
  })
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

  .add('Table React', () => {
    const div = document.createElement('div');
    div.id = 'root-table-react';
    ReactDOM.render(<DemoTable />, div);
    return div;
  });
