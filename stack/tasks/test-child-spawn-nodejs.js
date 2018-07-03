const { execFile } = require('child_process');
const precise = require('precise');
const timer = precise();

timer.start();

// Node does not support PATHEXT on Windows
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

execFile(npmCmd, ['whoami'], { env: process.env }, (error, stdout, stderr) => {
  timer.stop();
  console.log('Message received in', timer.diff() / 1000000, 'ms');
  if (error) {
    console.error(error);
  } else {
    console.log(stdout);
  }

  const timer2 = precise();
  timer2.start();

  execFile('git', ['status'], (error, stdout, stderr) => {
    timer2.stop();
    console.log('Message received in', timer2.diff() / 1000000, 'ms');
    if (error) {
      console.error(error);
    } else {
      console.log(stdout);
    }
  });
});
