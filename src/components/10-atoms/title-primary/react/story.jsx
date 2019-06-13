/* global document */
import { storiesOf } from '@storybook/html';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AXATitlePrimary from './AXATitlePrimaryReact';

storiesOf('Atoms/Title Primary/React', module).add('Title Primary', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Fragment>
      <AXATitlePrimary>Title Primary</AXATitlePrimary>
      <AXATitlePrimary variant="size-2">Title Primary 2</AXATitlePrimary>
      <AXATitlePrimary variant="size-3">Title Primary 3</AXATitlePrimary>
      <AXATitlePrimary variant="size-4">Title Primary 4</AXATitlePrimary>
      <AXATitlePrimary variant="size-5">Title Primary 5</AXATitlePrimary>
      <AXATitlePrimary variant="size-6">Title Primary 6</AXATitlePrimary>
    </Fragment>,
    div
  );
  return div;
});
