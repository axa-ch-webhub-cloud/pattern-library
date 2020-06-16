import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {}

import errorImage from '../images/404.gif';
import { Link } from 'gatsby';

export default function page404({}: Props): ReactElement {
  return (
    <Layout withFooter={false} withTopBar={false} withSideBar={false}>
      <SEO title="Sorry about that" />

      <div className="Hero">
        <div className="Hero-inner">
          <div className="Content">
            <h1>Oops. Nothing here.</h1>
            <img src={errorImage} alt="" />
            <p>The page you were looking for doesn't exist (404).</p>
            <p>
              You may have mistyped the address or the page may have moved.
              <br /> If you're lost,{' '}
              <Link to="/">you can go back to the homepage</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
