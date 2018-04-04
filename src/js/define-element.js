import wcdomready from './wcdomready';
import dasherize from './dasherize';

export default function defineElement(tagName) {
  return function (target) {
    const tagNameToDefine = tagName || dasherize(target.name);

    const generated = class extends target {
      //props to add
    };

    wcdomready(() => {
      window.customElements.define(tagNameToDefine, generated);
    });

    return generated;
  };
}
