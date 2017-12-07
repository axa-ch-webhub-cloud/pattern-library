export function getViewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

export function getViewportHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export default {
  getViewportWidth,
  getViewportHeight,
};
