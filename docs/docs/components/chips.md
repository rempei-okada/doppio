---
title: Chips
sidebar_label: Chips
slug: /chips
---


<div class="my-5">
  <span class="chip teal">C#</span>
  <span class="chip chip-text blue-text outlined">C++</span>
  <span class="chip">
    Rust
  </span>
  <span class="chip lime">
    Haskell
  </span>
  <div class="chip">
  <figure class="avatar" data-initial="P"></figure>
    Python
  </div>
  <div class="chip chip-text orange-text">
    <img
      class="avatar"
      src="/img/docs/avater.jpg"
    />
    Typescript
  </div>
</div>

Add a container element with the ```chip``` class. And add child text element, buttons or avatars with the avatar class.

```html
<!-- chips -->
<span class="chip chip-text blue-text outlined">Drama</span>
<!-- with img -->
<div class="chip chip-text lime-text">
  <img
    class="avatar"
    src=""
  />
  Thor Odinson
</div>
```

---

## Text

<div class="my-5">
  <span class="chip chip-text">Angular</span>
  <span class="chip chip-text blue-text">Vue</span>
</div>

Add a container element with the ```chip-text``` class.
Apply style color property to change text color and background color. 

```html
<span class="chip chip-text blue-text">Drama</span>
```

---

## Outlined

<div class="my-5">
  <span class="chip chip-text outlined">Redux</span>
  <span class="chip chip-text blue-text outlined">React</span>
  <span class="chip chip-text red-text outlined">MobX</span>
</div>

Add a container element with the ```outlined``` class.

```html
<span class="chip chip-text blue-text">Drama</span>
```