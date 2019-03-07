/** Code below modified from Cypress select source
 *
 * https://github.com/cypress-io/cypress/blob/2b2b6d99a9f1bf232d9c7396b25390913d5f2b18/packages/driver/src/cy/commands/actions/select.coffee
 *
 */

import _ from 'lodash';
import $ from 'jquery';

const newLineRe = /\n/g;

export function shadowSelect(subject, valueOrText, options = {}) {
  valueOrText = [].concat(valueOrText);

  function getOptions() {
    var optionEls, optionsObjects, uniqueValues, values;
    values = [];
    optionEls = [];
    optionsObjects = subject
      .find('option')
      .map(function(index, el) {
        let optEl, trimmedText, value;
        value = el.value;
        optEl = $(el);
        if (valueOrText.indexOf(value) >= 0) {
          optionEls.push(optEl);
          values.push(value);
        }
        trimmedText = optEl
          .text()
          .replace(newLineRe, '')
          .trim();
        return {
          value: value,
          originalText: optEl.text(),
          text: trimmedText,
          $el: optEl,
        };
      })
      .get();
    if (!values.length) {
      uniqueValues = _.chain(optionsObjects)
        .map('value')
        .uniq()
        .value();
      _.each(optionsObjects, function(obj, index) {
        var ref;
        if (((ref = obj.text), valueOrText.indexOf(ref) >= 0)) {
          optionEls.push(obj.$el);
          return values.push(obj.value);
        }
      });
    }
    return {
      values: values,
      optionEls: optionEls,
      optionsObjects: optionsObjects,
    };
  }
  var obj = getOptions();
  var optionEls, optionsObjects, values;
  if (obj == null) {
    obj = {};
  }
  (values = obj.values), (optionEls = obj.optionEls), (optionsObjects = obj.optionsObjects);
  subject.val(values);
  var input = new Event('input', {
    bubbles: true,
    composed: true,
    cancelable: false,
  });
  subject.get(0).dispatchEvent(input);
  var change = document.createEvent('HTMLEvents');
  change.initEvent('change', true, false);
  subject.get(0).dispatchEvent(change);
}
