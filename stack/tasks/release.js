const outdent = require('outdent');
const { exec } = require('child_process');

process.stdin.setEncoding('utf8');

// ref: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
  outdent`

  🚀  Hello Dear developer, welcome to the release assistent. 🚀

  !! Please make sure you have no changes to be commited !!

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
          `,
        );
        console.log('\x1b[40m', '\x1b[33m', // eslint-disable-line
          outdent`

            y: yes
            n: no

          `,
        );
      },
    );
  },
);


const determineStable = () => {
  console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
    outdent`

      Do you want to release a stable version or unstable (beta postfixed)?
    `,
  );
  console.log('\x1b[40m', '\x1b[33m', // eslint-disable-line
    outdent`

      stable: for stable
      unstable: for unstable

    `,
  );
};

const prerelease = (what) => {
  console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
    outdent`

      Ok, we will release a ${what} version!

      Choose which version label you want to bump.

      Remember:
      ${what === 'unstable' ? 'BETA (prerelease) this increases the beta version of a patch. Reccomended step!' : ''}
      ${what === 'unstable' ? 'MAJOR BETA (premajor)' : 'MAJOR'} version when you make incompatible API changes,
      ${what === 'unstable' ? 'MINOR BETA (preminor)' : 'MINOR'} version when you add functionality in a backwards-compatible manner, and
      ${what === 'unstable' ? 'PATCH BETA (prepatch)' : 'PATCH'} version when you make backwards-compatible bug fixes.

      Select:
    `,
  );
  console.log('\x1b[40m', '\x1b[33m', // eslint-disable-line
    outdent`

      ${what === 'unstable' ? 'beta: for beta release of current branch. Reccomended' : ''}
      major: for incompatible API changes
      minor: new functionality in a backwards-compatible manner
      patch: for backwards-compatible bug fixes

    `,
  );
};

const release = (version) => {
  console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
    outdent`

      Ok, we will release a ${version} version!

      I will do now the following:

      1. pull the master branch
      2. build the dist folder
      3. bump the desired version
      4. publish to npm

      Please confirm that you want to proceed
    `,
  );
  console.log('\x1b[40m', '\x1b[33m', '\nproceed: to proceed with the above described steps. This operation cannot be undone!');
};

const confirmedRelease = (type, version) => {
  if (type === 'stable' && version === 'beta') {
    return;
  }

  exec(
    'git checkout master && git pull',
    (_error1) => {
      if (_error1) {
        console.log('\x1b[40m', '\x1b[31m', _error1);
        process.exit(1);
      }
      console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
        outdent`
          Step 1 complete...
        `,
      );
      exec(
        'npm run build && git add ./dist && git commit -m"rebuild"',
        (_error2) => {
          if (_error2) {
            console.log('\x1b[40m', '\x1b[31m', _error2);
            process.exit(1);
          }
          console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
            outdent`
              Step 2 complete...
            `,
          );
          let command = `npm run bump-${version}`;
          if (type === 'unstable') {
            command = `npm run bump-${version === 'beta' ? '' : `${version}-`}beta`;
          }
          exec(
            command,
            (_error3) => {
              if (_error3) {
                console.log('\x1b[40m', '\x1b[31m', _error3);
                process.exit(1);
              }
              console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
                outdent`
                  Step 3 complete...
                `,
              );
              exec(
                `npm publish ${version === 'beta' ? ' --tag beta' : ''}`,
                (_error5) => {
                  if (_error5) {
                    console.log('\x1b[40m', '\x1b[31m', _error5);
                    process.exit(1);
                  }
                  exec(
                    'git push && git push --tags',
                    (_error4) => {
                      if (_error4) {
                        console.log('\x1b[40m', '\x1b[31m', _error4);
                        process.exit(1);
                      }
                      console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
                        outdent`

                          Step 4 complete! Publishing done successfully. Have fun!

                        `,
                      );
                      process.exit(0);
                    },
                  );
                },
              );
            },
          );
        },
      );
    },
  );
};

let step = 0;
let releaseType = '';
let releaseVersion = '';

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk === null) {
    return;
  }
  switch (chunk.trim()) {
    case 'y':
      if (step > 0) {
        return;
      }
      console.log('\x1b[40m', '\x1b[36m', '\nOk, let\'s do it 😎 👍');
      determineStable();
      step++; // eslint-disable-line no-plusplus
      break;
    case 'n':
      console.log('closing..');
      process.exit(0);
      break;
    case 'stable':
      if (step !== 1) {
        return;
      }
      releaseType = 'stable';
      prerelease(releaseType);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'unstable':
      if (step !== 1) {
        return;
      }
      releaseType = 'unstable';
      prerelease(releaseType);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'major':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'major';
      release(releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'beta':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'beta';
      release(releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'minor':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'minor';
      release(releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'patch':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'patch';
      release(releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'proceed':
      if (step !== 3) {
        return;
      }
      confirmedRelease(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    default:
      console.log('\x1b[40m', '\x1b[36m', 'Command not understood. Try again or press \'n\' to abort');
      break;
  }
});


process.stdin.on('end', () => {
  process.stdout.write('end');
});
