## Examples

Examples of various useful techniques for [UWE][] websites designed to accompany the documentation and so people can see each technique in isolation and build the projects to view the result.

This document assumes you have [already installed the tools][installation].

Clone the repository, change directory and preview the website for a project:


```
git clone https://github.com/uwe-app/examples.git uwe-examples
cd uwe-examples/collections/document
uwe dev
```

### Content

* [table-of-contents](/content/table-of-contents) Link to page headings

### Collections

* [csv-table](/collections/csv-table) Render an HTML table from a CSV document
* [document](/collections/document) Generate a collection from a single document
* [pagination](/collections/pagination) Paginate a collection

### Syntax Highlight

* [inline](/syntax-highlight/inline) Syntax highlight using inline styles
* [external](/syntax-highlight/external) Syntax highlight using an external stylesheet

## Notes

Developers can compile the entire workspace using `uwe build` at the root of the repository to quickly test for any errors.

[UWE]: https://uwe.app
[installation]: https://uwe.app/docs/installation/
