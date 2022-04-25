import React, { useState } from 'react';
import AXAButton from './AXAButton';

function DemoButtonForm() {
  const [buttonText, setButtonText] = useState(`0 times clicked`);

  const handleSubmitAndChangeText = ev => {
    ev.preventDefault();
    const count = parseInt(buttonText, 10) || 0;
    setButtonText(`${count + 1} times clicked`);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <div>
      <form>
        <p>
          I&apos;m type submit Button in a form, on click I send you to nirvana
        </p>
        <AXAButton type="submit">Click me, I send you to Nirvana</AXAButton>
      </form>

      <form onSubmit={handleSubmit}>
        <p>
          I&apos;m type submit Button in a form, on click I stop submit event
          for you for example you can validate me
        </p>
        <AXAButton type="submit">Click me I prevent submit</AXAButton>
      </form>

      <form onSubmit={handleSubmitAndChangeText}>
        <p>
          I&apos;m type submit Button in a form, on click I stop submit event
          for you and change my child label text
        </p>
        <AXAButton type="submit" data-test-id="button-submit-text-change">
          {buttonText}
        </AXAButton>
      </form>

      <form>
        <p>
          I&apos;m type reset Button in a form, if you type something - on click
          I should reset the input
        </p>
        <input type="text" />
        <AXAButton type="reset">Click me I reset the input</AXAButton>
      </form>
    </div>
  );
}

export default DemoButtonForm;
