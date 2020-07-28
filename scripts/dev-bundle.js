const fs = require('fs-extra');
const rimraf = require('rimraf');
const crossSpawn = require('cross-spawn');

const preparePackage = require('./prepare-package');

function runAsync() {
  const dest = './node_modules/@skyux/theme';
  rimraf.sync(dest);

  crossSpawn.sync('npx', [
    '-p', '@skyux-sdk/cli',
    'skyux', 'build-public-library',
    '--logFormat', 'none'
  ], {
    stdio: 'inherit'
  });

  fs.ensureDirSync(dest);
  fs.copySync('./dist', dest);

  await preparePackage.runAsync();
}

module.exports = {
  runAsync
};
