import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import { Hero, ButtonLink } from '../../patterns';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

interface Props {}

export default function HeroPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        Hero covers serve as the entry point to your digital content.{' '}
      </p>
      <h2 className="h2">Usage</h2>
      <p className="paragraph">
        "For business-oriented websites, the Hero Cover should display a
        commercial module: an immersive module presenting an offer with CTAs
        leading the user to commercial content. The Hero Cover can also be the
        ideal place to display Brand Campaign relays. A campaign module includes
        two elements: a full width branded visual and a CTA. "
      </p>
      <Hero
        variant="dark"
        imageSource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
      >
        <h2 slot="category">This example shows specific picture classes</h2>
        <h1 slot="title">Drive with peace of mind</h1>
        <p slot="content">
          Whether you need to insure your first car or renew your existing car
          insurance, AXA can provide a range of car insurance policies to suit
          your requirements and offer great product benefits at a price you can
          afford
        </p>
        <small slot="disclaimer">Terms and Conditions apply.</small>
        <ButtonLink
          href="https://axa.ch"
          slot="button"
          variant="red"
          size="large"
        >
          GET A QUOTE
        </ButtonLink>
      </Hero>

      <SyntaxHighlighter>{`
import '@axa-ch/commercial-hero-banner';
...
<axa-commercial-hero-banner variant="dark"
  imagesource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg">
    <h2 slot="category">This example shows specific picture classes</h2>
    <h1 slot="title">Drive with peace of mind</h1>
    <p slot="content">
      Whether you need to insure your first car or renew your existing car
      insurance, AXA can provide a range of car insurance policies to suit your
      requirements and offer great product benefits at a price you can afford
    </p>
    <small slot="disclaimer">Terms and Conditions apply.</small>
    <axa-button-link href="https://axa.ch" slot="button" variant="red" size="large">
      GET A QUOTE
    </axa-button-link>
</axa-commercial-hero-banner>
  `}</SyntaxHighlighter>

      <h2 className="h2">Variation</h2>
      <Hero
        variant="light"
        imageSource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
      >
        <h2 slot="category">This example shows specific picture classes</h2>
        <h1 slot="title">Drive with peace of mind</h1>
        <p slot="content">
          Whether you need to insure your first car or renew your existing car
          insurance, AXA can provide a range of car insurance policies to suit
          your requirements and offer great product benefits at a price you can
          afford
        </p>
        <small slot="disclaimer">Terms and Conditions apply.</small>
        <ButtonLink
          href="https://axa.ch"
          slot="button"
          variant="red"
          size="large"
        >
          GET A QUOTE
        </ButtonLink>
      </Hero>
    </Page>
  );
}
