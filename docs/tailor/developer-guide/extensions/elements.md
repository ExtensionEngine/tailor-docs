# Content Elements

Content elements are the basic building block of content inside Tailor. They are contained inside of containers. This feature gives an easy way to develop and configure new content elements.

## Development

### Set up
A template exists which can be used to create the basic structure for a content element. It can be found [here](https://github.com/ExtensionEngine/tailor-element-template) along with instructions on how to get started with it.

### Files
Below is a rundown of all the files located in the template and what their purpose is.

#### `index.js`
The file used by Tailor's front-end build process to include the content element. This file must exist.

#### `info.js`
The file that contains basic information about this content element which can be useful to the front-end and the back-end. This file does not need to exist but then its contents need to be found in any file that needs them (`index.js` and `server/index.js` in the template use it).

#### `server/index.js`
The file that holds the server logic. It does not need to exist. The server logic is handled through hooks that can be grouped into two sections:
* Create/update element hooks (`beforeSave`, `afterSave`, `afterLoaded`),
* Fetch element hooks (`afterRetrieve`, `afterLoaded`).

All hooks are called with 2 arguments. The first argument is the element itself, and the second argument is the service bag which contains the config service, the storage service, and the storage proxy service. Hook declaration looks as follows: 

``` js
function hook(element: SequelizeModel, services: Object) => element
```

The `hook` function returns the original or modified element. For example, depending on the hook type, we can modify the element before saving it to the database (`beforeSave`) or before delivering it to the frontend (e.g., `afterLoaded`).

![Element hooks](~@source/tailor/assets/images/tce-hooks.png)

#### `edit/index.vue`
The file used by the front-end to display the content element. This file needs to exist in some form but it does not need to be in an `edit` folder or with this name. The only requirement is that it is imported in the `index.js` file as `Edit`.

## Configuration
There needs to be an `index.js` file inside of the `content-elements` folder for Tailor to load any custom content elements. If such file does not exist it needs to be created first and it should look like this:

``` js
module.exports = [];
```

For Tailor to use any custom element, add the name of the folder that contains the custom content element to the array. It should look something like this:

``` js
module.exports = ['<name-of-folder-given-to-degit>'];
```

### Environment variables

Environment variables can be defined for a particular content element type. In order to add a content element environment variable just add it to Tailor’s `.env` file as you would normally do and prefix it with `TCE_` prefix. Content element environment variables can be found inside the config object, under the tce namespace (passed to the hooks). 
For example, if the content element environment variable is named `TCE_MY_API_KEY` it can be accessed as follows:

``` js
function hook(element, { config }) {
  const myApiKey = config.tce.myApiKey;
}
```


Notice that the `TCE_` prefix is dropped and the environment variable name is converted to camelCase.
