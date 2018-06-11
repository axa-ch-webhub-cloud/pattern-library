import html from 'nanohtml';

// @todo: Icon sprite build adds directory structure to fragment identifiers (app only)
const PATH_PREFIX_APP = '#src--assets--icons--';
const FRAGMENT_SYMBOL = '#';

export default ({
  icon,
  classes = 'a-icon',
  pathPrefix,
} = {}) => {
  const axaPLibConfig = window.__axaPLibConfig || {};
  const { iconsPath } = axaPLibConfig;
  let path = iconsPath || PATH_PREFIX_APP;

  // is intended to check on just true and false! do not rewrite as truly or falsy check
  if (pathPrefix === true) {
    path = PATH_PREFIX_APP;
  } else if (pathPrefix === false) {
    path = '';
  } else if (typeof pathPrefix === 'string') {
    path = pathPrefix;
  }

  // check for hash symbol
  if (path.substring(-1) !== FRAGMENT_SYMBOL) {
    path = `${path}${FRAGMENT_SYMBOL}`;
  }

  return html`
    <svg class="${classes}">
      <use xlink:href="${path}${icon}" href="${path}${icon}" />
    </svg>
  `;
};
