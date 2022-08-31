import { html } from 'lit';
import changelog from '../CHANGELOG.md';
import readme from './README.md';
import './index';
import '../index';

export default {
  title: 'Components/Popup Content',
  parameters: {
    readme,
    usage: {
      propsReact: 'onClick={() => alert("you clicked me")}',
    },
    changelog,
  },
  args: {
    open: true,
  },
  argTypes: {
    open: { control: 'boolean' },
  },
};

export const PopupContent = ({ open }) => html`
  <axa-popup-content ?open="${open}"
    ><h4 style="margin-top: 0">Time until retirement</h4>
    <p>
      To calculate your monthly income in old age the time span until you retire
      is decisive.
    </p></axa-popup-content
  >
`;
