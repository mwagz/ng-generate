exports.template = function(name) {
  return (
    '(function() {' +
    '\n\t\'use strict\';' +
    '\n' +
    '\n\tangular.module(\'mobi.' + name.camel + '\', [])' +
    '\n\t\t.component(\'' + name.camel + '\', {' +
    '\n\t\t\ttemplateUrl: \'angular/mobi/components/' + name.standard + '/' + name.standard + '.html\',' +
    '\n\t\t\tcontroller: ' + name.capped + 'Controller,' +
    '\n\t\t\tbindings: {}' +
    '\n\t\t});' +
    '\n' +
    '\n\t' + name.capped + 'Controller.$inject = [];' +
    '\n' +
    '\n\tfunction ' + name.capped + 'Controller() {' +
    '\n\t\tvar vm = this;' +
    '\n' +
    '\n\t\t// Scope Variables' +
    '\n\n' +
    '\n\t\t// Scope Functions' +
    '\n\n' +
    '\n\t\t// Lifecycle Hooks' +
    '\n\t\tvm.$onInit = onInit;' +
    '\n' +
    '\n\t\t////////////////////////' +
    '\n' +
    '\n\t\tfunction onInit() {' +
    '\n' +
    '\n\t\t}' +
    '\n\t}' +
    '\n})();'
  );
}
