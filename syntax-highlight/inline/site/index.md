+++
title = "Syntax Highlight Inline"
+++

This example demonstrates how to enable syntax highlighting using inline styles.

Ensure the `std::syntax` plugin is loaded and set a `theme`:

```toml
[dependencies."std::syntax"]
version = "^1"

[syntax]
theme = "Solarized (light)"
```

## Hello World

```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```
