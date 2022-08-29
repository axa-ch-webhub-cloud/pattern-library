import { html } from 'lit';
import changelog from '../CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Popup Button',
  parameters: {
    readme,
    usage: {
      propsReact: 'onClick={() => alert("you clicked me")}',
    },
    changelog,
  },
  args: {
    open: false,
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
};

export const PopupButton = ({ open }) => html`
  <axa-popup-button ?open="${open}"></axa-popup-button>
`;
