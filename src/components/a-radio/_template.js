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
  const radioClasses = classnames('a-radio', classes, {
    'a-radio--error': error,
    'a-radio--checked': checked,
    'a-radio--disabled': disabled,
  });

  return bel`<label class="${radioClasses}">
    <input
      id="${id}"
      class="a-radio__input" 
      type="radio"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
    <i class="a-radio__icon"></i>${childrenFragment}
  </label>`;
}
