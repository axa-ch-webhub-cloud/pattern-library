import bel from 'bel';
import classnames from 'classnames';

export default function ({
  classes,
  htmlfor = '',
  disabled = false,
}, childrenFragment) {
  const labelClasses = classnames('a-form-label', classes, {
    'a-form-label--disabled': disabled,
  });

  return bel`<label class="${labelClasses}" for="${htmlfor}">${childrenFragment}</label>`;
}
