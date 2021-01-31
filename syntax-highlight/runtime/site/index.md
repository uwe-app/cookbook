+++
title = "Syntax Highlight Runtime"
+++

This example demonstrates how to enable syntax highlighting using the [highlight.js][] library at runtime.

Ensure the `lib::highlight` plugin is loaded and `apply` it's styles and scripts:

```toml
[dependencies."lib::highlight"]
version = "~10"

[dependencies."lib::highlight".apply]
scripts = [ "**" ]
styles = [ { to = "**", filter = "monokai.css" } ]
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
