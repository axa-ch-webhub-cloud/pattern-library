import bel from 'bel';
import classnames from 'classnames';

export default function ({
  id,
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return bel`<label class="a-checkbox__wrapper">
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
