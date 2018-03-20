import html from 'nanohtml/lib/browser';

export default ({ icon, classes }) => html`
  <svg class="${classes}">
    <use xlink:href="#src--assets--icons--${icon}" href="#src--assets--icons--${icon}" />
  </svg>
`;
