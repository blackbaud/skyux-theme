const crossSpawn = require('cross-spawn');

async function runAsync() {
  crossSpawn.sync('npx', [
    '-p', '@skyux-sdk/cli',
    'skyux', 'build-public-library',
    '--logFormat', 'none'
  ], {
    stdio: 'inherit'
  });

  require('./prepare-package');
  require('./dev-bundle');
}

module.exports = {
  runAsync
};
