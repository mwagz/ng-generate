var chalk = require('chalk');

exports.generate = function(name) {
  console.log(chalk.green('Creating %s.component.js'), name);
  console.log(chalk.green('Creating %s.component.spec.js'), name);
  console.log(chalk.green('Creating %s.html'), name);
};
