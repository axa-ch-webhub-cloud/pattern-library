/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { CarSvg, SailBoatSvg, PlaneSvg } from '@axa-ch/materials/images';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs],

  parameters: {
    changelog: Changelog,
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
    <axa-fieldset>
      <axa-radio
        name="contract"
        label="${label}"
        ?focus="${focus}"
        ?checked="${checked}"
        icon="${icon ? CarSvg : ''}"
        ?noGap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noAutoWidth="${noAutoWidth}"
        value="1"
      ></axa-radio>
      <axa-radio
        name="contract"
        icon="${icon ? PlaneSvg : ''}"
        ?noGap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noAutoWidth="${noAutoWidth}"
        label="plane"
        value="2"
      ></axa-radio>
      <axa-radio
        name="contract"
        icon="${icon ? SailBoatSvg : ''}"
        ?noGap="${noGap}"
        ?button="${button}"
        ?disabled="${disabled}"
        ?noAutoWidth="${noAutoWidth}"
        label="sailboat"
        value="3"
      ></axa-radio>
      <axa-fieldset horizontal></axa-fieldset
    ></axa-fieldset>
  `;

  render(template, wrapper);
  return wrapper;
};
