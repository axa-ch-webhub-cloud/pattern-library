/* global navigator */

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

/**
 * Outer click events are broken on iOS and can only be activated by inline HTML attr `onclick` or CSS `cursor: pointer`.
 *
 * @param node
 */
// @TODO: Remove this ASAP as soon as cross-interface tap event is available, see:
// https://github.com/axa-ch/patterns-library/issues/287
function outeriOSSHAME(node) {
  if (!iOS) {
    return;
  }

  node.style.cursor = 'pointer';
}

export default outeriOSSHAME;
