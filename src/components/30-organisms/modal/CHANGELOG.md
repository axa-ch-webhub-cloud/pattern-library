## 4.0.7

Re-release due to component-versioning code improvements/bugfixes

## 4.0.6

Improve modal types, event param names always `event` #2344

## 4.0.3

Fix: hide close button, if `forced` is true. #2324.

## 4.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295
- Fix: Inverted desktop and mobile close icons for `noheader` size option. #2293
- Hide the vertical scrollbar for `noheader` size option.

## 3.1.0

- Add a `noheader` option. #2292

## 3.0.0

Migrate to lit. #2207

## 2.1.0

- Fire custom 'axa-close' event when the modal closes and implement onClose Function for use with React.

## 2.0.5

- Fix: unnamed function

## 2.0.0

- Breaking: Removed margin-top from first child element and margin-bottom from last child element (only if attribute `forced` is being used).

## 1.2.0

- Changed the modal size and added a `small` size option.
- Added open & close animations.

## 1.1.0

- Added `forced` possibility. This removes the default close functionality.

## 1.0.2

- Fix: Modal did not have `@axa-ch/materials` as dependency.

## 1.0.1

- Fix: close modal in Safari by pressing outside the modal.
