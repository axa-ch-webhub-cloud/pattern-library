import AXATableSortable from './index';

describe('validateModel()', () => {
  test('should return true if no data is given', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [[]],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return false if tbody is set but nothing else', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });

  test('should return true if thead has as many elements than tbody', () => {
    AXATableSortable.prototype.model = {
      thead: [''],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });
  test('should return false if thead has more elements than tbody', () => {
    AXATableSortable.prototype.model = {
      thead: ['', ''],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });

  test('should return true if all table levels has the same number of elements', () => {
    AXATableSortable.prototype.model = {
      thead: [''],
      tbody: [['']],
      tfoot: [['']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });
  test('should return false if tfoot has more elements than tbody', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [['']],
      tfoot: [['', '']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });
});


