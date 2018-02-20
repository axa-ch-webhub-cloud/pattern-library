import bel from 'bel';
import { BaseComponent } from '../_abstract/component-types';

export default ({ header, classes, multiple, open }, childrenFragment) => {
  const type = multiple ? 'checkbox' : 'radio';

  const id = BaseComponent.uuidv4()

  return bel`
  <div class=${classes}>
    <input class="a-accordion-item__input" type="${type}" id="${id}" name="a-accordion-item-${type}" hidden checked="${open}" />
    <label class="a-accordion-item__header" for="${id}">
      ${header}
     </label>
     <div class="a-accordion-item__content">
      ${childrenFragment}
      </div>
  </div>
`;
};
