import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PageIntroduction from '../../components/PageIntroduction';
import _ from 'lodash';

const ComponentsPage = ({ data }) => {
  const allComponents = _.uniqBy(
    data.allComponentMetadata.nodes,
    'displayName'
  );
  const numberComponents = allComponents.length;

  return (
    <Layout>
      <SEO title="Components" />

      <section className="MainLayout-contentRight">
        <div className="Container-nextToSidebar" style={{ marginBottom: 160 }}>
          <div className="Content">
            <PageIntroduction title={`${numberComponents} Components`} />
            {allComponents.map((item) => {
              return <p>{item.displayName}</p>;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allComponentMetadata {
      nodes {
        displayName
        description {
          id
          text
        }
      }
    }
  }
`;

export default ComponentsPage;
