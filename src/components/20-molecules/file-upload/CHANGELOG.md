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
