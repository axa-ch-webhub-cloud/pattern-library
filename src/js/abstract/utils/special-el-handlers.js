export default specialElHandlers;

// applies special el handlers depending on the node name.
// (obj, obj) -> null
function specialElHandlers(newNode, oldNode) {
  const { nodeName } = newNode;

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === "INPUT") {
    updateInput(newNode, oldNode);
  } else if (nodeName === "OPTION") {
    updateOption(newNode, oldNode);
  } else if (nodeName === "TEXTAREA") {
    updateTextarea(newNode, oldNode);
  } else if (nodeName === "SELECT") {
    updateSelect(newNode, oldNode);
  }
}

function updateOption(newNode, oldNode) {
  updateAttribute(newNode, oldNode, "selected");
}

function updateSelect(newNode, oldNode) {
  let selectedIndex = -1;
  let i = 0;
  // We have to loop through children of oldNode, not newNode since nodes can be moved
  // from newNode to oldNode directly when morphing.
  // At the time this special handler is invoked, all children have already been morphed
  // and appended to / removed from newNode, so using oldNode here is safe and correct.
  let curChild = oldNode.firstChild;
  let optGroup;
  let nodeName;
  while (curChild) {
    nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
    if (nodeName === "OPTGROUP") {
      optGroup = curChild;
      curChild = optGroup.firstChild;
    } else {
      if (nodeName === "OPTION") {
        if (curChild.hasAttributeNS(null, "selected")) {
          selectedIndex = i;
          break;
        }
        i += 1;
      }
      curChild = curChild.nextSibling;
      if (!curChild && optGroup) {
        curChild = optGroup.nextSibling;
        optGroup = null;
      }
    }
  }
  oldNode.selectedIndex = selectedIndex;
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput(newNode, oldNode) {
  const { value: newValue } = newNode;
  const { value: oldValue } = oldNode;

  updateAttribute(newNode, oldNode, "checked");
  updateAttribute(newNode, oldNode, "disabled");

  if (newValue !== oldValue) {
    oldNode.setAttribute("value", newValue);
    oldNode.value = newValue;
  }

  if (newValue === "null") {
    oldNode.value = "";
    oldNode.removeAttribute("value");
  }

  if (!newNode.hasAttributeNS(null, "value")) {
    oldNode.removeAttribute("value");
  } else if (oldNode.type === "range") {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue;
  }
}

function updateTextarea(newNode, oldNode) {
  const { value: newValue } = newNode;

  if (newValue !== oldNode.value) {
    oldNode.value = newValue;
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (
      newValue === "" &&
      oldNode.firstChild.nodeValue === oldNode.placeholder
    ) {
      return;
    }

    oldNode.firstChild.nodeValue = newValue;
  }
}

function updateAttribute(newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name];

    if (newNode[name]) {
      oldNode.setAttribute(name, "");
    } else {
      oldNode.removeAttribute(name);
    }
  }
}
