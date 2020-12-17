# Stepper

&lt;axa-stepper&gt; conveys progress through numbered steps.

## Properties

### steps

The array-valued attribute `steps` specifies the descriptions of the steps, each step being described by a non-empty label string.

### stepActive

The integer-valued attribute `stepActive` defines the currently active step.

### stepProgress

The numeric attribute `stepProgress` defines the fraction, to which the UI progress bar extends into the currently active step. Legal values are floating-point numbers between 0 and 1, inclusive (e.g. 0.5).
