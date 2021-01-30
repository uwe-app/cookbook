+++
title = "HTML Entity List"
+++

# {{title}}

This example demonstrates using page size with a collections query combined with the `std::paginate` plugin to  navigate a series of pages.

---

{{> paginate}}

<div class="entities">

{{#each result}}
<div>
<h2>{{this.value.characters}}</h2>

<div class="detail">Entity: {{this.key.id}}</div>
<div class="detail">Codepoints: {{#each this.value.codepoints}}{{this}}{{#if (not @last)}}, {{/if}}{{/each}}</div>

{{!-- {{json this pretty=true}} --}}
</div>
{{/each}}

</div>
