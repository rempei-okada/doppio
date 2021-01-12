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
You can set an element's width % style by using the class `{min|max|none}-strech-{x|y}-{0|10|20|30...100}`,
where `property` is a position style property.

For Example

| class          | style         | property |
| -------------- |-------------- | -------- |
| strech         | width,height  | 100%     |
| strech-y       | height        | 100%     |
| strech-x       | width         | 100%     |
| strech-60      | width,height  | 60%      |
| strech-y-60    | height        | 60%      |
| min-strech-x-60| min-width     | 60%      |

Sizing utilities are used for sizing things.
You can set an element's width px style by using the class  `{min|max|none}-{width|height}-{xs|sm|md|lg|xl}`,
where `property` is a position style property.

| class          | size          |
| -------------- |-------------- |
| xs             | 480px         |
| sm             | 600px         |
| md             | 840px         |
| lg             | 960px         |
| xl             | 1280px        |

```html
<div class="strech"></div>
<div class="strech-x-40"></div>
<div class="max-strech-x-40"></div>
<div class="width-sm"></div>
<div class="min-width-lg"></div>
<div class="max-width-xs"></div>
```