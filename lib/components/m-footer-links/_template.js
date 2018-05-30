import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';

var arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';

export default function (_ref) {
  var _mFooterLinksCategory, _mFooterLinksList, _mFooterLinksBlock;

  var title = _ref.title,
      items = _ref.items;

  return _mFooterLinksBlock = document.createElement('div'), _mFooterLinksBlock.setAttribute('class', 'm-footer-links__block js-dropdown'), _appendChild(_mFooterLinksBlock, ['\n    ', (_mFooterLinksCategory = document.createElement('strong'), _mFooterLinksCategory.setAttribute('class', 'm-footer-links__category js-dropdown__toggle'), _appendChild(_mFooterLinksCategory, [title, raw(arrowIcon)]), _mFooterLinksCategory), '\n\n    ', (_mFooterLinksList = document.createElement('ul'), _mFooterLinksList.setAttribute('class', 'm-footer-links__list'), _appendChild(_mFooterLinksList, ['\n      ', Array.isArray(items) && items.map(function (_ref2, index) {
    var _mFooterLinksLink, _li;

    var name = _ref2.name,
        url = _ref2.url,
        isActive = _ref2.isActive;
    return _li = document.createElement('li'), _li.setAttribute('class', 'm-footer-links__list-item ' + String(isActive ? 'is-footer-links__list-item-active' : '') + ''), _appendChild(_li, ['\n          ', (_mFooterLinksLink = document.createElement('a'), _mFooterLinksLink.setAttribute('href', '' + String(url) + ''), _mFooterLinksLink.setAttribute('index', '' + String(index) + ''), _mFooterLinksLink.setAttribute('class', 'm-footer-links__link js-footer-links__link'), _appendChild(_mFooterLinksLink, [name]), _mFooterLinksLink), '\n        ']), _li;
  }), '\n    ']), _mFooterLinksList), '\n  ']), _mFooterLinksBlock;
}