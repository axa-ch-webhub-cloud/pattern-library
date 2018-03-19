import html from 'nanohtml';

export default ({ classes = '' }, childrenFragment) => html`
  <article class="m-container ${classes}">${childrenFragment}</article>
`;
