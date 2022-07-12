# Configuration

Repository structure can be altered using tailor configuration file. Recognized
configuration filenames are (sorted by priority):

- `tailor.config.js`
- `.tailorrc.js`
- `.tailorrc`
- `.tailorrc.json`

Use the `tailor.config.js.example` file as a template:

```
$ cp tailor.config.js.example tailor.config.js
```

and enter the configuration details. By default, the configuration file is
searched inside the current working directory. If a custom location or a custom
name is needed, it can be provided through the `--config` flag passed to target
npm script:

``` shell
$ npm run dev:client -- --config=path/to/custom/tailor/config.js
```

alternatively `TAILOR_CONFIG` environment variable can be used:

``` shell
$ TAILOR_CONFIG=path/to/custom/tailor/config.js npm run dev:server
```

## Repository structure

This section explains how to configure the general course structure. That includes creating all used activity types (Goals, Learning Objectives, Practice Exercises, etc.), setting up their relation to one another, as well as what type of content will each activity contain (Introduction, Perspective, Assessments, Exams, etc.) and various activity meta data.

### Code example

``` json
{
  "SCHEMAS": [
    {
      "id": "COURSE",
      "name": "Example schema",
      "contentContainers": [
        {
          "type": "INTRO",
          "label": "Introduction",
          "types": [
            "HTML",
            "AUDIO",
            "VIDEO",
            "EMBED"
          ],
          "displayHeading": true
        },
        {
          "type": "PERSPECTIVE",
          "label": "Content",
          "multiple": true,
          "displayHeading": true,
          "layout": true
        }
      ],
      "structure": [
        {
          "rootLevel": true,
          "type": "GOAL",
          "subLevels": [
            "OBJECTIVE",
            "INTERACTIVE_EXERCISE"
          ],
          "label": "Goal",
          "color": "#42A5F5",
          "contentContainers": [
            "INTRO"
          ],
          "meta": [
            {
              "key": "inputKey",
              "type": "INPUT",
              "label": "Name",
              "placeholder": "Click to add...",
              "validate": {
                "rules": {
                  "max": 250
                }
              }
            },
            {
              "key": "textareaKey",
              "type": "TEXTAREA",
              "label": "Description",
              "placeholder": "Click to add...",
              "validate": {
                "rules": {
                  "max": 250
                }
              }
            },
            {
              "key": "checkboxKey",
              "type": "CHECKBOX",
              "label": "Generic checkbox label",
              "description": "Description for a checkbox"
            },
            {
              "key": "switchKey",
              "type": "SWITCH",
              "label": "Generic switch label",
              "description": "Description for a switch"
            },
            {
              "key": "colorKey",
              "type": "COLOR",
              "label": "Pick a color"
            },
            {
              "key": "duration",
              "type": "SELECT",
              "label": "Select From List",
              "placeholder": "Select...",
              "options": [
                {
                  "label": "selection 1",
                  "value": 5
                },
                {
                  "label": "selection 2",
                  "value": 10
                },
                {
                  "label": "selection 3",
                  "value": 15
                }
              ]
            },
            {
              "key": "datePicker",
              "type": "DATETIME",
              "label": "date picker"
            }
          ]
        },
        {
          "type": "OBJECTIVE",
          "subLevels": [
            "TOPIC"
          ],
          "label": "Learning Objective",
          "color": "#66BB6A",
          "contentContainers": [],
          "meta": [
            {
              "key": "description",
              "type": "TEXTAREA",
              "label": "Description",
              "placeholder": "Click to add...",
              "validate": {
                "rules": {
                  "required": false,
                  "max": 250
                }
              }
            },
            {
              "key": "inactive",
              "type": "SWITCH",
              "label": "Inactive"
            }
          ]
        },
        {
          "type": "TOPIC",
          "label": "Topic",
          "color": "#EC407A",
          "isObjective": true,
          "contentContainers": [
            "PERSPECTIVE"
          ],
          "meta": [
            {
              "key": "description",
              "type": "TEXTAREA",
              "label": "Description",
              "placeholder": "Click to add...",
              "validate": {
                "rules": {
                  "required": false,
                  "max": 250
                }
              }
            }
          ],
          "relationships": [
            {
              "type": "prerequisites",
              "label": "Prerequisites",
              "placeholder": "Select prerequisites"
            },
            {
              "type": "replacements",
              "label": "Replacements",
              "placeholder": "Select replacements"
            }
          ]
        }
      ]
    }
  ]
}
```

### OUTLINE_LEVELS properties

|Property|Description|Values|
|-----------|-----------|-----------|
|rootLevel|Defines the activity can be added without a parent level (a root activity)|Boolean|
|type|Defines the type of the Activity|'GOAL', 'OBJECTIVE', 'INTERACTIVE_EXERCISE', 'TOPIC' or any other available activity type|
|subLevels|Defines which activities are sub-levels for the current activity.<br>IMPORTANT: Level property for all sub-activities has to be current_activity.level + 1<br>Example: If 'GOAL' has level set to 1, and 'OBJECTIVE' is a sublevel of 'GOAL', then 'OBJECTIVE' level has to be set to 2. Entering the wrong subLevel value may cause issues with the course structure.|Array containing 'GOAL', 'OBJECTIVE', 'INTERACTIVE_EXERCISE', 'TOPIC' or any other available activity type|
|label|Label for the currently selected activity|String|
|color|Color for the background on the activity ordinal number|HEX, RGB, color name,...|
|meta|Used to add metadata to the activity (visible from the activity sidebar). More details on metadata can be found here.|
|contentContainers|Used to add content containers with specified elements in each structure type. More details on defining content container structure can be found here.|
|relationships|Used to add specified types of relationships between structure types. More details on relationships can be found here.|

## Content containers

The following sections explains how to configure content containers. Each type can have multiple content containers that need to be predefined within the scheme `.activities-rc.json`.

### Code Example

``` json
"contentContainers": [{
  "type": "PERSPECTIVE",
  "label": "Perspective",
  "types": [
    "HTML",
    "IMAGE",
    "VIDEO",
    "ASSESSMENT",
    "EMBED",
    "BREAK",
    "ACCORDION",
    "CAROUSEL",
    "MODAL",
    "TABLE",
    "PDF",
    "AUDIO"
  ],
  "displayHeading": true,
  "multiple": true,
  "min": 1,
  "max": 3,
  "layout": true
}]
```
### Content container properties

|Property|Description|Values|
|--------|------------|--------|
|type|`const-cased` string for marking `ContentContainer` type.|String|
|templateId|`const-cased` string that defines which custom `ContentContainer` is used to display this container. Needs to match the `templateId` property of the desired custom `ContentContainer`. If not specified the default `ContentContainer` is used to display this container.|String|
|label|String used for referencing `ContentContainer` on the UI.|String|
|multiple|Defines if there can be multiple instances of the `ContentContainer` inside a single `Activity`. False by default.|Boolean|
|min|Defines minimum number of a given content container allowed within an activity. Those will be auto-created.|Number|
|max|Defines the maximum number of a given content container allowed within an activity. Must be greater or equal to min.|Number|
|types|An array of possible elements for the content container type. If not specified, all types of elements are allowed. All currently available types are displayed in the code example above.|Array`<String>`|
|displayHeading|Defines if the heading is displayed on the top of the content container. False by default.|Boolean|
|layout|Defines if elements inside the container can be displayed in two rows. False by default.|Boolean|
|config|Defines `ContentContainer` specific properties.|Object|
|required|Defines if an instance of the `ContentContainer` is created if non exist. True by default.|Boolean|
|publishedAs|Defines the name of the file under which the container will be published. Defaults to `container`. The name of the structure component used is the `kebab-cased` version of the `type` property. (example: ABC_DEF -> abc-def)|String

## Activity metadata

Code needs to be added in `.activities-rc.json` file, inside of the `OUTLINE_LEVELS` meta arrays. Metadata will be displayed in the activity sidebar:

### 1. Input

#### Code example

``` json
meta: [{
  "key": "inputKey",
  "type": "INPUT",
  "label": "Input field",
  "placeholder": "Click to add...",
  "validate": {
    "rules": {
      "required": false,
      "max": 250  
    }
  }
}]
```
#### Preview

::: tip TODO
Add image
:::

### 2. Text Area

#### Code example

``` json
meta: [{
  "key": "textareaKey",
  "type": "TEXTAREA",
  "label": "Description",
  "placeholder": "Click to add...",
  "validate": {
    "rules": {
      "required": false,
      "max": 250
    }
  }
}]
```

#### Preview

::: tip TODO
Add image
:::

### 3. Checkbox

#### Code example

``` json
meta: [{
  "key": "checkboxKey",
  "type": "CHECKBOX",
  "label": "Generic checkbox label",
  "description": "Description for a checkbox"
}]
```

#### Preview

::: tip TODO
Add image
:::

### 4. Switch

#### Code example

``` json
meta: [{
  "key": "switchKey",
  "type": "SWITCH",
  "label": "Generic switch label",
  "description": "Description for a switch"
}]
```

#### Preview

::: tip TODO
Add image
:::

### 5. Color picker

#### Code example

``` json
meta: [{
  "key": "colorKey",
  "type": "COLOR",
  "label": "Pick a color"
}]
```

#### Preview

::: tip TODO
Add image
:::

### 6. Select

#### Code example

``` json
meta: [{
  "key": "selectKey",
  "type": "SELECT",
  "label": "Select From List",
  "options": [{
    "label": "selection 1",
    "value": 5
  }, {
    "label": "selection 2",
    "value": 10
  }, {
    "label": "selection 3",
    "value": 15
  }]
}]
```

#### Preview

::: tip TODO
Add image
:::

### 7. Multiselect

#### Code example

``` json
meta: [{
  "key": "multiselectKey",
  "type": "MULTISELECT",
  "label": "Objective",
  "placeholder": "Select From List",
  "options": [{
    "label": "Option 1",
    "value": 1
  }, {
    "label": "Option 2",
    "value": 2
  }, {
    "label": "Option 3",
    "value": 3
  }]
}]
```

#### Preview

::: tip TODO
Add image
:::

### 8. Date Picker

#### Code example

``` json
meta: [{
  "key": "datePicker",
  "type": "DATETIME",
  "label": "date picker"
}]
```

#### Preview

::: tip TODO
Add image
:::

### 9. HTML with Quill editor

#### Code example

``` json
meta: [{
  "key": "html",
  "type": "HTML",
  "label": "html with quill"
}]
```

#### Preview

::: tip TODO
Add image
:::

### 10. File upload

#### Code example

``` json
meta: [{
  "key": "file",
  "type": "FILE",
  "label": "File Upload",
  "placeholder": "Click to add...",
  "validate": {
    "rules": {
      "ext": [
        "pdf",
        "xlsx",
        "mp3",
        "ogg",
        "wma",
        "rar",
        "tar.gz",
        "7z",
        "zip",
        "jpg",
        "jpeg",
        "png",
        "xml",
        "tar"
      ]
    }
  }
}]
```

#### Preview

::: tip TODO
Add image
:::

## Relationships

The following section explains how to configure relationships between structure types. These are defined within the scope of a structure type within `.activities-rc.json`.

### Code example

``` json
"relationships": [{
  "type": "prerequisites",
  "label": "prerequisites",
  "placeholder": "Select prerequisites",
  "multiple": true,
  "searchable": true,
  "allowEmpty": true,
  "allowCircularLinks": true,
  "allowInsideLineage": true
}]
```

### Properties
|Property|Description|Type|
|-------|------------|-----|
|type|Defines the type of the relationship.|String|
|label|Label for the current relationship.|String|
|placeholder|Defines the placeholder label for the relationship.|String|
|multiple|Defines if a relationship can have multiple associations. True by default.|Boolean|
|searchable|Defines if you can search for the list of activities. True by default.|Boolean|
|allowEmpty|Defines if the list of relationships can be empty. True by default.|Boolean|
|allowCircularLinks|Defines if you can set circular relationships. A can have a relationship with B and B can have a relationship with A. False by default.|Boolean|
|allowInsideLineage|Defines if you can set relationships with parent/child activities. False by default.|Boolean|

## Element metadata

Configurable inputs may be added to a content element by specifying the content element type inside the tesMeta array (inside the scheme) and then adding the configurable inputs in the element's meta array.

### Code example

``` javascript
elementMeta: [{
  type: 'VIDEO',
  inputs: [{
    key: 'transcript',
    type: 'TEXTAREA',
    label: 'Transcript',
    placeholder: 'Click to add...',
  }, {
    key: 'caption',
    type: 'FILE',
    label: 'Caption',
    placeholder: 'Click to upload text file',
    validate: {
      rules: {
        ext: ['txt']
      }
    }
  }]
}
```

## Workflow

The following section explains how to configure a workflow. Workflows are defined outside of schemas and are assigned to a schema by adding a `worfklowId` to a schema's definition.

### Code example

``` javascript
 const DEMO_WORKFLOW = {
  id: 'DEMO_WORKFLOW',
  statuses: [
    { id: 'TODO', label: 'Todo', default: true, color: '#E91E63' },
    { id: 'IN_PROGRESS', label: 'In progress', color: '#039BE5' },
    { id: 'REVIEW', label: 'Review', color: '#00BFA5' },
    { id: 'DONE', label: 'Done', color: '#00BFA5'  }
  ]
};

const MODULE = {
  type: 'MODULE',
  rootLevel: true,
  isTrackedInWorkflow: true,
  label: 'Module',
  color: '#5187C7',
  subLevels: ['MODULE', 'LESSON']
};
  
const LESSON = {
  type: 'LESSON',
  isTrackedInWorkflow: true,
  label: 'Lesson',
  color: '#08A9AD',
  contentContainers: ['PAGE']
};

const DEMO_SCHEMA = {
  id: 'DEMO_SCHEMA',
  workflowId: DEMO_WORKFLOW.id,
  name: 'Demo course',
  structure: [MODULE, LESSON],
};
  
module.exports = {
  SCHEMAS: [DEMO_SCHEMA],
  WORKFLOWS: [DEMO_WORKFLOW]
};
```

### Workflow properties

|Property|Description|Type|
|--------|------------|--------|
|id|Workflow identifier.|String|
|statuses|An array of possible activity statuses.|Array\<ActivityStatus\>|
|dueDateWarningThreshold|Defines threshold (in days, weeks or months) relative to activity's due date, after which the warning of upcoming due date is displayed.|Object|

### Activity Status properties

|Property|Description|Type|
|--------|------------|--------|
|id|Activity status identifier.|String|
|label|Display label.|String|
|color|Display color.|String|
|default|Defines that the status is the default, which the activity has when it's created.|Boolean|