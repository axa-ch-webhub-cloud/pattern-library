import bel from 'bel';

export default ({ classes }, childrenFragment) => bel`
  <article class=${classes}>${childrenFragment}</article>
`;
