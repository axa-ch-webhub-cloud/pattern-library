// eslint-disable-next-line import/no-extraneous-dependencies
import { DownloadSvg } from '@axa-ch/materials/icons';
import AXAIcon from './index';

describe('Icon', () => {
  test('firstUpdated() should set icon if svg string is given', () => {
    const mySvgString = '<svg></svg>';
    AXAIcon.prototype.icon = mySvgString;

    AXAIcon.prototype.firstUpdated();

    expect(AXAIcon.prototype._loadedSvg).toBe(mySvgString);
    expect(AXAIcon.prototype.size).toBe('auto');
  });
  test('firstUpdated() should map icon correctly', () => {
    AXAIcon.prototype.icon = 'download';

    AXAIcon.prototype.firstUpdated();

    expect(AXAIcon.prototype._loadedSvg).toBe(DownloadSvg);
  });
  test('firstUpdated() should set _loadedSvg to empty string', () => {
    AXAIcon.prototype.icon = 'thisIsNotValid';

    AXAIcon.prototype.firstUpdated();

    expect(AXAIcon.prototype._loadedSvg).toBe('');
  });
});
