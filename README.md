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
ngGenerate is a project generator for AngularJS 1.6.x. Currently, it is not built for anything outside of the Mobi Organization.

#### Component Generation
This package does require that you are in the `pie` directory in order to place the files in the correct location. These generated files are restricted to the mobi module, for the moment. The `ngen generate` command is used to generate a file. `ngen generate` accepts 2 arguments, the **filetype** and the **component name**.

Example:
```shell
ngen generate component my-component-name
```
