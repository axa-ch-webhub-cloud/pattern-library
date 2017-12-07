const getScrollTop = 'pageYOffset' in window ? pageYOffset : scrollTop;

function pageYOffset() {
  return window.pageYOffset;
}

function scrollTop() {
  const { body, documentElement } = document;

  return documentElement.scrollTop || body.scrollTop || 0;
}

export default getScrollTop;
