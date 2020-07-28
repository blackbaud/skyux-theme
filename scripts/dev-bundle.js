const fs = require('fs-extra');
const rimraf = require('rimraf');

function runAsync() {
  const dest = './node_modules/@skyux/theme';
  rimraf.sync(dest);

  fs.ensureDirSync(dest);
  fs.copySync('./dist', dest);
}

module.exports = {
  runAsync
};
