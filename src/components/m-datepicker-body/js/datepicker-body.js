import { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth, Cell } from './cells';
import Store from './store';

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
    this.selected = this.date;

    this.prepareCells(index);
    this.listenToCells();

    if (month || month === 0) {
      this.date.setMonth(month);
    }

    if (year) {
      this.date.setFullYear(year);
    }
  }

  prepareCells(index) {
    console.log('prepare cells', index);
    if (this.selected && !index) {
      const cell = new SelectedDay(this.selected.text, this.selected.index, this.selected.isToday);
      this.store.setCell(this.selected.index, cell);
    }
    if (!index && index !== 0) {
      return;
    }
    const cell = this.store.getCell(index);
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
    this.index = parseInt(e.target.dataset.index, 10);
    this.cell = this.store.getCell(this.index);
    this.date = new Date();

    // Check if we click on a "grey" cell of an prev or next month
    if (this.cell instanceof NextMonth) {
        this.date.setMonth(this.wcNode.month + 1);
    } 
    
    if (this.cell instanceof LastMonth) {
        this.date.setMonth(this.wcNode.month - 1);
    } 
    
    // Set the day to the chosen day
    this.date.setDate(parseInt(this.cell.text, 10));

    // Update the dom node
    // console.log('sel date', this.selected);
    // console.log('new date', this.date);

    this.updateDate(this.date);
    // set / prepare all cells again according to new selection
    this.store.update(this.date);

    // Update dom
    this.wcNode.props.cells = this.store.getCells();

    // Save "last" chosen date
    this.selected = this.date;
  }

  // changeDay(cell, index) {
  //   const newcell = new SelectedDay(cell.text, index, true);
  //   // this.store.cells = this.store.cells.map(c => c instanceof Today ? newcell : c);
  //   this.store.setCell(cell.index, newcell);
  //   this.wcNode.setAttribute('value', cell.text);
  //   this.wcNode.setAttribute('index', cell.index);
  // }

  cleanupValueIndex() {
    this.wcNode.removeAttribute('index');
    this.wcNode.removeAttribute('value');
  }

  handleCurrentMonth(index, cell) {
    console.log('current month', index, cell);
    // if (this.selected !== null) {
    //   const lastIndex = this.selected.index;
    //   const isToday = this.selected.isToday;
    //   const lastText = this.selected.text;
    //   const lastcell = new CurrentMonth(lastText, lastIndex, isToday);
    //   this.store.setCell(lastIndex, lastcell);
    // }

    // const newcell = new SelectedDay(cell.text, cell.index, cell.isToday);
    // this.store.setCell(index, newcell);
    // this.selected = newcell;
    // if (!newcell.isToday) {
    //   this.store.cells = this.store.cells.map(c => c instanceof Today ? new CurrentMonth(c.text, c.index, true) : c);
    // }
  }

  updateDate(date) {
    // TODO:: don't do this allowed year check here..
    // if (this.allowedYears && !~this.allowedYears.indexOf(year)) {
    //   return;
    // }
    this.wcNode.setAttribute('day', date.getDate());
    this.wcNode.setAttribute('index', this.index);
    this.wcNode.setAttribute('month', date.getMonth());
    this.wcNode.setAttribute('year', date.getFullYear());
  }
}
