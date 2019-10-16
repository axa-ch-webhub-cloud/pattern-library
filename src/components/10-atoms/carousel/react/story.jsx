/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import AXACarousel from './AXACarousel';
import Readme from './../README.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';


const storyAXACarousel = storiesOf('Atoms/Carousel/React', module);
storyAXACarousel.addDecorator(withNoBorder);
storyAXACarousel.addDecorator(withKnobs);
storyAXACarousel.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACarousel.add('Carousel', () => {
  const autorotatedisabled = boolean('autorotatedisabled', false);
  const autorotatetime = number('autorotatetime', 5000);
  const keysenabled = boolean('keysenabled', true);

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <div id="colorWrapper" style={{ background: 'lightcoral', color: 'white' }}>
      <AXACarousel
        autorotatetime={autorotatetime}
        autorotatedisabled={autorotatedisabled}
        keysenabled={keysenabled}
      >
        <span>
          Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I called
          into my local axa once in the city and got sorted in 10 minutes after 3
          weeks of phone calls.
        </span>
        <span>
          Some two million customers trust AXA. They rely on AXA's experience and advice in personal, property, liability and life insurance as well as healthcare and occupational benefits insurance. AXA is Switzerland's leading insurance company and has an ambitious vision: to create freedoms for its customers over and above financial protection and to make a care-free life possible – using innovative products and services, and simple, digital processes. Our 4,400 employees and 2,800 colleagues in 370 general agencies and agencies dedicate themselves to this vision day in, day out.
          <br /><br />
          To be the top choice for all stakeholder groups: That's the goal of the AXA Group headquartered in Paris. To reach this goal, we focus our efforts every day on satisfying the needs of our customers. Reliable interaction with people and the environment form the basis for the trust accorded to the AXA Group day after day by our customers, employees, shareholders, suppliers and society. The AXA Group helps its customers lead as carefree a life as possible. It protects them and their families, their property, and their assets against risks.
        </span>
        <span>This is a small text.</span>
      </AXACarousel>
    </div>,
    wrapper
  );

  return wrapper;
});
