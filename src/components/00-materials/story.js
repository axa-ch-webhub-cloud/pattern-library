import { select, withKnobs } from '@storybook/addon-knobs';
import { html, render, svg } from 'lit-html';
import '../10-atoms/heading';
import '../10-atoms/text';
import Changelog from './CHANGELOG.md';
import styles from './story.scss';

const FILE_ENDING = '.svg.js';

const reqSvgsIcons = require.context('./icons', true, /\.svg.js$/);
const filepathsIcons = reqSvgsIcons.keys();
const reqSvgsImages = require.context('./images', true, /\.svg.js$/);
const filepathsImages = reqSvgsImages.keys();

const _extractIconNameFromPath = path =>
  path
    .substring(2)
    .split(FILE_ENDING)
    .join('');

const icons = filepathsIcons.map(path => {
  return {
    svgstring: reqSvgsIcons(path).default,
    path: _extractIconNameFromPath(path),
  };
});

const images = filepathsImages.map(path => {
  return {
    svgstring: reqSvgsImages(path).default,
    path: _extractIconNameFromPath(path),
  };
});

const mapToIconItem = icon => {
  return `<div class="image-container">${icon.svgstring}
      <axa-text class="item-name" variant="size-3">${icon.path}${FILE_ENDING}</axa-text>
    </div>`;
};

export default {
  title: 'Brand Elements/Icons and Images',
  decorators: [withKnobs],

  parameters: {
    changelog: Changelog,
    codepreview: { disabled: true },
    options: { showPanel: true },
    layout: 'fullscreen',
  },
};

export const IconsAndImages = () => {
  const backgrounds = select(
    'background color',
    ['red', 'blue', 'white', 'black'],
    'white'
  );

  const colors = select('color', ['red', 'blue', 'white', 'black'], 'black');

  window.onCallbackInput = ev => {
    const { value } = ev.target;

    const renderAreaIcons = document.querySelector('.icons');
    const renderAreaImages = document.querySelector('.images');
    const iconHeader = document.querySelector('.icon-header');
    const imageHeader = document.querySelector('.image-header');

    const filteredIcons = icons.filter(icon => {
      const foundSearchTerm = icon.path.includes(value.trim());
      return foundSearchTerm ? icon : '';
    });

    const filteredImages = images.filter(image => {
      const foundSearchTerm = image.path.includes(value.trim());
      return foundSearchTerm ? image : '';
    });

    renderAreaIcons.innerHTML = filteredIcons
      .map(i => mapToIconItem(i))
      .join('');

    iconHeader.innerHTML =
      filteredIcons.length === 1
        ? `${filteredIcons.length} Icon:`
        : `${filteredIcons.length} Icons:`;

    renderAreaImages.innerHTML = filteredImages
      .map(i => mapToIconItem(i))
      .join('');

    imageHeader.innerHTML =
      filteredImages.length === 1
        ? `${filteredImages.length} Image:`
        : `${filteredImages.length} Images:`;
  };

  setTimeout(() => {
    const colorSwitcher = document.querySelector(
      '.js-materials__color-switcher'
    );
    colorSwitcher.addEventListener('change', ev => {
      const iconGroup = document.querySelector('.icons');
      const imageGroup = document.querySelector('.images');
      if (ev.detail.active) {
        iconGroup.classList.add('materials__custom-colors');
        imageGroup.classList.add('materials__custom-colors');
      } else {
        iconGroup.classList.remove('materials__custom-colors');
        imageGroup.classList.remove('materials__custom-colors');
      }
    });
  });

  const template = html`
    <style>
      body {
        background-color: ${backgrounds};
        color: ${colors};
      }

      svg {
        border: 3px solid green;
      }

      .images > div > svg {
        width: 40px;
        height: 40px;
      }

      .image-container {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
      }

      .image-container > svg {
        margin-right: 5px;
      }

      .materials__controls {
        display: flex;
        flex-wrap: wrap;
      }

      .materials__input-field {
        margin-right: 3rem;
      }

      .materials__input-field {
        height: 40px;
        padding: 0 10px 0 20px;
        min-width: 180px;
        border: 1px solid;
        font-size: 14px;
        outline: none;
        border-color: #e5e5e5; /* $color-mercury */
        background-color: #fafafa; /* $color-alabaster */
        color: #999; /* $color-light-grey */
        fill: #999; /* $color-light-grey */
      }

      .materials__input-field:hover {
        border: 1px solid #00008f;
      }

      .materials__input-field:focus {
        outline: 2px solid #00008f;
        outline-offset: -2px;
        color: #000;
      }

      .materials__colorizer {
        display: flex;
        align-items: center;
      }

      .materials__label {
        margin-right: 1rem;
      }

      .materials__custom-colors {
        background: lightcoral;
        color: white;
      }

      .note-text {
        margin-top: 15px;
      }

      .icon-header, .image-header {
        display: block;
        margin: 20px 0;
      }

      .item-name {
        margin-left: 5px;
      }

      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Icons and Images</axa-heading>
      <div class="materials__controls">
        <input
          class="materials__input-field"
          type="text"
          placeholder="Find icon / image"
          oninput="onCallbackInput(arguments[0])"
        />
        <div class="materials__colorizer">
          <axa-text class="materials__label" variant="size-2"
            >Overwrite Colors:</axa-text
          >
          <axa-toggle-switch
            class="js-materials__color-switcher"
          ></axa-toggle-switch>
        </div>
        <axa-text variant="size-2" class="note-text">
          Note: The green borders reveal the dimensions of the SVGs.
        </axa-text>
      </div>

      <axa-text class="icon-header" variant="bold"
        >${icons.length} Icons:</axa-text
      >
      <div class="icons">
        ${svg(icons.map(i => mapToIconItem(i)))}
      </div>

      <axa-text class="image-header" variant="bold"
        >${images.length} Images:</axa-text
      >
      <div class="images">
        ${svg(images.map(i => mapToIconItem(i)))}
      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  render(template, wrapper);
  return wrapper;
};

IconsAndImages.story = {
  name: 'Icons and Images',
};
