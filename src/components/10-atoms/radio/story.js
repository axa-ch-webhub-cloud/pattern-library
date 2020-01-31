/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60.2" height="34.74">
    <defs/>
    <g transform="translate(.1 .1)">
    <path d="M15 59.3a3.342 3.342 0 1 0 3.315 3.342A3.342 3.342 0 0 0 15 59.3zm0 5.378a2.036 2.036 0 1 1 2.01-2.036A2.036 2.036 0 0 1 15 64.678z" transform="translate(-5.345 -34.637)"/>
    <path d="M75.708 59.3a3.342 3.342 0 1 0 3.315 3.342 3.342 3.342 0 0 0-3.315-3.342zm0 5.378a2.036 2.036 0 1 1 2.01-2.036 2.036 2.036 0 0 1-2.01 2.036z" transform="translate(-26.476 -34.637)"/>
    <path d="M54.159 54.75H35.513a.653.653 0 1 0 0 1.305h18.646a.653.653 0 1 0 0-1.305z" transform="translate(-13.437 -33.056)"/>
    <path d="M50.567 32.683C49.2 31.535 39.174 23.213 33.526 22.1l-.326-.065a28.661 28.661 0 0 0-6.789-.522c-4.565 0-8.4.516-15.828 1.749h-.059a.652.652 0 0 0-.157.065h-.052l-.078.065C7.263 25.674 5.541 33.577 4.5 39.36l-.085.463A3.139 3.139 0 0 0 2 42.864V49a1.957 1.957 0 0 0 1.957 1.886h1.3a6.521 6.521 0 0 0 12.75 0h3.046a.614.614 0 0 0 .091 0h23.717a6.521 6.521 0 0 0 12.757 0h1.957A2.394 2.394 0 0 0 62 48.49c0-13.275-9.867-15.533-11.433-15.807zm7.52 6.252a8.471 8.471 0 0 1-1.122.085c-2.935 0-4.715-2.408-5.941-4.914a12.1 12.1 0 0 1 7.063 4.83zM10.041 25.524v8.282H6.97c.73-3.068 1.76-6.406 3.071-8.282zm1.6 29.264a5.219 5.219 0 1 1 3.708-1.548 5.216 5.216 0 0 1-3.703 1.548zm6.522-5.221v-.059a6.522 6.522 0 1 0-13.043 0v.059H3.957a.652.652 0 0 1-.652-.581v-6.135a1.84 1.84 0 0 1 1.845-1.827h6.039c6.841 0 8.967 5.091 9.209 8.537zm33.072 5.221a5.219 5.219 0 1 1 3.708-1.548 5.216 5.216 0 0 1-3.704 1.548zm8.365-5.221h-1.846v-.059a6.522 6.522 0 1 0-13.043 0v.046H21.689a11.1 11.1 0 0 0-2.335-6.278 10.089 10.089 0 0 0-8.172-3.55H5.763v-.144c.183-1 .476-2.611.88-4.484h4.024a.652.652 0 0 0 .652-.653v-10c6.992-1.16 10.716-1.645 15.066-1.645a27.627 27.627 0 0 1 6.522.5l.339.072c4.813.959 13.539 7.91 15.952 9.894 1.3 3.022 3.489 7.035 7.748 7.035a9.775 9.775 0 0 0 1.859-.183A17.338 17.338 0 0 1 60.7 48.49a1.09 1.09 0 0 1-1.1 1.083z" transform="translate(-2 -21.51)"/>
    <path d="M32.889 25.928h-.039c-4.621.287-11.623 1.155-11.7 1.162a.653.653 0 0 0-.574.653v5.952a3.544 3.544 0 0 0 3.537 3.524H52.7a.653.653 0 0 0 .463-1.109c-.441-.445-10.772-10.75-20.274-10.182zm-11 7.76v-5.371c1.658-.2 6.6-.777 10.344-1.038v8.634h-8.116a2.232 2.232 0 0 1-2.232-2.226zm11.65 2.225v-8.706c6.97-.059 14.613 6.122 17.5 8.7z" transform="translate(-8.473 -23.037)"/>
    </g>
  </svg>`;

storiesOf('Components|Atoms/Radio', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Radio', () => {
    const wrapper = document.createElement('div');

    const label = text('label*', '18-45');
    const checked = boolean('checked*', false);
    const focus = boolean('focus*', false);
    const disabled = boolean('disabled', false);
    const button = boolean('button', false);
    const icon = boolean('Icon', false);
    const noGap = boolean('noGap', false);
    const noAutoWidth = boolean('noAutoWidth', false);

    const template = html`
      <p>Knobs with a * only affect the first radio button</p>
      <axa-fieldset horizontal>
        <axa-radio
          name="contract"
          label="${label}"
          ?focus="${focus}"
          ?checked="${checked}"
          icon="${icon ? iconSVG : ''}"
          ?noGap="${noGap}"
          ?button="${button}"
          ?disabled="${disabled}"
          ?noAutoWidth="${noAutoWidth}"
          value="1"
        ></axa-radio>
        <axa-radio
          name="contract"
          icon="${icon ? iconSVG : ''}"
          ?noGap="${noGap}"
          ?button="${button}"
          ?disabled="${disabled}"
          ?noAutoWidth="${noAutoWidth}"
          label="46-54"
          value="2"
        ></axa-radio>
        <axa-radio
          name="contract"
          icon="${icon ? iconSVG : ''}"
          ?noGap="${noGap}"
          ?button="${button}"
          ?disabled="${disabled}"
          ?noAutoWidth="${noAutoWidth}"
          label="55+"
          value="3"
        ></axa-radio>
        <axa-fieldset horizontal></axa-fieldset
      ></axa-fieldset>
    `;

    render(template, wrapper);
    return wrapper;
  });
