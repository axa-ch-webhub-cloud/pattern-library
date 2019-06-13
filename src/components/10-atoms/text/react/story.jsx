/* global document */
import { storiesOf } from '@storybook/html';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AXAText from './AXATextReact';

storiesOf('Atoms/Text/React', module).add('Text', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Fragment>
      <AXAText>
        Text Default. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia
        imperdiet turpis, sit amet finibus est porta sit amet. Vestibulum
        maximus enim suscipit, bibendum nisi et, sodales turpis.
      </AXAText>
      <br />
      <br />
      <AXAText variant="size-2">
        Text Size 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia
        imperdiet turpis, sit amet finibus est porta sit amet. Vestibulum
        maximus enim suscipit, bibendum nisi et, sodales turpis.
      </AXAText>
      <br />
      <br />
      <AXAText variant="size-3">
        Text Size-3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia
        imperdiet turpis, sit amet finibus est porta sit amet. Vestibulum
        maximus enim suscipit, bibendum nisi et, sodales turpis.
      </AXAText>
      <br />
      <br />
      <AXAText variant="size-4">
        Text Size-4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia
        imperdiet turpis, sit amet finibus est porta sit amet. Vestibulum
        maximus enim suscipit, bibendum nisi et, sodales turpis.
      </AXAText>
      <br />
      <br />
      <AXAText variant="bold">
        Text Bold. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia
        imperdiet turpis, sit amet finibus est porta sit amet. Vestibulum
        maximus enim suscipit, bibendum nisi et, sodales turpis.
      </AXAText>
    </Fragment>,
    div
  );
  return div;
});
