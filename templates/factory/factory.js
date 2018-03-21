exports.template = function(name) {
  return (
    '(function() {' +
    '\n  \'use strict\';' +
    '\n' +
    '\n  angular.module(\'mobi.' + name.camel + 'Factory\', [])' +
    '\n    .factory(\'' + name.camel + 'Factory\', ' + name.capped + 'Factory);' +
    '\n' +
    '\n  ' + name.capped + 'Factory.$inject = [\'$http\'];' +
    '\n' +
    '\n  function ' + name.capped + 'Factory($http) {' +
    '\n    return {' +
    '\n      get: get,' +
    '\n      set: set' +
    '\n    };' +
    '\n' +
    '\n    ////////////////////////' +
    '\n' +
    '\n    function get() {' +
    '\n      // Get Something' +
    '\n    }' +
    '\n' +
    '\n    function set() {' +
    '\n      // Set Something' +
    '\n    }' +
    '\n  };' +
    '\n})();'
  );
}
