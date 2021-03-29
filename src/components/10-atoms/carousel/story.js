// if your need more boolean, select, radios
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Carousel',
  decorators: [withKnobs, withNoBorder],
  parameters: {
    readme,
    usage: {
      componentName: 'carousel',
      propsPureHTML: 'keysenabled=""',
      propsReact: 'keysenabled',
    },
    changelog,
  },
};

export const Carousel = () => {
  const autorotatedisabled = boolean('autorotatedisabled', false);
  const autorotatetime = number('autorotatetime', 5000);
  const keysenabled = boolean('keysenabled', true);
  const arrowstyle = text('arrowstyle', '');
  const mode = text('mode', '');
  const overlay = boolean('overlay', false);

  const wrapper = document.createElement('div');
  const template = html`
    <div id="colorWrapper" style="background: lightcoral; color: white;">
      <axa-carousel
        autorotatetime="${autorotatetime}"
        ?autorotatedisabled="${autorotatedisabled}"
        ?keysenabled="${keysenabled}"
        arrowstyle="${arrowstyle}"
        mode="${mode}"
        ?overlay="${overlay}"
      >
        <span>
          Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls.
        </span>
        <span>
          Some two million customers trust AXA. They rely on AXA's experience
          and advice in personal, property, liability and life insurance as well
          as healthcare and occupational benefits insurance. AXA is
          Switzerland's leading insurance company and has an ambitious vision:
          to create freedoms for its customers over and above financial
          protection and to make a care-free life possible – using innovative
          products and services, and simple, digital processes. Our 4,400
          employees and 2,800 colleagues in 370 general agencies and agencies
          dedicate themselves to this vision day in, day out.
          <br /><br />
          To be the top choice for all stakeholder groups: That's the goal of
          the AXA Group headquartered in Paris. To reach this goal, we focus our
          efforts every day on satisfying the needs of our customers. Reliable
          interaction with people and the environment form the basis for the
          trust accorded to the AXA Group day after day by our customers,
          employees, shareholders, suppliers and society. The AXA Group helps
          its customers lead as carefree a life as possible. It protects them
          and their families, their property, and their assets against risks.
        </span>
        <span>Praise and criticism? Tell us what you think.</span>
      </axa-carousel>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
