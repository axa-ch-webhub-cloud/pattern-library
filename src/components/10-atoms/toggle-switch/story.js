import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

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
    active: false,
    disabled: false,
  },
  argTypes: {
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
};

export const ToggleSwitch = ({ error, active, disabled }) => html`
  <axa-toggle-switch
    error=${error}
    ?active=${active}
    ?disabled=${disabled}
  ></axa-toggle-switch>
`;
