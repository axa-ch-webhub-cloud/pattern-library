import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { CurrentMonth, SelectedDay, LastMonth, NextMonth } from './cells';

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init(index, locale, year, month, day, allowedYears, store) {
    this.store = store;
    this.index = index;
    this.allowedYears = allowedYears;
    this.locale = locale;
    this.year = year;
    this.month = month;
    this.day = day;

    // Create dates to work with from init values (dom..)
    this.date = new Date(this.year, this.month, this.day);
    this.wcNode.date = this.date;
    this.selected = this.date;

    this.prepareCells(index);

    this.unClickEnd = on(
      this.wcNode, EVENTS.CLICK, 'js-datepicker-body',
      this.handleClick, {
        capture: true, passive: false,
      },
    );

    if (month || month === 0) {
      this.date.setMonth(month);
    }

    if (year) {
      this.date.setFullYear(year);
    }
  }

  prepareCells(index) {
    if (!index && index !== 0) return;

    if (this.selected && !index) {
      const cell = new SelectedDay(this.selected.text, this.selected.index, this.selected.isToday);
      this.store.setCell(this.selected.index, cell);
    }
    const cell = this.store.getCell(index);
    if (cell instanceof CurrentMonth) {
      this.handleCurrentMonth(index, cell);
    }
  }

  offClicks() {
    if (this.unClickEnd) {
      this.unClickEnd();
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.index = parseInt(e.target.dataset.index, 10);
    this.cell = this.store.getCell(this.index);
    this.date = new Date();
    this.date.setFullYear(this.wcNode.year);

    // Check if we click on a "grey" cell of an prev or next month
    if (this.cell instanceof NextMonth) {
      this.date.setMonth(this.wcNode.month + 1);
      this.wcNode.month = this.date.getMonth();
    }

    if (this.cell instanceof LastMonth) {
      this.date.setMonth(this.wcNode.month - 1);
      this.wcNode.month = this.date.getMonth();
    }

    this.date.setDate(parseInt(this.cell.text, 10));
    this.wcNode.day = this.date.getDate();
    this.wcNode.index = this.index;

    // Set the day to the chosen day
    this.selected = this.date;
  }
}
