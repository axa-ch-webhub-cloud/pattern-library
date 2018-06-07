import maybe from '../../maybe';

var lifecycleLogger = maybe(function () {
  var _console;

  return (_console = console).log.apply(_console, arguments);
})()(true);

export default lifecycleLogger;