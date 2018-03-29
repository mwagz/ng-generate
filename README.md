## Currently, this is not built for anything outside of the MOBI Organization.



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
ngGenerate is a project generator for AngularJS 1.6.x. These generated files are restricted to the `mobi` module, for the moment, so you will need to update the module name if you are generating files that are not for the `mobi` module. The `ngen generate` command is used to generate a file. `ngen generate` accepts 2 arguments, the **filetype** and the **filename**. The filename should be dasherized and lowercase. After generating the files, you will still need to apply them to your manifest files directly in order to use them.

This will generate a directory, containing each of the generated files, inside of a components, services or directives directory, in whatever directory you're in when you initiate the process. For example, if you have the following file structure:
```
/my-project
  /angular
    /components
    /services
    /directives
```
If you're currently in the `my-project` directory and you generate a component called `example-component`, you will have the following structure:
```
/my-project
  /angular
    /components
    /services
    /directives
  /components
    /example-component
      example-component.component.js
      example-component.component.spec.js
      example-component.html
```
Understanding that this is not the desired outcome, you should be sure that you navigate to the directory that you wish for the files to be generated in. In our above example, we should generate our files while in the `angular` directory.

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
