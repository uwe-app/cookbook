const path = require('path');

module.exports = {
  entry: './site/src/main.js',
  output: {
    path: path.join(process.env.BUILD_TARGET, "assets", "scripts"),
    filename: 'main.js'
  }
};
