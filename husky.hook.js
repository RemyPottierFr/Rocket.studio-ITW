const { exec } = require('child_process');

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    process.exit(1);
    return;
  }
  if (/master|dev/.test(stdout.trim())) {
    console.log(
      '\x1b[31m%s\x1b[0m',
      `ERROR : NEVER COMMIT/PUSH ON "${stdout.replace('\n', '')}" BRANCH`,
    );
    console.log('\x1b[31m%s\x1b[0m', `PLEASE CREATE YOUR OWN BRANCH FROM "dev" BRANCH`);
    process.exit(1);
    return;
  }
});

exec('git diff --cached --name-only', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    process.exit(1);
    return;
  }
  if (/package-lock.json/.test(stdout.trim())) {
    console.log('\x1b[31m%s\x1b[0m', `DON'T ADD "package-lock.json" file, use yarn instead`);
    process.exit(1);
    return;
  }
  if (/static\/global.css/.test(stdout.trim())) {
    console.log('\x1b[31m%s\x1b[0m', `DON'T ADD "global.css" file`);
    process.exit(1);
    return;
  }
});
