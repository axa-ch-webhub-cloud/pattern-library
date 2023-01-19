import AXAPopupButton from './popup-button/index.wc.js';
import AXAPopupContent from './popup-content/index.wc.js';
import { defineVersioned } from '../../../utils/component-versioning.js';

export * from './popup-mixin/index.wc.js';

const axaPopupVersion = __VERSION_INFO__;

const commonVersion = axaPopupVersion['axa-popup']['axa-popup'];
const axaPopupButtonVersion = {
  [AXAPopupButton.tagName]: { [AXAPopupButton.tagName]: commonVersion },
};
const axaPopupContentVersion = {
  [AXAPopupContent.tagName]: { [AXAPopupContent.tagName]: commonVersion },
};

defineVersioned([AXAPopupButton], axaPopupButtonVersion);
defineVersioned([AXAPopupContent], axaPopupContentVersion);

export { AXAPopupButton, AXAPopupContent };
