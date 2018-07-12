import html from 'nanohtml';
import classnames from 'classnames';

export default ({ fluid, classes = '' }, childrenFragment) => html`
  <article class="o-container ${classnames({ 'u-container': !fluid, 'u-container-fluid': fluid })} ${classes}">${childrenFragment}</article>
`;
