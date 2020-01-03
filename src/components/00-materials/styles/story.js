/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { select, withKnobs } from '@storybook/addon-knobs';
import Readme from '../../../components/00-materials/README.md';

/*
 * Just copy & paste 00-colors.scss to const colors above
 * */

const colors = `
// Colors as specified at
// @link https://design.axa.com/web-guidelines/color

/// AXA brand colors
$color-axa-blue: #00008f !default;
$color-axa-red: #ff1721 !default;

/// main palette colors (excluding brand colors)
$color-prim-red-burnt-sienna: #f07662 !default;
$color-prim-blue-deep-sapphire: #00005b !default;
$color-prim-blue-st-tropaz: #2425aa !default;
$color-prim-blue-azure: #3032c1 !default;
$color-prim-blue-dark-indigo: #3b3fd8 !default;
$color-prim-blue-indigo: #494df4 !default;
$color-prim-red-flamingo: #ec4d33 !default;

$color-prim-gray: #7f7f7f !default;
$color-prim-gray-dark: #333 !default;
$color-prim-gray-medium: #5f5f5f !default;
$color-prim-gray-dusty: #999 !default;
$color-prim-gray-silver: #ccc !default;
$color-prim-gray-mercury: #e5e5e5 !default;
$color-prim-gray-wild-sand: #f5f5f5 !default;
$color-prim-gray-alabaster: #fafafa !default;

$color-prim-black: #000 !default;
$color-prim-white: #fff !default;

/// secondary palette
$color-sec-blue-ocean: #4976ba !default;
$color-sec-blue-igloo: #b5d0ee !default;
$color-sec-pink-cotton-candy: #fad6de !default;
$color-sec-pink-azalea: #e196aa !default;
$color-sec-green-aqua: #9fd9b4 !default;
$color-sec-purple-logan: #9190ac !default;
$color-sec-green-greyjoy: #9fbeaf !default;
$color-sec-green-viridian: #668980 !default;
$color-sec-blue-pacific: #00adc6 !default;
$color-sec-blue-teal: #027180 !default;
$color-sec-yellow-acid: #f0ff93 !default;
$color-sec-orange-dune: #fcd385 !default;
$color-sec-yellow-apache: #ddbe65 !default;
$color-sec-red-tosca: #914146 !default;
$color-sec-red-shy-tomato: #c91432 !default;

/// Validation
$color-validation-error: $color-sec-red-shy-tomato;
$color-validation-valid: #1cc54e !default;

//#########################################################################
//################  The following colors are deprecated  ##################
//#########################################################################

/// main palette colors (excluding brand colors)
$color-prim-gray-mine-shaft: #333 !default; // deprecated name
$color-prim-gray-scorpion: #5f5f5f !default; // deprecated name

/// secondary palette
// $color-sec-pink-azalea: #f1afc6 !default; // Wrong color-code
$color-sec-blue-logan: #9190ac !default; // deprecated name
$color-sec-ocean-blue: #4976ba !default; // deprecated name
$color-sec-green-acid: #f0ff93 !default; // deprecated name
$color-sec-orange-apache: #ddbe65 !default; // deprecated name
$color-sec-shy-tomato: #c91432 !default; // deprecated name

`;

storiesOf('Materials', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Colors', () => {
    const backgrounds = select(
      'background color',
      ['darkgoldenrod', 'white', 'black'],
      'darkgoldenrod'
    );

    const template = html`
      ${colors.split('\n').map(line => {
        return html`
          <style>
            body {
              background-color: ${backgrounds};
            }
          </style>
          <div style="color: ${line.match(/#\w+/)}">
            ${line.replace(/!default;/, '')}
          </div>
        `;
      })}
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
