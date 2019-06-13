/* global document */
import { storiesOf } from '@storybook/html';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AXATitleSecondary from './AXATitleSecondaryReact';

storiesOf('Atoms/Title Secondary/React', module).add('Title Secondary', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Fragment>
      <AXATitleSecondary>Title Secondary 1</AXATitleSecondary>
      <AXATitleSecondary variant="size-2">Title Secondary 2</AXATitleSecondary>
      <AXATitleSecondary variant="size-3">Title Secondary 3</AXATitleSecondary>
      <AXATitleSecondary variant="size-4">Title Secondary 4</AXATitleSecondary>
      <AXATitleSecondary variant="size-5">Title Secondary 5</AXATitleSecondary>
      <AXATitleSecondary variant="size-6">Title Secondary 6</AXATitleSecondary>
    </Fragment>,
    div
  );
  return div;
});
