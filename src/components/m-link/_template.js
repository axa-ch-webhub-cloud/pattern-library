import html from 'nanohtml/lib/browser';
import classnames from 'classnames';

export default function ({
  color,
  size,
  motion,
  arrow,
  href = '#',
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

  return html`<a href="${href}" class="${classes}">
      ${icon && html`<axa-icon icon="${icon}" classes="m-link__icon"></axa-icon>`}
      ${listed && html`<axa-icon icon="arrow" classes="m-link__listed"></axa-icon>`}
      ${childrenFragment}
      ${arrow && html`<axa-icon icon="arrow" classes="m-link__arrow"></axa-icon>`}
    </a>`;
}
