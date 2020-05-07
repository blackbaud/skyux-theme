const fs = require('fs-extra');
const sass = require('node-sass');
const tildeImporter = require('node-sass-tilde-importer');
const path = require('path');

function renderScss(file, target) {
  file = path.resolve(__dirname, file);
  target = path.resolve(__dirname, target);

  const result = sass.renderSync({
    file: file,
    importer: tildeImporter
  });

  fs.ensureFileSync(target);
  fs.writeFileSync(target, result.css);
}

function copyScss() {
  renderScss(
    '../src/app/public/styles/sky.scss',
    '../dist/css/sky.css'
  );

  renderScss(
    '../src/app/public/styles/themes/modern/styles.scss',
    '../dist/css/themes/modern/styles.css'
  );
}

function copyDesignTokens() {
  fs.copySync(
    path.resolve(__dirname, '../src/app/public/styles/_mixins-public.scss'),
    path.resolve(__dirname, '../dist/scss/mixins.scss')
  );

  fs.copySync(
    path.resolve(__dirname, '../src/app/public/styles/_variables-public.scss'),
    path.resolve(__dirname, '../dist/scss/variables.scss')
  );
}

function copyScripts() {
  fs.copySync('./utils', './dist/utils');
}

function copyCompatMixins() {
  fs.copySync(
    './src/app/public/styles/_compat',
    './dist/scss/_compat'
  );

  fs.copySync(
    './src/app/public/styles/themes/modern/_compat',
    './dist/scss/themes/modern/_compat'
  );
}

copyScss();
copyDesignTokens();
copyCompatMixins();
copyScripts();
