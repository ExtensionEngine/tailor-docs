# Migration from v4

## Update your schema
Remove the `level` attribute from *activity* definition(s) within your *schema*(s) and set `rootLevel` to `true` for all root level *activities*. For more details regarding *schema* configuration options, visit the [configuration section](./configuration.md). Here is an example of a simple *schema* with *Module* as a root *activity* (recursive) and *Lesson activity* that can only reside within a *Module*. The *Lesson* has a simple *Page* container attached to it; to which we add our *content elements* (HTML, Image, Video, etc.).

``` js
const MODULE = {
  type: 'MODULE',
  rootLevel: true,
  label: 'Module',
  color: '#5187C7',
  subLevels: ['MODULE', 'LESSON']
};
   
const LESSON = {
  type: 'LESSON',
  label: 'Lesson',
  color: '#08A9AD',
  contentContainers: ['PAGE']
 };

module.exports = {
  SCHEMAS: [{
    id: 'DEMO_SCHEMA',
    name: 'Demo course',
    structure: [MODULE, LESSON]
  }]
};
```

## Define a workflow for your schema
In order to use workflow for a particular *schema*, you need to define statuses and *activity* types you wish to track. Here is an example of a simple workflow definition:

::: tip
This is an optional functionality.
:::

``` js
const DEMO_WORKFLOW = {
  id: 'DEMO_WORKFLOW',
  statuses: [
    { id: 'TODO', label: 'Todo', default: true, color: '#E91E63' },
    { id: 'IN_PROGRESS', label: 'In progress', color: '#039BE5' },
    { id: 'REVIEW', label: 'Review', color: '#00BFA5' },
    { id: 'DONE', label: 'Done', color: '#00BFA5'  }
  ]
};
```

More information regarding workflow definition can be found [here](https://github.com/ExtensionEngine/tailor#workflows). In order to track specific *activity* within workflow, `isTrackedInWorkflow` attribute needs to be set. Here is an example of the previously defined schema with included workflow definition:

``` js
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

## Setup storage proxy
Version 5.0 of Tailor does not work without a storage proxy. Either a Cloudfront or a local storage proxy needs to be configured.
For a comprehensive how-to guide, visit the [the storage proxy guide](./storage-proxy.md#setup).

## Update auth environment variables
Set `AUTH_JWT_COOKIE_NAME` and `AUTH_JWT_COOKIE_SECRET` (see [`.env.example`](https://github.com/ExtensionEngine/tailor/blob/develop/.env.example)).

## Setup SSO

::: tip
This is an optional functionality.
:::

For a detailed configuration guide, please visit [the SSO setup guide](./sso.md#setup).

## Setup publish webhooks

::: tip
This is an optional functionality.
:::

For a detailed configuration guide, please visit [the publish webhooks guide](./publishing.md#webhooks).

## Final steps
1. Compare your environment variables with [`.env.example`](https://github.com/ExtensionEngine/tailor/blob/develop/.env.example) and make sure all options are properly set
2. Make sure meta (configurable) input validation rules work
3. Backup your DB and static assets
4. Run DB migrations
5. Run the static asset migration script
    * `npm run migrateAssetsLocation`
6. Install packages and rebuild
    * `npm install && npm run build`