// IMPORTS
import React, { Component, createElement } from 'react';
import './App.css';

import createReactLabelledRadioButton from './customelements/radio-button';
import createReactTextInput from './customelements/text-input';
import createLitDropDown from './customelements/drop-down';
import createLitCheckbox from './customelements/check-box';
import createLitTextArea from './customelements/text-area';

// WRAPPED CUSTOM ELEMENTS
const ReactLabelledRadioButton = createReactLabelledRadioButton(createElement);
const ReactTextInput = createReactTextInput(createElement);
const LitDropDown = createLitDropDown(createElement);
const LitCheckbox = createLitCheckbox(createElement);
const LitTextArea = createLitTextArea(createElement);

// CONSTANTS
const CITIES = ['Zürich', 'Winterthur', 'Basel'];
const TEAM_MEMBERS = ['Luca', 'Marc', 'Marco', 'Markus', 'Raffael'];
const OPTIONS = ['Eiger', 'Mönch', 'Jungfrau', 'Uetliberg'];

// HELPER FUNCTIONS

// this is a controlled input, because we pass a Boolean into the 'checked' property,
// cf. https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
const labelledRadioButton = (self, group, handler) => (name, index) => (
  <label key={`lrb${index}`} htmlFor={group}>
    <input
      type="radio"
      value={name}
      name={group}
      checked={index === self.state.selectedRadioButtonIndex}
      onChange={handler(self, index)}
    />
    {name}
  </label>
);

const litElementRadioButton = (self, group, handler) => (name, index) => (
  <ReactLabelledRadioButton
    key={`llerb${index}`}
    name={group}
    value={name}
    label={name}
    checked={index === self.state.selectedTeamMember}
    onChange={handler(self, index)}
  />
);

const handleRadioChange = (self, index) => () => {
  return (
    self.state.freezeControlledValues ||
    self.setState({ selectedRadioButtonIndex: index })
  );
};

const handleTeamMemberChange = (self, index) => () =>
  self.state.freezeControlledValues ||
  self.setState({ selectedTeamMember: index });

const handleTextChange = self => event =>
  self.state.freezeControlledValues ||
  self.setState({ textValue: event.target.value });
const handleTextAreaChange = self => event =>
  self.state.freezeControlledValues ||
  self.setState({ textAreaValue: event.target.value });
const handleLitTextAreaChange = self => event =>
  self.state.freezeControlledValues ||
  self.setState({ litTextArea: event.target.value });

const handleDropdownChange = self => event =>
  self.state.freezeControlledValues ||
  self.setState({ dropdownValue: event.target.value });

const handleCheckboxChange = self => event => {
  return (
    self.state.freezeControlledValues ||
    self.setState({ checkboxValue: event.target.checked })
  );
};

const handleFreeze = self => () => {
  self.setState({ freezeControlledValues: !self.state.freezeControlledValues });
};

const handleSubmit = (/* self */) => event => {
  event.preventDefault();
  const form = document.getElementById('form');
  const formData = new window.FormData(form);
  const formFieldKeys = [];
  let i = 0;
  /* eslint-disable no-restricted-syntax */
  for (const pair of formData.entries()) {
    const [key, value] = pair;
    formFieldKeys.push(`${key} => "${value}"${i % 2 ? '    ' : '\n'}`);
    i += 1;
  }
  /* eslint-enable no-restricted-syntax */
  /* eslint-disable no-alert */
  window.alert(`form data:

  ${formFieldKeys.join('')}
  `);
  /* eslint-enable no-alert */
};

const evaluatePasswordRules = value => {
  if (value.length < 6) return false;
  if (!/[A-Z]/.test(value)) return false;
  if (!/[a-z]/.test(value)) return false;
  if (!/[0-9]/.test(value)) return false;
  if (!/[^A-Za-z0-9\s]/.test(value)) return false;
  return true;
};

const validateAsAxaPassword = self => event => {
  if (self.state.freezeControlledValues) return undefined;
  const passwordValue = event.target.value;
  // validation proper
  const passwordIsValid = evaluatePasswordRules(passwordValue);
  // update state
  self.setState({ passwordValue, passwordIsValid });
  return passwordIsValid;
};

const makeReactOption = (/* self */) => (text, index) => (
  <option key={`opt${index}`} value={text}>
    {text}
  </option>
);

// REACT COMPONENTS
class App extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      selectedRadioButtonIndex: CITIES.indexOf('Winterthur'),
      selectedTeamMember: TEAM_MEMBERS.indexOf('Markus'),
      textValue: '',
      textAreaValue: '',
      litTextArea: '',
      passwordValue: '',
      passwordIsValid: false,
      dropdownValue: 'Uetliberg',
      litDropdownValue: 'Uetliberg',
      checkboxValue: true,
      freezeControlledValues: false,
    };
    /* eslint-enable react/no-unused-state */
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span className="pure-react">React</span> &harr;{' '}
            <span className="lit-element">lit-element</span> with controlled
            inputs
          </p>
          <label htmlFor="checkbox">
            Freeze input values:&nbsp;
            <input
              type="checkbox"
              name="checkbox"
              onChange={handleFreeze(this)}
            />
          </label>
        </header>
        <form id="form" onSubmit={handleSubmit(this)}>
          <fieldset>
            <legend>Form</legend>
            <button type="submit">Submit form</button>
            <article className="pure-react">
              <h2>pure-React controlled radio buttons</h2>
              <div>
                {CITIES.map(
                  labelledRadioButton(this, 'cities', handleRadioChange)
                )}
              </div>
              <div>{`Current city: ${
                CITIES[this.state.selectedRadioButtonIndex]
              }`}</div>
            </article>
            <article className="lit-element">
              <h2>React controlled lit-element radio buttons</h2>
              <div>
                {TEAM_MEMBERS.map(
                  litElementRadioButton(this, 'team', handleTeamMemberChange)
                )}
              </div>
              <div>{`Current team member: ${
                TEAM_MEMBERS[this.state.selectedTeamMember]
              }`}</div>
            </article>
            <article className="pure-react">
              <h2>pure-React controlled text input</h2>
              <input
                type="text"
                name="text"
                value={this.state.textValue}
                onChange={handleTextChange(this)}
              />
              <div>{`Current text: "${this.state.textValue}"`}</div>
            </article>
            <article className="lit-element">
              <h2>
                React controlled lit-element text input with AXA password-rules
                validation
              </h2>
              <ReactTextInput
                name="lit-text"
                validate="true"
                value={this.state.passwordValue}
                onChange={validateAsAxaPassword(this)}
              />
              <div>{`Current password: "${this.state.passwordValue}" is ${
                this.state.passwordIsValid ? 'VALID' : 'INVALID'
              }`}</div>
            </article>
            <article className="pure-react">
              <h2>pure-React controlled dropdown</h2>
              <select
                name="dropdown"
                value={this.state.dropdownValue}
                onChange={handleDropdownChange(this)}
              >
                {OPTIONS.map(makeReactOption(this))}
              </select>
              <div>{`Current dropdown choice: ${this.state.dropdownValue}`}</div>
            </article>
            <article className="lit-element">
              <h2>React controlled lit-element dropdown</h2>
              <LitDropDown
                name="lit-dropdown"
                items={OPTIONS}
                value={this.state.dropdownValue}
                onChange={handleDropdownChange(this)}
              />
              <div>{`Current lit-element dropdown choice: ${this.state.dropdownValue}`}</div>
            </article>
            <article className="pure-react">
              <h2>pure-React controlled checkbox</h2>
              <input
                type="checkbox"
                name="checkbox"
                checked={this.state.checkboxValue}
                onChange={handleCheckboxChange(this)}
              />
              <div>{`Current checkbox state: ${this.state.checkboxValue}`}</div>
            </article>
            <article className="lit-element">
              <h2>React controlled lit-element checkbox</h2>
              <LitCheckbox
                checked={this.state.checkboxValue}
                name="lit-checkbox"
                onChange={handleCheckboxChange(this)}
              />
              <div>{`Current lit-element checkbox state: ${this.state.checkboxValue}`}</div>
            </article>
            <article className="pure-react">
              <h2>pure-React controlled textarea input</h2>
              <textarea
                name="textarea"
                value={this.state.textAreaValue}
                onChange={handleTextAreaChange(this)}
              />
              <div>{`Current text: "${this.state.textAreaValue}"`}</div>
            </article>
            <article className="lit-element">
              <h2>React controlled lit-element textarea</h2>
              <LitTextArea
                name="lit-textarea"
                value={this.state.litTextArea}
                onChange={handleLitTextAreaChange(
                  this
                )} /* eslint-disable no-console */
                ref={element =>
                  console.log('lit-element ref:', element)
                } /* eslint-enable no-console */
              />
              <div>{`Current lit-element text: ${this.state.litTextArea}`}</div>
            </article>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
