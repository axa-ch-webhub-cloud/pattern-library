import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { LastMonth, NextMonth } from './cells';

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init(index, locale, date, store) {
    this.store = store;
    this.index = index;
    this.locale = locale;
    this.date = date;
    this.selected = this.date;

    this.unClickEnd = on(
      this.wcNode, EVENTS.CLICK, 'js-datepicker__calender-body__cell',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  // prepareCells(index) {
  //   if (!index && index !== 0) return;

  //   if (this.selected && !index) {
  //     const cell = new SelectedDay(this.selected.text, this.selected.index, this.selected.isToday);
  //     this.store.setCell(this.selected.index, cell);
  //   }
  //   const cell = this.store.getCell(index);
  //   if (cell instanceof CurrentMonth) {
  //     this.handleCurrentMonth(index, cell);
  //   }
  // }

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
