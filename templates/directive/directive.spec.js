exports.template = function(name) {
  return (
    'describe(\'Component: ' + name.camel + '\', function() {' +
      '\n\t\'use strict\';' +
      '\n' +
      '\n\t// ================================' +
      '\n\t// Setup' +
      '\n\t// ================================' +
      '\n\tmodule.sharedInjector();' +
      '\n' +
      '\n\tvar subject = {' +
        '\n\t\tmodule: \'mobi.' + name.camel + '\',' +
        '\n\t\tcomponent: \'' + name.camel + '\'' +
      '\n\t};' +
      '\n' +
      '\n\tvar ctrl, scope, element;' +
      '\n' +
      '\n\tbeforeAll(function() { // jshint ignore:line' +
        '\n\t\tmodule(subject.module);' +
        '\n' +
        '\n\t\t////////////////////' +
        '\n' +
        '\n\t\tinject(function($injector) {' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\t// Dependency Injection' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\tvar $rootScope = $injector.get(\'$rootScope\');' +
          '\n\t\t\tvar $compile = $injector.get(\'$compile\');' +
          '\n' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\t// Variable Setup' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\tscope = $rootScope.$new();' +
          '\n' +
          '\n\t\t\t// Build the element' +
          '\n\t\t\tvar markup = \'<div \'' + name.standard + '\'></div>\';' +
          '\n\t\t\telement = angular.element(markup);' +
          '\n' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\t// Setup Component' +
          '\n\t\t\t// ==============================' +
          '\n\t\t\t$compile(element)(scope);' +
          '\n\t\t\tscope.$digest();' +
          '\n' +
          '\n\t\t\tctrl = element.isolateScope();' +
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
