import { storiesOf } from '@storybook/html';

import '../components/o-table';
import '../components/m-thead';
import '../components/m-tbody';
import '../components/m-tfoot';
import '../components/m-tr';
import '../components/a-th';
import '../components/a-td';
import '../components/a-caption';

storiesOf('Tables', module)
  .add('table', () => `<table is="axa-table"
    cap="Caption"
    cap-side="bottom"
    headings='["Nature", "Date", "Status", { "text": "Amount", "align": "right", "sort": "down" }]'
    items='[
      { "action": true, "cells": [{ "text": "New deposit N.O929lO8", "strong": true }, "July, 22th 2018", { "text": "Received", "float": "right", "state": "ok" }, { "text": "1200", "bold": true, "align": "right", "float": "left" }]},
      [{ "text": "New deposit N.O929lO8", "strong": true }, "July, 22th 2018", { "text": "Pending", "float": "right", "state": "pending" }, { "text": "1200", "bold": true, "align": "right", "float": "left" }],
      { "cells": [{ "text": "New deposit N.O929lO8", "strong": true, "action": true }, "July, 22th 2018", { "text": "Refused", "float": "right", "state": "error" }, { "text": "1200", "bold": true, "align": "right", "float": "left" }]},
      [{ "text": "New deposit N.O929lO8", "strong": true }, "July, 22th 2018", { "text": "Unknown", "float": "right", "state": "unknown" }, { "text": "1200", "bold": true, "align": "right", "float": "left" }]
    ]'
    footers='[
      { "cells": [{ "text": "Deposit Plan", "colspan": "3", "float": "left" }, { "text": "+ $ 1200 monthly", "align": "right", "float": "right" }] },
      [{ "text": "Withdrawal Plan", "colspan": "3", "float": "left" }, { "text": "- $ 1200 yearly", "align": "right", "float": "right" }]
    ]'
  ></table>`);
