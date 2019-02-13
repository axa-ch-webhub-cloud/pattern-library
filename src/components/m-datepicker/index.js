import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first

import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import {
  getAllLocaleMonthsArray,
  getSpecificYears,
  getWeekdays
} from "../../js/date";
import localePropType from "../../js/prop-types/locale-prop-type";
import urlPropType from "../../js/prop-types/url-prop-type";
import styles from "./index.scss";
import template from "./_template";
import Datepicker from "./js/datepicker";

class AXAMDatepicker extends BaseComponentGlobal {
  static tagName = "axa-m-datepicker";
  static propTypes = {
    classes: PropTypes.string,
    buttonOk: PropTypes.string,
    buttonCancel: PropTypes.string,
    locale: localePropType,
    value: PropTypes.string,
    startDateYear: PropTypes.number,
    startDateMonth: PropTypes.number,
    startDateDay: PropTypes.number,
    allowedYears: PropTypes.arrayOf(PropTypes.number),
    allowedYearsRange: PropTypes.string,
    lowerEndYear: PropTypes.number,
    higherEndYear: PropTypes.number,
    startDateMonthTitle: PropTypes.string,
    startDateYearTitle: PropTypes.string,
    monthItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isSelected: PropTypes.bool,
        value: PropTypes.string
      })
    ),
    yearItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isSelected: PropTypes.bool,
        value: PropTypes.string
      })
    ),
    startDay: PropTypes.number, // legacy -> new startDateDay
    startMonth: PropTypes.number, // legacy -> new startDateMonth
    startYear: PropTypes.number // legacy -> new startDateYear
  };

  init() {
    super.init({ styles, template });
    this.className = `m-datepicker${this.classes ? ` ${this.classes}` : ""}`;
  }

  range(start, end) {
    return Array.from({ length: end + 1 - start }, (v, k) => k + start);
  }

  connectedCallback() {
    super.connectedCallback();
    // Legacy Setup: new fields from values of legacy fields
    if (!this.startDateDay || !this.startDateMonth || !this.startDateYear) {
      this.isLegacy = true;
      const fallbackDateToday = new Date();
      this.props.startDateMonth =
        this.props.startMonth || fallbackDateToday.getMonth();
      this.props.startDateYear =
        this.props.startYear || fallbackDateToday.getFullYear();
      this.props.startDateDay =
        this.props.startDay || fallbackDateToday.getDate();
      this.props.allowedYears = [];
      this.props.allowedYears.push(this.props.lowerEndYear);
      this.props.allowedYears.push(this.props.higherEndYear);
    }

    this.props.monthItems = getAllLocaleMonthsArray(this.props.locale).map(
      (item, index) => ({
        isSelected: index === this.props.startDateMonth - 1,
        name: item.toString(),
        value: index.toString(),
        url: item.url
      })
    );

    // if we set a range of years, we don't care about the initial allowedYears
    if (
      this.props.allowedYearsRange &&
      this.props.allowedYearsRange.length > 0
    ) {
      const yearRanges = this.props.allowedYearsRange.split("-");
      this.props.allowedYears = this.range(
        parseInt(yearRanges[0], 10),
        parseInt(yearRanges[1], 10)
      );
      this.allowedYears = this.props.allowedYears;
    } else {
      const lowerEndYear = this.props.allowedYears[0];
      const higherEndYear = this.props.allowedYears[
        this.props.allowedYears.length - 1
      ];
      this.props.allowedYears = getSpecificYears({
        lowerEndYear,
        higherEndYear
      });
    }

    this.props.yearItems = this.props.allowedYears.map(item => ({
      isSelected: item === this.props.startDateYear,
      name: item.toString(),
      value: item.toString(),
      url: item.url
    }));

    // Create a date object from year, month and day props/attributes
    this.props.startDate = new Date(
      this.props.startDateYear,
      this.props.startDateMonth - 1,
      this.props.startDateDay
    );
    this.props.weekdays = getWeekdays(this.props.startDate, this.props.locale);
    this.props.startDateMonthTitle = this.props.startDate.toLocaleString(
      this.props.locale,
      { month: "long" }
    );
    this.props.startDateYearTitle = this.props.startDateYear.toString();

    this.datepicker = new Datepicker(this);
    this.datepicker.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.datepicker.destroy();
  }

  // Legacy backwards compatability
  get lowerEndYear() {
    return this.getAttribute("lower-end-year");
  }

  set lowerEndYear(value) {
    this.setAttribute("lower-end-year", value);
  }

  get higherEndYear() {
    return this.getAttribute("higher-end-year");
  }

  set higherEndYear(value) {
    this.setAttribute("higher-end-year", value);
  }

  get startYear() {
    return this.getAttribute("start-year");
  }

  set startYear(value) {
    this.setAttribute("start-year", value);
  }

  get startMonth() {
    return this.getAttribute("start-month");
  }

  set startMonth(value) {
    this.setAttribute("start-month", value);
  }

  get startDay() {
    return this.getAttribute("start-day");
  }

  set startDay(value) {
    this.setAttribute("start-day", value);
  }

  // End legacy
  set classes(value) {
    this.setAttribute("classes", value);
  }

  get classes() {
    return this.getAttribute("classes");
  }

  get locale() {
    return this.getAttribute("locale");
  }

  set locale(value) {
    this.setAttribute("locale", value);
  }

  get yearItems() {
    let out = "";
    if (this.hasAttribute("year-items")) {
      out = JSON.parse(this.getAttribute("year-items"));
    }
    return out;
  }

  set yearItems(value) {
    this.setAttribute("year-items", JSON.stringify(value));
  }

  get monthItems() {
    let out = "";
    if (this.hasAttribute("month-items")) {
      out = JSON.parse(this.getAttribute("month-items"));
    }
    return out;
  }

  set monthItems(value) {
    this.setAttribute("month-items", JSON.stringify(value));
  }

  set startDateYear(value) {
    this.setAttribute("start-date-year", value);
  }

  get startDateYear() {
    return this.getAttribute("start-date-year");
  }

  set startDateMonth(value) {
    this.setAttribute("start-date-month", value);
  }

  get startDateMonth() {
    return this.getAttribute("start-date-month");
  }

  set startDateDay(value) {
    this.setAttribute("start-date-day", value);
  }

  get startDateDay() {
    return this.getAttribute("start-date-day");
  }

  set allowedYears(value) {
    this.setAttribute("allowed-years", JSON.stringify(value));
  }

  get allowedYears() {
    return JSON.parse(this.getAttribute("allowed-years"));
  }

  set allowedYearsRange(value) {
    this.setAttribute("allowed-years-range", value);
  }

  get allowedYearsRange() {
    return this.getAttribute("allowed-years-range");
  }
}

defineOnce(AXAMDatepicker.tagName, AXAMDatepicker);

export default AXAMDatepicker;
