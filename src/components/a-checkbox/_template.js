import bel from 'bel';
import classnames from 'classnames';

export default function ({
                           classes,
                           checked = false,
                           disabled = false,
                         }, childrenFragment) {
  const checkBoxClasses = classnames('a-checkbox', classes, {
    'a-checkbox--checked': checked,
    'a-checkbox--disabled': disabled,
  });

  return bel`<label class="${checkBoxClasses}">
    <input class="a-checkbox__input" type="checkbox" checked="${checked}" disabled="${disabled}">
    <span class="a-checkbox__icon"></span> ${childrenFragment}
  </label>`;
}
