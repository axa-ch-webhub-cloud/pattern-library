import AXASpinner from './index';

describe('Spinner', () => {
  test('firstUpdated() should not call another method', () => {
    AXASpinner.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXASpinner.prototype.firstUpdated();

    expect(AXASpinner.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});