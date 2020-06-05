import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';

interface Props {}

import heroImage from '../images/elevation/hero.png';
import principleImage from '../images/elevation/principle-elevation.png';
import gridImage from '../images/elevation/grid.png';
import exampleImage from '../images/elevation/example.png';
import exampleGridImage from '../images/elevation/example-grid.png';

const shadowScales = [
  {
    index: 'Elevation 5',
    title: 'Dialog and Picker',
    className: 'shadow-2xl',
    code: '0 0 16px rgba(0, 0, 0, 0.25)',
  },
  {
    index: 'Elevation 4',
    title: 'Navigation and Header',
    className: 'shadow-xl',
    code: '0 0 12px rgba(0, 0, 0, 0.25)',
  },
  {
    index: 'Elevation 3',
    title: 'SubNavigation and Floating button',
    className: 'shadow-lg',
    code: '0 0 8px rgba(0, 0, 0, 0.25)',
  },
  {
    index: 'Elevation 2',
    title: 'Selector list, bottom bars',
    className: 'shadow-md',
    code: '0 0 4px rgba(0, 0, 0, 0.25)',
  },
  {
    index: 'Elevation 1',
    title: 'Cards',
    className: 'shadow',
    code: '0 0 2px rgba(0, 0, 0, 0.25)',
  },
];

export default function ElevationPage({}: Props): ReactElement {
  return (
    <Layout withInfoBar>
      <SEO title="Elevation" />

      <Container>
        <PageIntroduction
          title="Elevation"
          description="The elevation system treats the relative distance between two elements, which helps the user understand and feel their hierarchy and dynamic."
          imageUrl={heroImage}
        />

        <h2 className="h2">Principle</h2>
        <p className="paragraph mb-5">
          This is a scale that use the Z axe (in a 3D environnement). <br />
          Create a scale of elevation is use to create a hierarchy between
          elements.
        </p>

        <img
          className="Content-image mb-1"
          src={principleImage}
          alt="Principle"
        />
        <p className="text-neutral-600 mb-6">This is the ground</p>

        <h2 className="h2">Elevation guidelines</h2>
        <p className="text-2xl font-bold mb-3">Shadow Scales</p>

        <div className="Overview-shadow">
          {shadowScales.map((item) => {
            return (
              <div className={`ShadowBox ${item.className}`}>
                <p className="kicker mb-0 text-neutral-600">{item.index}</p>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="mt-8">
                  <strong>box-shadow:</strong>
                </p>
                <pre className="font-mono text-xs">{item.code}</pre>
              </div>
            );
          })}
        </div>

        <p className="text-2xl font-bold">Shadow Grid</p>
        <img className="Content-image" src={gridImage} alt="Principle" />

        <h2 className="h2">Example</h2>
        <p className="paragraph">
          Here is an example of the elevation principle applied to a header and
          a navigation design element.
        </p>
        <img className="Content-image" src={exampleImage} alt="Principle" />
        <img className="Content-image" src={exampleGridImage} alt="Principle" />
      </Container>
    </Layout>
  );
}
