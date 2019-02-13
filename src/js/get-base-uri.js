/**
 * Get the base-URI of the current document.
 *
 * @returns {string}
 */
function getBaseURI() {
  if (document.baseURI) {
    return document.baseURI;
  }

  const base = document.getElementsByName("base");

  if (base.length && base[0].href) {
    return base[0].href;
  }

  return window.location.href;
}

export default getBaseURI;
