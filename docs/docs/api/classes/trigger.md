---
id: "trigger"
title: "Class: Trigger"
sidebar_label: "Trigger"
---

## Hierarchy

* **Trigger**

## Implements

* [TriggerOption](triggeroption.md)

## Constructors

### constructor

\+ **new Trigger**(`element`: Element \| HTMLElement, `options`: [TriggerOption](triggeroption.md)): [Trigger](trigger.md)

*Defined in [scripts/scroll-trigger/trigger.ts:12](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L12)*

Creates a new Trigger from the given element and options

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`element` | Element \| HTMLElement |  |
`options` | [TriggerOption](triggeroption.md) |   |

**Returns:** [Trigger](trigger.md)

## Properties

### active

•  **active**: boolean = true

*Defined in [scripts/scroll-trigger/trigger.ts:10](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L10)*

___

### element

• `Readonly` **element**: Element \| HTMLElement

*Defined in [scripts/scroll-trigger/trigger.ts:12](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L12)*

___

### offset

•  **offset**: [Offset](../interfaces/offset.md)

*Defined in [scripts/scroll-trigger/trigger.ts:6](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L6)*

___

### once

•  **once**: boolean = true

*Defined in [scripts/scroll-trigger/trigger.ts:8](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L8)*

___

### toggle

•  **toggle**: [ToggleInfo](../interfaces/toggleinfo.md)

*Defined in [scripts/scroll-trigger/trigger.ts:7](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L7)*

___

### visible

•  **visible**: boolean = false

*Defined in [scripts/scroll-trigger/trigger.ts:9](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L9)*

## Methods

### checkVisibility

▸ **checkVisibility**(`parent`: HTMLElement \| HTMLDocument \| Window, `direction`: [Direction](../globals.md#direction)): Promise<boolean\>

*Defined in [scripts/scroll-trigger/trigger.ts:41](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L41)*

Checks if the Trigger is in the viewport, calls the callbacks and toggles the classes

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`parent` | HTMLElement \| HTMLDocument \| Window |  |
`direction` | [Direction](../globals.md#direction) | top, bottom, left, right |

**Returns:** Promise<boolean\>

If the element is visible

___

### getBounds

▸ **getBounds**(): ClientRect

*Defined in [scripts/scroll-trigger/trigger.ts:81](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger.ts#L81)*

Get the bounds of this element

**Returns:** ClientRect

rect
