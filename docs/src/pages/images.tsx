import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';
import { NativeLink } from '../components/NativeLinks';
import IconsPreview from '../components/IconsPreview';
import SyntaxHighlighter from '../components/SyntaxHighlighter';

import { ReactComponent as AxaLogoSvg } from '../../../src/components/00-materials/images-raw/axa-logo.svg';
import { ReactComponent as AxaLogoOpenSvg } from '../../../src/components/00-materials/images-raw/axa-logo-open.svg';
import ImagesPreview from '../components/ImagesPreview';

interface Props {}

export default function ImagesPage({}: Props): ReactElement {
  return (
    <Layout withCallToAction withInfoBar>
      <SEO title="Logo, icons and images" />

      <Container>
        <PageIntroduction title="Images">
          AXA icons are designed to help users navigate more intuitively within
          AXA’s online and offline assets, to spot relevant information more
          easily, and to understand better AXA offers.
        </PageIntroduction>

        <h2 className="h2 mt-0">Usage</h2>
        <SyntaxHighlighter>{`
npm install @axa-ch/materials
import { svg } from 'lit-html';
import {
  ArrowRightSvg
} from '@axa-ch/materials/icons';
...
<span>\${svg(ArrowRightSvg)}</span>
  `}</SyntaxHighlighter>

        <h2 className="h2">Logos</h2>
        <div className="Preview">
          <AxaLogoSvg className="w-8  mr-3" />
          <AxaLogoOpenSvg className="w-8" />
        </div>
        <div className="Preview bg-black">
          <AxaLogoSvg className="w-8 mr-3" />
          <AxaLogoOpenSvg className="w-8" color="white" />
        </div>
      </Container>

      <Container background="bg-neutral-200">
        <h2 className="h2 mt-0">Icons</h2>
        <p className="paragraph">
          Functional icons should be used for small resolutions, as they have
          been especially designed to facilitate the navigation
        </p>
        <p className="paragraph">
          The Complete list is{' '}
          <NativeLink href="https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials/icons-raw">
            visible on GitHub
          </NativeLink>
          .
        </p>
        <div className="Content-svg">
          <IconsPreview />
        </div>
      </Container>

      <Container>
        <h2 className="h2 mt-0">Images</h2>
        <p className="paragraph">
          Illustrative icons should be used for medium and large resolutions
        </p>
        <div className="Content-svg-illustrations">
          <ImagesPreview />
        </div>
      </Container>
    </Layout>
  );
}
