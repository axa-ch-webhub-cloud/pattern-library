import AXAToggleSwitch from './index';

describe('Toggle Switch', () => {
  test('firstUpdated() should not call another method', () => {
    AXAToggleSwitch.prototype.methodThatShouldNotBeCalled = jest.fn();
    AXAToggleSwitch.prototype.firstUpdated();

    expect(
      AXAToggleSwitch.prototype.methodThatShouldNotBeCalled
    ).not.toHaveBeenCalled();
  });
});
