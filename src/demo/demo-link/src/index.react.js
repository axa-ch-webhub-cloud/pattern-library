import AXADemoLink from './index';

export default wrappedCreateElement => () => wrappedCreateElement(AXADemoLink.tagName);
