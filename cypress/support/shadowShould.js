import $ from 'jquery';
import { get } from 'lodash';
import chai, { expect } from 'chai';
import chaijq from 'chai-jquery';

// chai-jquery is overwritten by cypress and blows up with shadowdom
// our should calls will not blow up on shadow dom because we
// use chai jquery directly
try {
  chai.use((...args) => chaijq(...args, $));
} catch (ex) {
  console.log(ex);
}

export function should(subject, chainer, check, value) {
  const caller = expect(subject).to,
    expectation = get(caller, chainer);
  if (expectation) {
    expectation.call(caller, check, value);
  } else {
    Cypress.log(`Chainer not currently supported by .shadowShould: ${chainer}`);
  }
}

export function ensureChainerExists(subject, chainer) {
  const expectation = get(expect(subject).to, chainer);
}
