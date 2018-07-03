const execa = require('execa');

const precise = require('precise');
const timer = precise();

timer.start();
execa('npm', ['whoami']).then(({stdout}) => {
  timer.stop();
  console.log('Message received in', timer.diff() / 1000000, 'ms');
  console.log(stdout);
}).catch(reason => {
  timer.stop();
  console.log('Message received in', timer.diff() / 1000000, 'ms');
  console.error(reason);
}).then(() => {
  timer.start();
  execa('git', ['status']).then(({stdout}) => {
    timer.stop();
    console.log('Message received in', timer.diff() / 1000000, 'ms');
    console.log(stdout);
  }).catch(reason => {
    timer.stop();
    console.log('Message received in', timer.diff() / 1000000, 'ms');
    console.error(reason);
  })
})
