---
title: Grid System
sidebar_label: Grid System
slug: /grid-system
---

Layout includes flexbox based responsive grid system with 12 row.

<div class="container my-12"  style={{padding: ".4rem"}}>
    <div class="row">
        <div class="column" >
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="lime pa-3"></div>
        </div>
        <div class="column">
            <div style={{padding: ".4rem"}} class="cyan pa-3"></div>
        </div>
    </div>
    <div class="row mt-8">
        <div class="column col-12">
            <div class="pink pa-3">col-12 (100%)</div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="column col-9">
            <div class="pink pa-3">col-9 (75%)</div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="column col-6">
            <div class="pink pa-3">col-6 (50%)</div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="column col-3">
            <div class="pink pa-3">col-3 (25%)</div>
        </div>
    </div>
</div>

Add the <code>row</code> class to a container with the <code>container</code> class. 
And add any element you want with the <code>column</code> class inside the container. These row will take up the space equally.
You can specific the width of each column by adding class <code>col-&lt;1-12&gt;</code>.

```html
<div class="container my-12">
  <div class="row">
    <div class="column col-6">col-6</div>
    <div class="column col-3">col-3</div>
    <div class="column col-2">col-2</div>
    <div class="column col-1">col-1</div>
  </div>
</div>
```

## Grid nesting

To nest grids, add the new <code>row</code> and <code>column</code> structure within an existing column.

<div class="container my-12">
  <div class="row mx-0">
      <div class="column col-6">
          <div class="pink ma-1 pa-3">col-6</div>
          <div class="row mx-0">
              <div class="column col-6">
                  <div class="lime ma-1 pa-3">col-6</div>
              </div>
              <div class="column col-6">
                  <div class="lime ma-1 pa-3">col-6</div>
              </div>
          </div>
      </div>
      <div class="column col-6">
          <div class="pink ma-1 pa-3">col-6</div>
      </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="column col-6">col-6
      <div class="row">
        <div class="column col-6">col-6</div>
        <div class="column col-6">col-6</div>
      </div>
    </div>
    <div class="column col-6">col-6</div>
  </div>
</div>
```

## Column offset

The Flexbox grid provides margin auto utilities to set offset. 
There are <code>col-mx-auto</code>, <code>col-ml-auto</code> and <code>col-mr-auto</code> to set margins between row without using empty row.

<div class="container">
  <div class="row mt-8">
      <div class="column col-12 ">
          <div class="yellow ma-1 pa-3 pl-2">col-12</div>
      </div>
  </div>
  <div class="row mt-1">
      <div class="column col-2">
          <div class="orange ma-1 pa-3 pl-2">col-2</div>
      </div>
      <div class="column col-4 col-mx-auto">
          <div class="pink ma-1 pa-3 pl-2">col-4 col-mx-auto</div>
      </div>
  </div>
  <div class="row mt-1">
        <div class="column col-4 col-ml-auto">
          <div class="lime ma-1 pa-3 pl-2">col-4 col-ml-auto</div>
      </div>
      <div class="column col-2">
          <div class="deep-orange ma-1 pa-3 pl-2">col-2</div>
      </div>
  </div>
  <div class="row mt-1">
      <div class="column col-4 col-rl-auto">
        <div class="pink ma-1 pa-3 pl-2">col-4 col-mr-auto</div>
    </div>
    <div class="column col-2">
        <div class="orange ma-1 pa-3 pl-2">col-2</div>
    </div>
  </div>
  <div class="row mt-1">
      <div class="column col-4 col-mx-auto">
          <div class="red ma-1 pa-3 pl-2">col-4 col-mx-auto</div>
      </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="column col-4 col-mr-auto">col-4 col-mr-auto</div>
    <div class="column col-2">col-2</div>
  </div>
</div>
```

## Auto width column

You can add the <code>col-auto</code> class to the <code>column</code> to auto adjusts the width of the row according to the inner element.
There are <code>col-xl-auto</code>, <code>col-lg-auto</code>, <code>col-md-auto</code>, <code>col-sm-auto</code> and <code>col-xs-auto</code> to set auto width in different viewport sizes.

<div class="container my-12">
  <div class="row mt-8">
    <div class="column col-lg-auto col-6">
      <div class="cyan ma-1 pl-1 pa-3 pr-2">col-lg-auto</div>
    </div>
    <div class="column">
      <div class="cyan ma-1 pl-2 pa-3 pr-2">col</div>
    </div>
  </div>
  <div class="row mt-8">
    <div class="column col-auto">
      <div class="cyan ma-1 pa-3 pl-1 pr-2">col-auto</div>
    </div>
    <div class="column">
      <div class="cyan pa-3 ma-1 pl-2">col</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="column col-auto">col-auto</div>
    <div class="column">col</div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="column col-lg-auto">col-lg-auto</div>
    <div class="column">col</div>
  </div>
</div>
```

## Responsive

There are <code>col-xs-&lt;1-12&gt;</code>, <code>col-sm-&lt;1-12&gt;</code>, <code>col-md-&lt;1-12&gt;</code>, <code>col-lg-&lt;1-12&gt;</code> and <code>col-xl-&lt;1-12&gt;</code> available for flexible grid across mobile, tablet and desktop viewport usage.

<div class="container my-12">
    <div class="docs-demo row">
        <div class="column col-10 col-lg-8 col-md-6 col-sm-12">
            <div class="pink pl-2">
                <div class="text-primary pa-3">col-10</div>
                <div class="text-dark hide-lg pa-3">col-lg-8</div>
                <div class="text-primary show-lg pa-3">col-lg-8</div>
                <div class="text-dark hide-md pa-3">col-md-6</div>
                <div class="text-primary show-md pa-3">col-md-6</div>
                <div class="text-dark hide-sm pa-3">col-sm-4</div>
                <div class="text-primary show-sm pa-3">col-sm-4</div>
            </div>
        </div>
        <div class="column col-2 col-lg-4 col-md-6 col-sm-12">
            <div class="lime pl-2">
                <div class="text-primary pa-3">col-2</div>
                <div class="text-dark hide-lg pa-3">col-lg-4</div>
                <div class="text-primary show-lg pa-3">col-lg-4</div>
                <div class="text-dark hide-md pa-3">col-md-6</div>
                <div class="text-primary show-md pa-3">col-md-6</div>
                <div class="text-dark hide-sm pa-3">col-sm-8</div>
                <div class="text-primary show-sm pa-3">col-sm-8</div>
            </div>
        </div>
    </div>
</div>

* <code>col-xs-&lt;1-12&gt;</code> apply to window width  
smaller than or equal to <strong>480px</strong>.

* <code>col-sm-&lt;1-12&gt;</code> apply to window width
  smaller than or equal to <strong>600px</strong>.

* <code>col-md-&lt;1-12&gt;</code> apply to window width
smaller than or equal to <strong>840px</strong>.

* <code>col-lg-&lt;1-12&gt;</code> apply to window width
smaller than or equal to <strong>960px</strong>.

* <code>col-xl-&lt;1-12&gt;</code> apply to window width
smaller than or equal to <strong>1280px</strong>.

* <code>col-&lt;1-12&gt;</code> apply to all window width,
including the width wider than <strong>1280px</strong>.

```html
<div class="container">
  <div class="row">
    <div class="column col-xs-6">col-xs-6</div>
    <div class="column col-xs-3">col-xs-3</div>
    <div class="column col-xs-3">col-xs-3</div>
  </div>
</div>
```

## Responsive container

The responsive layout also provides fixed-width containers.
Use <code>grid-xs</code>(480px), <code>grid-sm</code>(600px), <code>grid-md</code>(840px), <code>grid-lg</code>(960px) or <code>grid-xl</code>(1280px) to the container for a fixed-width container with the specific max-width.

100% width container with max-width set to grid-lg (960px)

```html
<div class="container grid-lg">
  <div class="columns">
    ...
  </div>
</div>
```

## Responsive visibility

The responsive visibility utilities help show and hide elements on specific viewport sizes.

|         | size-xs | size-sm | size-md | size-lg | size-xl |
| ------- | ------- | ------- | ------- | ------- | ------- |
| hide-xs |         | ○       | ○       | ○       | ○       |
| hide-sm |         |         | ○       | ○       | ○       |
| hide-md |         |         |         | ○       | ○       |
| hide-lg |         |         |         |         | ○       |
| hide-xl |         |         |         |         |         |

For hiding elements on specific viewport sizes, there are classes <code>hide-xs</code>, <code>hide-sm</code>, <code>hide-md</code>, <code>hide-lg</code> and <code>hide-xl</code> available.

* ```hide-xs``` hides elements when the window width is smaller than or equal to <strong>480px</strong>.
* ```hide-sm``` hides elements when the window width is smaller than or equal to <strong>600px</strong>.
* ```hide-md``` hides elements when the window width is smaller than or equal to <strong>840px</strong>.
* ```hide-lg``` hides elements when the window width is smaller than or equal to <strong>960px</strong>.
* ```hide-xl``` hides elements when the window width is smaller than or equal to <strong>1280px</strong>.


|         | size-xs | size-sm | size-md | size-lg | size-xl |
| ------- | ------- | ------- | ------- | ------- | ------- |
| show-xs | ○       |         |         |         |         |
| show-sm | ○       | ○       |         |         |         |
| show-md | ○       | ○       | ○       |         |         |
| show-lg | ○       | ○       | ○       | ○       |         |
| show-xl | ○       | ○       | ○       | ○       | ○       |

For showing elements on specific viewport sizes, there are classes <code>show-xs</code>, <code>show-sm</code>, <code>show-md</code>, <code>show-lg</code> and <code>show-xl</code> available.

* ```show-xs``` shows elements when the window width is smaller than or equal to <strong>480px</strong>.
* ```show-sm``` shows elements when the window width is smaller than or equal to <strong>600px</strong>.
* ```show-md``` shows elements when the window width is smaller than or equal to <strong>840px</strong>.
* ```show-lg``` shows elements when the window width is smaller than or equal to <strong>960px</strong>.
* ```show-xl``` shows elements when the window width is smaller than or equal to <strong>1280px</strong>.