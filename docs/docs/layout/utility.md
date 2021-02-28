---
title: Utility
sidebar_label: Utility
slug: /util
---

## Display

Display utilities are used for display and hidden things.
You can set an element's display style by using the class `d-{property}`,
where `property` is a display style property. 

| class          | style      | property      |
| -------------- |----------- | ------------- |
| d-flex         | display    | flex          |
| d-inline-flex  | display    | d-inline-flex |
| d-block        | display    | block         |
| d-inline       | display    | inline        |
| d-inline-block | display    | inline-block  |
| d-none         | display    | none          |
| d-visible      | visibility | visible       |
| d-hidden       | visibility | hidden        |


```html
<!-- display: block; -->
<div class="d-block"></div>
<!-- display: inline; -->
<div class="d-inline"></div>
<!-- display: inline-block; -->
<div class="d-inline-block"></div>
<!-- display: flex; -->
<div class="d-flex"></div>
```


## Position

Position utilities are used for position styling.
You can set an element's display style by using the class `p-{property}`,
where `property` is a position style property. 

| class          | style                 | property      |
| -------------- |---------------------- | ------------- |
| d-absolute     | position              | absolute      |
| d-fixed        | position              | fixed         |
| d-relative     | position              | relative      |
| d-static       | position              | static        |
| d-sticky       | position              | sticky        |
| left           | left                  | 0             |
| right          | right                 | 0             |
| top            | top                   | 0             |
| bottom         | bottom                | 0             |
| center         | top,right,bottom,left | 0             |


```html
<!-- position: absolute; -->
<div class="p-absolute"></div>
<!-- position: fixed; -->
<div class="p-fixed"></div>
```

## Sizing

Sizing utilities are used for sizing things.
You can set an element's fill 100% style by using the class `fill-{width|height}`,
where `property` is a position style property.

For Example

| class          | style         | property |
| -------------- |-------------- | -------- |
| fill           | width,height  | 100%     |
| fill-height    | height        | 100%     |
| fill-width     | width         | 100%     |

```html
<div class="fill"></div>
<div class="fill-height"></div>
<div class="fill-width"></div>
```