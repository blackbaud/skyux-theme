const sass = require('node-sass');
const fs = require('fs-extra');
const path = require('path');
const tildeImporter = require('node-sass-tilde-importer');

const result = sass.renderSync({
  file: path.resolve(__dirname, '../src/app/public/styles/sky.scss'),
  importer: tildeImporter
});

fs.ensureFileSync(path.resolve(__dirname, '../dist/css/sky.css'));
fs.writeFileSync(path.resolve(__dirname, '../dist/css/sky.css'), result.css);
