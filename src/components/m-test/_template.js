import bel from 'bel';

export default ({ }, childrenFragment) => bel`
  <article class="m-test__article">${childrenFragment}</article>
`;
