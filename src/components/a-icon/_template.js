import html from 'nanohtml';

export default ({ id, classes }) => html`
  <svg class="${classes}">
    <use xlink:href="#src--assets--icons--${id}" />
  </svg>
`;
