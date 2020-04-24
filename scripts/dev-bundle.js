const fs = require('fs-extra');
const path = require('path');
const dest = './node_modules/@skyux/theme';

const rimraf = require('rimraf');
rimraf.sync(dest);

fs.ensureDirSync(dest);
fs.copySync('./dist', dest);
