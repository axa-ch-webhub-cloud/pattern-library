const outdent = require('outdent');
const { exec } = require('child_process');

process.stdin.setEncoding('utf8');

console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
  outdent`

  🚀  Hello Dear developer, welcome to the release assistent. 🚀

  I'm getting some information....

  `,
);

exec(
  'npm whoami',
  (error, whoami) => {
    if (error !== null) {
      console.log('\x1b[40m', '\x1b[31m', // eslint-disable-line
        outdent`

          Attention: You are currently not logged into npm. I will abort the action

          Please login:

          npm login

        `,
      );
      process.exit(1);
    }
    exec(
      'npm owner ls',
      (_error, stdout) => {
        if (stdout.trim().indexOf(whoami.trim()) === -1) {
          console.log('\x1b[40m', '\x1b[31m', // eslint-disable-line
            outdent`

              Attention: Your account ${whoami} has no publisher rights. Please contact the administrator

            `,
          );
          process.exit(1);
        }
        console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
          outdent`

            You are currently logged in as:
          `,
        );
        console.log('\x1b[40m', '\x1b[33m', whoami.trim());
        console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
          outdent`

            Would you like to continue?

            1: yes
            2: no
          `,
        );
      },
    );
  },
);

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  switch (parseInt(chunk, 10)) {
    case 1:
      console.log('Ok, let\'s do it 😎 👍');
      break;
    case 2:
      console.log('closing..');
      process.exit(0);
      break;
    default:
      if (chunk !== null) {
        console.log('Command not understood. Try again or press 2 to abort');
      }
      break;
  }
});


process.stdin.on('end', () => {
  process.stdout.write('end');
});
