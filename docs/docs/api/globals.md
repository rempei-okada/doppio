---
id: "globals"
title: "Overview"
---

## Index

### Classes

* [ScrollAnimationLoop](classes/scrollanimationloop.md)
* [ScrollOption](classes/scrolloption.md)
* [ScrollTrigger](classes/scrolltrigger.md)
* [Trigger](classes/trigger.md)
* [TriggerCollection](classes/triggercollection.md)
* [TriggerOption](classes/triggeroption.md)

### Interfaces

* [Offset](interfaces/offset.md)
* [ToggleClassPair](interfaces/toggleclasspair.md)
* [ToggleInfo](interfaces/toggleinfo.md)
* [Vector](interfaces/vector.md)
* [Vector2](interfaces/vector2.md)

### Type aliases

* [Direction](globals.md#direction)

### Functions

* [animate](globals.md#animate)
* [copyToClipBoard](globals.md#copytoclipboard)
* [delay](globals.md#delay)
* [openSubWindowAsync](globals.md#opensubwindowasync)

## Type aliases

### Direction

Ƭ  **Direction**: &#34;bottom&#34; \| &#34;top&#34; \| &#34;right&#34; \| &#34;left&#34; \| &#34;none&#34;

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:4](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L4)*

## Functions

### animate

▸ **animate**(`element`: HTMLElement, `property`: string, `value`: string, `duration`: number, `deleyTime?`: number): Promise<void\>

*Defined in [scripts/utilities/animate.ts:11](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/utilities/animate.ts#L11)*

animate element

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`element` | HTMLElement | - | animate element |
`property` | string | - | animate style propery |
`value` | string | - | style value |
`duration` | number | - | animation time (ms) |
`deleyTime` | number | 0 | animation delay time (ms)  |

**Returns:** Promise<void\>

___

### copyToClipBoard

▸ **copyToClipBoard**(`text`: string): void

*Defined in [scripts/utilities/clip-board.ts:5](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/utilities/clip-board.ts#L5)*

copy to clip board．

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | string | text to copy  |

**Returns:** void

___

### delay

▸ **delay**(`msec`: number): Promise<void\>

*Defined in [scripts/utilities/delay.ts:5](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/utilities/delay.ts#L5)*

delay

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`msec` | number | milliseconds  |

**Returns:** Promise<void\>

___

### openSubWindowAsync

▸ **openSubWindowAsync**(`url`: string, `title`: string, `features`: string): Promise<void\>

*Defined in [scripts/utilities/window.ts:7](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/utilities/window.ts#L7)*

Open window.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL |
`title` | string | window title |
`features` | string | window option  |

**Returns:** Promise<void\>
