var chalk = require('chalk');

exports.generate = function(name) {
  console.log(chalk.green('Creating %s.directive.js'), name);
  console.log(chalk.green('Creating %s.directive.spec.js'), name);
  console.log(chalk.green('Creating %s.html'), name);
};
