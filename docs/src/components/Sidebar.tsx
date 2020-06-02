import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

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
                  {group.links.map(({ label, to, constants, atoms }) => {
                    return (
                      <>
                        {label && (
                          <Link key={to} to={to} activeClassName="is-active">
                            {label}
                          </Link>
                        )}

                        {constants && (
                          <>
                            <p className="Sidebar-subtitle">Constants</p>
                            {constants.map((constant) => {
                              return (
                                <Link
                                  key={constant.to}
                                  to={constant.to}
                                  activeClassName="is-active"
                                >
                                  {constant.label}
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
                                  key={atom.to}
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
