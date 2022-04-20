// sanitize SVG, preventing XSS attacks etc.
// (uses ideas from https://github.com/mattkrick/sanitize-svg/blob/master/src/sanitizeSVG.ts#L19)
export const sanitizeSVG = (svgText) => {
  // create a container, which will remain disconnected from live DOM
  const root = document.createElement('div');
  // parse putative <svg>....</svg>
  root.innerHTML = svgText; // this does *not* execute scripts
  // get <svg> DOM node
  const svg = root.firstElementChild;
  // reject anything non-SVG
  if (!svg || svg.tagName.toLowerCase() !== 'svg') return '';
  // no embeded <script>s
  if (svg.getElementsByTagName('script').length) return '';
  for (let i = 0, attrs = svg.attributes, n = attrs.length; i < n; i++) {
    // no embedded event handlers
    if (attrs[i].name.startsWith('on')) return '';
  }
  return svgText;
};
