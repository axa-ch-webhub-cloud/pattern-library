import html from 'nanohtml/lib/browser';

export default ({ classes }, childrenFragment) => html`
  <article class=${classes}>${childrenFragment}</article>
`;
