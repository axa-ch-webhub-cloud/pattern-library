import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import Store from './store';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.selected = null;
    this.date = new Date();
  }

  init(index, locale, year, month, day, allowedYears) {
    this._store = new Store(locale, year, month);
    this.selected = null;
    this.prepareCells(index);
    this.listenToCells();
    this.index = index;
    this.allowedYears = allowedYears;
    this.locale = locale;

    if (month || month === 0) {
      this.date.setMonth(month);
    }

    if (year) {
      this.date.setFullYear(year);
    }
  }

  get store() {
    return this._store;
  }

  prepareCells(index) {
    if (this.selected && !index) {
      const cell = new SelectedDay(this.selected.getText(), this.selected.getIndex(), this.selected.getIsToday());
      this._store.setCell(this.selected.getIndex(), cell);
    }
    if (!index && index !== 0) {
      return;
    }
    const cell = this._store.getCell(index);
    if (cell instanceof CurrentMonth) {
      this.handleCurrentMonth(index, cell);
    }
  }

  listenToCells() {
    this.offClicks();
    this.unClickEnd = on(
      this.wcNode, EVENTS.CLICK, 'js-datepicker-body',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  offClicks() {
    if (this.unClickEnd) {
      this.unClickEnd();
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.selected = null;
    const { dataset } = e.target;
    const index = +dataset.index;

    if (!index && index !== 0) {
      return;
    }
    const cell = this._store.getCell(index);

    if (cell instanceof NextMonth) {
      this.updateDate(this.date.getMonth() + 1);
      this.cleanupValueIndex();
    } else if (cell instanceof LastMonth) {
      this.updateDate(this.date.getMonth() - 1);
      this.cleanupValueIndex();
    } else {
      this.wcNode.setAttribute('value', cell.getText());
      this.wcNode.setAttribute('index', index);
    }
  }

  cleanupValueIndex() {
    this.wcNode.removeAttribute('index');
    this.wcNode.removeAttribute('value');
  }

  handleCurrentMonth(index, cell) {
    if (this.selected !== null) {
      const lastIndex = this.selected.getIndex();
      const isToday = this.selected.getIsToday();
      const lastText = this.selected.getText();
      // const lastcell = isToday ? new Today(lastText, lastIndex, isToday) : new CurrentMonth(lastText, lastIndex, isToday);
      const lastcell = new CurrentMonth(lastText, lastIndex, isToday);
      this._store.setCell(lastIndex, lastcell);
    }

    const newcell = new SelectedDay(cell.getText(), cell.getIndex(), cell.getIsToday());
    this._store.setCell(index, newcell);
    this.selected = newcell;
    if (!newcell.isToday) {
      this._store.cells = this._store.cells.map(c => c instanceof Today ? new CurrentMonth(c.getText(), c.getIndex(), true) : c);
    }
  }

  updateDate(value) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth());
    this.date.setMonth(value);

    const year = this.date.getFullYear();
    if (this.allowedYears && !~this.allowedYears.indexOf(year)) {
      return;
    }

    this.wcNode.setAttribute('year', year);
    this.wcNode.setAttribute('month', this.date.getMonth());
  }
}
