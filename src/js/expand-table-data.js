import isObject from './is-object';

const isCell = value => isObject(value) && value.text;
const isRow = value => isObject(value) && Array.isArray(value.cells);
const isData = value => isObject(value) && Array.isArray(value.rows);
const isSingleRow = value => Array.isArray(value) && !Array.isArray(value[0]) && !isRow(value[0]);

/**
 * A number, or a string representing table cell data.
 *
 * @typedef {(number|string)} TableCellPrimitive
 */

/**
 * An object representing table cell data.
 *
 * @typedef {Object} TableCellObject
 * @property {TableCellPrimitive} text - A number, or a string representing table cell data to be shown.
 * @property {*} [value] - Any value used for sorting, APIs, etc.
 * @property {string|number} [rowspan] - HTML table cell rowspan.
 * @property {string|number} [colspan] - HTML table cell colspan.
 * @property {boolean} [action] - Whether or not this cell has an action.
 * @property {boolean} [strong] - Whether or not to show semi-bold and grey style.
 * @property {boolean} [bold] - Whether or not to show bold and dark-grey style.
 * @property {string} [align] - Either `left`, `center` or `right` text alignment.
 * @property {string} [float] - Either `left` or `right` for response vertical alignment of only 2 siblings.
 * @property {string} [state] - Either `ok`, `pending`, `error` or `unknown` style.
 */

/**
 * A number, string or an object representing table cell data.
 *
 * @typedef {(TableCellPrimitive|TableCellObject)} TableCell
 */

/**
 * Expands a table-cell short syntax into it's full object representation.
 *
 * @param {TableCell} text - A number, string or an object representing table cell data.
 * @returns {TableCellObject}
 */
const expandCell = (text) => {
  if (!isCell(text)) {
    return { text };
  }

  return text;
};

/**
 * An array of table cells representing table row data.
 *
 * @typedef {Array.<TableCell>} TableRowArray
 */

/**
 * An object of table cells representing table row data.
 *
 * @typedef {Object} TableRowObject
 * @property {TableRowArray} cells - An array of table cells representing table row data.
 * @property {boolean} [action] - Whether or not this cell has an action.
 */

/**
 * An array or object of table cells representing table row data.
 *
 * @typedef {(TableRowArray|TableRowObject)} TableCell
 */

/**
 * Expands a table-row short syntax into it's full object representation.
 *
 * @param {TableRow} row
 * @returns TableRowObject
 */
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

/**
 * An array of table rows representing table data.
 *
 * @typedef {Array.<TableRow>} TableDataArray
 */

/**
 * An object of table data representing rows and cells.
 *
 * @typedef {Object} TableDataObject
 * @property {TableRow} row - An array of table row data.
 */

/**
 * An array of rows.
 *
 * @typedef {(TableRow|TableDataArray|TableDataObject)} TableData
 */

/**
 * Expands an array of rows short syntax into it's full object notation.
 *
 * @param {TableData} items
 * @returns {{rows: *}}
 */
const expandTableData = (items) => {
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

export default expandTableData;
