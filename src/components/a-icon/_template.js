import bel from 'bel';

export default item => bel`
  <svg class="${item.className}">
    <use xlink:href="#src--assets--icons--${item.id}" />
  </svg>
`;
