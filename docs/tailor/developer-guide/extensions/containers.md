# Containers

Containers hold content elements inside of Tailor. This feature gives an easy way to develop and configure new containers.

The default content containers only allow minimum configuration that does not impact their presentation, nor does it allow setting user-facing meta-information. Custom content containers are Tailor’s way of allowing such functionality. If there is a need for one of the following requirements, we use custom containers:
* custom presentation of the basic list (either showing the list in a different way or allowing meta-information to be set),
* a more complex grouping of content elements (multiple lists grouped together, branching logic, etc.).

The way of adding them is the same way that custom content elements are added. There is a separate section for them in the extensions folder.

## Development

### Set up
A template exists which can be used to create the basic structure for a content element. It can be found [here](https://github.com/ExtensionEngine/tailor-container-template) along with instructions on how to get started with it.

### Files
Below is a rundown of all the files located in the template and what their purpose is.

#### `index.js`
The file used by Tailor's front-end build process to include the container. This file must exist.

#### `info.js`
The file that contains basic information about this container which can be useful to the front-end and the back-end. This file does not need to exist but then its contents need to be found in any file that needs them (`index.js` and `server/index.js` in this template use it).

#### `server/index.js`
The file that holds the server logic. It does not need to exist. The server logic covers the following:
* custom publishing structure (any custom container can have a unique structure of the published JSON document),
* custom asset resolution (if it has a unique structure it needs custom asset resolution logic),
* custom publishing summary (if the default container summary: id, uid, type, publishedAs, elementCount, does not cover the requirements).

#### `edit/index.vue`
The file used by the front-end to display the container. This file needs to exist in some form but it does not need to be in an `edit` folder or with this name. The only requirement is that it is imported in the `index.js` file as `Edit`.

## Configuration
There needs to be an `index.js` file inside of the `content-containers` folder for Tailor to load any custom container. If such file does not exist it needs to be created first and it should look like this:

```js
module.exports = [];
```

For Tailor to use any custom container, add the name of the folder that contains the custom container to the array. It should look something like this:

```js
module.exports = ['<name-of-folder-given-to-degit>'];
```

## Examples

::: tip TODO
Add a basic example
:::