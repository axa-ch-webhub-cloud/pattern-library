# Testimonials

Shows several information in a carousel or inline and sets title and subtitle over it.

## Properties

### title

The main title at the top.

### subtitle

The subtitle.

### showallinline

This boolean attribute specifies the visibility of the carousel. Set this attribute if you want all the childs shown above each other.

**Dont forget** so set [this class](#classo-testimonials__vertical-margin-react-classnameo-testimonials__vertical-margin) to your top level child elements to have some margins between them.

### autorotatedisabled

This boolean attribute specifies if the slides will not automatically rotate.

### autorotatetime

This number specifies the milliseconds the slides will automatically rotate.

### keysenabled

This boolean attribute specifies if the keyboard navigation (left/right keys) should be enabled.

## Child Elements

### Maximum

Do not set more than ~100 child elements. Because of height calculation the performance will be slow down.

<!-- prettier-ignore -->
### class="o-testimonials__author" (React: className="o-testimonials__author")

The Text of the element where you set this class will be uppercase. It has a margin-top to have some space to the elements above.

<!-- prettier-ignore -->
### class="o-testimonials__vertical-margin" (React: className="o-testimonials__vertical-margin")

Set this class to your top level child elements. It sets a margin to your elements if you use `showallinline`.
