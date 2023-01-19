import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/Toggle Switch',
  parameters: {
    readme,
    usage: {
      propsReact: 'onChange={() => alert("you interacted with me")}',
    },
    changelog,
  },
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export const ToggleSwitch = ({ error, checked, disabled }) => html`
  <axa-toggle-switch
    error=${error}
    ?checked=${checked}
    ?disabled=${disabled}
  ></axa-toggle-switch>
`;
