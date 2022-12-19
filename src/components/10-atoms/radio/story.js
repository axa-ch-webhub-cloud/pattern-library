import { html } from 'lit';
import { CarSvg, PlaneSvg, SailBoatSvg } from '@axa-ch/materials/images';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';
import '../text/index.wc.js';
import '../fieldset/index.wc.js';

export default {
  title: 'Components/Radio',
  parameters: {
    readme,
    usage: {
      propsPureHTML: 'checked',
      propsReact:
        'checked={checked} onChange={() => alert("you interacted with me")}',
    },
    changelog,
  },
  args,
  argTypes,
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
}) =>
  html`
    <axa-text size="3">
      Knobs with a * only affect the first radio button
    </axa-text>
    <br />
    <axa-text size="2"> What type of vehicle do you want to insure? </axa-text>
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
