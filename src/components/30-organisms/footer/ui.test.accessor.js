import { Selector } from 'testcafe';

export class FooterAccessorClass {
  constructor(name = 'axa-footer') {
    this._getSlotNode = Selector(
      slotName =>
        document
          .querySelector(name)
          .shadowRoot.querySelector(`slot[name='${slotName}']`)
          .assignedNodes()[0],
      { dependencies: { name } }
    );
  }

  getSlotNode(slotName) {
    return Selector(this._getSlotNode(slotName));
  }

  async assertBackgroundColor(t, element) {
    await t
      .expect(element.getStyleProperty('background-color'))
      .eql('rgb(73, 118, 186)');
  }
}

export default new FooterAccessorClass();
