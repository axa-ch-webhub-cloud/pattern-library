import { createElement } from 'react';

import createAXACheckboxReact from '../../../10-atoms/checkbox/index.react';

const podNameAsVersionSuffix = 'rsv';

const AXACheckboxReact = createAXACheckboxReact(createElement, podNameAsVersionSuffix);

export default AXACheckboxReact;
