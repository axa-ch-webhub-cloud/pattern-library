# AXA Datepicker

[axa-datepicker](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/20-molecules/datepicker/README.md).

## Install

`npm install @axa-ch/datepicker`

## Example Usage

`<axa-datepicker locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>`

As inputfield
`<axa-datepicker inputfield locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>`

## Properties

| Attribute                                  | Details                                            |
| ------------------------------------------ | -------------------------------------------------- |
| `locale="de-CH"`                           | locale (second part must be in uppercase!)         |
| `year="2020"`                              | year of date to start                              |
| `month="month"`                            | month of date to start (January is 0)              |
| `day="1"`                                  | day of date to start                               |
| `inputfield`                               | Rendered as inputfield                             |
| `allowedyears='[2019,2020]'`               | allowed years visible in dropdown                  |
| `allowedyears='["1989-2010", 2012, 2014]'` | allowed years as range or mix of range and numbers |
| `labelbuttoncancel="Schliessen"`           | Label for OK button                                |
| `labelbuttonok="OK"`                       | Label for Cancel button                            |
