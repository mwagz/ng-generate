exports.template = function(name) {
  return (
    'describe(\'Component: ' + name.camel + '\', function() {' +
    '\n\t\'use strict\';' +
    '\n' +
    '\n\tmodule.sharedInjector();' +
    '\n' +
    '\n\tvar subject = {' +
    '\n\t\tmodule: \'mobi.' + name.camel + '\',' +
    '\n\t\tcomponent: \'' + name.camel + '\'' +
    '\n\t};' +
    '\n' +
    '\n\tvar ctrl, scope;' +
    '\n' +
    '\n\tbeforeAll(function() { // jshint ignore: line' +
    '\n\t\tmodule(subject.module);' +
    '\n' +
    '\n\t\t////////////////////////' +
    '\n' +
    '\n\t\tinject(function($injector) {' +
    '\n\t\t\tvar $componentController = $injector.get(\'$componentController\');' +
    '\n\t\t\tvar $rootScope = $injector.get(\'$rootScope\');' +
    '\n' +
    '\n\t\t\tscope = $rootScope.$new();' +
    '\n' +
    '\n\t\t\t// Component Setup' +
    '\n\t\t\t// ========================' +
    '\n\t\t\tvar bindings = {};' +
    '\n\t\t\tvar locals = {' +
    '\n\t\t\t\t$scope: scope' +
    '\n\t\t\t};' +
    '\n' +
    '\n\t\t\tctrl = $componentController(subject.component, locals, bindings);' +
    '\n\t\t});' +
    '\n\t});' +
    '\n' +
    '\n\tit(\'renders and binds\', function() {' +
    '\n\t\texpect(ctrl).toBeDefined();' +
    '\n\t});' +
    '\n' +
    '\n\tdescribe(\'onInit\', function() {' +
    '\n\t\tbeforeAll(function() {' +
    '\n\t\t\t// Setup spec values' +
    '\n\t\t});' +
    '\n' +
    '\n\t\tafterEach(function() {' +
    '\n\t\t\t// Reset your values' +
    '\n\t\t});' +
    '\n' +
    '\n\t\tit(\'\', function() {' +
    '\n\t\t\t// Add your expectations' +
    '\n\t\t\t// Docs: https://jasmine.github.io/2.4/introduction.html' +
    '\n\t\t});' +
    '\n\t});' +
    '\n});'
  );
}
