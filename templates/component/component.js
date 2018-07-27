exports.template = function(name) {
  return (
    '(function () {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  angular.module(\'mobi.' + name.camel + '\', [])' +
    '\n    .component(\'' + name.camel + '\', {' +
    '\n      templateUrl: \'angular/mobi/components/' + name.standard + '/' + name.standard + '.html\',' +
    '\n      controller: ' + name.capped + 'Controller,' +
    '\n      bindings: {}' +
    '\n    });' +
    '\n' +
    '\n  ' + name.capped + 'Controller.$inject = [];' +
    '\n' +
    '\n  function ' + name.capped + 'Controller() {' +
    '\n    var vm = this;' +
    '\n' +
    '\n    // Scope Variables' +
    '\n\n' +
    '\n    // Scope Functions' +
    '\n\n' +
    '\n    // Lifecycle Hooks' +
    '\n    vm.$onInit = onInit;' +
    '\n' +
    '\n    ////////////////////////' +
    '\n' +
    '\n    function onInit() {' +
    '\n' +
    '\n    }' +
    '\n  }' +
    '\n})();' +
    '\n'
  );
}
