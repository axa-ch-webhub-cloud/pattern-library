import AXAModal from './index';

describe('Modal', () => {
  test('firstUpdated() should not call another method', () => {
    AXAModal.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXAModal.prototype.firstUpdated();

    expect(AXAModal.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});