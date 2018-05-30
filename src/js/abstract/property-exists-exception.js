class PropertyExistsException extends Error {
  constructor(key, node, ...params) {
    const message = `
    Native Property >>>${key}<<< exists already at ${node.nodeName}#${node._id} and evaluates to -> ${node[key]}.
    Please consult the HTML spec for inherited DOM properties:
    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties
    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties`;

    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message, ...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PropertyExistsException);
    }

    // Custom debugging information
    this.name = 'PropertyExistsException';
  }
}

export default PropertyExistsException;
