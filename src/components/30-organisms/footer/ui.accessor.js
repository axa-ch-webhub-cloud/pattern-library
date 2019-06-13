import { Selector } from 'testcafe';

class FooterAccessor {
  getSlotNode() {
    return Selector(
      () =>
        document
          .querySelector('axa-footer')
          .shadowRoot.querySelector('slot[name="column-0-item-0"]')
          .assignedNodes()[0]
    );
  }
}

export default new FooterAccessor();
