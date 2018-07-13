import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { getCell, setCell, initCells } from '../../m-datepicker-body/js/store';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';

export default class DatepickerBody {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.selected = null;
  }

  init(locale, year, month) {
    initCells(locale, year, month);
    this.listenToCells();
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

    const cell = getCell(index);

    if (cell instanceof CurrentMonth) {
      this.handleCurrentMonth(index, cell);
    } else if (cell instanceof NextMonth) {
      console.log('HERE logic next month');
    } else if (cell instanceof LastMonth) {
      console.log('HERE logic last month');
    }

    this.wcNode.setAttribute('value', cell.getText());
    this.wcNode.setAttribute('index', index);
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
}
