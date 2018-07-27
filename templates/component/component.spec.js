exports.template = function(name) {
  return (
    'describe(\'Component: ' + name.camel + '\', function () {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  var subject = {' +
    '\n    module: \'mobi.' + name.camel + '\',' +
    '\n    component: \'' + name.camel + '\'' +
    '\n  };' +
    '\n' +
    '\n  var ctrl;' + 
    '\n  var scope;' +
    '\n' +
    '\n  module.sharedInjector();' +
    '\n' +
    '\n  beforeAll(function () {' +
    '\n    module(subject.module);' +
    '\n' +
    '\n    ////////////////////////' +
    '\n' +
    '\n    inject(function ($injector) {' +
    '\n      // Component Setup' +
    '\n      // ========================' +
    '\n      var bindings = {};' +
    '\n      var locals = {' +
    '\n        $scope: scope' +
    '\n      };' +
    '\n' +
    '\n      var $componentController = $injector.get(\'$componentController\');' +
    '\n      var $rootScope = $injector.get(\'$rootScope\');' +
    '\n' +
    '\n      scope = $rootScope.$new();' +
    '\n' +
    '\n      ctrl = $componentController(subject.component, locals, bindings);' +
    '\n    });' +
    '\n  });' +
    '\n' +
    '\n  it(\'renders and binds\', function () {' +
    '\n    expect(ctrl).toBeDefined();' +
    '\n  });' +
    '\n' +
    '\n  describe(\'onInit\', function () {' +
    '\n    beforeAll(function () {' +
    '\n      // Setup spec values' +
    '\n    });' +
    '\n' +
    '\n    afterEach(function () {' +
    '\n      // Reset your values' +
    '\n    });' +
    '\n' +
    '\n    it(\'\', function () {' +
    '\n      // Add your expectations' +
    '\n      // Docs: https://jasmine.github.io/2.4/introduction.html' +
    '\n    });' +
    '\n  });' +
    '\n});' +
    '\n'
  );
}
