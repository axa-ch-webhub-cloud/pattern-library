import { describe, it, expect } from 'vitest';
import { getWeekdays } from './utils/date';
import { parseAndFormatAllowedYears } from './helpers';

describe('Datepicker unit tests', () => {
  it('should return correct month names with English abreviations', () => {
    expect(getWeekdays(new Date(), 'en-GB')).toEqual([
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
      'Su',
    ]);
  });

  describe('parseAndFormatAllowedYears()', () => {
    it('should return empty array', () => {
      expect(parseAndFormatAllowedYears()).toEqual([]);
    });
    it('should return array with 1 allowed year', () => {
      expect(parseAndFormatAllowedYears(undefined, [1999])).toEqual([1999]);
    });
    it('should return array with allowed years if value is a string', () => {
      expect(parseAndFormatAllowedYears(undefined, ['1999-2000'])).toEqual([
        1999, 2000,
      ]);
    });
    it('should return array with allowed years if value is a string (without setting setYear)', () => {
      expect(
        parseAndFormatAllowedYears(undefined, ['1999-2000'], 2020)
      ).toEqual([1999, 2000]);
    });
    it('should return array with allowed years without setting setYear', () => {
      expect(parseAndFormatAllowedYears(undefined, [1999], 2000)).toEqual([
        1999,
      ]);
    });
    it('should return array with just the value of setYear', () => {
      expect(parseAndFormatAllowedYears(2000, undefined)).toEqual([2000]);
    });
    it('should return array with just the value of setYear if allowed years are emtpy', () => {
      expect(parseAndFormatAllowedYears(2000, [])).toEqual([2000]);
    });
  });
});
