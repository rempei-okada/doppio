---
title: Progress
sidebar_label: Progress
slug: /progress
---

<div className="my-5">
  <progress className="progress" value="25" max="100"></progress>
  <progress className="progress cyan-text" value="70" max="100"></progress>
  <progress className="progress deep-orange-text"  style={{animationDelay:"0.02s"}} max="100"></progress>
</div>

The Progress indicates the progress completion of a task.
in order to specify color, add color pack class ```{color}-text``` or style ```style="color: #aabbcc"```.

```html
<progress class="progress" value="25" max="100"></progress>
<progress class="progress" max="100"></progress>
```

---

## Color

Add color pack class ```{color}-text``` or style ```style="color: #aabbcc"```.

<div class="my-5">
  <progress class="progress pink-text"  style={{animationDelay:"0.02s"}} max="100"></progress>
</div>

```html
<progress class="progress" max="100"></progress>
```

---

## Progress Rate

Add ```value``` and ```max``` attribute to set gauge.

<div class="my-5">
  <progress class="progress yellow-text"  value="48" max="100"></progress>
</div>

```html
<progress class="progress" value="48" max="100"></progress>
```

---

## Loading

Add ```loading``` class and set ```value="0"``` attribute to be loading state.

<div class="my-5">
  <progress class="progress loading purple-text" value="0" max="100"></progress>
</div>

```html
<progress class="progress loading" value="0" max="100"></progress>
```

---

## Preview

<progress class="progress pink-text" max="100"></progress>
<progress class="progress red-text" style={{animationDelay:"0.01s"}} max="100"></progress>
<progress class="progress deep-orange-text"  style={{animationDelay:"0.02s"}} max="100"></progress>
<progress class="progress orange-text" style={{animationDelay:"0.03s"}} max="100"></progress>
<progress class="progress amber-text" style={{animationDelay:"0.04s"}} max="100"></progress>
<progress class="progress yellow-text" style={{animationDelay:"0.05s"}} max="100"></progress>
<progress class="progress lime-text"  style={{animationDelay:"0.06s"}} max="100"></progress>      
<progress class="progress light-green-text" style={{animationDelay:"0.07s"}} max="100"></progress>
<progress class="progress green-text" style={{animationDelay:"0.08s"}} max="100"></progress>
<progress class="progress teal-text" style={{animationDelay:"0.09s"}} max="100"></progress>
<progress class="progress cyan-text" style={{animationDelay:"0.1s"}} max="100"></progress>
<progress class="progress light-blue-text" style={{animationDelay:"0.11s"}} max="100"></progress>
<progress class="progress blue-text" style={{animationDelay:"0.12s"}} max="100"></progress>
<progress class="progress indigo-text" style={{animationDelay:"0.13s"}} max="100"></progress>
<progress class="progress deep-purple-text" style={{animationDelay:"0.14s"}} max="100"></progress>
<progress class="progress purple-text" style={{animationDelay:"0.15s"}} max="100"></progress>