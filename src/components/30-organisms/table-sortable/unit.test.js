import AXATableSortable from './index';

describe('validateModel()', () => {
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

  describe('thead tests:', () => {
    test('should return true if thead has no elements, but tfoot and tbody each have one', () => {
      AXATableSortable.prototype.model = {
        thead: [],
        tbody: [['']],
        tfoot: [['']],
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
  });

  describe('tbody tests:', () => {
    test('should return true if tbody is set but nothing else', () => {
      AXATableSortable.prototype.model = {
        thead: [],
        tbody: [['']],
        tfoot: [[]],
      };

      expect(AXATableSortable.prototype.validateModel()).toBe(true);
    });

    test('should return false if tbody has no elements, but thead and tfoot each have one', () => {
      AXATableSortable.prototype.model = {
        thead: [''],
        tbody: [[]],
        tfoot: [['']],
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

    test('should return false if tbody and tfoot has no elements and thead has one element', () => {
      AXATableSortable.prototype.model = {
        thead: [''],
        tbody: [[]],
        tfoot: [[]],
      };

      expect(AXATableSortable.prototype.validateModel()).toBe(false);
    });
  });

  describe('tfoot tests:', () => {
    test('should return true if tfoot has no elements, but thead and tbody each have one', () => {
      AXATableSortable.prototype.model = {
        thead: [''],
        tbody: [['']],
        tfoot: [[]],
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

    test('should return false if tfoot has elements but tbody has not', () => {
      AXATableSortable.prototype.model = {
        thead: [],
        tbody: [[]],
        tfoot: [['']],
      };

      expect(AXATableSortable.prototype.validateModel()).toBe(false);
    });
  });
});

describe('sortByIndex()', () => {
  test('should switch sort attribute', () => {
    const index = 0;
    const actualSortAs = 'ascending';
    AXATableSortable.prototype.model = {
      tbody: {},
      tfoot: {},
      thead: [{}],
    };
    AXATableSortable.prototype.sort = () => [];

    AXATableSortable.prototype.sortByIndex(index, actualSortAs);
    expect(AXATableSortable.prototype.model.thead[0].sort).toBe('DESC');
  });
});
