+++
title = "Colors for HTML/CSS"
+++

# {{title}}

This example takes the collections data provider in `site/collections/colors/names.json` expands each entry to an item in the collection and iterates and renders each color as a swatch.

{{#each result}}
## {{this.key.id}}
### {{this.value}}

<div class="swatch">
<div style="background-color: {{this.value}}; height: 100px;"></div>
</div>
{{/each}}

---

Credit to the [css-color-names][] author for the MIT licensed data source.

---

[css-color-names]: https://github.com/bahamas10/css-color-names
