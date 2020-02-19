import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

// const ASC = 'ascending';
const ASC = 'ASC';

const model = {
  thead: [
    { html: 'Age', sort: 'ASC' },
    { html: 'Name', sort: 'ASC' },
    { html: 'City', sort: 'DESC' },
    {
      html: 'Date',
      sort: 'DESC',
      custom: {
        foo: (a, b) => {
          const dateA = convertDate(a);
          const dateB = convertDate(b);

          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }

          return 0;

          function convertDate(d) {
            const parts = d.split('.');
            return +(parts[2] + parts[1] + parts[0]);
          }
        },
      },
    },
    { html: 'Department' },
  ],
  tbody: [
    [
      { html: '<span>55</span>' },
      { html: '<span>Peter</span>' },
      { html: '<span>8405 Winterthur</span>' },
      { html: '<span>02.04.2019</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>22</span>' },
      { html: '<span>Chris</span>' },
      { html: '<span>8000 Zürich</span>' },
      { html: '<span>04.04.2019</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>46</span>' },
      { html: '<span>Hubert</span>' },
      { html: '<span>8503 Kreuzlingen</span>' },
      { html: '<span>05.05.2017</span>' },
      { html: 'C' },
    ],
    [
      { html: '<span>51</span>' },
      { html: '<span>Petra</span>' },
      { html: '<span>8504 Kreuzlingen</span>' },
      { html: '<span>08.10.2018</span>' },
      { html: 'D' },
    ],
    [
      { html: '<span>18</span>' },
      { html: '<span>Maria</span>' },
      { html: '<span>8701 Frauenfeld</span>' },
      { html: '<span>29.04.2018</span>' },
      { html: 'E' },
    ],
    [
      { html: '<span>29</span>' },
      { html: '<span>David</span>' },
      { html: '<span>8700 Frauenfeld</span>' },
      { html: '<span>02.05.2020</span>' },
      { html: 'F' },
    ],
  ],
};

storiesOf('Components|Organisms/Table Sortable/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Table Sortable - on row click', () => {
    const wrapper = document.createElement('div');
    window.onCallbackClick = ({ detail: { index, type, textArray } }) => {
      if (index > -1) {
        const renderArea = document.querySelector('#renderArea');
        renderArea.innerHTML = `Pressed on row ${index} in ${type}.

        Inner Text is: ${JSON.stringify(textArray)}`;
      }
    };
    const template = html`
      <axa-table-sortable
        onclick="onCallbackClick(arguments[0])"
        innerscroll="500"
        model="${JSON.stringify(model)}"
      >
      </axa-table-sortable>
      <div id="renderArea"></div>
    `;
    render(template, wrapper);
    return wrapper;
  });
