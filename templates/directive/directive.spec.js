exports.template = function(name) {
  return (
    'describe(\'Component: ' + name.camel + '\', function() {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  // ================================' +
    '\n  // Setup' +
    '\n  // ================================' +
    '\n  module.sharedInjector();' +
    '\n' +
    '\n  var subject = {' +
    '\n    module: \'mobi.' + name.camel + '\',' +
    '\n    component: \'' + name.camel + '\'' +
    '\n  };' +
    '\n' +
    '\n  var ctrl, scope, element;' +
    '\n' +
    '\n  beforeAll(function() { // jshint ignore:line' +
    '\n    module(subject.module);' +
    '\n' +
    '\n    ////////////////////' +
    '\n' +
    '\n    inject(function($injector) {' +
    '\n      // ==============================' +
    '\n      // Dependency Injection' +
    '\n      // ==============================' +
    '\n      var $rootScope = $injector.get(\'$rootScope\');' +
    '\n      var $compile = $injector.get(\'$compile\');' +
    '\n' +
    '\n      // ==============================' +
    '\n      // Variable Setup' +
    '\n      // ==============================' +
    '\n      scope = $rootScope.$new();' +
    '\n' +
    '\n      // Build the element' +
    '\n      var markup = \'<div \'' + name.standard + '\'></div>\';' +
    '\n      element = angular.element(markup);' +
    '\n' +
    '\n      // ==============================' +
    '\n      // Setup Component' +
    '\n      // ==============================' +
    '\n      $compile(element)(scope);' +
    '\n      scope.$digest();' +
    '\n' +
    '\n      ctrl = element.isolateScope();' +
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
