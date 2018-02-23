var chalk = require('chalk');

exports.generate = function(name) {
  console.log(chalk.green('Creating %s.controller.js'), name);
  console.log(chalk.green('Creating %s.controller.spec.js'), name);
};
