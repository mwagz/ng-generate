exports.template = function(name) {
  return (
    'describe(\'Factory: ' + name.camel + 'Factory\', function() {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  module.sharedInjector();' +
    '\n' +
    '\n  var subject = {' +
    '\n    module: \'mobi.' + name.camel + 'Factory\',' +
    '\n    factory: \'' + name.camel + 'Factory\'' +
    '\n  };' +
    '\n' +
    '\n  var reference;' +
    '\n' +
    '\n  beforeAll(function() { // jshint ignore:line' +
    '\n    // The module we\'re testing' +
    '\n    module(subject.module);' +
    '\n' +
    '\n    ////////////////////////' +
    '\n' +
    '\n    inject(function($injector) {' +
    '\n      reference = $injector.get(subject.factory);' +
    '\n    });' +
    '\n  });' +
    '\n' +
    '\n  // ================================' +
    '\n  // Specs' +
    '\n  // ================================' +
    '\n  describe(\'\', function() {' +
    '\n    it(\'\', function() {' +
    '\n' +
    '\n    });' +
    '\n  });' +
    '\n});'
  );
}
