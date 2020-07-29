const fs = require('fs-extra');
const sass = require('sass');
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
  console.log('Preparing SCSS and CSS files...');

  renderScss(
    '../src/app/public/styles/sky.scss',
    '../dist/css/sky.css'
  );

  renderScss(
    '../src/app/public/styles/themes/modern/styles.scss',
    '../dist/css/themes/modern/styles.css'
  );

  console.log('Done.');
}

function copyDesignTokens() {
  console.log('Copying design tokens...');

  fs.copySync(
    path.resolve(__dirname, '../src/app/public/styles/_mixins-public.scss'),
    path.resolve(__dirname, '../dist/scss/mixins.scss')
  );

  fs.copySync(
    path.resolve(__dirname, '../src/app/public/styles/_variables-public.scss'),
    path.resolve(__dirname, '../dist/scss/variables.scss')
  );

  console.log('Done.');
}

function copyScripts() {
  console.log('Copying scripts...');

  fs.copySync(
    path.join(process.cwd(), './utils'),
    path.join(process.cwd(), './dist/utils')
  );

  console.log('Done.');
}

function copyCompatMixins() {
  console.log('Copying compatibility mixins...');

  fs.copySync(
    path.join(process.cwd(), './src/app/public/styles/_compat'),
    path.join(process.cwd(), './dist/scss/_compat')
  );

  fs.copySync(
    path.join(process.cwd(), './src/app/public/styles/themes/modern/_compat'),
    path.join(process.cwd(), './dist/scss/themes/modern/_compat')
  );

  console.log('Done.');
}

copyScss();
copyDesignTokens();
copyCompatMixins();
copyScripts();
