import AXAPolicyFeatures, {DEFAULT_AXA_STYLE, STYLE_WHITELIST} from './index';

describe('getAllowedAxaStyleName()', () => {
  test('should return default style if nothing given', () => {
    expect(AXAPolicyFeatures.prototype.getAllowedAxaStyleName()).toBe(DEFAULT_AXA_STYLE);
  });
  test('should return default style if string is not in whitelist', () => {
    const axaStyle = 'thisStyleIsNotInWhitelist';
    expect(AXAPolicyFeatures.prototype.getAllowedAxaStyleName(axaStyle)).toBe(DEFAULT_AXA_STYLE);
  });
  test('should return given string if its in whitelist', () => {
    const axaStyle = STYLE_WHITELIST[0];
    expect(AXAPolicyFeatures.prototype.getAllowedAxaStyleName(axaStyle)).toBe(axaStyle);
  });
});
