# Aratio

A function to add a container to an element to force it to a specific aspect ratio.

## Installation

`npm install aratio`

or

`yarn add aratio`

## Usage

### HTML
```
<div id="my-element" class="my-class" aspect-ratio="16x9">...</div>
```

### JS
```
import aratio from 'aratio';
// OR
var aratio = require('aratio');

// To trigger aratio for all elements:

aratio();

// To trigger it only for a specific element:

var element = document.getElementById("my-element");
aratio(element);

// Or for a set of elements:

var elements = document.querySelectorAll(".my-class");
aratio(elements);
```

### Resulting HTML
```
<div style="position: relative; height: 0px; padding-bottom: 56.25%;">
    <div id="my-element" class="my-class" aspect-ratio="16x9" style="position: absolute; width: 100%; height: 100%;">...</div>
</div>
```