exports.template = function(name) {
  return (
    'describe(\'Factory: ' + name.camel + 'Factory\', function() {' +
      '\n\t\'use strict\';' +
      '\n' +
      '\n\tmodule.sharedInjector();' +
      '\n' +
      '\n\tvar subject = {' +
        '\n\t\tmodule: \'mobi.' + name.camel + 'Factory\',' +
        '\n\t\tfactory: \'' + name.camel + 'Factory\'' +
      '\n\t};' +
      '\n' +
      '\n\tvar reference;' +
      '\n' +
      '\n\tbeforeAll(function() { // jshint ignore:line' +
        '\n\t\t// The module we\'re testing' +
        '\n\t\tmodule(subject.module);' +
        '\n' +
        '\n\t\t////////////////////////' +
        '\n' +
        '\n\t\tinject(function($injector) {' +
          '\n\t\t\treference = $injector.get(subject.factory);' +
        '\n\t\t});' +
      '\n\t});' +
      '\n' +
      '\n\t// ================================' +
      '\n\t// Specs' +
      '\n\t// ================================' +
      '\n\tdescribe(\'\', function() {' +
        '\n\t\tit(\'\', function() {' +
          '\n' +
        '\n\t\t});' +
      '\n\t});' +
    '\n});'
  );
}
