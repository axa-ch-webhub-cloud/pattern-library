import AXADatepicker, { parseAndFormatAllowedYears } from './index';
import { getWeekdays } from './utils/date';

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
      expect(parseAndFormatAllowedYears([1999])).toEqual([1999]);
    });
    it('should return array with allowed years if value is a string', () => {
      expect(parseAndFormatAllowedYears(['1999-2000'])).toEqual([1999, 2000]);
    });
    it('should return array with allowed years if value is a string (without setting setYear)', () => {
      expect(parseAndFormatAllowedYears(['1999-2000'], 2020)).toEqual([
        1999,
        2000,
      ]);
    });
    it('should return array with allowed years without setting setYear', () => {
      expect(parseAndFormatAllowedYears([1999], 2000)).toEqual([1999]);
    });
    it('should return array with just the value of setYear', () => {
      expect(parseAndFormatAllowedYears(undefined, 2000)).toEqual([2000]);
    });
    it('should return array with just the value of setYear if allowed years are emtpy', () => {
      expect(parseAndFormatAllowedYears([], 2000)).toEqual([2000]);
    });
  });

  describe('initDate()', () => {
    it('should return undefined', () => {
      AXADatepicker.prototype.state = {};
      expect(AXADatepicker.prototype.initDate(new Date(), {})).toEqual(
        undefined
      );
    });
    it('should set class variables', () => {
      // init values
      AXADatepicker.prototype.state = {};
      AXADatepicker.prototype._date = null;
      AXADatepicker.prototype.allowedyears = [1900];
      AXADatepicker.prototype.cells = null;
      AXADatepicker.prototype.weekdays = null;
      AXADatepicker.prototype.updateComplete = () => {};

      AXADatepicker.prototype.initDate(new Date(), {});

      expect(AXADatepicker.prototype._date).not.toBe(null);
      expect(AXADatepicker.prototype.allowedyears).not.toBe([1900]);
      expect(AXADatepicker.prototype.cells).not.toBe(null);
      expect(AXADatepicker.prototype.weekdays).not.toBe(null);
    });
    it('should set class variables if output:true', () => {
      // init values
      AXADatepicker.prototype.state = {};
      AXADatepicker.prototype.outputdate = null;
      AXADatepicker.prototype._selectedDate = null;

      AXADatepicker.prototype.initDate(new Date(), { output: true });

      expect(AXADatepicker.prototype.outputdate).not.toBe(null);
      expect(AXADatepicker.prototype._selectedDate).not.toBe(null);
    });
    it('should set class variables if tentative:false and preset:true', () => {
      // init values
      AXADatepicker.prototype.state = {};
      AXADatepicker.prototype._selectedDate = null;

      AXADatepicker.prototype.initDate(new Date(), {
        tentative: false,
        preset: true,
      });

      expect(AXADatepicker.prototype._selectedDate).not.toBe(null);
    });
  });
});
