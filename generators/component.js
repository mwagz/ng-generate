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
var location = 'lib/assets/javascripts/angular/mobi/components/';
var completed = [];

exports.generate = function(name) {
  formattedName = namecase.format(name);

  // Does directory exist?
  generateDirectory();

  function generateDirectory() {
    var expectedDir = location + name;
    fs.stat(expectedDir, function(err, stats) {
      if (stats === undefined) {
        fs.mkdir(expectedDir);

        generateFile('.component.js', component.template(formattedName));
        generateFile('.component.spec.js', spec.template(formattedName));
        generateFile('.html', html.template());
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
    if (completed.length === 3) {
      console.log(chalk.green.bold('Finished! Please add mobi.' + formattedName.camel + ' to your module manifest files.'));
      process.exit();
    }
  }
};
