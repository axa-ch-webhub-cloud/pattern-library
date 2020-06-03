import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';
import { NativeLink } from '../components/NativeLinks';

import heroImage from '../images/grid/hero.png';
import gridDesktop from '../images/grid/grid-example-desktop.png';
import gridTablet from '../images/grid/grid-example-tablet.png';

import spacingUseImage from '../images/grid/spacing-use.png';
import spacingImage from '../images/grid/spacing.png';
import GridPreview from '../components/GridPreview';

interface Props {}

export default function GridPage({}: Props): ReactElement {
  return (
    <Layout>
      <Container>
        <PageIntroduction
          title="Grid"
          description="One of the easiest ways to achieve an organised design is to apply a grid system.
                  In the AXA Design System, we have chosen to follow two grid principles - Bootstrap standards and a 8px grid."
          imageUrl={heroImage}
        />

        <h2 className="h2">How do we use Grid and Spacing ?</h2>
        <p>
          We use Grids to help us designing flexible elements - elements that
          will adapt to the environment they are put in.
        </p>

        <p>
          For flexible elements, we use a Bootstrap standards grid{' '}
          <NativeLink href="https://getbootstrap.com/">
            https://getbootstrap.com/
          </NativeLink>
        </p>

        <p>
          For the elements that are fixed (do not change with the
          environnement), we use the spacing units base on the 8px Grid.
        </p>

        <h3>Use of Grids - an example</h3>
        <p>
          The elements (yellow and green) adapt themselves to the width of the
          page - this means that the same element will have multiple sizes,
          depending on the environment on the environment ({' '}
          <code>width: 120px</code> for desktop and <code>width: 76px</code> for
          tablet).
        </p>

        <img className="Content-image" src={gridDesktop} alt="" />
        <p className="text-neutral-600">Desktop Grid</p>
        <img className="Content-image" src={gridTablet} alt="" />
        <p className="text-neutral-600">Tablet Grid</p>

        <h2 className="h2">Use of Spacing —an example</h2>
        <p>
          In some cases, we need design elements that remain fixed (i.e. do not
          adapt to the environment). For this purpose we use spacing units,
          which are made from a space scale, that defines the hierarchy between
          them. In order to achieve a coherent behaviour of the design element,
          we use “units” in order to restrict the number of spacing available.
        </p>

        <div className="bg-neutral-200 flex mb-5">
          <div className="p-3" style={{ flexShrink: 2 }}>
            <img src={spacingImage} className="Content-image" alt="Spacing" />
          </div>
          <div className="p-3" style={{ flexShrink: 1 }}>
            spacing-3 (24px) on desktop, stays the same on tablet, we define
            fixed spacing that limits the content.
          </div>
        </div>

        <img src={spacingUseImage} className="Content-image" alt="" />

        <GridPreview />
      </Container>
    </Layout>
  );
}
