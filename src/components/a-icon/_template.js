import bel from 'bel';

export default ({ id, classes }) => bel`
  <svg class="${classes}">
    <use xlink:href="#src--assets--icons--${id}" />
  </svg>
`;
