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

(Complete list is visible [here](https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials/icons))

| icons            |
| ---------------- |
| AddSvg           |
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
2. If the designer not optimized the svg, use [Web Svg optimizer](https://jakearchibald.github.io/svgomg/] or use intern svg go script `build-icons` or `build-images` and over copy the icon from the .tmp folder to icons-raw or images-raw.
3. Review the svg: add or edit to paths `fill="currentColor"` and remove unnecessary attributes.
