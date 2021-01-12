---
title: Checkbox
sidebar_label: Checkbox
slug: /checkbox
---

Checkbox include colored checkbox.

<div class="my-12" style={{maxWidth: "400px"}}>
    <label class="checkbox">
        <input type="checkbox" checked/>
        <span>Checkbox</span>
    </label>
</div>

## Basic

Add the ```checkbox``` class to ```<label>``` container elements. Add ```<span>``` and ```<input/>``` element for checkbox and label. 
Add style`style="color: #aabbcc"` or color pack class ```{color}-text``` to specify color.

<div class="my-12 d-flex flex-column">
    <label class="checkbox red-text">
        <input type="checkbox" />
        <span>Red</span>
    </label>
    <label class="checkbox orange-text mt-2" >
        <input type="checkbox" />
        <span>Orange</span>
    </label>
    <label class="checkbox yellow-text mt-2" >
        <input type="checkbox" checked/>
        <span>Yellow Checled</span>
    </label>
    <label class="checkbox lime-text mt-2" >
        <input type="checkbox"/>
        <span>Lime</span>
    </label>
</div>

```html
<label class="checkbox purple-text" >
    <input type="checkbox" checked/>
    <span>Checkbox</span>
</label>
```

---

## Disabled

Add ```disabled``` attribute to ```<input>``` element.

<div class="my-12" style={{maxWidth: "400px"}}>
    <label class="checkbox blue-text">
        <input disabled type="checkbox" checked/>
        <span>Checkbox</span>
    </label>
</div>

```html
<label class="checkbox blue-text">
    <input disabled type="checkbox" checked/>
    <span>Checkbox</span>
</label>
```
