import AXATableSortable from './index';

describe('validateModel()', () => {
  // positive tests

  test('should return true if no elements are given', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [[]],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return true if all table levels has the same number of elements', () => {
    AXATableSortable.prototype.model = {
      thead: [''],
      tbody: [['']],
      tfoot: [['']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return true if tbody has no elements, but thead and tfoot each have one', () => {
    AXATableSortable.prototype.model = {
      thead: [''],
      tbody: [[]],
      tfoot: [['']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return true if thead has no elements, but tfoot and tbody each have one', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [['']],
      tfoot: [['']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return true if tfoot has no elements, but thead and tbody each have one', () => {
    AXATableSortable.prototype.model = {
      thead: [''],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  test('should return true if tbody is set but nothing else', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(true);
  });

  // negative tests

  test('should return false if thead has more elements than tbody', () => {
    AXATableSortable.prototype.model = {
      thead: ['', ''],
      tbody: [['']],
      tfoot: [[]],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });

  test('should return false if tfoot has more elements than tbody', () => {
    AXATableSortable.prototype.model = {
      thead: [],
      tbody: [['']],
      tfoot: [['', '']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });

  test('should return false if tbody has no elements and thead.length <> tfoot.length', () => {
    AXATableSortable.prototype.model = {
      thead: ['', ''],
      tbody: [[]],
      tfoot: [['']],
    };

    expect(AXATableSortable.prototype.validateModel()).toBe(false);
  });
});
