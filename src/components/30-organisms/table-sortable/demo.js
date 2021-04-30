import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const model = {
  thead: [
    { html: 'Age', sort: 'ASC' },
    { html: 'Name', sort: 'ASC' },
    { html: 'City', sort: 'ASC' },
    { html: 'Date of entry', sort: 'DESC' },
    { html: 'Date of exit', sort: 'DESC' },
    { html: 'Department' },
  ],
  tbody: [
    [
      { html: '<span>55</span>' },
      { html: '<span>Peter</span>' },
      { html: '<span>Winterthur</span>' },
      { html: '<span>22.04.2019</span>' },
      { html: '<span>10.01.2020</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>22</span>' },
      { html: '<span>Chris</span>' },
      { html: '<span>Zürich</span>' },
      { html: '<span>4/4/2019</span>' },
      { html: '<span>04/06/2019</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>46</span>' },
      { html: '<span>Hubert</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>1-1-2020</span>' },
      { html: '<span>05-02-2020</span>' },
      { html: 'C' },
    ],
    [
      { html: '<span>51</span>' },
      { html: '<span>Petra</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>08.10.2018</span>' },
      { html: '<span>11.12.2019</span>' },
      { html: 'D' },
    ],
    [
      { html: '<span>18</span>' },
      { html: '<span>Maria</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>29.04.2018</span>' },
      { html: '<span>01.01.2020</span>' },
      { html: 'E' },
    ],
    [
      { html: '<span>29</span>' },
      { html: '<span>David</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>02.05.2013</span>' },
      { html: '<span>02.05.2015</span>' },
      { html: 'F' },
    ],
  ],
};

storiesOf('Examples/Table Sortable/Pure HTML', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('On row click', () => {
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
        datesortcolumnindex="3,4"
        model="${JSON.stringify(model)}"
      >
      </axa-table-sortable>
      <div id="renderArea"></div>
    `;
    render(template, wrapper);
    return wrapper;
  });
