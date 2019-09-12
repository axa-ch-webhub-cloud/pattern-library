/* global document */
import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { html, render, svg } from 'lit-html';
import Readme from './README.md';

const reqSvgsIcons = require.context('./icons', true, /\.svg.js$/);
const filepathsIcons = reqSvgsIcons.keys();
const reqSvgsImages = require.context('./images', true, /\.svg.js$/);
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
      </style>
      <h2>
        Note: There are green border around each SVG to better see dimensions.
      </h2>
      <h3>${icons.length} Icons:</h3>
      ${svg(
        icons.map(
          i =>
            `<div>${i.svgstring}<span style="padding-left: 10px;">${
              i.path
            }</span></div>`
        )
      )}

      <h3>${images.length} Images:</h3>
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
