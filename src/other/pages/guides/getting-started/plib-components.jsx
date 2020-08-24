// eslint-disable-next-line import/no-extraneous-dependencies
import { createElement } from 'react';
import createAXAText from '../../../../components/10-atoms/text/index.react';
import createAXAHeading from '../../../../components/10-atoms/heading/index.react';

const AXAText = createAXAText(createElement);
const AXAHeading = createAXAHeading(createElement);

export { AXAText, AXAHeading };
