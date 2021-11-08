const fs = require('fs-extra');
const sass = require('sass');
const tildeImporter = require('node-sass-tilde-importer');
const path = require('path');

const skyScssPath = path.join(__dirname, '../projects/theme/src/styles/sky.scss');

function validateSkyuxIconVersionMatch() {
  console.log('Validating SKY UX icon font version...');

  const scssContents = fs.readFileSync(
    skyScssPath,
    'utf8'
  ).toString();

  const packageJson = fs.readJsonSync(
    path.resolve(
      __dirname,
      '../projects/theme/package.json'
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
  const result = sass.renderSync({
    file: file,
    importer: tildeImporter,
    quietDeps: true
  });

  fs.ensureFileSync(target);
  fs.writeFileSync(target, result.css);
}

function copyScss() {
  console.log('Preparing SCSS and CSS files...');

  renderScss(
    skyScssPath,
    path.resolve(__dirname, '../dist/theme/css/sky.css')
  );

  renderScss(
    path.resolve(__dirname, '../projects/theme/src/styles/themes/modern/styles.scss'),
    path.resolve(__dirname, '../dist/theme/css/themes/modern/styles.css')
  );

  console.log('Done.');
}

function copyDesignTokens() {
  console.log('Copying design tokens...');

  fs.copySync(
    path.resolve(__dirname, '../projects/theme/src/styles/_mixins-public.scss'),
    path.resolve(__dirname, '../dist/theme/scss/mixins.scss')
  );

  fs.copySync(
    path.resolve(__dirname, '../projects/theme/src/styles/_variables-public.scss'),
    path.resolve(__dirname, '../dist/theme/scss/variables.scss')
  );

  console.log('Done.');
}

function copyScripts() {
  console.log('Copying scripts...');

  fs.copySync(
    path.join(process.cwd(), './utils'),
    path.join(process.cwd(), './dist/theme/utils')
  );

  console.log('Done.');
}

function copyCompatMixins() {
  console.log('Copying compatibility mixins...');

  fs.copySync(
    path.join(process.cwd(), './projects/theme/src/styles/_compat'),
    path.join(process.cwd(), './dist/theme/scss/_compat')
  );

  fs.copySync(
    path.join(process.cwd(), './projects/theme/src/styles/themes/modern/_compat'),
    path.join(process.cwd(), './dist/theme/scss/themes/modern/_compat')
  );

  console.log('Done.');
}

validateSkyuxIconVersionMatch();
copyScss();
copyDesignTokens();
copyCompatMixins();
copyScripts();
