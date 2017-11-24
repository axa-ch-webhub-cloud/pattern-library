import bel from 'bel';

export default ({ id, classname }) => bel`
  <svg class="${classname}">
    <use xlink:href="#src--assets--icons--${id}" />
  </svg>
`;
