const sass = require('node-sass');
const fs = require('fs-extra');
const path = require('path');
const tildeImporter = require('node-sass-tilde-importer');

function copyScss() {
  const result = sass.renderSync({
    file: path.resolve(__dirname, '../src/app/public/styles/sky.scss'),
    importer: tildeImporter
  });

  const target = path.resolve(__dirname, '../dist/css/sky.css');

  fs.ensureFileSync(target);
  fs.writeFileSync(target, result.css);
}

function copyDesignTokens() {
  fs.copySync(
    path.resolve(__dirname, '../node_modules/@blackbaud/skyux-design-tokens/scss'),
    path.resolve(__dirname, '../dist/scss')
  );
}

function copyScripts() {
  fs.copySync('./utils', './dist/utils');
}

copyScss();
copyDesignTokens();
copyScripts();
