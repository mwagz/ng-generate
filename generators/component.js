var chalk = require('chalk');
var fs = require('fs'); // Filest
var readline = require('readline'); // Readline
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var namecase = require('../helpers/format/name.js');
var html = require('../templates/component/component.html.js');
var component = require('../templates/component/component.js');
var spec = require('../templates/component/component.spec.js');

var formattedName;
var location = process.cwd() + '/components/';
var completed = [];

exports.generate = function(name, options) {
  formattedName = namecase.format(name);

  // Does directory exist?
  generateDirectory();

  function generateDirectory() {
    var expectedDir = location + name;

    fs.stat(location, function(err, stats) {
      if (stats === undefined) {
        fs.mkdir(location, function(){});
      }
    });

    fs.stat(expectedDir, function(err, stats) {
      if (stats === undefined) {
        fs.mkdir(expectedDir);

        if (!options.spec) {
          generateFile('.component.js', component.template(formattedName));
          generateFile('.component.spec.js', spec.template(formattedName));
          generateFile('.html', html.template());
        } else {
          generateFile('.component.spec.js', spec.template(formattedName));
        }
      }
    });
  }

  function generateFile(ext, fileContents) {
    var expectedFilename = name + ext;
    var expectedFilepath = pathForFilename(name, ext);
    console.log(chalk.green('Creating %s...'), expectedFilename);

    fs.writeFile(expectedFilepath, fileContents, (err) => {
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
    if (completed.length === 3 && !options.spec) {
      console.log(chalk.green.bold('Finished! Please add mobi.' + formattedName.camel + ' to your module manifest files.'));
      process.exit();
    }

    if (options.spec && completed.length === 1) {
      console.log(chalk.green.bold('Finished adding spec!'));
      process.exit();
    }
  }
};
