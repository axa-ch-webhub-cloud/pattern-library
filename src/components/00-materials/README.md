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
- The module will optimize and clean the svg and export it as JS string for further usage.

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

| images         |
| -------------- |
| AxaLogoSvg     |
| AxaLogoOpenSvg |

## Contribution

### Process:

1. /w a designer send him the svg file, or the designer have already the file. He will review it and change something for example inner padding etc. to guarantee quality.
2. Remove this typical unnecessary code:
    - a. `data-name="Layer 2"`
    - b. `<path fill="#fff" d="M0 0h96v96H0z"/>`
3. 
    - a. use intern svg go script `build-icons` or `build-images` and copy the files back from `.tmp` folder to icons-raw or images-raw
    - b. alternatively you can use [Web Svg optimizer](https://jakearchibald.github.io/svgomg/] 
4. Review the svg: add or edit to paths and set it to`fill="currentColor"`. Set Strokes to `currentColor`. Remove unnecessary attributes.
