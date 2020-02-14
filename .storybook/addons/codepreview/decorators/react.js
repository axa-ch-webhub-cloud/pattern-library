import React, { useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { EVENT_CODE_RECEIVED } from '../shared';
import { parameters } from '.';

const Wrapper = ({ setCode, children }) => {
  let wrapperRef = React.createRef();
  useEffect(() => {
    setCode(wrapperRef.current.innerHTML);
  });
  return <div ref={wrapperRef}>{children}</div>;
};

export const withHTML = makeDecorator({
  ...parameters,
  wrapper: (getStory, context, { options = {} }) => {
    const channel = addons.getChannel();
    return (
      <Wrapper
        setCode={html => {
          channel.emit(EVENT_CODE_RECEIVED, { html, options });
        }}
      >
        {getStory()}
      </Wrapper>
    );
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
