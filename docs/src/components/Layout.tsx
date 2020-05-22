import React from 'react';
import { Helmet } from 'react-helmet';
import absolutePath from '../absolutePath';
import '../css/index.css'; // eslint-disable-line import/no-unassigned-import
import TopBar from './TopBar';
import InfoBar from './InfoBar';
import PageFooter from './PageFooter';
import PageCallToAction from './PageCallToAction';
import GetStartedSidebar from './GetStartedSidebar';

const description =
  'AXA Design System is a UI Framework for designing and developing faster beautiful products.';

interface Props {
  children: React.ReactNode;
  withTopBar?: boolean;
  withInfoBar?: boolean;
  withSideBar?: boolean;
  withFooter?: boolean;
  withCallToAction?: boolean;
}

export default class Layout extends React.Component<Props> {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const {
      children,
      withCallToAction = true,
      withInfoBar = false,
      withFooter = true,
      withSideBar = true,
      withTopBar = true,
    } = this.props;

    return (
      <>
        <Helmet>
          {/* Fallback properties */}
          <title>AXA Design System</title>
          <meta name="description" content={description} />
          <meta property="og:title" content="AXA Design System" />
          <meta property="og:url" content={absolutePath('/')} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={absolutePath('/og-image.png')} />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:site" content="@axa" />
          <meta name="twitter:creator" content="@flexbox_" />
          <meta
            property="twitter:image"
            content={absolutePath('/twitter-og.png')}
          />
        </Helmet>
        <div className="MainLayout">
          {withTopBar && <TopBar />}
          <main className="MainLayout-main">
            <div className="MainLayout-content">
              {withInfoBar && <InfoBar />}
              {children}
              {withCallToAction && <PageCallToAction />}
              {withFooter && <PageFooter />}
            </div>
            {withSideBar && <GetStartedSidebar />}
          </main>
        </div>
      </>
    );
  }
}
