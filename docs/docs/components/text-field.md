---
title: Text Field
sidebar_label: Text Field
slug: /text-fields
---

Text Field include simple input styles and text field.

<div class="my-12" style={{maxWidth: "400px"}}>
    <input placeholder="Placeholder"/>
    <label class="text-field cyan-text mt-4">
        <input placeholder="Placeholder"/>
        <span>Textfield</span>
    </label>
</div>

## Simple input

<div class="my-12" style={{maxWidth: "400px"}}>
    <input placeholder="Placeholder"/>
</div>

```html
<input placeholder="Placeholder"/>
```

## Colored Text Field

Add the ```text-field``` class to ```<label>``` container elements. Add ```<span>``` and ```<input/>``` element for text and label. 
Add style`style="color: #aabbcc"` or color pack class ```{color}-text``` to specify color.

<div class="my-12" style={{maxWidth: "400px"}}>
    <label class="text-field pink-text mt-4">
        <input placeholder="Placeholder"/>
        <span>Textfield</span>
    </label>
</div>


```html
<label class="text-field blue-text">
    <input placeholder="Placeholder"/>
    <span>Textfield</span>
</label>
```


## Disabled

Add ```disabled``` attribute to ```<input>``` element.

<div class="my-12" style={{maxWidth: "400px"}}>
    <input disabled placeholder="Placeholder"/>
    <label class="text-field pink-text mt-4">
        <input disabled placeholder="Placeholder"/>
        <span>Textfield</span>
    </label>
</div>


```html
<label class="text-field blue-text">
    <input placeholder="Placeholder"/>
    <span>Textfield</span>
</label>
```