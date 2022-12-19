import React from 'react';
import { args, argTypes } from '../story.args.js';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATestimonialsReact from './AXATestimonialsReact';

export default {
  title: 'Examples/Testimonials/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const Testimonials = _args =>
  createReactContainer(
    <AXATestimonialsReact {..._args}>
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
    </AXATestimonialsReact>
  );
