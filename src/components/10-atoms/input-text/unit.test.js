import AXAInputText from './index';

describe('InputText', () => {
  describe('_formatCurrency', () => {
    it('should create new NumberFormat object', () => {
      AXAInputText.prototype.currency = 'chf';
      AXAInputText.prototype.type = 'text';
      AXAInputText.prototype.currencyFormatter = null;
      AXAInputText.prototype._formatCurrency('1');

      expect(AXAInputText.prototype.currencyFormatter).not.toBe(null);
    });

    it('should set invalid to false (if input contains a number)', () => {
      expect().toEqual();
    });
    it('should set invalid to false (if input is empty)', () => {
      expect().toEqual();
    });
    it('should set invalid to true (if input contains just no-digits and is not empty)', () => {
      expect().toEqual();
    });

    it('should return formatted number', () => {
      expect().toEqual();
    });

    it('should return inputted value', () => {
      expect().toEqual();
    });

    // negative positive tests
    it('should not create a NumberFormat object (wrong type)', () => {
      expect().toEqual();
    });
    it('should not create a NumberFormat object (already exists)', () => {
      expect().toEqual();
    });
    it('should not create a NumberFormat object (no currency set)', () => {
      expect().toEqual();
    });
  });
});
