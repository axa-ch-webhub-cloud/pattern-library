import AXAInputPhone from './index';

describe('Input Phone', () => {
  test('firstUpdated() should not call another method', () => {
    AXAInputPhone.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXAInputPhone.prototype.firstUpdated();

    expect(AXAInputPhone.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});