import bel from 'bel';
import raw from 'bel/raw';
import classnames from 'classnames';

export default function ({
  tag = 'button',
  color,
  url = '#',
  size,
  ghost,
  motion,
  arrow,
}, children) {
  const classes = classnames('a-button', {
    [`a-button--${color}`]: color,
    [`a-button--${size}`]: size,
    'a-button--ghost': ghost,
    'a-button--motion': motion,
    'a-button--arrow': arrow,
  });

  const arrowIcon = raw('<axa-icon id="arrow" classes="a-button__arrow"></axa-icon>');

  if (tag.toLowerCase() === 'a') {
    return bel`<a href="${url}" class="${classes}">
      ${children}
      ${arrow && arrowIcon}
    </a>`;
  }

  return bel`<button type="button" class="${classes}">
      ${children}
      ${arrow && arrowIcon}
    </button>`;
}
