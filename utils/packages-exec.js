const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const packagesFolder = path.resolve(__dirname, '..', './packages/');
fs.readdirSync(packagesFolder).forEach((subFolder) => {
  const subFolderPath = path.join(packagesFolder, subFolder)
  console.log(subFolderPath);
  if (!process.argv[2]) {
    console.log('ERROR: no command passed');
    return;
  }
  const passedCommand = process.argv.slice(2).join(' ');
  console.log(passedCommand);
  cp.execSync(passedCommand, {
    stdio: [0, 1, 2],
    env: process.env,
    cwd: subFolderPath,
  });
  console.log();
});
