# ng-generate

AngularJS 1.6 command line file generation tool.

### Installation
You'll need to clone this repository locally, `cd` into the directory and then run the following commands:
```shell
npm install -g
npm link
```

This will install the project globally to your system and then `npm link` will link it to the cloned repository. This way, when an update is pushed, you can simply pull the update and not have to worry about re-installing the package.

### Usage
ngGenerate is a project generator for AngularJS 1.6.x. Currently, it is not built for anything outside of the Mobi Organization. This package does require that you are in the `pie` directory in order to place the files in the correct location. These generated files are restricted to the mobi module, for the moment. The `ngen generate` command is used to generate a file. `ngen generate` accepts 2 arguments, the **filetype** and the **filename**. The filename should be dasherized and lowercase. After generating the files, you will still need to apply them to your manifest files directly in order to use them.

Currently, you can only generate top level files. A future version of this tool will allow you to generate new files inside of an existing directory.

#### Component Generation
Example:
```shell
ngen generate component my-component-name
```

Output:
```
angular/mobi/components/my-component-name/my-component-name.component.js
angular/mobi/components/my-component-name/my-component-name.component.spec.js
angular/mobi/components/my-component-name/my-component-name.html
```

#### Directive Generation
Example:
```shell
ngen generate directive my-directive-name
```

Output:
```
angular/mobi/directives/my-directive-name/my-directive-name.directive.js
angular/mobi/directives/my-directive-name/my-directive-name.directive.spec.js
angular/mobi/directives/my-directive-name/my-directive-name.html
```

#### Factory Generation
Example:
```shell
ngen generate factory my-factory-name
```

Output:
```
angular/mobi/services/my-factory-name/my-factory-name.factory.js
angular/mobi/services/my-factory-name/my-factory-name.factory.spec.js
```
