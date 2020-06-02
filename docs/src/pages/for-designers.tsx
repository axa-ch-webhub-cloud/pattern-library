import React from 'react';
import Layout from '../components/Layout';

import DesignersHero from '../components/DesignersHero';
import Media from '../components/Media';

import kitchenImage from '../images/design-post-images/kitchen.jpg';
import haigoSystemImage from '../images/design-post-images/axa-haigo-design-world.jpg';
import mobileAppImage from '../images/design-post-images/banking.jpg';
import SEO from '../components/SEO';

const mediaItems = [
  {
    title: 'A Design System is like a kitchen',
    image: kitchenImage,
    published: 'Nov, 2019',
    link:
      'https://medium.com/future-haigo/a-design-system-is-like-a-kitchen-9bfbfd9c7de2',
  },
  {
    title: 'Create a design system for the leader in the insurance industry',
    image: haigoSystemImage,
    published: 'Jan, 2020',
    link: 'https://haigo.fr/clients/axa-design-system/',
  },
  {
    title: 'Design a mobile banking application',
    image: mobileAppImage,
    published: 'July, 2018',
    link: 'http://www.makemethink.fr/2017/01/application-axa-banque/',
  },
];

export default class DesignerPage extends React.Component {
  render() {
    return (
      <Layout withCallToAction={true} withSideBar={false}>
        <SEO title="Designers &middot; AXA Design System" />

        <DesignersHero />
        <Media title="From Our Design Blog" items={mediaItems} />
      </Layout>
    );
  }
}
