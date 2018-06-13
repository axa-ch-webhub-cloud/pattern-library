const outdent = require('outdent');
const { exec } = require('child_process');
const execa = require('execa');
const promiseSeries = require('promise.series')
const waterfall = require('async-waterfall');
const chalk = require('chalk');
// eslint-disable-next-line import/no-dynamic-require
const pkj = require(`${process.cwd()}/package.json`);

const DEVELOP_TRUNK = 'develop';
const MASTER_TRUNK = 'master';
const STABLE = 'stable';
const UNSTABLE = 'unstable';
const HOTFIX = 'hotfix';
const MAJOR = 'major';
const MINOR = 'minor';
const PATCH = 'patch';
const BETA = 'beta';

process.stdin.setEncoding('utf8');

console.log(chalk.cyan(outdent`

  🚀  Hello Dear developer, welcome to the release assistant. 🚀

  !! Please make sure you have no changes to be commited !!

  I'm getting some information....

  `));

promiseSeries([
  () => execa('npm', ['whoami'])
    .then(({ stdout }) => stdout)
    .catch((reason) => {
      console.log(chalk.red(outdent`

        Attention: You are currently not logged into npm. I will abort the action

        Please login:

        ${chalk.bold('npm login')}

      `));

      throw reason;
    }),
  whoami => execa('npm', ['owner', 'ls'])
    .then(({ stdout }) => {
      const hasOwnership = stdout.trim().indexOf(whoami.trim()) > -1;

      if (!hasOwnership) {
        console.log(chalk.red(outdent`
            Attention: Your account ${chalk.bold(whoami)} has no publisher rights. Please contact the administrator
          `));

        throw new Error('401 UNAUTHORIZED');
      }
    })
    .catch((reason) => {
      try {
        const isNew = reason.message.indexOf('404 Not found') > -1;

        if (isNew) {
          console.log(chalk.yellow(outdent`
            ATTENTION: Package ${chalk.bold(pkj.name)} does not exist yet on NPM!
            We will try to create it for you. Be aware to have @axa-ch as scope in your package.json!
            Your current version defined in the package.json is ${chalk.bold(pkj.version)}.
          `));

          return;
        }
      } catch (e) {}

      throw reason;
    })
    .then(() => {
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
    }),
]).then(() => {
  // process.exit(0);
}).catch((reason) => {
  console.log(reason)

  process.exit(1);
});

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
      ${type === UNSTABLE ? 'BETA (prerelease) this increases the beta version of a patch. Recommended step!' : ''}
      ${type === UNSTABLE ? 'MAJOR BETA (premajor)' : 'MAJOR'} version when you make incompatible API changes,
      ${type === UNSTABLE ? 'MINOR BETA (preminor)' : 'MINOR'} version when you add functionality in a backwards-compatible manner, and
      ${type === UNSTABLE ? 'PATCH BETA (prepatch)' : 'PATCH'} version when you make backwards-compatible bug fixes.

      Select:
    `));

  console.log(chalk.yellow(outdent`

      ${type === UNSTABLE ? 'beta: for beta release of current branch. Recommended' : ''}
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
      5. merge ${DEVELOP_TRUNK} into ${MASTER_TRUNK} and push
      6. sync ${DEVELOP_TRUNK} with ${MASTER_TRUNK} again

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
  if (type === STABLE && version === BETA) {
    return;
  }

  const isHotfix = type === HOTFIX;
  const TRUNK = isHotfix ? MASTER_TRUNK : DEVELOP_TRUNK;
  let releaseSteps = [
    (callback) => {
      exec(`git checkout ${TRUNK} && git pull && git checkout -b release-tmp`, handleSuccess(callback, () => {
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

      if (type === UNSTABLE) {
        command = `npm run bump-${version === BETA ? '' : `${version}-`}beta`;
      }

      exec(command, handleSuccess(callback, () => {
        console.log(chalk.cyan(outdent`
          Step 3 complete...
        `));
      }));
    },
    (stdout, stderr, callback) => {
      exec(`npm publish ${version === BETA ? ' --tag beta' : ''}`, callback);
    },
    (stdout, stderr, callback) => {
      exec(
        `git checkout ${TRUNK} && git merge --ff-only release-tmp && git push && git push --tags`,
        handleSuccess(callback, () => {
          console.log(chalk.cyan(outdent`
            Step 4 complete...
          `));
        }),
      );
    },
  ];

  if (!isHotfix) {
    releaseSteps = [
      ...releaseSteps,
      (stdout, stderr, callback) => {
        exec(
          `git checkout ${MASTER_TRUNK} && git merge --no-ff ${DEVELOP_TRUNK} && git push && git push --tags`,
          handleSuccess(callback, () => {
            console.log(chalk.cyan(outdent`

            Step 5 complete...
          `));
          }),
        );
      },
      (stdout, stderr, callback) => {
        exec(
          `git checkout ${DEVELOP_TRUNK} && git merge --ff-only ${MASTER_TRUNK} && git push && git push --tags`,
          handleSuccess(callback, () => {
            console.log(chalk.cyan(outdent`

            Step 6 complete! Publishing done successfully. Have fun!

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
    case STABLE:
      if (step !== 1) {
        return;
      }
      releaseType = STABLE;
      prerelease(releaseType);
      step++; // eslint-disable-line no-plusplus
      break;
    case UNSTABLE:
      if (step !== 1) {
        return;
      }
      releaseType = UNSTABLE;
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
    case MAJOR:
      if (step !== 2) {
        return;
      }
      releaseVersion = MAJOR;
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case MINOR:
      if (step !== 2) {
        return;
      }
      releaseVersion = MINOR;
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case PATCH:
      if (step !== 2) {
        return;
      }
      releaseVersion = PATCH;
      release(releaseType, releaseVersion);
      step++; // eslint-disable-line no-plusplus
      break;
    case BETA:
      if (step !== 2) {
        return;
      }
      releaseVersion = BETA;
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
