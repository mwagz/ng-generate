exports.template = function(name) {
  return (
    '(function() {' +
    '\n\t\'use strict\';' +
    '\n' +
    '\n\tangular.module(\'mobi.' + name.camel + 'Factory\', [])' +
    '\n\t\t.factory(\'' + name.camel + 'Factory\', ' + name.capped + 'Factory);' +
    '\n' +
    '\n\t' + name.capped + 'Factory.$inject = [\'$http\'];' +
    '\n' +
    '\n\tfunction ' + name.capped + 'Factory($http) {' +
    '\n\t\treturn {' +
    '\n\t\t\tget: get,' +
    '\n\t\t\tset: set' +
    '\n\t\t};' +
    '\n' +
    '\n\t\t////////////////////////' +
    '\n' +
    '\n\t\tfunction get() {' +
    '\n\t\t\t// Get Something' +
    '\n\t\t}' +
    '\n' +
    '\n\t\tfunction set() {' +
    '\n\t\t\t// Set Something' +
    '\n\t\t}' +
    '\n\t};' +
    '\n})();'
  );
}
