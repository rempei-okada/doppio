---
title: Button
sidebar_label: Button
slug: /
---

Buttons include simple button styles for actions in different types and sizes.

Add the btn class to ```<a>```, ```<input>``` or ```<button>``` elements for a default button. There are classes btn-primary and btn-link for predefined primary and link buttons.


<div class="my-5">
    <button class="btn">Default Button</button>
    <button class="btn blue ml-3">Button Color</button>
    <button class="btn ml-3 foreground-5" style={{background:"#abdaff"}}>Button Color</button>
</div>

```html
<button class="btn">Default Button</button>
<button class="btn orange">Button Color</button>
```

#### Size

| xs | sm | lg | xl |
| -- | -- | -- | -- |

Add the ```sm``` to ```lg``` class for small or large button size. Also, you can add the ```block``` class for a full-width button.

<div class="my-5">
    <div class="d-flex">
        <button class="btn cyan xl">X Large</button>
        <button class="btn yellow foreground-5 lg ml-3">Large</button>
        <button class="btn lime ml-3">Normal</button>
        <button class="btn pink sm ml-3">Small</button>
        <button class="btn orange xs ml-3">X Small</button>
    </div>
    <div class="d-flex mt-3">
        <button class="btn deep-purple block">Blocked</button>
    </div>
</div>


```html
<button class="btn foreground-1">Default Button</button>
<button class="btn cyan">Button Color</button>
```

## Disabled

Add the ```disabled``` class or the disabled attribute for disabled button state style.

<div class="my-5">
    <button class="btn disabled red">Disabled Button</button>
    <button class="btn blue ml-3 disabled">Disabled Button Color</button>
</div>

```html
<button class="btn foreground-1">Default Button</button>
<button class="btn cyan">Button Color</button>
```

## Flat

Add the ```flat``` class for no-shadow flat button state style.

<div class="my-5">
    <button class="btn flat red">Flat Button</button>
</div>

```html
    <button class="btn foreground-1">Default Button</button>
    <button class="btn cyan">Button Color</button>
```

## Rounded

Add the ```rounded``` class for rounded button state style.

<div class="my-5">
    <button class="btn yellow rounded foreground-1">Default Button</button>
    <button class="btn pink rounded ml-3">Button Color</button>
</div>

```html
    <button class="btn yellow rounded foreground-1">Default Button</button>
    <button class="btn pink rounded">Button Color</button>
```

## Text

Add the ```text``` class for text button state style.

<div class="my-5">
    <button class="btn purple-text text foreground-1">Default Button</button>
    <button class="btn blue-text text ml-3">Button Color</button>
</div>

```html
    <button class="btn yellow-text text">Default Button</button>
    <button class="btn pink-text text">Button Color</button>
```

## Outlined

Add the ```outlined``` class for outlined button state style.
Add the color style for changing button color state style.

<div class="my-5">
    <button class="btn yellow-text outlined">Default Button</button>
    <button class="btn pink-text outlined ml-3">Button Color</button>
</div>

```html
<button class="btn yellow-text outlined">Default Button</button>
<button class="btn pink-text outlined">Button Color</button>
```