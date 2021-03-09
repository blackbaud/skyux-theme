const fs = require('fs-extra');
const sass = require('sass');
const tildeImporter = require('node-sass-tilde-importer');
const path = require('path');

const skyScssPath = '../src/app/public/styles/sky.scss';

function validateSkyuxIconVersionMatch() {
  console.log('Validating SKY UX icon font version...');

  const scssContents = fs.readFileSync(
    path.resolve(__dirname, skyScssPath),
    'utf8'
  ).toString();

  const packageJson = fs.readJsonSync(
    path.resolve(
      __dirname,
      '..', 'package.json'
    )
  );

  const scssVersionMatches = scssContents.match(
    /@import url\(\"https\:\/\/sky\.blackbaudcdn\.net\/static\/skyux\-icons\/([A-z0-9\-\.]+)\/assets\/css\/skyux\-icons\.min\.css\"\)/);

  if (!scssVersionMatches || scssVersionMatches.length !== 2) {
    console.error('Could not find the SKY UX icon font version in sky.scss.');
    process.exit(1);
  }

  const scssVersion = scssVersionMatches[1];

  const packageVersion = packageJson.dependencies['@skyux/icons'];

  if (!packageVersion) {
    console.error('Could not find the @skyux/icons dependency in package.json');
    process.exit(1);
  }

  if (scssVersion !== packageVersion) {
    console.error(
      'sky.scss references SKY UX icon font version ' +
      scssVersion +
      ', but package.json references @skyux/icons version ' +
      packageVersion +
      '. These versions should match.'
    );
    process.exit(1);
  }

  console.log('Done.');
}

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
    skyScssPath,
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

validateSkyuxIconVersionMatch();
copyScss();
copyDesignTokens();
copyCompatMixins();
copyScripts();
