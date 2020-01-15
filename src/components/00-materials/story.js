/* global document */
import { storiesOf } from '@storybook/html';
import { html, render, svg } from 'lit-html';
import { select, withKnobs } from '@storybook/addon-knobs';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const reqSvgsIcons = require.context(
  './icons',
  true,
  /\.svg.js$/
);
const filepathsIcons = reqSvgsIcons.keys();
const reqSvgsImages = require.context(
  './images',
  true,
  /\.svg.js$/
);
const filepathsImages = reqSvgsImages.keys();

const icons = filepathsIcons.map(path => {
  return {
    svgstring: reqSvgsIcons(path).default,
    path,
  };
});
const images = filepathsImages.map(path => {
  return {
    svgstring: reqSvgsImages(path).default,
    path,
  };
});

storiesOf('Materials', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog
  })
  .add('Icons and Images', () => {
    const backgrounds = select(
      'background color',
      ['red', 'blue', 'white', 'black'],
      'white'
    );

    const colors = select('color', ['red', 'blue', 'white', 'black'], 'black');

    window.onCallbackInput = ev => {
      const { value } = ev.target;

      let filteredIcons = icons;
      let filteredImages = images;

      const lengthOfPrefix = 2;

      const renderAreaIcons = document.querySelector('.icons');
      const renderAreaImages = document.querySelector('.images');
      const iconHeader = document.querySelector('.icon-header');
      const imageHeader = document.querySelector('.image-header');

      filteredIcons = filteredIcons.filter(icon => {
        const { length } = icon.path.split('.svg.js')[0];
        const iconName = icon.path.substr(
          lengthOfPrefix,
          length - lengthOfPrefix
        );
        const foundSearchTerm = iconName.search(value.trim()) > -1;
        return foundSearchTerm ? icon : '';
      });

      filteredImages = filteredImages.filter(image => {
        const { length } = image.path.split('.svg.js')[0];
        const iconName = image.path.substr(
          lengthOfPrefix,
          length - lengthOfPrefix
        );
        const foundSearchTerm = iconName.search(value.trim()) > -1;
        return foundSearchTerm ? image : '';
      });

      renderAreaIcons.innerHTML = filteredIcons
        .map(
          i =>
            `<div>${i.svgstring}<span style="padding-left: 10px;">${
              i.path
            }</span></div>`
        )
        .join('');

      iconHeader.innerHTML =
        filteredIcons.length === 1
          ? `${filteredIcons.length} Icon:`
          : `${filteredIcons.length} Icons:`;

      renderAreaImages.innerHTML = filteredImages
        .map(
          i =>
            `<div>${i.svgstring}<span style="padding-left: 10px;">${
              i.path
            }</span></div>`
        )
        .join('');

      imageHeader.innerHTML =
        filteredImages.length === 1
          ? `${filteredImages.length} Image:`
          : `${filteredImages.length} Images:`;
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
        Note: The green borders reveal the dimensions of the SVGs.
      </h2>
      <div>
        <input
          class="input-field"
          type="text"
          placeholder="Find icon/image"
          oninput="onCallbackInput(arguments[0])"
        />
      </div>

      <h3 class="icon-header">${icons.length} Icons:</h3>
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

      <h3 class="image-header">${images.length} Images:</h3>
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
