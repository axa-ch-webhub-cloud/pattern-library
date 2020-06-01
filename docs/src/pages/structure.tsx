import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageIntroduction from '../components/PageIntroduction';
import Callout from '../components/Callout';

import constantIcon from '../images/icons/constant.svg';
import atomIcon from '../images/icons/atom.svg';
import moleculeIcon from '../images/icons/molecule.svg';
import organismIcon from '../images/icons/organism.svg';
import VerticalItems from '../components/VerticalItems';

const categoryItems = [
  {
    kicker: 'Constants',
    text:
      'Elements that we categorize in the “Constants” category will be transversal element as font-size, line-height, colors, spacing units, elevation, etc. This are also elements that are not specific to a given component.',
    imageUrl: constantIcon,
  },
  {
    kicker: 'Atoms',
    text:
      'Elements that we categorize in the “Atoms” category will be basic elements, generally used more than once on a web page. They are generally embedded in other elements (larger ones), and have various states and variations.',
    imageUrl: atomIcon,
  },
  {
    kicker: 'Molecules',
    text:
      'Elements that we categorize in the “Molecules” category will generally be elements that contain smaller and simpler elements (atoms). Generally this elements are made for specific cases and can be used more than once.',
    imageUrl: moleculeIcon,
  },
  {
    kicker: 'Organisms',
    text:
      'Elements that we categorize in the “Organisms” category will generally be complex elements that are composed of smaller elements. You can think of Organisms as a “part” of a web page. A web page will be the result of the somme of organisms.',
    imageUrl: organismIcon,
  },
];

export default function StructurePage() {
  return (
    <Layout withCallToAction>
      <SEO title="What is atomic design ?" />
      <section className="MainLayout-contentRight">
        <div className="Container-nextToSidebar">
          <div className="Content">
            <PageIntroduction title="Structure approach" />
            <h2 className="h2">What is atomic design ?</h2>
            <p>
              Atomic Design by Brad Frost is the one of methodology that can
              accelerate the process of creating modular designs. He introduced
              the concept of atomic design about 5 years ago.
            </p>

            <blockquote>
              <p>
                “As the craft of web design continues to evolve, We’re
                recognizing the need to develop thoughtful design systems,
                rather than creating simple collections of web pages. Atomic
                design is a methodology for creating design systems.”
              </p>
              <cite>— Brad Frost</cite>
            </blockquote>

            <p>
              In my word, Build systems mean that not design or develop the
              front-end full pages. It’s like small element like as buttons. And
              all small components combine to a large unit like a label, box,
              table, forms. The final full pages are then just a combination of
              these units.it is the idea of the building system.
            </p>

            <Callout
              imageUrl={moleculeIcon}
              title="Atomic Design by Brad Frost "
              description="A methodology for creating design systems. Go deeper and discover Brad Frost Approach"
              linkToTitle="Know more"
              linkToUrl="https://bradfrost.com/blog/post/atomic-web-design/"
            ></Callout>

            <h2 className="h2" style={{ marginTop: 128 }}>
              How to categorize an element ?
            </h2>
            <p>
              Atomic Design, is an approch that allows you to decompose your UI
              elements in order to standardelize and organize them. An important
              question that we need to ask ourselves is “to what category does a
              given component belong to?”.
            </p>
          </div>

          <VerticalItems items={categoryItems} />

          <div className="Content">
            <p className="paragraph">
              Each design system can have its own categorization depending on
              the context and purpose. The objectif of the Axa design system is
              to be of use to all Axa entities, how have differents needs and
              constraints. The way we’ve thought the categorization of the
              elements is to allow for as much possibilities as possible.
            </p>

            <Callout
              imageUrl={organismIcon}
              title="Create and catgorize new elements"
              description="If you need to create new elements and you ask yourself how to categorize them, try out this tool"
              linkToTitle="Categorize"
              linkToUrl="https://dan503.github.io/Atomic-Categorizer/"
            ></Callout>
          </div>
        </div>
      </section>
    </Layout>
  );
}
