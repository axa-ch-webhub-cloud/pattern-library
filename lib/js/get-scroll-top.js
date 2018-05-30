/**
 * @returns {Number} - Returns the document's top scroll position.
 */
var getScrollTop = 'pageYOffset' in window ? pageYOffset : scrollTop;

function pageYOffset() {
  return window.pageYOffset;
}

function scrollTop() {
  var _document = document,
      body = _document.body,
      documentElement = _document.documentElement;


  return documentElement.scrollTop || body.scrollTop || 0;
}

export default getScrollTop;