import bel from 'bel';

export default item => bel`
  <svg class="${item.className}">
    <use xlink:href="#${item.id}" />
  </svg>
`;
