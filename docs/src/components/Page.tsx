import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Location, navigate } from '@reach/router';

import IA from '../IA';
import DocsMDXProvider from './DocsMDXProvider';

import Layout from './Layout';
import OverviewItem from './OverviewItem';
import SEO from './SEO';
import ComponentIntro from './ComponentIntro';

const flatItems = [
  ...IA.branding.items.map((item) => {
    return {
      ...item,
      related: [
        ...(item.related || []),
        ...IA.branding.items.map((x) => x.id).filter((id) => id !== item.id),
      ],
    };
  }),
  ...IA.components.items.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.items.map((item) => {
        return {
          ...item,
          related: [
            ...(item.related || []),
            ...curr.items.map((item) => item.id).filter((id) => id !== item.id),
          ],
        };
      }),
    ];
  }, []),
];

/**
 * Used for component pages.
 */
class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  getMetaInfo = () => {
    const id = this.props.location.pathname.split('/')[2];
    return flatItems.find((item) => item.id === id);
  };

  getRelatedItems = (metaInfo) => {
    return (metaInfo.related || []).map((id) => {
      return flatItems.find((item) => item.id === id);
    });
  };

  render() {
    const metaInfo = this.getMetaInfo();
    if (!metaInfo) return null;
    const relatedItems = this.getRelatedItems(metaInfo);
    return (
      <>
        <SEO title={metaInfo.name} />

        <main>
          <ComponentIntro name={metaInfo.name} githubUrl={metaInfo.github} />

          <article className="MDXPage">
            <div
              className="Container Container--narrow"
              style={{ marginBottom: 120 }}
            >
              <DocsMDXProvider>{this.props.children}</DocsMDXProvider>
            </div>
          </article>

          {relatedItems.length > 0 && (
            <div
              className="Overview-group Container Container--narrow"
              style={{ marginBottom: 120 }}
            >
              <h2 className="h2">Composition</h2>
              <div className="Overview-groupItems">
                {relatedItems.map((item) => {
                  return (
                    <OverviewItem
                      key={`overview-${_.uniqueId()}`}
                      id={item.id}
                      image={item.image}
                    >
                      {item.name}
                    </OverviewItem>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </>
    );
  }
}

export default class PageContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Location>
          {({ location }) => {
            return <Page location={location} {...this.props} />;
          }}
        </Location>
      </Layout>
    );
  }
}
