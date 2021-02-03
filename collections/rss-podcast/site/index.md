+++
title = "RSS Podcast"
+++

This example demonstrates loading an XML RSS feed and rendering to HTML; thanks to [Stephen West](https://www.philosophizethis.org/) for the feed and podcasts used in this example.

The template handling is a little cumbersome as we need to always access the `children` map when addressing child nodes; an earlier implementation flattened child nodes but that increases the chances of node name collisions.

The main rules to remember when working with XML collections are:

* Keys are fully qualified node names, eg: `xsi:string`.
* Attributes can be accessed via the `attributes` map.
* Child nodes are accessible via the `children` list.
* Node values are accessed via a `text` property.
* Character data is access via a `cdata` property.
* Multiple child nodes with the same name are coerced to a list.

To inspect the transformed data embed it in a page template:

````markdown
```json
\{{json result pretty=true}}
```
````
{{#with result.[1].value}}

## {{this.channel.children.title.text}}

{{#with this.channel.children.item.[0].children}}
<div>
<img src="{{this."itunes:image".attributes.href}}" />
</div>
{{/with}}

---

{{#each this.channel.children.item}}
{{#with children}}
<figure>
    <figcaption>
      <div><a href="{{this.link.cdata}}">{{this.title.text}}</a></div>
      <div><small>{{this."itunes:duration".text}}</small></div>
      <div>{{#if this.description}}{{{this.description.cdata}}}{{/if}}</div>
    </figcaption>
    <audio controls
        src="{{this.enclosure.attributes.url}}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
{{/with}}
{{/each}}

{{/with}}
