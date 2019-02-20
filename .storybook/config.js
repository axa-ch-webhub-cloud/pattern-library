import { configure } from "@storybook/html";
import "@webcomponents/webcomponentsjs";
import "core-js/es6/reflect";
import "core-js/es6/promise";
import "core-js/fn/array/from";
import "core-js/fn/object/assign";
import "core-js/fn/object/create";
import "core-js/fn/object/define-properties";
import "core-js/fn/object/set-prototype-of";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("..", true, /_demo/));
}

configure(loadStories, module);
