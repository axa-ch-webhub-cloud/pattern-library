import bel from 'bel';

export default (props, childrenFragment) => bel`
  <div class="m-header-main__box">${childrenFragment}</div>
`;
