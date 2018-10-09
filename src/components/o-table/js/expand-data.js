import isObject from '../../../js/is-object';

const isCell = value => isObject(value) && value.text;
const isRow = value => isObject(value) && Array.isArray(value.cells);
const isData = value => isObject(value) && Array.isArray(value.rows);
const isSingleRow = value => Array.isArray(value) && !Array.isArray(value[0]) && !isRow(value[0]);

const expandCell = (text) => {
  if (!isCell(text)) {
    return { text };
  }

  return text;
};
const expandRow = (row) => {
  let cells = row;
  let props = {};

  if (isRow(row)) {
    ({ cells, ...props } = row);
  }

  if (Array.isArray(cells)) {
    cells = cells.map(expandCell);
  } else {
    cells = expandCell(cells);
  }

  return {
    ...props,
    cells,
  };
};

const expandData = (items) => {
  let rows = items;
  let props = {};

  if (isData(items)) {
    ({ rows, ...props } = items);
  }

  if (isSingleRow(rows)) {
    rows = [rows].map(expandRow);
  } else if (Array.isArray(rows)) {
    rows = rows.map(expandRow);
  }

  return {
    ...props,
    rows,
  };
};

export default expandData;
