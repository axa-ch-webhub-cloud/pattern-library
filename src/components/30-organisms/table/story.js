import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';
export default {
  title: 'Components/Table',
  decorators: [withKnobs],

  parameters: {
    readme,
    changelog,
  },
};

export const Table = () => {
  const wrapper = document.createElement('div');

  const innerscroll = text('innerscroll', '');
  const maxheight = text('maxheight', '');

  const template = html`
    <axa-table innerscroll="${innerscroll}" maxheight="${maxheight}">
      <table class="any-for-test">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hans</td>
            <td class="o-table--light">33</td>
            <td>Berlin</td>
          </tr>
          <tr>
            <td>Lukas</td>
            <td class="o-table--light">17</td>
            <td>Zürich</td>
          </tr>
          <tr>
            <td>Anna</td>
            <td class="o-table--light">21</td>
            <td>Luzern</td>
          </tr>
          <tr>
            <td>Roman</td>
            <td class="o-table--light">64</td>
            <td>Winterthur</td>
          </tr>
          <tr>
            <td>Petra</td>
            <td class="o-table--light">44</td>
            <td>Bülach</td>
          </tr>
          <tr>
            <td>Werner</td>
            <td class="o-table--light">91</td>
            <td>St. Gallen</td>
          </tr>
          <tr>
            <td>Vreni</td>
            <td class="o-table--light">15</td>
            <td>Kloten</td>
          </tr>
          <tr>
            <td>Ursula</td>
            <td class="o-table--light">31</td>
            <td>Lugano</td>
          </tr>
        </tbody>
      </table>
    </axa-table>
  `;

  render(template, wrapper);
  return wrapper;
};
