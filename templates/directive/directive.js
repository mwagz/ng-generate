exports.template = function(name) {
  return (
    '(function() {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  angular.module(\'mobi.' + name.camel + '\', [])' +
    '\n    .directive(\'' + name.camel + '\', ' + name.capped + ');' +
    '\n' +
    '\n  function ' + name.capped + '() {' +
    '\n    return {' +
    '\n      restrict: \'A\',' +
    '\n      scope: {},' +
    '\n      controller: ' + name.capped + 'Controller' +
    '\n    };' +
    '\n  }' +
    '\n' +
    '\n  ' + name.capped + 'Controller.$inject = [\'$scope\'];' +
    '\n' +
    '\n  function ' + name.capped + 'Controller($scope) {' +
    '\n    var vm = $scope;' +
    '\n' +
    '\n    // Scope Variables' +
    '\n\n' +
    '\n    // Scope Functions' +
    '\n    vm.onInit = onInit;' +
    '\n' +
    '\n    onInit();' +
    '\n' +
    '\n    /////////////////////' +
    '\n' +
    '\n    function onInit() {' +
    '\n' +
    '\n    }' +
    '\n  }' +
    '\n})();'
  );
}
