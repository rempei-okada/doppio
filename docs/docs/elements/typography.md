---
title: Typography
sidebar_label: Typography
slug: /typographies
---

Typography sets default styles for headings, paragraphs, semantic text, blockquote and lists elements.

## Paragraphs

<div style={{background:"rgba(0,0,0,0.04)"}} class="my-12 pa-3">
  <div>
    <h2>English</h2>
    <p>
      The advance of technology is based on making it fit in so that you don't
      really even notice it, so it's part of everyday life.
    </p>
    <h2>Japanese</h2>
    <p>
      祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏ひとへに風の前の塵におなじ。
    </p>
  </div>
</div>

#### paragraphs usage

<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
<strong>Strong</strong>
<small>Small</small>
<b>Bold</b>
<p>Paragraphs</p>

```html
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
<strong>Strong</strong>
<small>Small</small>
<b>Bold</b>
<p>Paragraphs</p>
```

## Text align

<div style={{background:"rgba(0,0,0,0.04)"}} class="my-12 pa-3">
  <div>
    <h2>English</h2>
    <div class="text-left">
      align left
    </div>
    <div class="text-center">
      align center
    </div>
    <div class="text-right">
      align right
    </div>
    <div class="text-start">
      align start
    </div>
      <div class="text-end">
      align end
    </div>
      <div class="text-justify">
      align justify
    </div>
  </div>
</div>

add class ```text-<left-justify>```

| class        | text align style  | 
| ------------ | ----------------- |
| text-left    | left              |
| text-right   | right             |
| text-center  | center            |
| text-end     | end               |
| text-start   | start             |
| text-justify | justify           |

<Source dark code={`
<div class="text-left">text align</div>
<div class="text-right">text align</div>
`}>
</Source>

## Text wrapping and overflow

<div style={{background:"rgba(0,0,0,0.04)"}} class="my-12 pa-3">
  <div>
    <h4 class="mt-5">text-no-wrap</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-truncate mt-4 pa-3">
      The advance of technology is based on making it fit in so that you don't
      really even notice it, so it's part of everyday life.
    </div>
    <h4 class="mt-5">text-wrap</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-wrap mt-4 pa-3">
      The advance of technology is based on making it fit in so that you don't
      really even notice it, so it's part of everyday life.
    </div>
    <h4 class="mt-5">text-wrap</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-no-wrap mt-4 pa-3">
      The advance of technology is based on making it fit in so that you don't
      really even notice it, so it's part of everyday life.
    </div>
    <h4 class="mt-5">text-no-wrap</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-no-wrap mt-4 pa-3">
      祇園精舎の鐘の声諸行無常の響きあり。沙羅双樹の花の色盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。
    </div>
    <h4 class="mt-5">text-truncate</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-truncate mt-4 pa-3">
      祇園精舎の、鐘の、声諸行無常の、響きあり。沙羅双樹の花の色盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏ひとへに風の前の塵におなじ。
    </div>
    <h4 class="mt-5">text-wrap</h4>
    <div style={{width:"300px",background:"rgba(0,0,0,0.04)"}} class="text-wrap  mt-4 pa-3">
      祇園精舎の、鐘の、声諸行無常の、響きあり。沙羅双樹の花の色盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏ひとへに風の前の塵におなじ。
    </div>
  </div>
</div>


You can prevent wrapping text with the ```text-<property>``` class.

| class          | descrition        | 
| -------------- | ----------------- |
| text-wrap      | wrap text         |
| text-no-wrap   | no wrap text      |
| text-wrap-keep | center            |
| text-truncate  | truncate text     |

<Source dark code={`
<div class="text-wrap"> text overflow </div>
<div class="text-truncate"> text overflow </div>
<div class="text-wrap-keep"> text overflow </div>
<div class="text-wrap"> text overflow </div>
`}>
</Source>

## Font Size

<Preview>
  <Story name="Font size">
    <div>
      <div class="col-12">
        <div class="font-xm">
          Font x small<small class="label ml-2">12px</small>
        </div>
      </div>
      <div class="column col-12">
        <div class="font-sm">
          Font small<small class="label ml-2">16px</small>
        </div>
      </div>
      <div class="column col-12">
        <div class="font-md">
          Font medium<small class="label ml-2">20px</small>
        </div>
      </div>
      <div class="column col-12">
        <div class="font-lg">
          Font large<small class="label ml-2">24px</small>
        </div>
      </div>
      <div class="column col-12">
        <div class="font-xl">
          Font x large<small class="label ml-2">28px</small>
        </div>
      </div>
    </div>
  </Story>
</Preview>

add class <code>font-&lt;size&gt;</code>.  
default 1rem is 20px.

|  class         |  size  |  px  |
| -------------- | ------ | ---- |
|  font-xm  | 0.6rem | 12px |
|  font-sm    | 0.8rem | 16px |
|  font-md   | 1.0rem | 20px |
|  font-lg    | 1.2rem | 24px |
|  font-xl  | 1.4rem | 28px |

```html
<p class="font-lg">font size</p>
```

## Font Weight

<div class="my-12">
    <div class="font-weight-100 mt-2">
      Font Thin<small class="label ml-2">100</small>
    </div>
    <div class="font-weight-200 mt-2">
      Font Thin<small class="label ml-2">200</small>
    </div>
    <div class="font-weight-300 mt-2">
      Font Regular<small class="label ml-2">300</small>
    </div>
    <div class="font-weight-400 mt-2">
      Font Regular<small class="label ml-2">400</small>
    </div>
    <div class="font-weight-500 mt-2">
      Font Normal<small class="label ml-2">500</small>
    </div>
    <div class="font-weight-600 mt-2">
      Font Bold<small class="label ml-2">600</small>
    </div>
    <div class="font-weight-700 mt-2">
      Font Bold<small class="label ml-2">700</small>
    </div>
    <div class="font-weight-800 mt-2">
      Font Heavy<small class="label ml-2">800</small>
    </div>
    <div class="font-weight-900 mt-2">
      Font Heavy<small class="label ml-2">900</small>
    </div>
</div>

add class ```font-weight-<100 - 900>```.

```html
<p class="font-wight-700">Font Bold</p>
```

## Semantic text elements


<div class="docs-demo columns my-12">
  <div class="column col-6 col-xs-12">
    <abbr title="Internationalization">I18N</abbr>
  </div>
  <div class="column col-6 col-xs-12">
    <strong>Bold</strong>
  </div>
  <div class="column col-6 col-xs-12">
    <cite>Citation</cite>
  </div>
  <div class="column col-6 col-xs-12">
    <code>Hello World!</code>
  </div>
  <div class="column col-6 col-xs-12">
    <del>Deleted</del>
  </div>
  <div class="column col-6 col-xs-12">
    <em>Emphasis</em>
  </div>
  <div class="column col-6 col-xs-12">
    <i>Italic</i>
  </div>
  <div class="column col-6 col-xs-12">
    <ins>Inserted</ins>
  </div>
  <div class="column col-6 col-xs-12">
    <kbd>Ctrl + S</kbd>
  </div>
  <div class="column col-6 col-xs-12">
    <mark>Highlighted</mark>
  </div>
  <div class="column col-6 col-xs-12">
    <ruby>
      漢<rt>kan</rt>字<rt>ji</rt>
    </ruby>
  </div>
  <div class="column col-6 col-xs-12">
    <s>Strikethrough</s>
  </div>
  <div class="column col-6 col-xs-12">
    <samp>Sample</samp>
  </div>
  <div class="column col-6 col-xs-12">
    Text <sub>Subscripted</sub>
  </div>
  <div class="column col-6 col-xs-12">
    Text <sup>Superscripted</sup>
  </div>
  <div class="column col-6 col-xs-12">
    <time>20:00</time>
  </div>
  <div class="column col-6 col-xs-12">
    <u>Underline</u>
  </div>
  <div class="column col-6 col-xs-12">
    <var>x</var> =<var>y</var> + 2
  </div>
</div>

|  element      |
| ------------- |
|  abbr         |
|  strong       |
|  cite         |
|  code         | 
|  del          |
|  em           |
|  i            |
|  ins          |
|  kbd          |
|  mark         |
|  ruby, rt     |
|  s            |
|  samp         |
|  sub          |
|  sup          |
|  time         |
|  u            |
|  var          |

## Blockquote

<blockquote>
  <p>
    The advance of technology is based on making it fit in so that you don't
    really even notice it, so it's part of everyday life.{" "}
  </p>
  <cite>- Bill Gates</cite>
</blockquote>

```html
<blockquote>
  <p>title</p>
  <cite>sub title</cite>
</blockquote>
```