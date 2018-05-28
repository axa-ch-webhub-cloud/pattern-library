import _on from '../../../js/on';
import fire from '../../../js/fire';
import getAttribute from '../../../js/get-attribute';
import { subscribe } from '../../../js/pubsub';
import DropDown from '../../m-dropdown/js/drop-down';

var hasDropdownBreakpoints = 'xs';

// @TODO: dependency to a-device-state not explicit
/**
 * @fires FooterLinks#axa-click
 */

var FooterLinks = function () {
  function FooterLinks(wcNode, options) {
    babelHelpers.classCallCheck(this, FooterLinks);

    this.wcNode = wcNode;
    this.options = babelHelpers.extends({}, FooterLinks.DEFAULTS, options);

    this.handleClick = this.handleClick.bind(this);

    this.on();
  }

  babelHelpers.createClass(FooterLinks, [{
    key: 'on',
    value: function on() {
      var _this = this;

      this.off();

      this.unsubscribe = subscribe('device-state/change', function (event) {
        var breakpoint = event.detail.breakpoint;

        var hasDropdown = hasDropdownBreakpoints.indexOf(breakpoint) > -1;

        if (hasDropdown && !_this.dropDown) {
          _this.dropDown = new DropDown(_this.wcNode);
        } else if (!hasDropdown && _this.dropDown) {
          _this.dropDown.destroy();
          delete _this.dropDown;
        }
      });

      this.unClick = _on(this.wcNode, 'click', this.options.link, this.handleClick, { passive: false });
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }

      if (this.unClick) {
        this.unClick();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event, delegateTarget) {
      // @todo: would be cool to be able to use props here, cause now it needs JSON.parse...
      var index = getAttribute(delegateTarget, 'index');
      var items = this.wcNode.items;
      /**
       * axa-click event.
       *
       * @event FooterLinks#axa-click
       * @type {object}
       */

      var cancelled = fire(this.wcNode, 'axa-click', items[index], { bubbles: true, cancelable: true, composed: true });

      if (!cancelled) {
        event.preventDefault();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.off();

      if (this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
      }

      delete this.wcNode;
    }
  }]);
  return FooterLinks;
}();

FooterLinks.DEFAULTS = {
  link: 'js-footer-links__link'
};
export default FooterLinks;