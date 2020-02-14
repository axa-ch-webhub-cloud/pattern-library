// copied from original NPM package https://github.com/whitespace-se/storybook-addon-html
// why? to rename the title of the panel

"use strict";

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _addons = require("@storybook/addons");

var _Panel = _interopRequireDefault(require("@whitespace/storybook-addon-html/lib/Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_addons.addons.register('ws/htmlMarkup', function () {
  _addons.addons.add('markup/panel', {
    title: 'Code Preview',
    type: _addons.types.PANEL,
    render: function render(_ref) {
      var active = _ref.active,
        key = _ref.key;
      return _react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, _react["default"].createElement(_Panel["default"], null));
    }
  });
});
