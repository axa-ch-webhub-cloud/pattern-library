import bel from 'bel';

export default ({ classes = '' }, childrenFragment) => bel`
  <article class="m-container ${classes}">${childrenFragment}</article>
`;
