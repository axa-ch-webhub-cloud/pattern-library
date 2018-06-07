import html from 'nanohtml';

export default ({
  icon,
  classes = 'a-icon',
  pathPrefix = '#src--assets--icons--',
} = {}) => {
  // is intended to check on just true and false! do not rewrite as truly or falsy check
  const path = pathPrefix === true ? '#src--assets--icons--' : pathPrefix;
  const _pathPrefix = pathPrefix === false ? '' : path;
  return html`
    <svg class="${classes}">
      <use xlink:href="${_pathPrefix}${icon}" href="${_pathPrefix}${icon}" />
    </svg>
  `;
};
