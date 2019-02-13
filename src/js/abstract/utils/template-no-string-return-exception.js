class TemplateNoStringReturnException extends Error {
  constructor(node, ...params) {
    const message = `
    Web Component ${node.nodeName}%c#${node._id} does not accept string as a return from a template. Maybe use bel?}`;

    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message, ...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TemplateNoStringReturnException);
    }

    // Custom debugging information
    this.name = 'TemplateNoStringReturnException';
  }
}

export default TemplateNoStringReturnException;
