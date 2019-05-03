# AXA Table

Example on how to use it:

```html
<axa-table innerscroll="500">
  <table class="any-for-test">
    ... here HTML5 conform table, having thead, tbody and tfoot
  </table>
</axa-table>
```

**This Table is not inside a ShadowDom, the axa-table-sortable, instead, is inside a ShadowDom**

## Options

As see in the example above, we have following options

- innerscroll="500" instead of having cell 100% width on mobile screen, the table will add an overflow after the threshold (500px in the example above). Mandatory here the use of thead and tbody

[axa-table](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/30-organisms/table/README.md) component.

## Properties

| Attribute           | Details                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `innerscroll="500"` | sets a min width and if viewport is less than defined here in PX, it will add a scrollbar |

## Variants

Cause is native tag styling, variants have to be done on the consumer side by applying classes to cells.

The following classes are provided:

- `<td class="o-table--light">Longer Body A2</td>` For a lighter styled cell
- `<td class="o-table--bold">Super Long Body B3 </td>` For a bolder styled cell
