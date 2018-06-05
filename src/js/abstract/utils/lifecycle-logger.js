import maybe from '../../maybe';

const lifecycleLogger = maybe((...args) => console.log(...args))()(true);

export default lifecycleLogger;
