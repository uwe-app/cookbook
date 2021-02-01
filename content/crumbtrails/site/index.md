+++
title = "Home"
+++

To use the `crumbtrail` partial ensure the `std::crumbtrail` plugin is loaded:

```toml
[dependencies."std::crumbtrail"]
version = "^1"
apply = { styles = ["**"] }
```

Then use the `crumbtrail` partial to render a navigation to parent folders:

```toml
\{{> crumbtrail}}
```

Parent folders *must have an index page* to be include in the navigation.

To view it in action go to the [[section|mock section]] and [[section/subsection|mock subsection]] pages.
