/* eslint-disable*/
import React, { Component, createElement } from 'react';
import './App.css';
import createMyTable from './customelements/my-table';

// WRAPPED CUSTOM ELEMENTS
const MyTable = createMyTable(createElement);

// CONSTANTS
const POLICY_STATES = ['pending', 'ok', 'error'];

// HELPER FUNCTIONS
const handleClick = (self, index) => () => self.togglePolicyState(index);

const handleMutate = (self, index, change) => () =>
  self.mutateRow(index, change);

// COMPONENTS
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policies: [
        { title: 'Household Insurance', price: 79, state: 0 },
        { title: 'Life Insurance', price: 121, state: 1 },
        { title: 'Car Insurance', price: 88, state: 2 },
      ],
    };
  }

  mutateRow(index, add) {
    const { policies } = this.state;
    if (add) {
      const { title, price, state } = policies[index];
      return this.setState({
        policies: [
          ...policies.slice(0, index),
          { title, price, state },
          ...policies.slice(index),
        ],
      });
    }
    return this.setState({
      policies: [...policies.slice(0, index), ...policies.slice(index + 1)],
    });
  }

  togglePolicyState(index) {
    const { policies } = this.state;
    // make a deep clone
    const newPolicies = JSON.parse(JSON.stringify(policies));
    const { state } = newPolicies[index];
    newPolicies[index].state = (state + 1) % 3;
    this.setState({ policies: newPolicies });
  }

  render() {
    const { policies = [] } = this.state;
    // show nested <my-table>s and multiple <my-table>s per page
    // NB. We could use different click handlers and/or different state for each of these,
    // but this is not necessary here, as the focus is on demonstrating dynamic children update.
    return (
      <div className="App">
        <header className="App-header">
          <p>React &harr; lit-element with dynamic children</p>
        </header>
        <div className="container">
          <section className="policies">
            <MyTable>
              <table>
                <caption>All your policies</caption>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>State</th>
                    <th>add/remove</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map(({ title, price, state }, index) => (
                    <tr key={index} id={index}>
                      <td data-bold="true">{title}</td>
                      <td>{price}</td>
                      <td
                        data-state={POLICY_STATES[state]}
                        data-action="true"
                        onClick={handleClick(this, index)}
                      >
                        <span className="">{POLICY_STATES[state]}</span>
                      </td>
                      <td className="mutate">
                        <button onClick={handleMutate(this, index, 'add')}>
                          +
                        </button>
                        <button onClick={handleMutate(this, index)}>
                          &mdash;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <MyTable>
                        <table>
                          <caption>All your policies</caption>
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Price</th>
                              <th>State</th>
                              <th>add/remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {policies.map(({ title, price, state }, index) => (
                              <tr key={index} id={index}>
                                <td data-bold="true">{title}</td>
                                <td>{price}</td>
                                <td
                                  data-state={POLICY_STATES[state]}
                                  data-action="true"
                                  onClick={handleClick(this, index)}
                                >
                                  <span className="">
                                    {POLICY_STATES[state]}
                                  </span>
                                </td>
                                <td className="mutate">
                                  <button
                                    onClick={handleMutate(this, index, 'add')}
                                  >
                                    +
                                  </button>
                                  <button onClick={handleMutate(this, index)}>
                                    &mdash;
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </MyTable>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </MyTable>
          </section>
          <section className="policies">
            <MyTable>
              <table>
                <caption>All your policies</caption>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>State</th>
                    <th>add/remove</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map(({ title, price, state }, index) => (
                    <tr key={index} id={index}>
                      <td data-bold="true">{title}</td>
                      <td>{price}</td>
                      <td
                        data-state={POLICY_STATES[state]}
                        data-action="true"
                        onClick={handleClick(this, index)}
                      >
                        <span className="">{POLICY_STATES[state]}</span>
                      </td>
                      <td className="mutate">
                        <button onClick={handleMutate(this, index, 'add')}>
                          +
                        </button>
                        <button onClick={handleMutate(this, index)}>
                          &mdash;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <MyTable>
                        <table>
                          <caption>All your policies</caption>
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Price</th>
                              <th>State</th>
                              <th>add/remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {policies.map(({ title, price, state }, index) => (
                              <tr key={index} id={index}>
                                <td data-bold="true">{title}</td>
                                <td>{price}</td>
                                <td
                                  data-state={POLICY_STATES[state]}
                                  data-action="true"
                                  onClick={handleClick(this, index)}
                                >
                                  <span className="">
                                    {POLICY_STATES[state]}
                                  </span>
                                </td>
                                <td className="mutate">
                                  <button
                                    onClick={handleMutate(this, index, 'add')}
                                  >
                                    +
                                  </button>
                                  <button onClick={handleMutate(this, index)}>
                                    &mdash;
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </MyTable>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </MyTable>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
