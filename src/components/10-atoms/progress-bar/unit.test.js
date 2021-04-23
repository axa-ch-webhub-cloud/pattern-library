import AXAProgressBar from './index';

describe('Progress Bar', () => {
  test('firstUpdated() should not call another method', () => {
    AXAProgressBar.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXAProgressBar.prototype.firstUpdated();

    expect(AXAProgressBar.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});