import maybe from '../../maybe';

const lifecycleLogger = maybe((...args) => console.log(...args))()(true); // eslint-disable-line no-console

export default lifecycleLogger;
