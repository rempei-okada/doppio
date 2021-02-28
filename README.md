![Doppio logo](docs/static/img/doppio.png)

># Doppio

Doppio is a lightweight, simple and modern web design frame work.
Most core features are built entirely with CSS, but can be made even more powerful by loading scripts.

[DEMO](https://rempei-okada.github.io/doppio-ui/)


### Modules

|                             | Standard | Lite | Full | Color Pack |
| --------------------------- | -------- | ---- | ---- | ---------- |
| Comopnents                  | ○        | ○    | ○    |            |
| Elements                    | ○        | ○    | ○    |            |
| Layouts                     | ○        | ○    | ○    |            |
| Simple spacing              | ○        | ○    | ○    |            |
| Responsive and full spacing | ○        |      | ○    |            |
| Simple Colors Pack          | ○        | ○    | ○    |            |
| Full Colors Pack            |          |      |      | ○          |
| Utilities                   | ○        | ○    | ○    |            |
| Scripts                     |          |      | ○    |            |

### Bundles

| Package    | js   | css   |
| ---------- | ---- | ----- |
| Standard   | 0KB  | 200KB |
| Lite       | 0KB  | 45KB  |
| Full       | 20KB | 250KB |
| Color Pack | 0KB  | 50KB  |

There is a difference in size because there is a "Responsive and full spacing" module of about 160KB that is packed with responsive margins and padding.
The Lite version does not include responsive or negative margins. Therefore the size is small.

---
 
># Getting Standard

There are various installation way. Please choose the most suitable way.

>## HTML5

### FULL

Includes CSS and Javascript so you do not have to load css or anything else

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio.js"/>

<script>
    // load styles to head element.
    Doppio.load();

    // unload styles from head element.
    Doppio.unload();
</script>
```

### Standard

When using as Pure CSS as standard version.

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-css.css"/>
```

### Lite

When using as Pure CSS as lite version.

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-lite.css"/>
```

When you need additional script as full version

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-js.js"/>
```

### Color Pack addon

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-colorpack.css"/>
```

>## Package Manager

### Install with npm

```
$ npm install --save doppio
```

### Install with yarn

```
$ yarn add doppio
```

### Usage

If you import it somewhere in your source, it includes CSS and Javascript so you don't have to load css file or anything else

```ts
import { load, unload } from "doppio-ui";

// load styles to head element.
load();
// unload styles from head element.
unload();
```

### Only pure Css as Standard Version

```ts
import "doppio-ui/dist/doppio-css.css"
```

### Only pure Css as Lite Version

```ts
import "doppio-ui/dist/doppio-lite.css"
```

>## Color pack addon

While convenient, the color pack increases the bundle export big size. So split bundles to reduce unnecessary features.

### NPM

```ts
import "doppio-ui/dist/doppio-colorpack.css";
```

### HTML

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-colorpack.css"/>
```

>## From Source to import just the features you need

Build from src with typescript to enable tree shaking

```ts
// Build from src with typescript to enable tree shaking
import { ... } from "doppio-ui/package/src";
```

Build from src with typescript to enable tree shaking

```ts
// Import all styles
import { ... } from "doppio-ui/package/src/styles/index.scss";
// Import à la carte style
import "doppio-ui/package/src/styles/core.scss";
import "doppio-ui/package/src/styles/utilities.scss";
import "doppio-ui/package/src/styles/colors.scss";
```

---

># Browser support for Scripts

* Chrome LAST 4
* Microsoft Edge LAST 4
* Firefox EXTENDED SUPPORT RELEASE
* Safari LAST 4
* Opera LAST 4

### Old Browser

* Internet Explorer 11+ 

If you want to support old browser, remove all scripts and add this and pure css part

### HTML

```html
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-css.css"/>
<link rel="stylesheet" href="https://unpkg.com/doppio-ui/dist/doppio-js.oldbrowser.css"/>
```

### NPM MODULES

Please solve using Babel etc. in your project.

---

># Browser support for Styles

Doppio uses <a href="https://github.com/postcss/autoprefixer" target="_blank">Autoprefixer</a> to make most styles.
Doppio is designed for modern browsers. For best compatibility, these browsers are recommended:

* Chrome LAST 4
* Microsoft Edge LAST 4
* Firefox EXTENDED SUPPORT RELEASE
* Safari LAST 4
* Opera LAST 4
* Internet Explorer 11+

Doppio supports Internet Explorer 11+, but some HTML5 and CSS3 features are not perfectly supported by Internet Explorer.

># Reset CSS

Compatible with earlier browsers and <a href="https://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a> for CSS resets.
Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

># License

Designed with ♥ rempei okada. Licensed under the MIT License.