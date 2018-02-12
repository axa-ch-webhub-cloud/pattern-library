import bel from 'bel';
import classnames from 'classnames';

export default function ({
  inline = false,
  classes,
}, childrenFragment) {
  const formGroupClasses = classnames('m-form-group', classes, {
    'm-form-group--inline': inline,
  });

  return bel`<div class="${formGroupClasses}">${childrenFragment}</div>`;
}
