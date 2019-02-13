/**
 * Get the viewport's width in pixels.
 *
 * @returns {Number} - Returns the viewport's width in pixels.
 */
export function getViewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * Get the viewport's height in pixels.
 *
 * @returns {Number} - Returns the viewport's height in pixels.
 */
export function getViewportHeight() {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
}

export default {
  getViewportWidth,
  getViewportHeight
};
