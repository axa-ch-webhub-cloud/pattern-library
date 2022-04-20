import React from 'react';
import AXAFooter from './Footer';

// eslint-disable-next-line react/prop-types
export const Footer = ({ col1ItemsCount }) => {
  const colData = Array.from(Array(col1ItemsCount).keys()).map((i) => (
    <a key={i} slot="column-item" href="www.example.com" target="_blank">
      Item <span>{i + 1}</span>
    </a>
  ));

  return (
    <AXAFooter onItemClick={() => {}} clickevents>
      <h2 slot="column-title">Col 1</h2>
      <>{colData}</>
    </AXAFooter>
  );
};
