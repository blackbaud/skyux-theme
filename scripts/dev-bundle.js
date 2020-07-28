const cli = require('@skyux-sdk/builder');
const fs = require('fs-extra');
const rimraf = require('rimraf');

module.exports = {
  runAsync: async () => {
    const dest = './node_modules/@skyux/theme';
    rimraf.sync(dest);

    await cli.runCommand('build-public-library', {});

    fs.ensureDirSync(dest);
    fs.copySync('./dist', dest);
  }
};