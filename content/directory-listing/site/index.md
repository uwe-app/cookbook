+++
title = "Directory Listing"
+++

This example demonstrates using the `listing` partial supplied by the `std::listing` plugin to generate a list of links to the pages in a folder.

## Listing

List all the pages in the current folder:

```handlebars
\{{> listing}}
```

{{> listing}}

## Description

Include descriptions in the listing:

```handlebars
\{{> listing with-description=true}}
```

{{> listing with-description=true}}
