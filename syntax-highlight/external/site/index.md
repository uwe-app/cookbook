+++
title = "Syntax Highlight External"
+++

This example demonstrates how to enable syntax highlighting using an external stylesheet.

Ensure the `std::syntax` plugin is loaded and define the `[syntax]` table:

```toml
[dependencies."std::syntax"]
version = "^1"
apply = { styles = [ { to = "**", filter = "solarized-light.css" } ] }

# Must define the `[syntax]` table to activate the highlighting
[syntax]
```

## Hello World

```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```
