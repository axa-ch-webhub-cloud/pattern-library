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
  const classes = classnames('m-link', {
    [`m-link--${color}`]: color,
    [`m-link--${size}`]: size,
    'm-link--motion': motion,
    'm-link--arrow': arrow,
    'm-link--listed': listed,
    'm-link--icon': icon,
    'm-link--deco': deco,
  });

  return bel`<a href="#" class="${classes}">
      ${icon && bel`<axa-icon id="${icon}" classes="m-link__icon"></axa-icon>`}
      ${listed && bel`<axa-icon id="arrow" classes="m-link__listed"></axa-icon>`}
      ${childrenFragment}
      ${arrow && bel`<axa-icon id="arrow" classes="m-link__arrow"></axa-icon>`}
    </a>`;
}
