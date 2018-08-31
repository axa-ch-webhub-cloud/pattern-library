import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import Store from './store';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';

let selected = null;

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.date = new Date();
  }

  init(index, locale, year, month, day, allowedYears) {
    console.log(day);
    this._store = new Store(locale, year, month);
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
    if (selected && !index) {
      const cell = new SelectedDay(selected.getText(), selected.getIndex(), selected.getIsToday());
      this._store.setCell(selected.getIndex(), cell);
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
    selected = null;
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
    if (selected !== null) {
      const lastIndex = selected.getIndex();
      const isToday = selected.getIsToday();
      const lastText = selected.getText();
      // const lastcell = isToday ? new Today(lastText, lastIndex, isToday) : new CurrentMonth(lastText, lastIndex, isToday);
      const lastcell = new CurrentMonth(lastText, lastIndex, isToday);
      this._store.setCell(lastIndex, lastcell);
    }

    const newcell = new SelectedDay(cell.getText(), cell.getIndex(), cell.getIsToday());
    this._store.setCell(index, newcell);
    selected = newcell;
    if (!newcell.isToday) {
      this._store.cells.map((c) => {
        if (c instanceof Today) {
          this._store.setCell(c.getIndex(), new CurrentMonth(c.getText(), c.getIndex(), true));
        }
      });
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
