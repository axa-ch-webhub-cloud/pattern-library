/* global document */
import { storiesOf } from '@storybook/html';
import { html, render, svg } from 'lit-html';
import { select, withKnobs } from '@storybook/addon-knobs';
import Readme from '../../components/00-materials/README.md';

const reqSvgsIcons = require.context(
  './../../components/00-materials/icons',
  true,
  /\.svg.js$/
);
const filepathsIcons = reqSvgsIcons.keys();
const reqSvgsImages = require.context(
  './../../components/00-materials/images',
  true,
  /\.svg.js$/
);
const filepathsImages = reqSvgsImages.keys();

let icons = filepathsIcons.map(path => {
  return {
    svgstring: reqSvgsIcons(path).default,
    path,
  };
});
let images = filepathsImages.map(path => {
  return {
    svgstring: reqSvgsImages(path).default,
    path,
  };
});

storiesOf('Demos', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Icons and Images overview', () => {
    const backgrounds = select(
      'background color',
      ['red', 'blue', 'white', 'black'],
      'white'
    );

    const colors = select('color', ['red', 'blue', 'white', 'black'], 'black');

    window.onCallbackInput = ev => {
      const { value } = ev.target;
      const lengthOfPrefix = 2;
      const renderAreaIcons = document.querySelector('.icons');
      const renderAreaImages = document.querySelector('.images');
      const iconHeader = document.querySelector('.iconHeader');
      const imageHeader = document.querySelector('.imageHeader');

      icons = icons.filter(icon => {
        const { length } = icon.path.split('.svg.js')[0];
        const iconName = icon.path.substr(
          lengthOfPrefix,
          length - lengthOfPrefix
        );
        const foundSearchTerm = iconName.search(value) > -1;
        return foundSearchTerm ? icon : '';
      });

      images = images.filter(image => {
        const { length } = image.path.split('.svg.js')[0];
        const iconName = image.path.substr(
          lengthOfPrefix,
          length - lengthOfPrefix
        );
        const foundSearchTerm = iconName.search(value) > -1;
        return foundSearchTerm ? image : '';
      });

      renderAreaIcons.innerHTML = icons
        .map(
          i =>
            `<div>${i.svgstring}<span style="padding-left: 10px;">${
              i.path
            }</span></div>`
        )
        .join('');

      iconHeader.innerHTML =
        icons.length === 1 ? `${icons.length} Icons:` : `${icons.length} Icon:`;

      renderAreaImages.innerHTML = images
        .map(
          i =>
            `<div>${i.svgstring}<span style="padding-left: 10px;">${
              i.path
            }</span></div>`
        )
        .join('');

      imageHeader.innerHTML =
        images.length === 1
          ? `${images.length} Images:`
          : `${images.length} Image:`;
    };
    const template = html`
      <style>
        body {
          background-color: ${backgrounds};
          color: ${colors};
        }
        svg {
          border: 5px solid green;
        }
        .images > div > svg {
          width: 40px;
          height: 40px;
        }
        .input-field {
          height: 40px;
          padding: 0 10px 0 20px;
          min-width: 180px;
          border: 1px solid;
          font-size: 14px;
          outline: none;
          border-color: #e5e5e5; /* $color-prim-gray-mercury */
          background-color: #fafafa; /* $color-prim-gray-alabaster */
          color: #999; /* $color-prim-gray-dusty */
          fill: #999; /* $color-prim-gray-dusty */
        }
        .input-field:hover {
          border: 1px solid #00008f;
        }
        .input-field:focus {
          outline: 2px solid #00008f;
          outline-offset: -2px;
          color: #000;
        }
      </style>
      <h2>
        Note: There are green border around each SVG to better see dimensions.
      </h2>
      <div>
        <input
          class="input-field"
          type="text"
          placeholder="Find"
          oninput="onCallbackInput(arguments[0])"
        />
      </div>

      <h3 class="iconHeader">${icons.length} Icons:</h3>
      <div class="icons">
        ${svg(
          icons.map(
            i =>
              `<div>${i.svgstring}<span style="padding-left: 10px;">${
                i.path
              }</span></div>`
          )
        )}
      </div>

      <h3 class="imageHeader">${images.length} Images:</h3>
      <div class="images">
        ${svg(
          images.map(
            i =>
              `<div>${i.svgstring}<span style="padding-left: 10px;">${
                i.path
              }</span></div>`
          )
        )}
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
