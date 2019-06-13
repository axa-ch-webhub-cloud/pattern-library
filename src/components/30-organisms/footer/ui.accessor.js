/* eslint-disable import/no-extraneous-dependencies */
import { Selector } from 'testcafe';

class FooterAccessor {
  getSlotNode(slotName) {
    return Selector(this._getSlotNode(slotName));
  }

  _getSlotNode = Selector(
    slotName =>
      document
        .querySelector('axa-footer')
        .shadowRoot.querySelector(`slot[name='${slotName}']`)
        .assignedNodes()[0]
  );
}

export default new FooterAccessor();
