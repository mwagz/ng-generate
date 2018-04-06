#!/usr/bin/env node --harmony
var program = require('commander');
var chalk = require('chalk');
var availableTypes = ['component', 'directive', 'factory'];

var component = require('./generators/component.js');
var directive = require('./generators/directive.js');
var factory = require('./generators/factory.js');

program
  .version('0.0.6', '-v, --version')
  .command('generate [type] [name]')
  .option('-s, --spec', 'Generate spec only')
  .option('-nt, --no-template', 'Generate without a template')
  .action(function (type, name, options) {
    if (availableTypes.indexOf(type) === -1) {
      throwUnknownType(type);
    }

    console.log(chalk.bold.cyan('Generating ' + type + '...'));

    switch (type) {
      case 'component':
        component.generate(name, options);
        break;
      case 'directive':
        directive.generate(name, options);
        break;
      case 'factory':
        factory.generate(name, options);
        break;
    }
  });

program.parse(process.argv);

// Throw message for unknown type.
function throwUnknownType(type) {
  console.log(chalk.bold.red('*ERROR*'));
  console.log(chalk.bold.red('Generator does not exist for file type: ' + type));
  console.log(chalk.yellow('-------------------------------------------'));
  console.log(chalk.yellow('nGen can generate the following file types:'));
  console.log(chalk.yellow('-------------------------------------------'));
  console.log(chalk.yellow('component'));
  console.log(chalk.yellow('directive'));
  console.log(chalk.yellow('factory'));
  process.exit(0);
}
