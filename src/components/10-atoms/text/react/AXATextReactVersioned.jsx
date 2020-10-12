import { createElement } from 'react';
import createAXAText from '../index.react';

const customVersionSuffix = 'mypod';
const AXAText = createAXAText(createElement, customVersionSuffix);

export default AXAText;
