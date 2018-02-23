var chalk = require('chalk');
var fs = require('fs'); // Filesystem
var readline = require('readline'); // Readline
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var namecase = require('../helpers/format/name.js');
var html = require('../templates/directive/directive.html.js');
var factory = require('../templates/directive/directive.js');
var spec = require('../templates/directive/directive.spec.js');

var formattedName;
var location = 'lib/assets/javascripts/angular/mobi/directives/';
var completed = [];

exports.generate = function(name) {
  formattedName = namecase.format(name);

  // Does directory exist?
  generateDirectory();

  function generateDirectory() {
    var expectedDir = location + name;

    // Create the root location directory if it doesn't exist.
    fs.stat(location, function(err, stats) {
      if (stats === undefined) {
        fs.mkdir(location, function(){});
      }
    });

    // Create the target location directory if it doesn't exist.
    fs.stat(expectedDir, function(err, stats) {
      if (stats === undefined) {
        fs.mkdir(expectedDir, function(err){
          if (err) {
            console.log(chalk.red.bold('**ERROR** Directory not created.'));
            console.log(chalk.red('Process Exiting. Directive generation failed.'));
            process.exit();
          } else {
            generateFile('.html', html.template(formattedName));
            generateFile('.directive.js', factory.template(formattedName));
            generateFile('.directive.spec.js', spec.template(formattedName));
          }
        });
      } else {
        console.log(chalk.red.bold('**ERROR** File exists.'));
        console.log(chalk.red('Process Exiting. Factory generation failed.'));
        process.exit();
      }
    });
  }

  function generateFile(ext, fileContents) {
    var expectedFilename = name + ext;
    var expectedFilepath = pathForFilename(name, ext);
    console.log(chalk.green('Creating %s...'), expectedFilename);

    fs.writeFile(expectedFilepath, fileContents, function(err) {
      if (err) throw err;
      completed.push(expectedFilename);

      finished();
    });
  }

  /////////////////////

  function pathForFilename(name, ext) {
    return location + name + '/' + name + ext;
  }

  function finished() {
    if (completed.length === 2) {
      console.log(chalk.green.bold('Finished! Please add mobi.' + formattedName.camel + ' to your module manifest files.'));
      process.exit();
    }
  }
};
