const outdent = require('outdent');
const { exec } = require('child_process');
const waterfall = require('async-waterfall');
const chalk = require('chalk');

const DEVELOP_TRUNK = 'develop';
const MASTER_TRUNK = 'master';
const HOTFIX = 'hotfix';

process.stdin.setEncoding('utf8');

console.log(chalk.cyan(outdent`

  🚀  Hello Dear developer, welcome to the release assistent. 🚀

  !! Please make sure you have no changes to be commited !!

  I'm getting some information....

  `));

const handleError = (callback, errorCallback) => (error, ...args) => {
  if (error) {
    errorCallback(error, ...args);
  }

  callback(error, ...args);
};

const handleSuccess = (callback, successCallback) => (error, ...args) => {
  if (!error) {
    successCallback(error, ...args);
  }

  callback(error, ...args);
};

waterfall([
  (callback) => {
    exec('npm whoami', handleError(callback, () => {
      console.log(chalk.red(outdent`

        Attention: You are currently not logged into npm. I will abort the action

        Please login:

        ${chalk.bold('npm login')}

      `));
    }));
  },
  (whoami, stderr, callback) => {
    // eslint-disable-next-line consistent-return
    exec('npm owner ls', handleError(callback, (error, stdout) => {
      if (stdout.trim().indexOf(whoami.trim()) === -1) {
        console.log(chalk.red(outdent`

            Attention: Your account ${chalk.bold(whoami)} has no publisher rights. Please contact the administrator

          `));

        return callback(true);
      }

      console.log(chalk.cyan(outdent`

          You are currently logged in as:
        `));

      console.log(chalk.yellow(whoami.trim()));

      console.log(chalk.cyan(outdent`

          Would you like to continue?
        `));

      console.log(chalk.yellow(outdent`

          y: yes
          n: no

        `));
    }));
  },
], (error) => {
  if (error) {
    process.exit(1);
  }
});

const determineStable = () => {
  console.log(chalk.cyan(outdent`

      Do you want to release a stable version or unstable (beta postfixed)?
    `));

  console.log(chalk.yellow(outdent`

      stable: for stable
      unstable: for unstable
      hotfix: for an urgent bug fix to be merged directly into master

    `));
};

const reallyHotfix = () => {
  console.log(chalk.red(outdent`

      Have you merged all your urgent ${chalk.bold('hotfix/*')} branches into ${MASTER_TRUNK}?
      
      Note: this has to be done by finger tips:)
    `));

  console.log(chalk.yellow(outdent`

    y: yes
    n: no

  `));
};

const prerelease = (type) => {
  console.log(chalk.cyan(outdent`

      Ok, we will release a ${type} version!

      Choose which version label you want to bump.

      Remember:
      ${type === 'unstable' ? 'BETA (prerelease) this increases the beta version of a patch. Recommended step!' : ''}
      ${type === 'unstable' ? 'MAJOR BETA (premajor)' : 'MAJOR'} version when you make incompatible API changes,
      ${type === 'unstable' ? 'MINOR BETA (preminor)' : 'MINOR'} version when you add functionality in a backwards-compatible manner, and
      ${type === 'unstable' ? 'PATCH BETA (prepatch)' : 'PATCH'} version when you make backwards-compatible bug fixes.

      Select:
    `));

  console.log(chalk.yellow(outdent`

      ${type === 'unstable' ? 'beta: for beta release of current branch. Recommended' : ''}
      major: for incompatible API changes
      minor: new functionality in a backwards-compatible manner
      patch: for backwards-compatible bug fixes

    `));
};

const release = (type, version) => {
  if (type === HOTFIX) {
    console.log(chalk.cyan(outdent`

      Ok, we will release a ${type} version!

      I will do now the following:

      1. build the dist folder
      2. bump the desired version
      3. publish to npm
      4. ${chalk.red.bold(`Don't forget to merges your hotfix branches into ${DEVELOP_TRUNK} too`)}

      Please confirm that you want to proceed
    `));
  } else {
    console.log(chalk.cyan(outdent`

      Ok, we will release a ${version} version!

      I will do now the following:

      1. pull the ${DEVELOP_TRUNK} branch
      2. build the dist folder
      3. bump the desired version
      4. publish to npm
      5. fast-foward merge ${DEVELOP_TRUNK} into ${MASTER_TRUNK} and push

      Please confirm that you want to proceed
    `));
  }

  console.log(chalk.yellow('\nproceed: to proceed with the above described steps. This operation cannot be undone!'));
};

const generalCleanupHandling = (exitcode) => {
  exec(
    `git checkout ${DEVELOP_TRUNK} && git branch -D release-tmp`,
    (error) => {
      if (error) {
        console.log(chalk.red(error));
        process.exit(1);
      }

      process.exit(exitcode);
    },
  );
};

const confirmedRelease = (type, version) => {
  if (type === 'stable' && version === 'beta') {
    return;
  }

  let releaseSteps;

  if (type === HOTFIX) {
    releaseSteps = [
      (callback) => {
        exec(`git checkout ${MASTER_TRUNK} && git pull && git checkout -b release-tmp`, handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
            Step 1 complete...
          `));
        }));
      },
      (stdout, stderr, callback) => {
        exec('npm run build && git add ./dist ./docs && git commit -m"rebuild"', handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
          Step 2 complete...
        `));
        }));
      },
      (stdout, stderr, callback) => {
        let command = `npm run bump-${version}`;

        if (type === 'unstable') {
          command = `npm run bump-${version === 'beta' ? '' : `${version}-`}beta`;
        }

        exec(command, handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
          Step 3 complete...
        `));
        }));
      },
      (stdout, stderr, callback) => {
        exec(`npm publish ${version === 'beta' ? ' --tag beta' : ''}`, callback);
      },
      (stdout, stderr, callback) => {
        exec(
          `git checkout ${MASTER_TRUNK} && git merge --ff-only release-tmp && git push && git push --tags`,
          handleSuccess(callback, () => {
            console.log(chalk.cyan(outdent`
            Step 4 complete...
          `));
          }),
        );
      },
    ];
  } else {
    releaseSteps = [
      (callback) => {
        exec(`git checkout ${DEVELOP_TRUNK} && git pull && git checkout -b release-tmp`, handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
          Step 1 complete...
        `));
        }));
      },
      (stdout, stderr, callback) => {
        exec('npm run build && git add ./dist ./docs && git commit -m"rebuild"', handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
          Step 2 complete...
        `));
        }));
      },
      (stdout, stderr, callback) => {
        let command = `npm run bump-${version}`;

        if (type === 'unstable') {
          command = `npm run bump-${version === 'beta' ? '' : `${version}-`}beta`;
        }

        exec(command, handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
          Step 3 complete...
        `));
        }));
      },
      (stdout, stderr, callback) => {
        exec(`npm publish ${version === 'beta' ? ' --tag beta' : ''}`, callback);
      },
      (stdout, stderr, callback) => {
        exec(
          `git checkout ${DEVELOP_TRUNK} && git merge --ff-only release-tmp && git push && git push --tags`,
          handleSuccess(callback, () => {
            console.log(chalk.cyan(outdent`
            Step 4 complete...
          `));
          }),
        );
      },
      (stdout, stderr, callback) => {
        exec(
          `git checkout ${MASTER_TRUNK} && git merge --no-ff ${DEVELOP_TRUNK} && git push && git push --tags`,
          handleSuccess(callback, () => {
            console.log(chalk.cyan(outdent`

            Step 5 complete! Publishing done successfully. Have fun!

          `));
          }),
        );
      },
    ];
  }

  waterfall(releaseSteps, (error) => {
    if (error) {
      console.log(chalk.red(error));

      generalCleanupHandling(1);
    } else {
      generalCleanupHandling(0);
    }
  });
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
      console.log(chalk.cyan('\nOk, let\'s do it 😎 👍'));

      if (releaseType === HOTFIX) {
        prerelease(releaseType);
      } else {
        determineStable();
      }
      step++; // eslint-disable-line no-plusplus
      break;
    case 'n':
      console.log('closing...');
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
    case HOTFIX:
      if (step !== 1) {
        return;
      }
      releaseType = HOTFIX;
      reallyHotfix();
      step++; // eslint-disable-line no-plusplus
      break;
    case 'major':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'major';
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'beta':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'beta';
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'minor':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'minor';
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case 'patch':
      if (step !== 2) {
        return;
      }
      releaseVersion = 'patch';
      release(releaseType, releaseVersion);
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
      console.log(chalk.cyan('Command not understood. Try again or press \'n\' to abort'));
      break;
  }
});


process.stdin.on('end', () => {
  process.stdout.write('end');
});
