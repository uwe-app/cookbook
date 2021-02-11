+++
title = "Alerts"
+++

This project demonstrates using the `alert` partial to show alerts for info, warnings, errors and tips; see `index.md` for usage.

## Info

{{#>alert}}
The *default* alert type is `info`.
{{/alert}}

## Tip

{{#>alert type="tip"}}
Use the `tip` type for tips and tricks.
{{/alert}}

## Warn

{{#>alert type="warn"}}
Warnings use the type `warn`.
{{/alert}}

## Error

{{#>alert type="error"}}
Errors use the type `error`.
{{/alert}}

## Custom Type

{{#>alert type="custom"}}
This example uses a `custom` type with a stylesheet that defines a `div.alert.custom` style rule.
{{/alert}}

## Label

{{#>alert label="info"}}
The `label` parameter can be used to set a title for the alert block.
{{/alert}}
