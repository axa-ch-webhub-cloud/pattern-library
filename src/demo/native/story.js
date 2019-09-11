/* global document */
import { storiesOf } from '@storybook/html';
import { html, render, svg } from 'lit-html';

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

storiesOf('Demos', module).add('Icons and Images overview', () => {
  const template = html`
    <style>
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
