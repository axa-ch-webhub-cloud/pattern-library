import AXAInputText from './index';

describe('InputText', () => {
  describe('_formatCurrency', () => {
    beforeEach(() => {
      AXAInputText.prototype.currency = 'chf';
      AXAInputText.prototype.type = 'text';
      AXAInputText.prototype.currencyFormatter = null;
      AXAInputText.prototype.invalid = null;
    });

    it('should create new NumberFormat object', () => {
      AXAInputText.prototype._formatCurrency('1');
      expect(AXAInputText.prototype.currencyFormatter).not.toBe(null);
    });

    it('should set invalid to false (if input contains a number)', () => {
      AXAInputText.prototype._formatCurrency('1');
      expect(AXAInputText.prototype.invalid).toBe(false);
    });
    it('should set invalid to false (if input is empty)', () => {
      AXAInputText.prototype._formatCurrency('');
      expect(AXAInputText.prototype.invalid).toBe(false);
    });
    it('should set invalid to true (if input contains just no-digits and is not empty)', () => {
      AXAInputText.prototype._formatCurrency('nodigits');
      expect(AXAInputText.prototype.invalid).toBe(true);
    });

    it('should return formatted number', () => {
      const returnValue = AXAInputText.prototype._formatCurrency('1000');
      expect(returnValue).toBe('CHF 1,000.00'); // be aware: there is no simple empty-space between CHF and 1! Its a HTML entity NBSP.
    });

    it('should return inputted value', () => {
      const inputValue = 'this is my input';
      AXAInputText.prototype.currency = null;

      expect(AXAInputText.prototype._formatCurrency(inputValue)).toBe(
        inputValue
      );
    });

    // false positive tests
    it('should not create a NumberFormat object (wrong type)', () => {
      AXAInputText.prototype.type = 'password';
      AXAInputText.prototype._formatCurrency('1');

      expect(AXAInputText.prototype.currencyFormatter).toBe(null);
    });
    it('should not create a new NumberFormat object (already exists)', () => {
      const alreadyExistingNumberFormatObject = { format: () => {} };
      AXAInputText.prototype.currencyFormatter = alreadyExistingNumberFormatObject;
      AXAInputText.prototype._formatCurrency('1');

      expect(AXAInputText.prototype.currencyFormatter).toBe(
        alreadyExistingNumberFormatObject
      );
    });
    it('should not create a NumberFormat object (no currency set)', () => {
      AXAInputText.prototype.currency = '';
      AXAInputText.prototype._formatCurrency('1');

      expect(AXAInputText.prototype.currencyFormatter).toBe(null);
    });

    it('should set invalid state if too many dots are present', () => {
      const returnValue = AXAInputText.prototype._formatCurrency('n.2.3.5');
      expect(returnValue).toBe('n.2.3.5');
      expect(AXAInputText.prototype.invalid).toBe(true);
    });
  });
});
