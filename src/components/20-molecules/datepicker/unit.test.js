import { getWeekdays } from './utils/date';

describe('Datepicker unit tests', () => {
  it('should return correct month names with German abreviations', () => {
    expect(getWeekdays(new Date(), 'de-CH')).toEqual(['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO']);
  });
  it('should return correct month names with English abreviations', () => {
    expect(getWeekdays(new Date(), 'en-GB')).toEqual(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']);
  });
});
