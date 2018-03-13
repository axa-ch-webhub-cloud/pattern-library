import bel from 'bel';
import classnames from 'classnames';

export default function ({
  id,
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return bel`<label class="a-radio__wrapper">
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
