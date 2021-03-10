# Carousel

Each child is rendered as a slide. In default mode, only one child is visible at a time, and navigation arrows
are provided. Also, auto-rotation to the right is enabled by default.

## Properties

### autorotatedisabled

This Boolean attribute specifies whether slide auto-rotation should be suppressed (default: false).

### autorotatetime

This numeric attribute specifies the waiting time in milliseconds for the next slide to appear in auto-rotation mode (default: 5000).

### keysenabled

This Boolean attribute specifies whether keyboard navigation via left/right arrow keys should be enabled (default: false).

### arrowstyle

This string-valued attribute adds custom inline styling to the arrow buttons of the carousel
(e.g. `border-color:grey` for grey arrows, or `display:none` to suppress arrows).

### mode

This string-valued attribute forces the carousel into a specific mode of behaviour (default: no specific mode of behaviour).

Currently, one mode value is recognized: `all` switches to horizontal layout of child elements for viewports &gt;= 992px.
In that layout, _all_ child elements are visible, they fill the viewport width seamlessly, and carousel navigation is suppressed.

## Child Elements

There is an absolute limit of 10 child elements.
