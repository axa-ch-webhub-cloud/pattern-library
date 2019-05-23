import React, { createElement, useState } from 'react';
import createAXAFooterReact from '../index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

const DemoFooter = () => {
  const content = [
    {
      title: 'axa & you',
      items: [
        { text: 'Contact' },
        { text: 'Report a claim' },
        { text: 'Broker' },
        { text: 'Job vacancies' },
        { text: 'MyAXA' },
        { text: 'Customer reviews' },
        { text: 'Garage Portal' },
      ],
    },
    {
      title: 'axa worldwide',
      items: [{ text: 'AXA worldwide' }],
    },
  ];

  const social = {
    title: 'stay in touch',
    icons: [
      { title: 'facebook' },
      { title: 'instagram' },
      { title: 'twitter' },
      { title: 'xing' },
      { title: 'youtube' },
      { title: 'linkedin' },
    ],
  };

  const clickedyClickClickSir = () => {
    console.log('clickedy');
  };

  return (
    <div>
      <AXAFooterReact
        content={content}
        social={social}
        onItemClick={clickedyClickClickSir}
        dynamic
      />
    </div>
  );
};

export default DemoFooter;
