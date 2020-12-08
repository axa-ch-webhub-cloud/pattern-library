/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { CarSvg, PlaneSvg, SailBoatSvg } from '@axa-ch/materials/images';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Radio',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      tagName: 'axa-radio',
      propsPureHTML: 'checked',
      propsReact: 'checked={checked} onChange={handler}',
    },
    changelog,
  },
};

export const Radio = () => {
  const wrapper = document.createElement('div');

  const label = text('label*', 'car');
  const checked = boolean('checked*', false);
  const focus = boolean('focus*', false);
  const disabled = boolean('disabled', false);
  const button = boolean('button', false);
  const icon = boolean('Icon', false);
  const noGap = boolean('noGap', false);
  const noAutoWidth = boolean('noAutoWidth', false);

  const template = html`
    <axa-text variant="size-3">
      Knobs with a * only affect the first radio button
    </axa-text>
    <br />
    <axa-text variant="size-2">
      What type of vehicle do you want to insure?
    </axa-text>
    <br />
    <axa-fieldset ?horizontal=${button}>
      <axa-radio
        name="contract"
        label="${label}"
        ?focus="${focus}"
        ?checked="${checked}"
        icon="${icon ? CarSvg : ''}"
        ?nogap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noautowidth="${noAutoWidth}"
        value="1"
      ></axa-radio>
      <axa-radio
        name="contract"
        icon="${icon ? PlaneSvg : ''}"
        ?nogap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noautowidth="${noAutoWidth}"
        label="plane"
        value="2"
      ></axa-radio>
      <axa-radio
        name="contract"
        icon="${icon ? SailBoatSvg : ''}"
        ?nogap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noautowidth="${noAutoWidth}"
        label="sailboat"
        value="3"
      ></axa-radio>
    </axa-fieldset>
  `;

  render(template, wrapper);
  return wrapper;
};
