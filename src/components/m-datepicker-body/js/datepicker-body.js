import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { getCell, setCell, initCells } from '../../m-datepicker-body/js/store';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.selected = null;

    this.date = new Date();
  }

  init(index, locale, year, month) {
    initCells(locale, year, month);
    this.rePaintCells(index);
    this.listenToCells();
    this.index = index;
    this.locale = locale;

    if (year) {
      this.date = new Date(year, this.date.getMonth());
    }

    if (month) {
      this.date = new Date(this.date.getFullYear(), month);
    }
  }

  rePaintCells(index) {
    if (!index && index !== 0) {
      return;
    }
    const cell = getCell(index);
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
    const { dataset } = e.target;
    const index = +dataset.index;

    if (!index && index !== 0) {
      return;
    }

    const cell = getCell(index);

    if (cell instanceof NextMonth) {
      // TODO -> Feature logic needs to be implemented
      this.updateDate(this.date.getMonth() + 1);
    } else if (cell instanceof LastMonth) {
      this.updateDate(this.date.getMonth() - 1);
    } else {
      this.wcNode.setAttribute('value', cell.getText());
      this.wcNode.setAttribute('index', index);
    }
  }

  handleCurrentMonth(index, cell) {
    if (this.selected !== null) {
      const lastIndex = this.selected.getIndex();
      const isToday = this.selected.getIsToday();
      const lastText = this.selected.getText();
      const lastcell = isToday ? new Today(lastText, lastIndex, isToday) : new CurrentMonth(lastText, lastIndex, isToday);
      setCell(lastIndex, lastcell);
    }

    const newcell = new SelectedDay(cell.getText(), cell.getIndex(), cell.getIsToday());
    setCell(index, newcell);
    this.selected = newcell;
  }

  updateDate(value) {
    const currentMonth = this.date.getMonth();
    this.date = new Date(this.date.getFullYear(), currentMonth);

    this.date.setMonth(value);

    this.wcNode.setAttribute('year', this.date.getFullYear());
    this.wcNode.setAttribute('month', this.date.getMonth());
  }
}
