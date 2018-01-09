import bel from 'bel';
import classnames from 'classnames';

export default function ({
  color,
  size,
  motion,
  arrow,
  listed,
  icon,
  deco,
}, childrenFragment) {
  const classes = classnames('a-link', {
    [`a-link--${color}`]: color,
    [`a-link--${size}`]: size,
    'a-link--motion': motion,
    'a-link--arrow': arrow,
    'a-link--listed': listed,
    'a-link--icon': icon,
    'a-link--deco': deco,
  });

  return bel`<a href="#" class="${classes}">
      ${icon && bel`<axa-icon id="${icon}" classes="a-link__icon"></axa-icon>`}
      ${listed && bel`<axa-icon id="arrow" classes="a-link__listed"></axa-icon>`}
      ${childrenFragment}
      ${arrow && bel`<axa-icon id="arrow" classes="a-link__arrow"></axa-icon>`}
    </a>`;
}
