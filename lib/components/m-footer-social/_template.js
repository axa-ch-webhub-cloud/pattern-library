import _appendChild from 'nanohtml/lib/append-child';


export default function (_ref) {
  var _mFooterSocialList, _mFooterSocialBox, _mFooterSocialTitle;

  var title = _ref.title,
      _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items;

  return _mFooterSocialBox = document.createElement('aside'), _mFooterSocialBox.setAttribute('class', 'm-footer-social__box'), _appendChild(_mFooterSocialBox, ['\n    ', title && (_mFooterSocialTitle = document.createElement('strong'), _mFooterSocialTitle.setAttribute('class', 'm-footer-social__title'), _appendChild(_mFooterSocialTitle, [title]), _mFooterSocialTitle), '\n\n    ', (_mFooterSocialList = document.createElement('ul'), _mFooterSocialList.setAttribute('class', 'm-footer-social__list'), _appendChild(_mFooterSocialList, ['\n      ', Array.isArray(items) && items.map(function (_ref2) {
    var _axaIcon, _mFooterSocialLink, _mFooterSocialListItem;

    var name = _ref2.name,
        url = _ref2.url;
    return _mFooterSocialListItem = document.createElement('li'), _mFooterSocialListItem.setAttribute('class', 'm-footer-social__list-item'), _appendChild(_mFooterSocialListItem, ['\n          ', (_mFooterSocialLink = document.createElement('a'), _mFooterSocialLink.setAttribute('href', '' + String(url) + ''), _mFooterSocialLink.setAttribute('class', 'm-footer-social__link'), _appendChild(_mFooterSocialLink, ['\n            ', (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', '' + String(name) + ''), _axaIcon.setAttribute('classes', 'm-footer-social__icon'), _axaIcon), '\n          ']), _mFooterSocialLink), '\n        ']), _mFooterSocialListItem;
  }), '\n    ']), _mFooterSocialList), '\n  ']), _mFooterSocialBox;
}