+++
title = "HTML Entity List"
+++

# {{title}}

{{#each result}}
## {{this.value.characters}}

<div>Entity: {{this.key.id}}</div>
<div>Codepoints: {{json this.value.codepoints}}</div>

{{json this pretty=true}}

{{/each}}

