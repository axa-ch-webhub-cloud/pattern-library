import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import Changelog from '../../../components/00-materials/CHANGELOG.md';
import '../../10-atoms/heading';
import '../../10-atoms/text';
import styles from '../story.scss';

/*
 * Just copy & paste 00-colors.scss to const colors below
 */

const colors = `
// Colors as specified at
// @link https://design.axa.com/web-guidelines/color

/// Core AXA Colors
$color-axa-blue: #00008f !default;
$color-axa-red: #ff1721 !default;

/// UI Design
$color-burnt-sienna: #f07662 !default;
$color-black: #000 !default;
$color-dark-grey: #333 !default;
$color-medium-grey: #5f5f5f !default;
$color-grey: #7f7f7f !default;
$color-light-grey: #999 !default;
$color-silver: #ccc !default;
$color-mercury: #e5e5e5 !default;
$color-wild-sand: #f5f5f5 !default;
$color-alabaster: #fafafa !default;
$color-prim-white: #fff !default;

/// Background and Illustration
$color-deep-sapphire: #00005b !default;
$color-azure: #3032c1 !default;
$color-dark-indigo: #3b3fd8 !default;
$color-ocean-blue: #4976ba !default;
$color-teal: #027180 !default;
$color-viridian-green: #668980 !default;
$color-pacific: #00adc6 !default;
$color-greyjoy: #9fbeaf !default;
$color-aqua-green: #9fd9b4 !default;
$color-flamingo: #ec4d33 !default;
$color-tosca: #914146 !default;
$color-azalea: #e196aa !default;
$color-cotton-candy: #fad6de !default;
$color-apache: #ddbe65 !default;
$color-dune: #fcd385 !default;
$color-acid: #f0ff93 !default;
$color-logan: #9190ac !default;
$color-igloo: #b5d0ee !default;

/// Status-indicating Colors
$color-malachite: #1cc54e !default;
$color-shy-tomato: #c91432 !default;
`;

export default {
  title: 'Brand Elements/Colors',
  decorators: [withKnobs],

  parameters: {
    changelog: Changelog,
    options: { showPanel: true },
  },
};

export const Colors = () => {
  const darkmode = boolean('darkmode', false);

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

  const template = html`
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

    ${darkmode
      ? html`
          <style>
            body {
              background-color: black;
              color: white;
            }
          </style>
        `
      : ''}

    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Colors</axa-heading>
      ${getColorGroups(colors).map(group => {
        return html`
          <div id="colorGroup">
            <axa-heading rank="3">${group.name}</axa-heading>
            <div class="colorgroupwrapper">
              ${getColors(group.value).map(color => {
                return html`
                  <div class="colorwrapper">
                    <div
                      class="colorvisualisation"
                      style="background-color: ${color.code};"
                    ></div>
                    <axa-text>
                      ${color.name /* TODO: change to axa-text if bug is fixed */}
                    </axa-text>
                    <axa-text variant="size-2"
                      >${color.code /* TODO: change to axa-text if bug is fixed */}</axa-text
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

  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  render(template, wrapper);
  return wrapper;
};
