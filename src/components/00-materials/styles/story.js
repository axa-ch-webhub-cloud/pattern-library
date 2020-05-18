/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Readme from '../../../components/00-materials/README.md';
import Changelog from '../../../components/00-materials/CHANGELOG.md';
import '../../10-atoms/text';
import '../../10-atoms/heading';

/*
 * Just copy & paste 00-colors.scss to const colors below
 * */

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
$colo-mercury: #e5e5e5 !default;
$color-wild-sand: #f5f5f5 !default;
$color-alabaster: #fafafa !default;
$color-prim-white: #fff !default;

/// Background and Illustration
$color-deep-sapphire: #00005b !default; // PL only
$color-azure: #3032c1 !default; // PL only
$color-dark-indigo: #3b3fd8 !default; // PL only
$color-ocean-blue: #4976ba !default;
$color-sec-blue-teal: #027180 !default;
$color-sec-green-viridian: #668980 !default;
$color-sec-blue-pacific: #00adc6 !default;
$color-sec-green-greyjoy: #9fbeaf !default;
$color-sec-green-aqua: #9fd9b4 !default;
$color-prim-red-flamingo: #ec4d33 !default; // PL only
$color-sec-red-tosca: #914146 !default;
$color-sec-pink-azalea: #e196aa !default;
$color-sec-pink-cotton-candy: #fad6de !default;
$color-sec-yellow-apache: #ddbe65 !default;
$color-sec-orange-dune: #fcd385 !default;
$color-sec-yellow-acid: #f0ff93 !default;
$color-sec-purple-logan: #9190ac !default;
$color-sec-blue-igloo: #b5d0ee !default;

/// Status-indicating Colors
$color-sec-green-malachite: #1cc54e !default;
$color-sec-red-shy-tomato: #c91432 !default;
`;

storiesOf('Materials', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Colors', () => {
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
        body {
          font-family: Source Sans Pro, Arial, sans-serif;
        }

        div.colorgroupwrapper {
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
          margin-bottom: 10px;
        }
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
      ${getColorGroups(colors).map(group => {
        return html`
          <div id="colorGroup">
            <axa-heading rank="5">${group.name.toUpperCase()}</axa-heading>
            <div class="colorgroupwrapper">
              ${getColors(group.value).map(color => {
                return html`
                  <div class="colorwrapper">
                    <div
                      class="colorvisualisation"
                      style="background-color: ${color.code};"
                    ></div>
                    <div>
                      ${color.name /* TODO: change to axa-text if bug is fixed */}
                    </div>
                    <span
                      >${color.code /* TODO: change to axa-text if bug is fixed */}</span
                    >
                  </div>
                `;
              })}
            </div>
          </div>
        `;
      })}
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
