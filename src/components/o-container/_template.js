import html from 'nanohtml';

export default ({ classes = '' }, childrenFragment) => html`
  <article class="o-container ${classes}">${childrenFragment}</article>
`;
