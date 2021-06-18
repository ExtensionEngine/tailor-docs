# Publishing

## Published repository catalog

### Visual representation

::: tip TODO
Add image of catalog
:::

### Code example
#### index.json

``` json
[
  {
    "id": 11,
    "uid": "1942030f-ab05-4d30-b04b-eb75a84ca704",
    "schema": "COURSE",
    "name": "Generic course no. 1",
    "description": "Description for generic course",
    "meta": {
        "color": "#689F38"
    },
    "publishedAt": "2018-11-06T13:59:28.724Z"
  },
  {
    "id": 12,
    "uid": "1593030f-eb05-4a30-b04a-eb65a84cc844",
    "schema": "COURSE",
    "name": "Generic course no. 2",
    "description": "Description for generic course 2",
    "meta": {
        "color": "#689F38"
    },
    "publishedAt": "2018-11-10T13:34:31.424Z"
  },
  {
    "id": 13,
    "uid": "2373030f-bb15-4a30-b04a-eb65a84cc833",
    "schema": "REPOSITORY",
    "name": "Repository no. 1",
    "description": "My description",
    "meta": {
        "color": "#689F38"
    },
    "publishedAt": "2018-11-11T10:49:38.711Z"
  },
  {
    "id": 14,
    "uid": "4373030e-ac15-4c30-b04a-bb65a84cc813",
    "schema": "COURSE",
    "name": "Generic course no. 3",
    "description": "Description",
    "meta": {
        "color": "#689F38"
    },
    "publishedAt": "2018-11-11T11:52:18.654Z"
  },
  {
    "id": 15,
    "uid": "1113030e-cc21-4b30-b04a-bb65a84cc121",
    "schema": "COURSE",
    "name": "Generic course no. Test course 1",
    "description": "Description",
    "meta": {
        "color": "#689F38"
    },
    "publishedAt": "2018-11-12T12:30:28.354Z"
  }
]
```

*Notice that "Course with no published elements" is not listed in "index.json". That's because none of its element are yet published. Once any element in the course gets published (Goal, Interactive Exercise, Topic, etc.), that course is added to the "index.json" in the "repository" folder

## content_repository_ID > index.json

### Visual representation

::: tip TODO
Add image of outline
:::

### Code example
#### index.json

``` json
{
  "id": 44,
  "uid": "6c5978e2-5403-4edd-9186-75e2b2be1d94",
  "schema": "COURSE",
  "name": "Test Course 1",
  "description": "Description for Test Course 1",
  "meta": {
    "color": "#689F38"
  },
  "structure": [{
    "id": 903,
    "uid": "4536577e-c53a-4dec-bf48-efaac64de0cb",
    "parentId": null,
    "type": "COURSE/GOAL",
    "position": 1,
    "publishedAt": "2018-11-15T07:41:49.191Z",
    "updatedAt": "2018-11-15T07:38:41.722Z",
    "createdAt": "2018-11-15T07:37:38.943Z",
    "relationships": {
      "prerequisites": []
    },
    "meta": {
      "name": "TC1: Goal 1",
      "description": "Random description for TC1: Goal 1"
    },
    "contentContainers": [{
      "id": 907,
      "uid": "09df1821-80e7-414c-82f4-47b438cc7f04",
      "type": "INTRO",
      "elementCount": 1
    }],
    "exams": [{
      "id": 908,
      "uid": "9898a897-007b-4701-98d9-1dd8b0699431"
    }],
    "assessments": []
  }, {
    "id": 904,
    "uid": "ee8d00ed-0261-4f5f-be8f-6828430f0b2b",
    "parentId": 903,
    "type": "COURSE/OBJECTIVE",
    "position": 1,
    "publishedAt": "2018-11-15T07:41:51.443Z",
    "updatedAt": "2018-11-15T07:37:54.167Z",
    "createdAt": "2018-11-15T07:37:54.167Z",
    "relationships": {
      "prerequisites": []
    },
    "meta": {
      "name": "G1: Learning Objective 1"
    },
    "contentContainers": [],
    "exams": [],
    "assessments": []
  }, {
    "id": 905,
    "uid": "4c6beb04-248a-49c9-ac81-21e89783bf77",
    "parentId": 904,
    "type": "COURSE/TOPIC",
    "position": 1,
    "publishedAt": "2018-11-15T07:41:53.417Z",
    "updatedAt": "2018-11-15T07:38:21.755Z",
    "createdAt": "2018-11-15T07:37:58.767Z",
    "relationships": {
      "prerequisites": [],
      "replacements": []
    },
    "meta": {
      "name": "G1:LO1: Topic 1"
    },
    "contentContainers": [{
      "id": 906,
      "uid": "4461e41a-cded-44d2-9337-733073857275",
      "type": "PERSPECTIVE",
      "elementCount": 1
    }],
    "exams": [],
    "assessments": [{
      "id": 378,
      "uid": "04f39c1e-64b1-4612-9404-974b708bfabc"
    }]
  }],
  "version": "ad6f8988627f9cedb66bc49c7525abdf4a8a6de7",
  "publishedAt": "2018-11-15T07:41:53.602Z"
}
```

## ID container

# Visual representation

::: tip TODO
Add image of container
:::

# Code example
## 937.container.json

``` json
{
  "id": 937,
  "uid": "5c074ac5-d9b7-42a9-8202-36414b41de43",
  "type": "INTRO1",
  "position": 1,
  "createdAt": "2018-11-15T13:49:03.300Z",
  "updatedAt": "2018-11-15T13:49:03.300Z",
  "elements": [{
    "id": 395,
    "uid": "ee457bbf-99f7-4c65-9582-6181bde3d38d",
    "type": "HTML",
    "contentId": "0bd520e1-1dab-4189-8aca-41945e7aa94f",
    "contentSignature": "e43e49158444d1700a9b016c1a3b617968e9e43c",
    "position": 1,
    "data": {
      "width": 12,
      "content": "<p class=\"ql-align-center\"><strong>Introduction for Goal</strong></p><p class=\"ql-align-center\"><br></p><p><span style=\"color: rgb(0, 51, 102);\">Just a generic introduction for a Goal.</span> <span style=\"color: rgb(0, 51, 102);\">Bacon ipsum dolor amet ground round flank meatball strip steak biltong, ribeye shank corned beef beef ribs frankfurter tail sirloin. Pancetta filet mignon turkey strip steak. Jerky venison meatball ham hock beef ribs short loin bresaola hamburger alcatra.</span></p>"
    },
    "refs": {},
    "createdAt": "2018-11-15T13:50:04.162Z",
    "updatedAt": "2018-11-15T13:51:31.606Z"
  }, {
    "id": 394,
    "uid": "12c524aa-2ae1-4c95-a163-c4da51872887",
    "type": "IMAGE",
    "contentId": "44ba379a-2c98-4ea9-94ee-c8413382290f",
    "contentSignature": "2812a6907ca71d7e8e9f16e561024b9cfc8fb8e5",
    "position": 2,
    "data": {
      "url": "repository/assets/394/91a6a122ad6ced1016366632c5b9ec12.jpeg",
      "width": 12
    },
    "refs": {},
    "createdAt": "2018-11-15T13:49:24.463Z",
    "updatedAt": "2018-11-15T13:49:31.074Z"
  }]
}
```

## Published repository structure

### Introduction

There are two structures which can be used when publishing repositories:

1. Default repository structure
2. Flat repository structure

The main difference between the two is that the default structure has an `<activity_ID>` folder in its `<content_repository_ID>` folder. `<activity_ID>` folder is used to store all assessments, container and exam files which belong to the same activity (Goal, Topic, etc.).

Flat structure does not have the `<activity_ID>` folder, but rather stores all assessments, container and exam files (from all activities) directly to `<content_repository_ID>` folder.

### Default repository structure

![Default structure](~@source/tailor/assets/images/S3_structure.png)
::: tip TODO
Update image
:::

|Level|Name|Type|Description|Details|
|-----|----|----|-----------|-------|
|1|repository|folder|Root folder for storing all published repositories||
||
|2|`<content_repository_ID>`|folder|These folders contain all data for Repositories with the same ID as the folder name||
|2|assets|folder|Folder containing all assets used in all Repositories.||
|2|index.json (1)|file|Basic course structure (id, name and description for every published Repository)|[Link](#content-repository-id-index-json)|
||
|3|`<activity_ID>`|folder|Folder containing three types of properties each Repository can have (Content containers, assessments and exams)||
|3|index.json (2)|file|Complete Repository structure|[Link](#content-repository-id-index-json)|
|3|`<asset_container_ID>`|folder|These folders contain all asset files which belong to the same element (e.g. all image files from one accordion)||
||
|4|`<ID>`.container.json|file|Perspective structure and teaching elements data|[Link](#id-container)|
|4|`<asset_file>`|file|Individual asset files (images, video, etc.)||

### Flat repository structure
In order to use the flat repository structure, following line needs to be added to the `.env` file from project root:

```
FLAT_REPO_STRUCTURE=1
```

![Flat structure](~@source/tailor/assets/images/flat-repo-structure.png)
::: tip TODO
Update image
:::

|Level|Name|Type|Description|Details|
|-----|----|----|-----------|-------|
|1|repository|folder|Root folder for storing all published repositories||
||
|2|`<content_repository_ID>`|folder|These folders contain all data for Repositories with the same ID as the folder name||
|2|assets|folder|Folder containing all assets used in all Repositories.||
|2|index.json (1)|file|Basic course structure (id, name and description for every published Repository)|[Link](#content-repository-id-index-json)|
||
|3|`<ID>`.container.json|file|Perspective structure and teaching elements data|[Link](#id-container)|
|3|index.json (2)|file|Complete Repository structure|[Link](#content-repository-id-index-json)|
|3|`<asset_container_ID>`|folder|These folders contain all asset files which belong to the same element (e.g. all image files from one accordion)||
||
|4|`<asset_file>`|file|Individual asset files (images, video, etc.)||

## Webhooks

When Tailor content is published, it is stored on configured storage of choice (usually AWS S3) and ready for application ingestion and delivery. However, this doesn’t happen automatically. There are many reasons for that:

* Authors can create and publish new versions but shouldn’t be able to publish them live (published area using as staging)
* The time between publishing and live version differs (content developed and tested in fragments, then published live)
* Multiple instances of the same repository within consumer system with different versions (e.g. programs with different course versions; old versions shouldn’t be updated due to progress and other implications; e.g. next year/gen course)
* QA process for verification

This version introduces hooks to make the consumer system aware that the new content is published, which makes automatic ingestion easier. 

### Configuration

This version implements the consumer system’s ability to know when something got published. OAuth 2.0 authorization protocol is expected on the consumer end. In order to configure the publishing set:

* **CONSUMER_WEBHOOK_URL**
* **CONSUMER_CLIENT_ID**
* **CONSUMER_CLIENT_SECRET**
* **CONSUMER_CLIENT_TOKEN_HOST**
* **CONSUMER_CLIENT_TOKEN_PATH**

Once the activity is published, the configured webhook will be called, reporting activity details. Activity ID can be then used to retrieve the newly published version of a particular activity.
