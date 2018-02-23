/**
 * @returns {Number} - Returns the document's left scroll position.
 */
const getScrollLeft = 'pageXOffset' in window ? pageXOffset : scrollLeft;

function pageXOffset() {
  return window.pageXOffset;
}

function scrollLeft() {
  const { body, documentElement } = document;

  return documentElement.scrollLeft || body.scrollLeft || 0;
}

export default getScrollLeft;
