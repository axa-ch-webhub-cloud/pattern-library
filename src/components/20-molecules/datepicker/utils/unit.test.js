import { parseLocalisedDateIfValid, getAllLocaleMonthsArray } from './date';

describe('Datepicker utils', () => {
  describe('parseLocalisedDateIfValid', () => {
    const inputDateObject = new Date('01.02.1999 12:30');
    const inputDateString = '01/02/1999';

    it('should return formatted date', () => {
      expect(parseLocalisedDateIfValid('en', inputDateObject)).toBe('1/2/1999');
    });
    it('should return formatted date (if input date is a string)', () => {
      expect(parseLocalisedDateIfValid('en', inputDateString)).toStrictEqual(
        new Date('1/2/1999')
      );
    });

    it('should return formatted date from default language if unsupported locale is given', () => {
      expect(parseLocalisedDateIfValid('ff', inputDateObject)).toBe('1/2/1999');
    });

    it('should return formatted date if locale is undefined', () => {
      expect(parseLocalisedDateIfValid(undefined, inputDateObject)).toBe(
        '1/2/1999'
      );
    });

    it('should return formatted date if locale is null', () => {
      expect(parseLocalisedDateIfValid(null, inputDateObject)).toBe('1/2/1999');
    });

    it('should return formatted date if date is older than unix epoch', () => {
      const inputDateObjectVeryOld = new Date('01.02.1900 12:30');
      expect(parseLocalisedDateIfValid('en', inputDateObjectVeryOld)).toBe(
        '1/2/1900'
      );
    });
    it('should return formatted date if date is older than unix epoch (if input date is a string)', () => {
      const inputDateStringVeryOld = '1/2/1900';
      expect(
        parseLocalisedDateIfValid('en', inputDateStringVeryOld)
      ).toStrictEqual(new Date('1/2/1900'));
    });

    it('should work far far in the future', () => {
      const inputDateObjectVeryOld = new Date('01.02.9999 12:30');
      expect(parseLocalisedDateIfValid('en', inputDateObjectVeryOld)).toBe(
        '1/2/9999'
      );
    });
    it('should work far far in the future (if input date is a string)', () => {
      const inputDateStringVeryOld = '01/02/9999';
      expect(
        parseLocalisedDateIfValid('en', inputDateStringVeryOld)
      ).toStrictEqual(new Date('01/02/9999'));
    });

    it('should return null if date is not given', () => {
      expect(parseLocalisedDateIfValid('en')).toBe(null);
    });

    it('should return null if date is null', () => {
      expect(parseLocalisedDateIfValid('en', null)).toBe(null);
    });
  });

  describe('getAllLocaleMonthsArray', () => {
    it('should return array with 12 elements', () => {
      expect(getAllLocaleMonthsArray().length).toBe(12);
    });

    it('should return array with strings which first character is uppercase', () => {
      const arrayWithStrings = getAllLocaleMonthsArray('en-UK');
      expect(arrayWithStrings[0]).toBe('January');
    });
  });
});
