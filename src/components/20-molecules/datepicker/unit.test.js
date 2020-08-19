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
      expect(AXADatepicker.prototype.initDate(new Date(), {})).toEqual(
        undefined
      );
    });
    it('should set class variables', () => {
      // init values
      AXADatepicker.prototype._date = null;
      AXADatepicker.prototype.allowedyears = [1900];
      AXADatepicker.prototype.cells = null;
      AXADatepicker.prototype.weekdays = null;

      AXADatepicker.prototype.initDate(new Date(), {});

      expect(AXADatepicker.prototype._date).not.toBe(null);
      expect(AXADatepicker.prototype.allowedyears).not.toBe([1900]);
      expect(AXADatepicker.prototype.cells).not.toBe(null);
      expect(AXADatepicker.prototype.weekdays).not.toBe(null);
    });
    it('should set class variables if output:true', () => {
      // init values
      AXADatepicker.prototype.outputdate = null;
      AXADatepicker.prototype._selectedDate = null;

      AXADatepicker.prototype.initDate(new Date(), { output: true });

      expect(AXADatepicker.prototype.outputdate).not.toBe(null);
      expect(AXADatepicker.prototype._selectedDate).not.toBe(null);
    });
    it('should set class variables if tentative:false', () => {
      // init values
      AXADatepicker.prototype._selectedDate = null;

      AXADatepicker.prototype.initDate(new Date(), { tentative: false });

      expect(AXADatepicker.prototype._selectedDate).not.toBe(null);
    });
  });

  describe('navigateMonth()', () => {
    it('Should switch to the next allowed month, when direction is positive.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;
      AXADatepicker.prototype.month = 6;

      AXADatepicker.prototype.navigateMonth(1);

      expect(AXADatepicker.prototype.year).toBe(2020);
      expect(AXADatepicker.prototype.month).toBe(7);
    });

    it('Should switch to the next allowed year, when direction is positive and month equals 11.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;
      AXADatepicker.prototype.month = 11;

      AXADatepicker.prototype.navigateMonth(1);

      expect(AXADatepicker.prototype.year).toBe(2031);
      expect(AXADatepicker.prototype.month).toBe(0);
    });

    it('Should have no effect, when there is no next allowed month.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2031;
      AXADatepicker.prototype.month = 11;

      AXADatepicker.prototype.navigateMonth(1);

      expect(AXADatepicker.prototype.year).toBe(2031);
      expect(AXADatepicker.prototype.month).toBe(11);
    });

    it('Should switch to the previous allowed month, when direction is negative.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;
      AXADatepicker.prototype.month = 6;

      AXADatepicker.prototype.navigateMonth(-1);

      expect(AXADatepicker.prototype.year).toBe(2020);
      expect(AXADatepicker.prototype.month).toBe(5);
    });

    it('Should switch to the previous allowed year, when direction is negative and month equals 0.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2031;
      AXADatepicker.prototype.month = 0;

      AXADatepicker.prototype.navigateMonth(-1);

      expect(AXADatepicker.prototype.year).toBe(2020);
      expect(AXADatepicker.prototype.month).toBe(11);
    });

    it('Should have no effect, when there is no previous allowed month.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;
      AXADatepicker.prototype.month = 0;

      AXADatepicker.prototype.navigateMonth(-1);

      expect(AXADatepicker.prototype.year).toBe(2020);
      expect(AXADatepicker.prototype.month).toBe(0);
    });
  });

  describe('navigateYear()', () => {
    it('Should return the next allowed year, when direction is positive.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;

      expect(AXADatepicker.prototype.navigateYear(1)).toBe(2031);
    });

    it('Should return the currently selected year, when there is no next allowed year.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2031;

      expect(AXADatepicker.prototype.navigateYear(1)).toBe(2031);
    });

    it('Should return the previous allowed year, when direction is negative.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2031;

      expect(AXADatepicker.prototype.navigateYear(-1)).toBe(2020);
    });

    it('Should return the currently selected year, when there is no previous allowed year.', () => {
      AXADatepicker.prototype.allowedyears = [2020, 2031];
      AXADatepicker.prototype.year = 2020;

      expect(AXADatepicker.prototype.navigateYear(-1)).toBe(2020);
    });
  });
});
