import AXAAccordeon from './index';

describe('Accordeon', () => {
  test('firstUpdated() should not call another method', () => {
    AXAAccordeon.prototype.methodThatShouldNotBeCalled = jest.fn();

    AXAAccordeon.prototype.firstUpdated();

    expect(AXAAccordeon.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
  });
});