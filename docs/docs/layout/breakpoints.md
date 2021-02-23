---
title: Responsive Breakpoints
sidebar_label: Responsive Breakpoints
slug: /breackpoints
---

For optimal user experience, material design interfaces need to be able to adapt their layout at various breakpoints. doppio uses a simplified implementation of the original specification.

The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid and Hidden components.

Each breakpoint (a key) matches with a fixed screen width (a value):

xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
These breakpoint values are used to determine breakpoint ranges. A range starts from the breakpoint value inclusive, to the next breakpoint value exclusive:

```
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
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

* ```hide-xs``` hides elements when the window width is smaller than or equal to <strong>600px</strong>.
* ```hide-sm``` hides elements when the window width is smaller than or equal to <strong>960px</strong>.
* ```hide-md``` hides elements when the window width is smaller than or equal to <strong>1280px</strong>.
* ```hide-lg``` hides elements when the window width is smaller than or equal to <strong>1920px</strong>.
* ```hide-xl``` hides elements when the window width is larger than or equal to <strong>1920px</strong>.


|         | size-xs | size-sm | size-md | size-lg | size-xl |
| ------- | ------- | ------- | ------- | ------- | ------- |
| show-xs | ○       |         |         |         |         |
| show-sm | ○       | ○       |         |         |         |
| show-md | ○       | ○       | ○       |         |         |
| show-lg | ○       | ○       | ○       | ○       |         |
| show-xl | ○       | ○       | ○       | ○       | ○       |

For showing elements on specific viewport sizes, there are classes <code>show-xs</code>, <code>show-sm</code>, <code>show-md</code>, <code>show-lg</code> and <code>show-xl</code> available.

* ```show-xs``` shows elements when the window width is smaller than or equal to <strong>600px</strong>.
* ```show-sm``` shows elements when the window width is smaller than or equal to <strong>960px</strong>.
* ```show-md``` shows elements when the window width is smaller than or equal to <strong>1280px</strong>.
* ```show-lg``` shows elements when the window width is smaller than or equal to <strong>1920px</strong>.
* ```show-xl``` shows elements when the window width is larger than or equal to <strong>1920px</strong>.