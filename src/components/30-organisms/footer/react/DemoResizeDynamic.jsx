import React, { useState } from 'react';
import AXAFooterReact from './AXAFooterReact';

const DemoResizeExample = () => {
  const [col1ItemsCount, setCol1ItemsCount] = useState(10);

  const onItemsChangeClick = () => {
    setCol1ItemsCount(col1ItemsCount === 10 ? 8 : 10);
  };

  return (
    <div className="App">
      <h1>Footer col1 items count: {col1ItemsCount}</h1>
      <button type="button" onClick={onItemsChangeClick} id="footerTestButton">
        Click to change footer items
      </button>
      <br />
      <br />
      <AXAFooterReact onItemClick={() => {}} clickevents>
        <h2 slot="column-title">Col 1</h2>
        {Array.from(Array(col1ItemsCount).keys()).map(i => (
          <a key={i} slot="column-item" href="www.example.com" target="_blank">
            Item <span>{i + 1}</span>
          </a>
        ))}
      </AXAFooterReact>
    </div>
  );
};

export default DemoResizeExample;
