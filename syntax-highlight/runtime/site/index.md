+++
title = "Syntax Highlight Runtime"
+++

This example demonstrates how to enable syntax highlighting using the [highlight.js][] library at runtime.

Ensure the `lib::highlight` plugin is loaded and `apply` it's script and a style:

```toml
[dependencies."lib::highlight"]
version = "^1"

[dependencies."lib::highlight".apply]
scripts = [ "**" ]
styles = [ { to = "**", filter = "monokai.css" } ]
```

Then create the `site/partials/script.hbs` and initialize the library:

```html
<script>hljs.initHighlightingOnLoad();</script>
```

## Hello World

```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

[highlight.js]: https://highlightjs.org/
