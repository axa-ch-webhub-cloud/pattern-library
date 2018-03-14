import bel from 'bel';

export default (props, childrenFragment) => bel`
  <article class="m-test__article">${childrenFragment}</article>
`;
