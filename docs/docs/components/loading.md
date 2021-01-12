---
title: Loading
sidebar_label: Loading
slug: /loading
---

Add element ```loading-ring``` class.

<div class="ma-12">
  <svg class="circular">
    <circle ></circle>
  </svg>
</div>

```html
<svg class="circular">
  <circle />
</svg>
```

---

## Color

Add color pack class ```{color}-text``` or style ```style="color: #aabbcc"```.

<div class="ma-12 d-flex flex-wrap align-center">
  <svg class="circular pink-text">
    <circle ></circle>
  </svg>
  <svg class="circular yellow-text">
    <circle ></circle>
  </svg>
</div>

```html
<svg class="circular yellow-text">
  <circle />
</svg>
```

---

## Sizing

Add style ```style="width:{width};height:{height}"``` to sizing.

<div class="ma-12 d-flex flex-wrap align-center">
    <svg class="circular pink-text"  style={{width:"240px",height:"240px"}}>
    <circle ></circle>
  </svg>
  <svg class="circular yellow-text" style={{width:"120px",height:"120px"}}>
    <circle ></circle>
  </svg>
  <svg class="circular orange-text" style={{width:"60px",height:"60px"}}>
    <circle ></circle>
  </svg>
</div>

```html
<svg class="circular orange-text" style="width:60px;height:60px;">
  <circle />
</svg>
```
