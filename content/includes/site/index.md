+++
title = "Includes"
+++

Including text files is a useful tool for showing code samples.

By convention files in the `site/includes` folder are automatically ignored from the build; if you want to publish included files put them in another location.

## Helper

To include a file pass the path to the `include` helper:

```handlebars
\{{include ./includes/hello-world.c~}}
```

Notice the `~` at the end to remove the trailing whitespace otherwise we would have an extra newline which is undesirable.

## Example

```c
{{include ./includes/hello-world.c~}}
```

