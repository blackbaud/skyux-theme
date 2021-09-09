const crossSpawn = require('cross-spawn');

async function runAsync() {
  console.log('Preparing package for NPM...');

  crossSpawn.sync('node', ['./scripts/prepare-package.js'], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });

  console.log('Done preparing package.');
}

module.exports = {
  runAsync
};
