+++
title = "CSV Table"
+++

This examples demonstrates taking a CSV document and generating an HTML table containing the document data; it shows the ISO-3166-1 country codes.

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Code</th>
  </tr>
</thead>
<tbody>
{{#each result}}
<tr>{{#each this.value}}<td>{{this}}</td>{{/each}}</tr>
{{/each}}
</tbody>
</table>

---

Credit to [datahub](https://datahub.io/core/country-list) for the open data source.

---
