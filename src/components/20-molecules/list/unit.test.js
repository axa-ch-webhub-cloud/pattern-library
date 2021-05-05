import AXAList from './index';

describe('List', () => {
  test('firstUpdated() should not call another method', () => {
    AXAList.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXAList.prototype.firstUpdated();

    expect(AXAList.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});