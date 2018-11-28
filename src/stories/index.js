/* global document */
// better to load this only if it's needed
import 'document-register-element'; // ES2015
// load this for browsers which support customElements without builtin (webkit)
import '@ungap/custom-elements-builtin';
import { storiesOf } from '@storybook/html';

import './tables';

storiesOf('Organism', module);

storiesOf('Molecules', module);

storiesOf('Atoms', module);
