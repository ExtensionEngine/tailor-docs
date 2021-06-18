# Meta Inputs

Meta inputs allow us to describe activities and content elements. This feature gives an easy way to develop and configure new meta inputs.

## Development

### Set up
A template exists which can be used to create the basic structure for a content element. It can be found [here](https://github.com/ExtensionEngine/tailor-input-template) along with instructions on how to get started with it.

### Files
Below is a rundown of all the files located in the template and what their purpose is.

#### `index.js`
The file used by Tailor's front-end build process to include the content element. This file must exist.

#### `edit/index.vue`
The file used by the front-end to display the content element. This file needs to exist in some form but it does not need to be in an `edit` folder or with this name. The only requirement is that it is imported in the `index.js` file as `Edit`.

## Configuration
There needs to be an `index.js` file inside of the `meta-inputs` folder for Tailor to load any custom content elements. If such file does not exist it needs to be created first and it should look like this:

``` js
module.exports = [];
```

For Tailor to use any custom meta input, add the name of the folder that contains the custom meta input to the array. It should look something like this:

``` js
module.exports = ['<name-of-folder-given-to-degit>'];
```

## Examples

::: tip TODO
Add a basic example
:::