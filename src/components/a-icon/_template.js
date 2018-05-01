import html from 'nanohtml';

export default ({ icon, classes = 'a-icon' } = {}) => html`
  <svg class="${classes}">
    <use xlink:href="#src--assets--icons--${icon}" href="#src--assets--icons--${icon}" />
  </svg>
`;
