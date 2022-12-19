import { html } from 'lit';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import '../../10-atoms/heading/index.wc.js';
import '../../10-atoms/text/index.wc.js';
import styles from '../story.scss';

const colors = __COLORS_SCSS_AS_STRING__;

export default {
  title: 'Brand Elements/Colors',
  parameters: {
    readme,
    changelog,
    a11y: { disable: true },
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const Colors = () => {
  const getColorGroups = scssString => {
    const groups = scssString.split('///');
    const groupsWithColorIds = groups.filter(group => /#\w+/.test(group));

    return groupsWithColorIds.map(group => {
      return {
        name: group.split('\n')[0],
        value: group,
      };
    });
  };

  const getColors = colorGroup => {
    const lines = colorGroup.split('\n');

    const linesWithColorIds = lines.filter(line => /#\w+/.test(line));

    return linesWithColorIds.map(line => {
      return {
        name: line.split(': ')[0],
        code: line.match(/#\w+/),
      };
    });
  };

  return html`
    <style>
      div.colorgroupwrapper {
        margin: 0 -10px;
        display: flex;
        flex-wrap: wrap;
      }

      div.colorwrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        border: 1px solid lightgrey;
        padding: 5px;
        margin: 10px;
        width: 250px;
      }

      div.colorvisualisation {
        width: 250px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid lightgrey;
        margin-bottom: 5px;
      }

      ${styles}
    </style>
    <div class="accessory-story-wrapper accessory-story-content">
      <axa-heading size="1" secondary>Colors</axa-heading>
      ${getColorGroups(colors).map(group => {
        return html`
          <div id="colorGroup">
            <axa-heading size="3">${group.name}</axa-heading>
            <div class="colorgroupwrapper">
              ${getColors(group.value).map(color => {
                return html`
                  <div class="colorwrapper">
                    <div
                      class="colorvisualisation"
                      style="background-color: ${color.code};"
                    ></div>
                    <axa-text>
                      ${
                        color.name /* TODO: change to axa-text if bug is fixed */
                      }
                    </axa-text>
                    <axa-text size="2"
                      >${
                        color.code /* TODO: change to axa-text if bug is fixed */
                      }</axa-text
                    >
                  </div>
                `;
              })}
            </div>
          </div>
        `;
      })}
    </div>
  `;
};
