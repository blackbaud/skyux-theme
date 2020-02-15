const fs = require('fs-extra');
const rimraf = require('rimraf');

const json = fs.readJsonSync('./package.json');
const dest = `./node_modules/${json.name}`;

rimraf.sync(dest);

fs.ensureDirSync(dest);
fs.copySync('./dist', dest);
