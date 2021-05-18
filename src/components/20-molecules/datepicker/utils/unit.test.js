import { parseLocalisedDateIfValid, getAllLocaleMonthsArray } from './date';

// note on date formats: we can new Date(datestring) - which internally uses Date.parse - despite caveats about browser-specific implementation differences by
// explicitly constructing an unambiguous date string here,
// cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()
// One such safe date format is 'yyyy-mm-ddThh:mm'.

describe('Datepicker utils', () => {
  describe('parseLocalisedDateIfValid', () => {
    const inputDateObject = new Date('1999-02-01T12:30');
    const inputDateString = '01.02.1999';

    it('should return formatted date', () => {
      expect(parseLocalisedDateIfValid(inputDateObject)).toBe('1.2.1999');
    });
    it('should return formatted date (if input date is a string)', () => {
      expect(parseLocalisedDateIfValid(inputDateString)).toStrictEqual(new Date('1999-02-01T00:00'));
    });

    it('should return formatted date if date is older than unix epoch', () => {
      const inputDateObjectVeryOld = new Date('1900-02-01T12:30');
      expect(parseLocalisedDateIfValid(inputDateObjectVeryOld)).toBe('1.2.1900');
    });
    it('should return formatted date if date is older than unix epoch (if input date is a string)', () => {
      const inputDateStringVeryOld = '1.2.1900';
      expect(parseLocalisedDateIfValid(inputDateStringVeryOld)).toStrictEqual(new Date('1900-02-01T00:00'));
    });

    it('should work far far in the future', () => {
      const inputDateObjectVeryOld = new Date('9999-02-01T12:30');
      expect(parseLocalisedDateIfValid(inputDateObjectVeryOld)).toBe('1.2.9999');
    });
    it('should work far far in the future (if input date is a string)', () => {
      const inputDateStringVeryOld = '01.02.9999';
      expect(parseLocalisedDateIfValid(inputDateStringVeryOld)).toStrictEqual(new Date('9999-02-01T00:00'));
    });

    it('should return null if date is not given', () => {
      expect(parseLocalisedDateIfValid()).toBe(null);
    });

    it('should return null if date is null', () => {
      expect(parseLocalisedDateIfValid(null)).toBe(null);
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
