# Table

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

* innerscroll="500" instead of having cell 100% width on mobile screen, the table will add an overflow after the threshold (500px in the example above). Mandatory here the use of thead and tbody
