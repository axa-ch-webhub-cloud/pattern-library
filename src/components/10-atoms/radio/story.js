/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { CarSvg, SailBoatSvg, PlaneSvg } from '@axa-ch/materials/images';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Radio',
  parameters: {
    readme,
    changelog,
  },
};

export const Radio = ({
  label,
  checked,
  focus,
  disabled,
  button,
  icon,
  noGap,
  noAutoWidth,
}) => {
  const wrapper = document.createElement('div');

  const template = html`
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

Radio.args = {
  label: 'car',
  checked: false,
  focus: false,
  disabled: false,
  button: false,
  icon: false,
  noGap: false,
  noAutoWidth: false,
};

Radio.argTypes = {
  label: { name: 'label (set label of first item)' },
  checked: { name: 'checked (check first item)' },
  focus: { name: 'focus (focus on first item)' },
};
