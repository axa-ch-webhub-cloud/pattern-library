import { EVENTS, AXA_EVENTS } from "../../../js/ui-events";
import on from "../../../js/on";
import fire from "../../../js/fire";

export const OK = "ok";

const SELECTORS = {
  datepickerBody: ".js-datepicker__datepicker-body",
  dropdownMonth: ".js-datepicker__dropdown-month",
  dropdownYear: ".js-datepicker__dropdown-year"
};

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init() {
    this.dropdownMonth = this.wcNode.querySelector(SELECTORS.dropdownMonth);
    this.dropdownYear = this.wcNode.querySelector(SELECTORS.dropdownYear);

    this.onHandleChangeDropdownMonth = on(
      this.wcNode,
      AXA_EVENTS.AXA_CHANGE,
      "js-datepicker__dropdown-month",
      e => this.handleChangeDropdownMonth(e),
      { capture: true, passive: false }
    );

    this.onListenToDropdownYear = on(
      this.wcNode,
      AXA_EVENTS.AXA_CHANGE,
      "js-datepicker__dropdown-year",
      e => this.handleChangeDropdownYear(e),
      { capture: true, passive: false }
    );

    this.onListenDatepickerBodyDateChange = on(
      this.wcNode,
      AXA_EVENTS.AXA_CHANGE,
      "js-datepicker__datepicker-body",
      e => this.handleChangeDatepickerBody(e),
      { capture: true, passive: false }
    );

    this.onCancelButtonListenerEnd = on(
      this.wcNode,
      EVENTS.CLICK,
      "js-datepicker__button-cancel",
      () => {
        fire(
          this.wcNode,
          "cancel",
          {},
          { bubbles: true, cancelable: true, composed: true }
        );
      }
    );

    this.onOkButtonListenerEnd = on(
      this.wcNode,
      EVENTS.CLICK,
      "js-datepicker__button-ok",
      () => {
        let out = "";
        const value = this.wcNode
          .querySelector(SELECTORS.datepickerBody)
          .getAttribute("date");
        if (value) {
          out = new Date(Date.parse(value));
          fire(
            this.wcNode,
            "date-changed",
            { value: out },
            { bubbles: true, cancelable: true, composed: true }
          );
        }
      }
    );
  }

  handleChangeDropdownMonth(e) {
    e.preventDefault();
    const month = e.detail;
    if (month) {
      // the body is undefined in IE11 if you don't select it here again.
      const datepickerBody = this.wcNode.querySelector(
        SELECTORS.datepickerBody
      );
      const newDate = datepickerBody.getAttribute("date");
      const parsedDate = new Date(Date.parse(newDate));
      parsedDate.setMonth(month);
      datepickerBody.setAttribute("date", parsedDate.toISOString());
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      // the body is undefined in IE11 if you don't select it here again.
      const datepickerBody = this.wcNode.querySelector(
        SELECTORS.datepickerBody
      );
      const newDate = datepickerBody.getAttribute("date");
      const parsedDate = new Date(Date.parse(newDate));
      parsedDate.setFullYear(year);
      datepickerBody.setAttribute("date", parsedDate.toISOString());
    }
  }

  handleChangeDatepickerBody(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.detail) {
      const parsedDate = new Date(Date.parse(e.detail));
      this.dropdownMonth.setAttribute("value", parsedDate.getMonth());
      this.dropdownYear.setAttribute("value", parsedDate.getFullYear());
    }
  }

  destroy() {
    this.onHandleChangeDropdownMonth();
    this.onListenToDropdownYear();
    this.onListenDatepickerBodyDateChange();
    this.onCancelButtonListenerEnd();
    this.onOkButtonListenerEnd();
  }
}
