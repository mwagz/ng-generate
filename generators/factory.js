var chalk = require('chalk');

exports.generate = function(name) {
  console.log(chalk.green('Creating %s.factory.js'), name);
  console.log(chalk.green('Creating %s.factory.spec.js'), name);
  console.log(chalk.green('Creating %s.factory.mock.js'), name);
};
