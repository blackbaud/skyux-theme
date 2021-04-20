const crossSpawn = require('cross-spawn');

async function runAsync() {
  crossSpawn.sync('skyux', [
    'build-public-library',
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
