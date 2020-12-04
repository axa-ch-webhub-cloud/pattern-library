import { html, render } from 'lit-html';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import './index';

export default {
  title: 'Components/Popup Content',
  parameters: {
    readme,
    changelog,
  },
};

const children = html`
  <h4 style="margin-top: 0">Zeitspanne bis zur Pensionierung</h4>
  <p>
    Für die Berechnung Ihres monatlichen Einkommens im Alter ist die Zeitspanne
    bis zum Zeitpunkt Ihrer Pensionierung entscheidend.
  </p>
`;

export const PopupContent = ({ open }) => {
  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-content ?open="${open}">${children}</axa-popup-content>
  `;

  render(template, wrapper);
  return wrapper;
};
PopupContent.args = {
  open: true,
};
