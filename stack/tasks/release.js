const outdent = require('outdent');
const execa = require('execa');
const fkill = require('fkill');
const promiseSeries = require('promise.series');
const chalk = require('chalk');
// eslint-disable-next-line import/no-dynamic-require
const pkj = require(`${process.cwd()}/package.json`);

const DEVELOP_TRUNK = 'develop';
const MASTER_TRUNK = 'master';
const RELEASE_TMP = 'release-tmp';
const STABLE = 'stable';
const UNSTABLE = 'unstable';
const HOTFIX = 'hotfix';
const MAJOR = 'major';
const MINOR = 'minor';
const PATCH = 'patch';
const BETA = 'beta';

process.stdin.setEncoding('utf8');

const execaPipeError = (file, ...rest) => {
  const isCommand = rest.length === 0;
  const params = isCommand ? file.split(/\s+/) : [file, ...rest];
  const [command, ...args] = params;

  const exec = execa(command, args, {
    stdio: 'ignore',
  });

  return exec
    .then((result) => {
      console.log(`>>> resolved ${exec.pid} | ${command} ${args.join(' ')}`);

      fkill(exec.pid, { force: true });

      return result;
    })
    .catch((reason) => {
      console.log(`>>> rejected ${exec.pid} | ${command} ${args.join(' ')}`);

      fkill(exec.pid, { force: true });

      throw reason;
    });
};

const execaSeries = args => promiseSeries(args
  .filter(arg => typeof arg === 'string' && arg.length)
  .map(arg => () => execaPipeError(arg)));

console.log(chalk.cyan(outdent`

  🚀  Hello Dear developer, welcome to the release assistant. 🚀

  !! Please make sure you have no changes to be commited !!

  I'm getting some information....

  `));

promiseSeries([
  () => execaPipeError('npm whoami')
    .then(({ stdout }) => stdout)
    .catch((reason) => {
      console.log(chalk.red(outdent`

        Attention: You are currently not logged into npm. I will abort the action

        Please login:

        ${chalk.bold('npm login')}

      `));

      throw reason;
    }),
  whoami => execaPipeError('npm owner ls')
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
      } catch (error) {
        throw error;
      }

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
  console.error(reason);

  process.exit(1);
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
  execaSeries([
    `git checkout ${DEVELOP_TRUNK}`,
    `git branch -D ${RELEASE_TMP}`,
  ]).then(() => {
    process.exit(exitcode);
  }).catch((reason) => {
    console.error(chalk.red(reason));
    process.exit(1);
  });
};

const confirmedRelease = (type, version) => {
  if (type === STABLE && version === BETA) {
    return;
  }

  const isHotfix = type === HOTFIX;
  const TRUNK = isHotfix ? MASTER_TRUNK : DEVELOP_TRUNK;
  const { scripts } = pkj;
  const hasTestScript = scripts.test;

  let releaseSteps = [
    () => execaSeries([
      `git checkout ${TRUNK} --quiet`,
      'git pull',
      `git checkout -b ${RELEASE_TMP}  --quiet`,
    ]).then(() => {
      console.log(chalk.cyan(outdent`
          Step 1 complete...
        `));
    }),
    () => execaSeries([
      hasTestScript && 'npm run test',
      'npm run build',
      'git add ./dist ./docs',
      'git commit -m"rebuild"',
    ]).then(() => {
      console.log(chalk.cyan(outdent`
          Step 2 complete...
        `));
    }),
    () => execaSeries([
      type === UNSTABLE ? `npm run bump-${version === BETA ? '' : `${version}-`}beta` : `npm run bump-${version}`,
    ]).then(() => {
      console.log(chalk.cyan(outdent`
          Step 3 complete...
        `));
    }),
    () => execaSeries([
      `npm publish ${version === BETA ? ' --tag beta' : ''}`,
      `git checkout ${TRUNK} --quiet`,
      `git merge --ff-only ${RELEASE_TMP}`,
      'git push',
      'git push --tags',
    ]).then(() => {
      console.log(chalk.cyan(outdent`
          Step 4 complete...
        `));
    }),
  ];

  if (!isHotfix) {
    releaseSteps = [
      ...releaseSteps,
      () => execaSeries([
        `git checkout ${MASTER_TRUNK} --quiet`,
        `git merge --no-ff ${DEVELOP_TRUNK}`,
        'git push',
        'git push --tags',
      ]).then(() => {
        console.log(chalk.cyan(outdent`
            Step 5 complete...
          `));
      }),
      () => execaSeries([
        `git checkout ${DEVELOP_TRUNK} --quiet`,
        `git merge --ff-only ${MASTER_TRUNK}`,
        'git push',
        'git push --tags',
      ]).then(() => {
        console.log(chalk.cyan(outdent`
            Step 6 complete! Publishing done successfully. Have fun!

          `));
      }),
    ];
  }

  promiseSeries(releaseSteps)
    .then(() => {
      generalCleanupHandling(0);
    })
    .catch((reason) => {
      console.error(chalk.red(reason));

      generalCleanupHandling(1);
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
