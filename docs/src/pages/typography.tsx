import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import LogoImage from '../favicon.png';
import heroImage from '../images/typography/hero.png';
import fontsizeImage from '../images/typography/font-size.png';
import lineheightImage from '../images/typography/line-height.png';
import aaImage from '../images/typography/aa.png';
import bbImage from '../images/typography/bb.png';
import ccImage from '../images/typography/cc.png';
import ddImage from '../images/typography/dd.png';
import Callout from '../components/Callout';

import { fontDownloadUrl } from '../../siteConfig';

interface Props {}

export default function TypographyPage({}: Props): ReactElement {
  return (
    <Layout withCallToAction withInfoBar>
      <SEO title="Typography" />

      <Container>
        <PageIntroduction
          title="Typography"
          description="Source Sans Pro and Publico Headline are the two typefaces to be used on all AXA digital assets."
          imageUrl={heroImage}
        />

        <h2 className="h2">Font families</h2>
        <p className="paragraph">
          Below you will find all you need to know about Source Sans Pro &
          Publico Headline typeface.
        </p>

        <h3 className="h3">Publico Headline</h3>
        <p className="paragraph">
          Publico Headline is the first official serif typeface at AXA. Coupled
          with Source Sans Pro it enhances the design by adding rythm, creating
          a clear hierarchy and providing a strong visual identity.
        </p>
        <div className="Overview-shadow">
          <div className="ShadowBox shadow-lg">
            <p className="kicker mb-0 text-neutral-600">Publico headline</p>
            <p className="font-bold text-lg">Bold</p>
            <img
              src={aaImage}
              className="OverviewItem-image"
              alt="Publico headline preview"
            />
          </div>
        </div>

        <h3 className="h3">Source Sans Pro</h3>
        <p className="paragraph">
          Source Sans Pro is a sans serif typeface that has been chosen to
          transition from ITC Franklin Gothic and Metric as it works pretty well
          in all user interfaces, covers a large spectrum of signs and has no
          cost.
        </p>
        <div className="Overview-shadow">
          <div className="ShadowBox shadow-lg">
            <p className="kicker mb-0 text-neutral-600">Source sans Pro</p>
            <p className="font-bold text-lg">Bold</p>
            <img
              src={bbImage}
              className="OverviewItem-image"
              alt="Source sans Pro preview"
            />
          </div>
          <div className="ShadowBox shadow-lg">
            <p className="kicker mb-0 text-neutral-600">Source sans Pro</p>
            <p className="font-bold text-lg">Semibold</p>
            <img
              src={ccImage}
              className="OverviewItem-image"
              alt="Source sans Pro preview"
            />
          </div>
          <div className="ShadowBox shadow-lg">
            <p className="kicker mb-0 text-neutral-600">Source sans Pro</p>
            <p className="font-bold text-lg">Regular</p>
            <img
              src={ddImage}
              className="OverviewItem-image"
              alt="Source sans Pro preview"
            />
          </div>
        </div>
      </Container>

      <Container background="bg-neutral-200">
        <h2 className="h2">Get the typefaces</h2>
        <h3 className="h3">Publico headline</h3>
        <p className="paragraph">
          Publico Headline is a typeface, which is not available for free.
          Currently at AXA, each entity needs to purchase it directly on the
          Commercial Typeface Foundry website. Please note that you only need to
          purchase the 'bold' style. Get in touch with your entity's Brand
          manager to know more on the purchase procedures.
        </p>
        <Callout
          imageUrl={aaImage}
          title="Get Publico Headline typeface"
          description="Entities have to purchase it directly on Commercial Type Foundry's website. You will only need to purchase the 'bold' style"
          linkToTitle="Go to foundry"
          linkToUrl={fontDownloadUrl.heading}
        ></Callout>

        <h3 className="h3">Source Sans Pro</h3>
        <Callout
          imageUrl={aaImage}
          title="Get Source Sans Pro typeface"
          description="Source Sans Pro is a Google font with a free license."
          linkToTitle="Go to foundry"
          linkToUrl={fontDownloadUrl.content}
        ></Callout>
      </Container>

      <Container>
        <h2 className="h2">Usage rules</h2>
        <p className="paragraph">
          Please use the guidelines below in order to help you quickly identify
          the correct CSS to be applied to your headings.
        </p>
        <Tabs>
          <TabList>
            <Tab>Font size</Tab>
            <Tab>Line height</Tab>
          </TabList>

          <TabPanel>
            <img src={fontsizeImage} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={lineheightImage} alt="" />
          </TabPanel>
        </Tabs>
      </Container>

      <Container background="bg-neutral-200">
        <h2 className="h2">AXA Digital Guidelines</h2>
        <p className="paragraph">
          The AXA Digital Guidelines are a set of rules and advice on how to use
          the full range of design assets in your digital project.
        </p>

        <Callout
          imageUrl={LogoImage}
          title="Typography"
          description="Find rules and best practice on how to make the best of the full AXA design elements on digital."
          linkToTitle="Discover"
          linkToUrl="https://design.axa.com/web-guidelines/typography"
        />
      </Container>
    </Layout>
  );
}
