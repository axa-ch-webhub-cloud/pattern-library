import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';
import Callout from '../components/Callout';

import heroImage from '../images/colors/hero.svg';
import LogoImage from '../favicon.png';
import aaImage from '../images/typography/aa-black.png';
import { NativeLink } from '../components/NativeLinks';
import ColorGroup from '../components/ColorGroup';

interface Props {}

const colorItems = [
  {
    id: 'blue-base',
    hexacode: '#00008f',
    usage: 'CTA - Primary color',
  },
  {
    id: 'blue-dark',
    hexacode: '#000072',
    usage: 'CTA - Active state',
  },
  {
    id: 'blue-light',
    hexacode: '#4976ba',
    usage: 'Background',
  },
  {
    id: 'black',
    hexacode: '#333333',
    usage: 'Text - default (primary)',
  },
  {
    id: 'neutral-600',
    hexacode: '#999999',
    usage: 'Text secondary Placeholder',
  },
  {
    id: 'neutral-500',
    hexacode: '#c9c9c9',
    usage: 'Text - disabled line and icons',
  },
  {
    id: 'neutral-400',
    hexacode: ' #d8d8d8',
    usage: 'hover items-list',
  },
  {
    id: 'neutral-200',
    hexacode: '#eeeeee',
    usage: 'Background disabled',
  },
  {
    id: 'red-base',
    hexacode: '#f07662',
    usage: 'item-menu-bar-active',
  },
  {
    id: 'red-dark',
    hexacode: '#c91432',
    usage: 'Error message',
  },
  {
    id: 'green-base',
    hexacode: '#1cc54e',
    usage: 'Success message',
  },
];

export default function ColorsPage({}: Props): ReactElement {
  return (
    <Layout withCallToAction withInfoBar>
      <SEO title="Current Design System Colors" />

      <Container>
        <PageIntroduction title="Colors" imageUrl={heroImage}>
          The AXA digital color palette consists of 27 unique colors, grouped in
          5 distinct usage bundles, each addressing a specific context.
          Currently the AXA Design System uses 4 out of 5 of these bundles. For
          further information on the full palette, please visit the{' '}
          <NativeLink href="https://design.axa.com/web-guidelines/welcome">
            Digital Guidelines
          </NativeLink>
          .
        </PageIntroduction>

        <h2 className="h2 mt-0">Colors accessibility</h2>
        <p className="paragraph">
          Accessibility on digital is something we highly value and our goal is
          to create inclusive digital products made for and consumable by all
          people. We are constantly working to evolve our assets to respect the
          accessibility guidelines.
        </p>

        <ColorGroup items={colorItems} />

        <Callout
          imageUrl={aaImage}
          title="Check colors accessibility"
          description="Wondering if your design respects the Web Content Accessibility Guidelines? This tool can be of help."
          linkToTitle="Check now"
          linkToUrl="https://usecontrast.com/guide"
        />
      </Container>

      <Container background="bg-neutral-200">
        <h2 className="h2 mt-0">AXA Digital Guidelines</h2>
        <p className="paragraph">
          The AXA Digital Guidelines are a set of rules and advice on how to use
          the full range of design assets in your digital project.
        </p>

        <Callout
          imageUrl={LogoImage}
          title="Colors"
          description="Find rules and best practice on how to make the best of the full AXA design elements on digital."
          linkToTitle="Discover"
          linkToUrl="https://design.axa.com/web-guidelines/color"
        />
      </Container>
    </Layout>
  );
}
