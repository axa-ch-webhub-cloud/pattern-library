import AXAButton from '@axa-ch/button';

import { defineVersioned } from '../../../utils/component-versioning';

class AXAButtonLink extends AXAButton {
  static get tagName() {
    return 'axa-button-link';
  }
}

defineVersioned([AXAButtonLink], __VERSION_INFO__);

export default AXAButtonLink;
