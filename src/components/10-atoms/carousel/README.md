# Carousel

Each child is rendered as a slide. By default, only one child is visible at a time. Also,
auto-rotation to the right is enabled by default.

## Properties

### autorotatedisabled

This Boolean attribute specifies whether slide auto-rotation should be suppressed (default: false).

### autorotatetime

This numeric attribute specifies the waiting time in milliseconds for the next slide to appear in auto-rotation mode.

### keysenabled

This Boolean attribute specifies whether keyboard navigation via left/right arrow keys should be enabled (default: false).

### arrowstyle

This string-valued attribute adds custom inline styling to the arrow buttons of the carousel
(e.g. `border-color:grey` for grey arrows, or `display:none` to suppress arrows).

## Child Elements

There is an absolute limit of 10 child elements.
