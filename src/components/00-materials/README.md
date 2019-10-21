# AXA Materials

### Usage

## Install Icons

`npm install @axa-ch/materials`

## Usage

```
import {
  ArrowRightSvg,
  CollapseSvg,
} from '@axa-ch/materials/icons';
```

Native

```js
this.render() {

}
```

React

```js
this.render() {

}
```

## Icon set

## Add Icon

- Move the raw SVG file into `raw-icons`
- The `npm run build-icons` script will optimize and clean the SVG and export it as a JS-importable string for further usage.

### SVGs

(Complete list is visible [here](https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials/icons-raw))

| icons            |
| ---------------- |
| AddSvg           |
| ArrowLeftSvg     |
| ArrowRightSvg    |
| AttachFileSvg    |
| CancelSvg        |
| CaretSvg         |
| CheckCircleSvg   |
| ClearSvg         |
| CloudUploadSvg   |
| CollapseSvg      |
| DateInputSvg     |
| DeleteForeverSvg |
| DocumentSvg      |
| DownloadSvg      |
| EmailSvg         |
| ExpandSvg        |
| FacebookSvg      |
| InfoFlatSvg      |
| InfoSvg          |
| InstagramSvg     |
| LinkedinSvg      |
| MobileSvg        |
| PhoneSvg         |
| PlusSvg          |
| SearchSvg        |
| TwitterSvg       |
| UploadSvg        |
| XingSvg          |
| YoutubeSvg       |

| images                          |
| ------------------------------- |
| AxaLogoSvg                      |
| AxaLogoOpenSvg                  |
| ... and many more in subfolders |

## Contribution

### Process:

1. Involve a designer by sending him the new SVG in question, unless the designer already has the file. He will review it and possibly change some things, for example by adjusting inner padding etc. in order to guarantee overall quality.
2. Remove unnecessary code inside the SVG:
   - a. `data-name="Layer 2"` # layer info for vector drawing software
   - b. `<path fill="#fff" d="M0 0h96v96H0z"/>` # outer bounding box filled with white background
3. - a. use the internal [svgo](https://github.com/svg/svgo)-invoking scripts `npm run build-icons` or `npm run build-images` to clean up and optimize the SVGs, then copy the optimized files back from the `.tmp` folder to `icons-raw` or `images-raw`
   - b. alternatively use the [online SVG optimizer](https://jakearchibald.github.io/svgomg/] for the same purpose
4. Manually review the SVGs produced in the last step: add or edit &lt;path&gt; attributes, setting `fill="currentColor"` and/or `strokes="currentColor"` as appropriate. Remove unnecessary attributes.

## ChangeLog

- 2.0.0
  - removed Axa logos from `/icons` (please use logos from `/images`)
