const cpx = require("cpx");
const CWD = process.cwd();

cpx.copy(`${CWD}/node_modules/webcomponents.js/webcomponents-lite.min.js`, `${CWD}/dist/app`)
