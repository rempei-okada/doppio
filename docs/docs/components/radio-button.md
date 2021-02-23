---
title: RadioButtion
sidebar_label: RadioButtion
slug: /radio-buttion
---

Radiobutton include colored radiobutton.

Add the ```radio``` class to  container elements. Add ```<label>``` and ```<input/>``` element for radiobutton and label. 
Add style`style="color: #aabbcc"` or color pack class ```{color}-text``` to specify color.

<div class="d-flex my-12">
    <div class="radio green-text">
        <input id="1" type="radio" name="g" checked/>
        <label for="1">
            <span>Option 1</span>
        </label>
    </div>
    <div class="radio green-text">
        <input id="2" type="radio" name="g"  />
        <label for="2">
            <span>Option 2</span>
        </label>
    </div>
        <div class="radio green-text">
        <input id="3" type="radio" name="g"  />
        <label for="3">
            <span>Option 3</span>
        </label>
    </div>
        <div class="radio green-text">
        <input id="4" type="radio" name="g"  />
        <label for="4">
            <span>Option 4</span>
        </label>
    </div>
    <div class="radio green-text">
        <input id="5" type="radio" name="g"  />
        <label for="5">
            <span>Option 5</span>
        </label>
    </div>
</div>

```html
<div class="d-flex">
    <div class="radio">
        <input id="1" type="radio" checked name="g"/>
        <label for="1">Option 1</label>
    </div>
    <div class="radio">
        <input id="2" type="radio" name="g"/>
        <label for="2">Option 2</label>
    </div>
</div>
```

---

## Disabled

Add ```disabled``` attribute to ```<input>``` element.

<div class="d-flex my-12">
    <div class="radio">
        <input id="3" type="radio" disabled name="g1"/>
        <label for="3">Option 1</label>
    </div>
    <div class="radio">
        <input id="4" type="radio" name="g1"/>
        <label for="4">Option 2</label>
    </div>
</div>

```html
<div class="d-flex">
    <div class="radio">
        <input id="3" type="radio" disabled name="g"/>
        <label for="3">Option 1</label>
    </div>
    <div class="radio">
        <input id="4" type="radio" name="g"/>
        <label for="4">Option 2</label>
    </div>
</div>
```