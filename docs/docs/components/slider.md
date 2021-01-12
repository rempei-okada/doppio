---
title: Slider
sidebar_label: Slider
slug: /slider
---

The Sliders are for selecting values from ranges.
In order to specify color add style`style="color: #aabbcc"` or color pack class `{color}-text`.

<div class="my-5">
  <input class="slider orange-text" type="range" min="0" max="100" />
</div>

```html
<input class="slider" type="range" min="0" max="100" value="50"/>
<input 
  class="slider tooltip" 
  type="range" 
  min="0"
  max="100" 
  value="50" 
  oninput="this.setAttribute('value', this.value);"
/>
```

---

## Preview

<div>
  <input class="slider lime-text mt-8" type="range" min="0" max="100" />
  <input class="slider cyan-text mt-3" type="range" min="0" max="100" />
  <input class="slider pink-text mt-3" type="range" min="0" max="100" />
  <input class="slider disabled mt-3" type="range" min="0" max="100" />
</div>
