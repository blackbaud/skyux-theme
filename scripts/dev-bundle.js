const cli = require('@skyux-sdk/builder');
const fs = require('fs-extra');

const dest = './node_modules/@skyux/theme';

const rimraf = require('rimraf');
rimraf.sync(dest);

cli.runCommand('build-public-library', {});

fs.ensureDirSync(dest);
fs.copySync('./dist', dest);
