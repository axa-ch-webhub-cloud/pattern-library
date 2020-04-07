import { getWeekdays, range } from './utils/date';

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

  describe('Range function', () => {
    it('should return single year', () => {
      expect(range(2020, 2020)).toEqual([2020]);
    });

    it('should return years from 1990 to 2000', () => {
      expect(range(1990, 2000)).toEqual([
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
      ]);
    });

    it('should return empty array if to-year is younger than from-year', () => {
      expect(range(2001, 2000)).toEqual([]);
    });
  });
});
