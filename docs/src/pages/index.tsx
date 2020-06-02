import React from 'react';

import Layout from '../components/Layout';

import Features from '../components/Features';
import HomeHero from '../components/HomeHero';

import MediaAtomic from '../components/MediaAtomic';
import brandSystem from '../images/introduction/constant.svg';
import atomsSystem from '../images/introduction/atoms.svg';
import moleculesSystem from '../images/introduction/molecules.svg';
import organismSystems from '../images/introduction/organisms.svg';
import SEO from '../components/SEO';

const mediaItems = [
  {
    title: 'Brand Identity',
    topic: 'Constants',
    image: brandSystem,
    link: '/components/icons',
  },
  {
    title: 'Atoms',
    topic: 'Base elements',
    image: atomsSystem,
    link: '/atoms',
  },
  {
    title: 'Molecules',
    topic: 'Components',
    image: moleculesSystem,
    link: '/molecules',
  },
  {
    title: 'Organisms',
    topic: 'Complex elements',
    image: organismSystems,
    link: '/molecules',
  },
];

export default class Root extends React.Component {
  render() {
    return (
      <Layout withCallToAction>
        <SEO title="AXA Design System" />

        <Features />
        <HomeHero />
        <MediaAtomic title="Start developing" items={mediaItems} />
      </Layout>
    );
  }
}
