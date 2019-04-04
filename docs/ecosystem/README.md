# Ecosystem

<div align="center">
  <img :src="$withBase('/architecture.png')" alt="Architecture diagram"/>
</div>

## Tailor

<p>
  Tailor is a Content Management System (CMS)
  used for creating a flexible content structure.
</p>
<p>
  It is continually being improved to provide the most customizable solution,
  while not forcing users to conform to any content-related restrictions.
</p>

<div align="center">
  <img :src="$withBase('/tailor.png')" alt="Internal Tailor architecture"/>
</div>

[Getting started with Tailor →](/guide-tailor/)

### Repository

<p>Repository is a container that gives structure to the content.</p>
<p>To control content structure, one must provide a repository schema.</p>
<p>Here's an example of a repository schema:</p>

``` json
{
  "id": "COURSE",
  "name": "Example Course",
  "structure": [{
    "type": "GOAL",
    "label": "Goal",
    "color": "#ff6590",
    "level": 1,
    "meta":[{
      "key": "description",
      "type": "INPUT",
      "label": "Description",
      "placeholder": "Click to add...",
      "validate": { "rules": { "required": false, "max": 23 } }
    }],
    "contentContainers": ["PAGE"],
    "relationships": [{
      "type": "prerequisites",
      "label": "Prerequisites",
      "multiple": true,
      "searchable": true,
      "allowEmpty": true,
      "placeholder": "Click to select",
      "allowCircularLinks": false,
      "allowInsideLineage": false
    }, {
      "type": "replacements",
      "label": "replacements"
    }]
  }],
  "contentContainers": [{
    "type": "PAGE",
    "label": "Page",
    "multiple": false
  }]
}
```

## Boutique

<p>What is Boutique?</p>
<p>Why was it created? (goal, purpose)</p>

[Getting started with Boutique →](/guide-boutique/)

## Tape

<p>What is Tape?</p>
<p>Why was it created? (goal, purpose)</p>

[Getting started with Tape →](/guide-tape/)

## Teaching elements

<p>What is a teaching element?</p>
<p>Why are they created? (goal, purpose)</p>

<div align="center">
  <img src="/" alt="Teaching element architecture"/>
</div>

[List of Teaching Elements →](/teaching-elements/)
