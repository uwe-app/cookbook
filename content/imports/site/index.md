+++
title = "Imports"
+++

{{import "header"}}

Importing templates is a useful technique for creating page-level headers and footers.

First create the top-level imports in the `site` folder called `header.hbs` and `footer.hbs`; these will be the default templates.

Then inside a folder of pages create `header.hbs` and `footer.hbs` files to override the default templates like we did for the [[section|mock section]].

Afterwards, `import` the header at the top of your pages:

```handlebars
\{{import "header"}}
```

And the footer at the bottom of your pages:

```handlebars
\{{import "footer"}}
```

Navigate to the [[section|mock section]] to see the result.

{{import "footer"}}
