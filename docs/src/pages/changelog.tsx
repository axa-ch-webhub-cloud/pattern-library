import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageIntroduction from '../components/PageIntroduction';
import { Link } from 'gatsby';

export default function ChangelogPage(): ReactElement {
  return (
    <Layout>
      <Container>
        <PageIntroduction title="What’s new?">
          Here you will find the latest updates on the AXA Design System
          development.
        </PageIntroduction>
        <h2 className="h2">Update log</h2>
        <h3 className="h5">AXA Design System V1 is now live!</h3>
        <p className="paragraph">
          We are happy to introduce to you the AXA Design System V1! Following
          the MVP, developed at the end of 2019, the V1 comes with improved UX
          and code integration structure. For more information check out out{' '}
          <Link to="/" className="link">
            Introduction
          </Link>
        </p>
      </Container>
    </Layout>
  );
}
