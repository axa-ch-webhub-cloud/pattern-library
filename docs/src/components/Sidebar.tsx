import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _ from 'lodash';

export default class Sidebar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        exact: PropTypes.bool,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string,
          })
        ),
      })
    ),
  };

  static defaultProps = {
    groups: [],
  };

  render() {
    const { children, groups, ...props } = this.props;
    return (
      <aside className="MainLayout-sidebar Sidebar" {...props}>
        <div className="Sidebar-inner">
          {groups.map((group) => {
            return (
              <div
                key={group.title || group.links[0].label}
                className="Sidebar"
              >
                {group.title && (
                  <p className="Sidebar-title" key={`title-${_.uniqueId()}`}>
                    {group.title}
                  </p>
                )}
                <nav className="Sidebar-nav">
                  {group.links.map(
                    ({ label, to, branding, atoms, molecules, organisms }) => {
                      return (
                        <>
                          {label && (
                            <Link
                              key={`label-${_.uniqueId()}`}
                              to={to}
                              activeClassName="is-active"
                            >
                              {label}
                            </Link>
                          )}

                          {branding && (
                            <>
                              <p
                                key={`subtitle-${_.uniqueId()}`}
                                className="Sidebar-subtitle"
                              >
                                Brand identity elements
                              </p>
                              {branding.map((brand) => {
                                return (
                                  <Link
                                    key={`brand-${_.uniqueId()}`}
                                    to={brand.to}
                                    activeClassName="is-active"
                                  >
                                    {brand.label}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {atoms && (
                            <>
                              <p
                                key={`subtitle-${_.uniqueId()}`}
                                className="Sidebar-subtitle"
                              >
                                Atom
                              </p>
                              {atoms.map((atom) => {
                                return (
                                  <Link
                                    to={atom.to}
                                    activeClassName="is-active"
                                  >
                                    {atom.label}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {molecules && (
                            <>
                              <p
                                key={`subtitle-${_.uniqueId()}`}
                                className="Sidebar-subtitle"
                              >
                                Molecules
                              </p>
                              {molecules.map((molecule) => {
                                return (
                                  <Link
                                    key={`molecule-${_.uniqueId()}`}
                                    to={molecule.to}
                                    activeClassName="is-active"
                                  >
                                    {molecule.label}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {organisms && (
                            <>
                              <p
                                key={`subtitle-${_.uniqueId()}`}
                                className="Sidebar-subtitle"
                              >
                                Organism
                              </p>
                              {organisms.map((organism) => {
                                return (
                                  <Link
                                    key={`organism-${_.uniqueId()}`}
                                    to={organism.to}
                                    activeClassName="is-active"
                                  >
                                    {organism.label}
                                  </Link>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    }
                  )}
                </nav>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}
