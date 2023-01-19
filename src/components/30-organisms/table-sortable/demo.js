import { html } from 'lit';
import { model } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Examples/Table Sortable/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const OnRowClick = () => {
  window.onCallbackClick = ({ detail: { index, type, textArray } }) => {
    if (index > -1) {
      const renderArea = document.querySelector('#renderArea');
      renderArea.innerHTML = `Pressed on row ${index} in ${type}.

        Inner Text is: ${JSON.stringify(textArray)}`;
    }
  };

  return html`
    <axa-table-sortable
      onclick="onCallbackClick(arguments[0])"
      innerscroll="500"
      datesortcolumnindex="3,4"
      model="${JSON.stringify(model)}"
    >
    </axa-table-sortable>
    <div id="renderArea"></div>
  `;
};
