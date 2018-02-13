import bel from 'bel';
import classnames from 'classnames';

export default function ({
  classes,
  id,
  value,
  name,
  error = false,
  checked = false,
  disabled = false,
}, childrenFragment) {
  const checkBoxClasses = classnames('a-checkbox', classes, {
    'a-checkbox--error': error,
    'a-checkbox--checked': checked,
    'a-checkbox--disabled': disabled,
  });

  return bel`<label class="${checkBoxClasses}">
    <input
      id="${id}"
      class="a-checkbox__input" 
      type="checkbox"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
    <i class="a-checkbox__icon"></i>${childrenFragment}
  </label>`;
}
