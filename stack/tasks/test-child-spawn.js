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
  const timer2 = precise();
  timer2.start();
  execa('git', ['status']).then(({stdout}) => {
    timer2.stop();
    console.log('Message received in', timer2.diff() / 1000000, 'ms');
    console.log(stdout);
  }).catch(reason => {
    timer2.stop();
    console.log('Message received in', timer2.diff() / 1000000, 'ms');
    console.error(reason);
  })
})
