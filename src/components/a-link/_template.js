import bel from 'bel';
import classnames from 'classnames';

export default function ({
  color,
  size,
  motion,
  arrow,
  listed,
}, children) {
  const classes = classnames('a-link', {
    [`a-link--${color}`]: color,
    [`a-link--${size}`]: size,
    'a-link--motion': motion,
    'a-link--arrow': arrow,
    'a-link--listed': listed,
  });

  return bel`<a href="#" class="${classes}">
      ${listed && bel`<axa-icon id="arrow" classes="a-link__listed"></axa-icon>`}
      ${children}
      ${arrow && bel`<axa-icon id="arrow" classes="a-link__arrow"></axa-icon>`}
    </a>`;
}
