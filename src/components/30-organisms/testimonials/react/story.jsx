import AXATestimonialsReact from './Testimonials';

import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs, number } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import Changelog from '../CHANGELOG.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';

const story = storiesOf('Examples/Testimonials/React', module);
story.addDecorator(withKnobs);
story.addDecorator(withNoBorder);
story.addParameters({
  changelog: Changelog,
});

story.add('Story', () => {
  const title = text('title', 'Customer Reviews');
  const subtitle = text(
    'Text',
    'AXA works hard to provide the best service possible to its customers.'
  );
  const autorotatedisabled = boolean('autorotatedisabled', false);
  const autorotatetime = number('autorotatetime', 5000);
  const keysenabled = boolean('keysenabled', true);
  const showallinline = boolean('showallinline', false);

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <AXATestimonialsReact
      autorotatetime={autorotatetime}
      autorotatedisabled={autorotatedisabled}
      keysenabled={keysenabled}
      showallinline={showallinline}
      title={title}
      subtitle={subtitle}
    >
      <div className="o-testimonials__vertical-margin">
        <span>
          Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls.
        </span>
        <span className="o-testimonials__author">Andrew Jackson, Advocate</span>
      </div>
      <div className="o-testimonials__vertical-margin">
        <span>
          Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls. Very helpful once I got through to the
          correct person but I was constantly being transferred from person to
          person, in the end I called into my local axa once in the city and got
          sorted in 10 minutes after 3 weeks of phone calls. Very helpful once I
          got through to the correct person but I was constantly being
          transferred from person to person, in the end I called into my local
          axa once in the city and got sorted in 10 minutes after 3 weeks of
          phone calls. Very helpful once I got through to the correct person but
          I was constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls.
        </span>
        <span className="o-testimonials__author">Andrew Müller, Advocate</span>
      </div>
      <span className="o-testimonials__vertical-margin">
        This is a small text without an author.
      </span>
    </AXATestimonialsReact>,
    wrapper
  );

  return wrapper;
});
