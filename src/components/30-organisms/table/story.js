import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Organisms/Table', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Table',
    () => {
      const wrapper = document.createElement('div');

      const innerscroll = text('innerscroll', '');
      const maxheight = text('maxheight', '');

      const template = html`
        <axa-table innerscroll="${innerscroll}" maxheight="${maxheight}">
          <table class="any-for-test">
            <thead>
              <tr>
                <th>Titel 1</th>
                <th>Titel 2</th>
                <th>Titel 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body 1</td>
                <td class="o-table--light">Longer Body 2</td>
                <td>Super Long Body 3 </td>
              </tr>
              <tr>
                <td>Body A1 AA</td>
                <td class="o-table--light">Longer Body A2</td>
                <td>Super Long Body A3 </td>
              </tr>
              <tr>
                <td>Body B1</td>
                <td class="o-table--light">Longer Body B2</td>
                <td>Super Long Body B3 </td>
              </tr>
              <tr>
                <td>Body B3</td>
                <td class="o-table--light">Longer Body B3</td>
                <td>Super Long Body B31 </td>
              </tr>
              <tr>
                <td>Body B4</td>
                <td class="o-table--light">Longer Body B4</td>
                <td>Super Long Body B311 </td>
              </tr>
              <tr>
                <td>Body B5</td>
                <td class="o-table--light">Longer Body B5</td>
                <td>Super Long Body B3111 </td>
              </tr>
              <tr>
                <td>Body B6</td>
                <td class="o-table--light">Longer Body B6</td>
                <td>Super Long Body B3111 </td>
              </tr>
              <tr>
                <td>Body B7</td>
                <td class="o-table--light">Longer Body B7</td>
                <td>Super Long Body B3 1111</td>
              </tr>
            </tbody>
          </table>
        </axa-table>
      `;

      render(template, wrapper);
      return wrapper;
    }
  );