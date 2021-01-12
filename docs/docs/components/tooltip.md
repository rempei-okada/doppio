---
title: Tooltips
sidebar_label: Tooltip
slug: /tooltips
---

<div class="row text-center pa-4 my-12">
    <div class="column col-xs-12">
        <button class="btn shadow-2 teal tooltip" data-tooltip="Top Tooltip Text">Top Tooltip</button>
    </div>
    <div class="column col-xs-12">
        <button class="btn shadow-2 teal tooltip tooltip-right" data-tooltip="Right Tooltip Text">Right Tooltip</button>
    </div>
    <div class="column col-xs-12">
        <button class="btn shadow-2 teal tooltip tooltip-bottom" data-tooltip="Bottom Tooltip Text">Bottom Tooltip</button>
    </div>
    <div class="column col-xs-12">
        <button class="btn shadow-2 teal tooltip tooltip-left" data-tooltip="Left Tooltip Text">Left Tooltip</button>
    </div>
</div>

Tooltips provide context information labels that appear on hover and focus. Tooltips component is built entirely in CSS.


Add the tooltip class and the data-tooltip attribute, which contains the tooltip content, to non self closing elements.
And add the tooltip-right, tooltip-bottom or tooltip-left class to define the position of a tooltip. By default, the tooltip appears above the element.

```html
<button class="btn tooltip" data-tooltip="Lorem ipsum dolor sit amet">top tooltip</button>
<button class="btn tooltip tooltip-right" data-tooltip="Lorem ipsum dolor sit amet">right tooltip</button>
```

## Multiline

Add the ```\n``` string between any text for multiline tooltips.

<div class="my-12">
<button class="btn shadow-2 teal tooltip mt-12 ml-12" data-tooltip="First Line Tooltip Text 
Second Line Tooltip Text 
Third Line Tooltip Text">Multiline Tooltip</button>
</div>

```html
<button class="btn tooltip" data-tooltip="First Line Tooltip Text \n Second Line Tooltip Text">
    multiline tooltip
</button>
```