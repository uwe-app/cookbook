const fs = require('fs');
const entities = require('./entity-list.json');
const destination = "site/collections/entity/names.json";

let output = {};

// Source document contains some duplicates without the
// trailing semi-colon, this removes them.
for(k in entities) {
  if(/;$/.test(k)) {
    output[k] = entities[k];
  }
}

const result = JSON.stringify(output, undefined, 2);
fs.writeFileSync(destination, result);
