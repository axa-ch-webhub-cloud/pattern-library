import React, { createElement, useState } from 'react';
import createAXAButtonReact from '../../components/10-atoms/button/index.react';

const AXAButtonReact = createAXAButtonReact(createElement);

const DemoButton = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <div>
      <p>with react wrapper - callback props are possible, too:</p>
      <AXAButtonReact onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButtonReact>

      <form>
        <p>
          I&apos;m type submit Button in a form, on click I send you to nirvana
        </p>
        <AXAButtonReact type="submit" onClick={handleAXAButtonClick}>
          Click me, I send you to Nirvana
        </AXAButtonReact>
      </form>

      <form onSubmit={handleSubmit}>
        <p>
          I&apos;m type submit Button in a form, on click I stop submit event
          for you for example you can validate me
        </p>
        <AXAButtonReact type="submit" onClick={handleAXAButtonClick}>
          Click me I prevent submit
        </AXAButtonReact>
      </form>

      <form onSubmit={handleSubmit}>
        <p>
          I&apos;m type reset Button in a form, if you type something - on click
          I should reset the input
        </p>
        <input type="text" />
        <AXAButtonReact type="reset" onClick={handleAXAButtonClick}>
          Click me I reset the input
        </AXAButtonReact>
      </form>
    </div>
  );
};

export default DemoButton;
