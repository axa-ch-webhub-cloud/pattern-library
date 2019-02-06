import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';
import isEmptyFragment from '../../js/is-empty-fragment';

const DISABLED = 'disabled';
const ARIA_DISABLED = 'aria-disabled';

export default function ({
  tag = 'button',
  type = 'button',
  color,
  href = '#',
  size,
  ghost,
  classes,
  motion,
  gpu,
  arrow,
  icon = '',
  target = '_self',
  disabled = false,
}, childrenFragment) {
  const isTagA = tag.toLowerCase() === 'a';
  const noChildren = isEmptyFragment(childrenFragment);
  const hasIcon = icon && !arrow;
  const hasOnlyIcon = hasIcon && noChildren;
  const buttonClasses = classnames('m-button', 'js-button', classes, {
    [`m-button--${color}`]: color,
    [`m-button--${size}`]: size,
    'm-button--ghost': ghost,
    'm-button--motion': motion,
    'm-button--gpu': gpu,
    'm-button--arrow': arrow,
    'm-button--has-icon': hasIcon && !hasOnlyIcon,
    'm-button--only-icon': hasOnlyIcon,
  });

  let arrowIcon;
  let genericIcon;
  if (arrow) {
    arrowIcon = raw('<axa-icon icon="arrow" icon-class="m-button__arrow"></axa-icon>');
  } else if (icon) {
    const iconCLasses = classnames({
      'm-button__icon': !hasOnlyIcon,
      'm-button__icon--only': hasOnlyIcon,
    });

    genericIcon = raw(`<axa-icon icon="${icon}" icon-class="${iconCLasses}"></axa-icon>`);
  }

  if (isTagA && disabled) {
    return html`<a href="${href}" target="${target}" class="${buttonClasses}" ${ARIA_DISABLED} tabindex="-1">
      ${childrenFragment}
      ${arrowIcon || genericIcon}
    </a>`;
  } else if (isTagA) {
    return html`<a href="${href}" target="${target}" class="${buttonClasses}">
      ${childrenFragment}
      ${arrowIcon || genericIcon}
    </a>`;
  }

  return html`<button type="${type}" class="${buttonClasses}" ${disabled ? `${DISABLED}` : ''}>
      ${childrenFragment}
      ${arrowIcon || genericIcon}
    </button>`;
}
