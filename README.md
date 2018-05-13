# nodejs-api-template

A starter Template to build Api's with Express Node and MongoDB.

## Project Structure

```|   .eslintrc.json
|   .gitignore
|   LICENSE
|   package-lock.json
|   package.json
|   README.md
|
+---src
|   +---config
|   |       .gitkeep
|   |       chalk.js
|   |       logger.js
|   |
|   \---models
|           .gitkeep
|           User.js
|
\---test
    +---integration
    \---unit

```

### SRC FOLDER

This contains most of the folders and  files for the project

### Config Folder

Houses all the config files including enviroment configs for development, staging and production.

### Models Folder

All your mongoose models are kept here and are required automatically into the index.js in the model folder, which in turn is required into the app.js file.

### Test Folder

This contains both folders for integation and unit test files.