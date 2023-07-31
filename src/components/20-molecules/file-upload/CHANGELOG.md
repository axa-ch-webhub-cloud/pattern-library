# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.2.4](https://github.com/axa-ch-webhub-cloud/pattern-library/compare/@axa-ch-webhub-cloud/file-upload@8.2.3...@axa-ch-webhub-cloud/file-upload@8.2.4) (2023-07-31)

**Note:** Version bump only for package @axa-ch-webhub-cloud/file-upload

## 8.2.0

Update package scope, registry and repository URL. #2423

## 8.1.2

Re-release after fixing component-versioning bug.

## 8.1.1

- fixes type onValidityChange to optional

## 8.1.0

- feat: Add callback prop onValidityChange #2370
- fixes: Provide the correct typings for the onChange param `files`

## 8.0.0

Breaking change: Simplify callback prop `onChange`'s parameter value, see the ["onChange" section in the readme](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/20-molecules/file-upload#onchange) for details. #2341

## 7.0.6

Improve file-upload types, event param names always `event` #2344

## 7.0.5

Fix `isNonImageFile` check #2328 #2278

## 7.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 6.0.0

Migrate to lit. #2207

## 5.4.1

- Fixes a bug involving the interaction of UI-based file deletion with the new `invalidate` method. (#2239)

## 5.4.0

- Added new method `invalidate(file, clear, globalErrorMessage)` (cf. README). (#2222)

## 5.3.0

- Added reset method/event to clear any uploaded files. (#2223)

## 5.2.0

- Added an invalid attribute.

## 5.1.0

### onChange support

- Added function callback for `onChange`.
- Fire change event `change` for native HTML users when adding new files via `<axa-input-file>`, deleting or dropping in the dropzone.
- Custom data (files) gets passed in both cases and can be accessed via `e.detail`.

### Allow all file types

- Added an `allowedFileTypes` attribute.
- Now, every file type can be uploaded.

## 5.0.1

- Fixes jumps in the UI, when the user hovers over a file to delete it.
- The error message now appears in the title attribute.

## 5.0.0

- New property `preventFileCompression` let's you access the original and uncompressed files. #2036
- Use orignal file size to calculate `maxSizeOfSingleFileKB` and `maxSizeOfAllFilesKB`.
- BREAKING CHANGE: Remove property `showFileOverview`.

## 4.1.0

- Added function callbacks for `onFileDrop` and `onFileRemove` events.

## 3.3.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.3.0

- New icons. #1882
- The text of the red button is visible again.

## 3.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.1.0

- You can now import ts prop types.

## 3.0.0

- Upgrade to versioned component.

## 2.0.10

- Fixed a visual flicker when dragging files and moving the mouse without dropping the files. (#1724)

## 2.0.9

- Apply design-change suggestions from designers to allow coexistence of filename and per-file error message.
- Minor bugfixes. (#1715)

## 2.0.0

- The implementation of the wrapper to make a component React-ready has
  fundamentally changed. In particular, unknown Boolean- or
  string-valued properties are now accepted and converted to HTML
  attributes. E.g. `data-seleniumid="my-id"` is now supported.
- All defined attributes attached to a component _before_ component
  construction time are now taken into account. Conversely, all undefined
  component attributes are initialized with type-appropriate default
  values at this time. This may amount to a breaking change if the
  component consumer had previously assumed undefined or uninitialized
  behaviour.
