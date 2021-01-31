+++
title = "Table of Contents"
+++

This example demonstrates how to create a table of contents for the headings on a page.

The rendered table of contents is wrapped in a `<details>` element so that people can collapse it.

---

<details open>
<summary>Table of Contents</summary>
{{toc}}
</details>

---

## Settings

To render a table of contents first we need to update the site settings to enable the `toc` HTML transformation:

```toml
[transform.html]
toc = true
```

## Render

Then when we want to render a table of contents for the current page call the `toc` helper:

```handlebars
\{{toc}}
```

### List Type

The list of links is rendered using the `ol` element by default; specify a `tag` to switch to an unordered list.

```handlebars
\{{toc tag="ul"}}
```

### Heading Lavels

Use the `from` and `to` helper parameters to restrict the heading levels included in the generated list:

```handlebars
\{{toc from="h2" to="h5"}}
```

## Number Style

If you want to number nested ordered lists using dot-notation add this style sheet for the `ol` element:

```css
ol {
  list-style-type: none;
  counter-reset: item;
}

ol > li {
  display: table;
  counter-increment: item;
}

ol > li:before {
  content: counters(item, ".") ". ";
  display: table-cell;
  padding-right: 0.5em;
}

li ol > li {
  margin: 0;
}

li ol > li:before {
  content: counters(item, ".") " ";
}
```

