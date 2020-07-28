const preparePackage = require('./prepare-package');
const devBundle = require('./dev-bundle');

async function runAsync() {
  require('./prepare-package');
}

module.exports = {
  runAsync
};
