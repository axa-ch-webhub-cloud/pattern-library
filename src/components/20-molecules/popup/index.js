import AXAPopupButton from './popup-button';
import AXAPopupContent from './popup-content';
import defineOnce from '../../../utils/define-once';

export * from './popup-mixin';

defineOnce(AXAPopupButton.tagName, AXAPopupButton);
defineOnce(AXAPopupContent.tagName, AXAPopupContent);
