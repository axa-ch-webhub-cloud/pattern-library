import React, { createElement, useState } from 'react';
import createAXAFooterReact from '../index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

const DemoFooter = () => {
  const content = [
    {
      title: 'axa & you',
      items: [
        {
          text: 'Contact',
          link: 'https://axa.ch/en/private-customers.html',
          external: true,
        },
        {
          text: 'Report a claim',
          link: 'https://axa.ch/en/private-customers.html',
          external: true,
        },
        {
          text: 'Broker',
          link: 'https://axa.ch/en/private-customers.html',
          external: true,
        },
        {
          text: 'Job vacancies',
          link: 'https://axa.ch/en/private-customers.html',
        },
        { text: 'MyAXA', link: 'https://axa.ch/en/private-customers.html' },
        {
          text: 'Customer reviews',
          link: 'https://axa.ch/en/private-customers.html',
        },
        {
          text: 'Garage Portal',
          link: 'https://axa.ch/en/private-customers.html',
        },
      ],
    },
    {
      title: 'axa worldwide',
      items: [
        {
          text: 'AXA worldwide',
          link: 'https://axa.ch/en/private-customers.html',
          external: true,
        },
      ],
    },
  ];

  const social = {
    title: 'stay in touch',
    icons: [
      { title: 'facebook', link: 'https://www.facebook.com/axach/' },
      {
        title: 'instagram',
        link: 'https://www.instagram.com/axaswitzerland/',
      },
      { title: 'twitter', link: 'https://twitter.com/axa_schweiz' },
      { title: 'xing', link: 'https://www.xing.com/companies/AXAWINTERTHUR' },
      { title: 'youtube', link: 'https://www.youtube.com/axaschweiz' },
      { title: 'linkedin', link: 'https://www.linkedin.com/company/axa/' },
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
