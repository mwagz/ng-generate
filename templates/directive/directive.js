exports.template = function(name) {
  return (
    '(function() {' +
      '\n\t\'use strict\';' +
      '\n' +
      '\n\tangular.module(\'mobi.' + name.camel + '\', [])' +
        '\n\t\t.directive(\'' + name.camel + '\', ' + name.capped + ');' +
      '\n' +
      '\n\tfunction ' + name.capped + '() {' +
        '\n\t\treturn {' +
          '\n\t\t\trestrict: \'A\',' +
          '\n\t\t\tscope: {},' +
          '\n\t\t\tcontroller: ' + name.capped + 'Controller' +
        '\n\t\t};' +
      '\n\t}' +
      '\n' +
      '\n\t' + name.capped + 'Controller.$inject = [\'$scope\'];' +
      '\n' +
      '\n\tfunction ' + name.capped + 'Controller($scope) {' +
        '\n\t\tvar vm = $scope;' +
        '\n' +
        '\n\t\t// Scope Variables' +
        '\n\n' +
        '\n\t\t// Scope Functions' +
        '\n\t\tvm.onInit = onInit;' +
        '\n' +
        '\n\t\tonInit();' +
        '\n' +
        '\n\t\t/////////////////////' +
        '\n' +
        '\n\t\tfunction onInit() {' +
          '\n' +
        '\n\t\t}' +
      '\n\t}' +
    '\n})();'
  );
}
