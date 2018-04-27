import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default function ({
  tag = 'button',
  color,
  url = '#',
  size,
  ghost,
  classes,
  motion,
  gpu,
  arrow,
  icon,
  reverse = false,
}, childrenFragment) {
  const buttonClasses = classnames('m-button', classes, {
    [`m-button--${color}`]: color,
    [`m-button--${size}`]: size,
    'm-button--ghost': ghost,
    'm-button--motion': motion,
    'm-button--gpu': gpu,
    'm-button--arrow': arrow,
    'm-button--icon': icon,
    'm-button--reverse': reverse,
  });

  let buttonIcon;

  const iconClasses = classnames('m-button__icon', {
    'm-button__icon--reverse': reverse,
  });

  if (icon) {
    buttonIcon = raw(`<axa-icon icon="${icon}" classes="${iconClasses}"></axa-icon>`);
  }

  const arrowIcon = raw('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>');

  const first = reverse ? childrenFragment : buttonIcon;
  const second = reverse ? buttonIcon : childrenFragment;

  if (tag.toLowerCase() === 'a') {
    return html`<a href="${url}" class="${buttonClasses}">
      ${first}
      ${second}
      ${arrow && arrowIcon}
    </a>`;
  }

  return html`<button type="button" class="${buttonClasses}">
      ${first}
      ${second}
      ${arrow && arrowIcon}
    </button>`;
}
