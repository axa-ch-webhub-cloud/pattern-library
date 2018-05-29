import _Array$from from 'babel-runtime/core-js/array/from';
import _appendChild from 'nanohtml/lib/append-child';


export default (function (props, _ref) {
  var _mHeaderMetaRightList;

  var children = _ref.children;
  return _mHeaderMetaRightList = document.createElement('ul'), _mHeaderMetaRightList.setAttribute('class', 'm-header-meta-right__list'), _appendChild(_mHeaderMetaRightList, ['\n    ', _Array$from(children).map(function (child) {
    var _mHeaderMetaRightListItem;

    return _mHeaderMetaRightListItem = document.createElement('li'), _mHeaderMetaRightListItem.setAttribute('class', 'm-header-meta-right__list-item'), _appendChild(_mHeaderMetaRightListItem, [child]), _mHeaderMetaRightListItem;
  }), '\n  ']), _mHeaderMetaRightList;
});