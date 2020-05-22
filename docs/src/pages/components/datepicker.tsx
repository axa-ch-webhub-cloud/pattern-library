import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Datepicker } from '../../patterns/index';

export default function DatepickerPage(): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        A date picker is an input field that allows users to select dates
        through textual input or interaction with a calendar overlay element.
      </p>
      <div className="Preview">
        <Datepicker
          locale="de-CH"
          year={2020}
          month={1}
          day={1}
          onDateChange={(date) => console.log(`date changed ${date}`)}
        ></Datepicker>
      </div>
      <SyntaxHighlighter>{`
npm install @axa-ch/datepicker
  `}</SyntaxHighlighter>
      <SyntaxHighlighter>{`
import '@axa-ch/datepicker';
...
<axa-datepicker locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>
  `}</SyntaxHighlighter>

      <h2 className="h2">Usage</h2>
      <p className="paragraph">
        Even though it is a relatively simple, date pickers are one of the most
        frequently used elements in forms. They allow users to streamline date
        selection and improve the usability of the form.{' '}
      </p>
    </Page>
  );
}
