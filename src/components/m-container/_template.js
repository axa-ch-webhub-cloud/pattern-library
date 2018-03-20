import html from 'nanohtml/lib/browser';

export default ({ classes = '' }, childrenFragment) => html`
  <article class="m-container ${classes}">${childrenFragment}</article>
`;
