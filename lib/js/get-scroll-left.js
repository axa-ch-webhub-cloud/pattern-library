/**
 * @returns {Number} - Returns the document's left scroll position.
 */
var getScrollLeft = 'pageXOffset' in window ? pageXOffset : scrollLeft;

function pageXOffset() {
  return window.pageXOffset;
}

function scrollLeft() {
  var _document = document,
      body = _document.body,
      documentElement = _document.documentElement;


  return documentElement.scrollLeft || body.scrollLeft || 0;
}

export default getScrollLeft;