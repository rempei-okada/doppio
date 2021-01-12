---
id: "scrollanimationloop"
title: "Class: ScrollAnimationLoop"
sidebar_label: "ScrollAnimationLoop"
---

## Hierarchy

* **ScrollAnimationLoop**

## Constructors

### constructor

\+ **new ScrollAnimationLoop**(`options`: [ScrollOption](scrolloption.md)): [ScrollAnimationLoop](scrollanimationloop.md)

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:17](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L17)*

ScrollAnimationLoop constructor.
Starts a requestAnimationFrame loop as long as the user has scrolled the scrollElement. Stops after a certain time.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [ScrollOption](scrolloption.md) | The options for the loop |

**Returns:** [ScrollAnimationLoop](scrollanimationloop.md)

## Properties

### boundListener

•  **boundListener**: () => void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:10](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L10)*

___

### callback

•  **callback**: (position: [Vector2](../interfaces/vector2.md), dilection: [Direction](../globals.md#direction)) => void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:11](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L11)*

___

### direction

•  **direction**: &#34;bottom&#34; \| &#34;top&#34; \| &#34;right&#34; \| &#34;left&#34; \| &#34;none&#34;

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:8](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L8)*

___

### directionChange

•  **directionChange**: (direction: [Direction](../globals.md#direction)) => void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:12](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L12)*

___

### element

•  **element**: HTMLElement \| Window

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:15](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L15)*

___

### lastAction

•  **lastAction**: number

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:9](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L9)*

___

### running

•  **running**: boolean = false

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:17](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L17)*

___

### startCallback

•  **startCallback**: () => void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:14](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L14)*

___

### stopCallback

•  **stopCallback**: () => void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:13](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L13)*

___

### sustain

•  **sustain**: number = 300

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:16](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L16)*

## Methods

### kill

▸ **kill**(): void

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:49](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L49)*

Kills the loop forever

**Returns:** void

## Object literals

### position

▪  **position**: object

*Defined in [scripts/scroll-trigger/scroll-animation-loop.ts:7](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-animation-loop.ts#L7)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`x` | number | 0 |
`y` | number | 0 |
