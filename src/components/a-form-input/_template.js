import bel from 'bel';
import classnames from 'classnames';

export default function ({
  classes,
  id,
  type = 'text',
  placeholder = '',
  value = '',
  name,
  inline = false,
  error = false,
  valid = false,
  disabled = false,
}) {
  const inputClasses = classnames('a-form-input', classes, {
    'a-form-input--valid': valid,
    'a-form-input--inline': inline,
    'a-form-input--error': error,
    'a-form-input--disabled': disabled,
  });
  const inputWrapperClasses = classnames('a-form-input-wrapper', classes, {
    'a-form-input--inline': inline,
  });

  if (valid) {
    return bel`<div class="${inputWrapperClasses}">
      <input
          id="${id}"
          class="${inputClasses}" 
          type="radio"
          name="${name}" 
          type="${type}" 
          placeholder="${placeholder}" 
          value="${value}" 
          disabled="${disabled}">
          <span class="a-form-input__valid-icon"></span>
    </div>
    `;
  }
  return bel`
    <input
      id="${id}"
      class="${inputClasses}" 
      type="radio"
      name="${name}" 
      type="${type}" 
      placeholder="${placeholder}" 
      value="${value}" 
      disabled="${disabled}">
`;
}
