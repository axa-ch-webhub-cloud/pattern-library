import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { model } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATableSortableReact from './AXATableSortableReact';

export default {
  title: 'Examples/Table Sortable/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const DemoOnClickable = () =>
  createReactContainer(
    <AXATableSortableReact
      model={model}
      datesortcolumnindex="3"
      onClick={ev => {
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(ev));
      }}
    />
  );
