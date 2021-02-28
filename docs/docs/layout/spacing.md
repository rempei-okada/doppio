---
title: Spacing
sidebar_label: Spacing
slug: /spacing
---

Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.

<div class="my-12">
  <h2>English</h2>
  <p class="ml-8 mt-2">
    The advance of technology is based on making it fit in so that you don't
    really even notice it, so it's part of everyday life.
  </p>
  <h2>Japanese</h2>
  <p class="mt-6">
    祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。
  </p>
</div>


The helper classes apply margin or padding to an element ranging from 0 to 12. Each size increment was designed to align with common Material Design spacings. These classes can be applied using the following format ```{property}-{direction}-{size}```.

Add the <code>row</code> class to a container with the <code>container</code> class. 
And add any element you want with the <code>column</code> class inside the container. These row will take up the space equally.
You can specific the width of each column by adding class <code>col-&lt;1-12&gt;</code>.

The property applies the type of spacing:

* ```m``` - applies ```margin```
* ```p``` - applies ```padding```

The direction designates the side the property applies to:

* ```t``` - applies the spacing for ```margin-top``` and ```padding-top```
* ```b``` - applies the spacing for ```margin-bottom``` and ```padding-bottom```
* ```l``` - applies the spacing for ```margin-left``` and padding-left```
* ```r``` - applies the spacing for ```margin-right``` and ```padding-right```
* ```s``` - applies the spacing for ```margin-left```/```padding-left``` (in LTR mode) and ```margin-right```/```padding-right``` (in RTL mode)
* ```e``` - applies the spacing for ```margin-right```/```padding-right``` (in LTR mode) and ```margin-left```/```padding-left``` (in RTL mode)
* ```x``` - applies the spacing for both ```*-left``` and ```*-right```
* ```y``` - applies the spacing for both ```*-top``` and ```*-bottom```
* ```a``` - applies the spacing for the property in all directions
* The size controls the increment of the property in 4px intervals:

* ```0``` - eliminates all ```margin``` or ```padding``` by setting it to 0
* ```1 - 16``` - sets ```margin``` or ```padding``` to ```specified number * 4```. For example ```ml-12``` sets to ```48px```. Lite ver ```1 -12```.
* ```auto``` - sets the spacing to ```auto```

```html
<div class="mt-4 ml-3">element</div>
```

###  Customizing

if building sass/scss, you can customize size.

```scss
@import "doppio/src/main.scss";
 
@for $var from 13 to <your size + 1> {
    @include margin-variant($var, $var * 4px);
    @include padding-variant($var, $var * 4px);
}
```