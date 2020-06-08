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
                {group.title && <p className="Sidebar-title">{group.title}</p>}
                <nav className="Sidebar-nav">
                  {group.links.map(({ label, to, branding, atoms }) => {
                    return (
                      <>
                        {label && (
                          <Link key={to} to={to} activeClassName="is-active">
                            {label}
                          </Link>
                        )}

                        {branding && (
                          <>
                            <p className="Sidebar-subtitle">
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
                            <p className="Sidebar-subtitle">Atom</p>
                            {atoms.map((atom) => {
                              return (
                                <Link
                                  key={`atom-${_.uniqueId()}`}
                                  to={atom.to}
                                  activeClassName="is-active"
                                >
                                  {atom.label}
                                </Link>
                              );
                            })}
                          </>
                        )}
                      </>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}
