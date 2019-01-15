import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import { getAllLocaleMonthsArray, getSpecificYears, getWeekdays } from '../../js/date';
import localePropType from '../../js/prop-types/locale-prop-type';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';
import Datepicker from './js/datepicker';

class AXAMDatepicker extends BaseComponentGlobal {
    static tagName = 'axa-m-datepicker'
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
      lowerEndYear: PropTypes.number,
      higherEndYear: PropTypes.number,
      startDateMonthTitle: PropTypes.string,
      startDateYearTitle: PropTypes.string,
      monthItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isSelected: PropTypes.bool,
        value: PropTypes.string,
      })),
      yearItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isSelected: PropTypes.bool,
        value: PropTypes.string,
      })),
    }

    init() {
      super.init({ styles, template });
    }

    connectedCallback() {
      super.connectedCallback();
      this.className = `${this.initialClassName} m-datepicker`;

      // This method is triggered up to a millions times.... but it's needed here else, no items are available
      this.props.monthItems = getAllLocaleMonthsArray(this.props.locale).map((item, index) => ({
        isSelected: index === this.props.startDateMonth - 1,
        name: item.toString(),
        value: index.toString(),
        url: item.url,
      }));

      const lowerEndYear = this.props.allowedYears[0];
      const higherEndYear = this.props.allowedYears[this.props.allowedYears.length - 1];
      const years = getSpecificYears({ lowerEndYear, higherEndYear });

      this.props.yearItems = years.map(item => ({
        isSelected: item === this.props.startDateYear,
        name: item.toString(),
        value: item.toString(),
        url: item.url,
      }));

      // Create a date object from year, month and day props/attributes
      this.props.startDate = new Date(this.props.startDateYear, this.props.startDateMonth - 1, this.props.startDateDay);
      this.props.weekdays = getWeekdays(this.props.startDate, this.props.locale);
      this.props.startDateMonthTitle = this.props.startDate.toLocaleString(this.props.locale, { month: 'long' });
      this.props.startDateYearTitle = this.props.startDateYear;

      this.datepicker = new Datepicker(this);
      this.datepicker.init();
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.datepicker.destroy();
    }

    get locale() {
      return this.getAttribute('locale');
    }

    set locale(value) {
      this.setAttribute('locale', value);
    }

    get yearItems() {
      let out = '';
      if (this.hasAttribute('year-items')) {
        out = JSON.parse(this.getAttribute('year-items'));
      }
      return out;
    }

    set yearItems(value) {
      this.setAttribute('year-items', JSON.stringify(value));
    }

    get monthItems() {
      let out = '';
      if (this.hasAttribute('month-items')) {
        out = JSON.parse(this.getAttribute('month-items'));
      }
      return out;
    }

    set monthItems(value) {
      this.setAttribute('month-items', JSON.stringify(value));
    }

    set startDateYear(value) {
      this.setAttribute('start-date-year', value);
    }

    get startDateYear() {
      return this.getAttribute('start-date-year');
    }

    set startDateMonth(value) {
      this.setAttribute('start-date-month', value);
    }

    get startDateMonth() {
      return this.getAttribute('start-date-month');
    }

    set startDateDay(value) {
      this.setAttribute('start-date-day', value);
    }

    get startDateDay() {
      return this.getAttribute('start-date-day');
    }

    set allowedYears(value) {
      this.setAttribute('allowed-years', value);
    }

    get allowedYears() {
      return this.getAttribute('allowed-years');
    }
}

defineOnce(AXAMDatepicker.tagName, AXAMDatepicker);

export default AXAMDatepicker;
