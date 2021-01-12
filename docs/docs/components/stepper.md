---
title: Stepper
sidebar_label: Stepper
slug: /stepper
---

<ul class="stepper orange-text my-12">
  <li class="stepper-item">
    <a class="tooltip" data-tooltip="Step 1">Step 1</a>
  </li>
  <li class="stepper-item active ">
    <a  class="tooltip" data-tooltip="Step 2">Step 2</a>
  </li>
  <li class="stepper-item">
    <a class="tooltip" data-tooltip="Step 3">Step 3</a>
  </li>
  <li class="stepper-item">
    <a class="tooltip" data-tooltip="Step 4">Step 4</a>
  </li>
</ul>

Steps are progress indicators of a sequence of task steps.

Add a container element with the ```step``` class. And add child elements with the ```step-item``` class. The ```step-item``` with the ```active``` class will be highlighted and indicate the current state of progress. 

in order to specify color add class ```{color}-text``` or ```style="color: #aabbcc"```.

```html
<ul class="stepper">
  <li class="stepper-item">
    <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
  </li>
  <li class="stepper-item active">
    <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
  </li>
  <li class="stepper-item">
    <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
  </li>
  <li class="stepper-item">
    <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
  </li>
</ul>
```