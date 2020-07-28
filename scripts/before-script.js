const crossSpawn = require('cross-spawn');

const preparePackage = require('./prepare-package');
const devBundle = require('./dev-bundle');

module.exports = {
  runAsync: () => {
    crossSpawn.sync('npx', [
      '-p', '@skyux-sdk/cli',
      'skyux', 'build-public-library',
      '--logFormat', 'none'
    ], {
      stdio: 'inherit'
    });

    await preparePackage.runAsync();
    await devBundle.runAsync();
  }
};