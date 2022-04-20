/* eslint-disable import/no-extraneous-dependencies */
import { Selector } from 'testcafe';

class FooterAccessor {
  getSlotNode(slotName) {
    return Selector(this._getSlotNode(slotName));
  }

  async assertBackgroundColor(t, element) {
    await t
      .expect(element.getStyleProperty('background-color'))
      .eql('rgb(59, 63, 216)');
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
