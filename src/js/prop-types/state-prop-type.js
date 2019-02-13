import PropTypes from "./prop-types";

const statePropType = PropTypes.oneOf(["ok", "pending", "error", "unknown"]);

export default statePropType;
