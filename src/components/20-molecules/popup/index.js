import AXAPopupButton from './popup-button';
import AXAPopupContent from './popup-content';
import { defineVersioned } from '../../../utils/component-versioning';

export * from './popup-mixin';

/* eslint-disable no-undef */
const axaPopupVersion = __VERSION_INFO__;
/* eslint-enable no-undef */
const commonVersion = axaPopupVersion['axa-popup'];
const axaPopupButtonVersion = {
  [AXAPopupButton.tagName]: { [AXAPopupButton.tagName]: commonVersion },
};
const axaPopupContentVersion = {
  [AXAPopupContent.tagName]: { [AXAPopupContent.tagName]: commonVersion },
};

defineVersioned([AXAPopupButton], axaPopupButtonVersion);
defineVersioned([AXAPopupContent], axaPopupContentVersion);

export { AXAPopupButton, AXAPopupContent };
