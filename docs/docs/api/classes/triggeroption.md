---
id: "triggeroption"
title: "Class: TriggerOption"
sidebar_label: "TriggerOption"
---

## Hierarchy

* **TriggerOption**

## Implemented by

* [Trigger](trigger.md)

## Constructors

### constructor

\+ **new TriggerOption**(`params`: Partial<[TriggerOption](triggeroption.md)\>): [TriggerOption](triggeroption.md)

*Defined in [scripts/scroll-trigger/scroll-trigger-option.ts:66](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger-option.ts#L66)*

constructor

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | Partial<[TriggerOption](triggeroption.md)\> | initial value  |

**Returns:** [TriggerOption](triggeroption.md)

## Properties

### once

•  **once**: boolean = false

*Defined in [scripts/scroll-trigger/scroll-trigger-option.ts:45](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger-option.ts#L45)*

## Object literals

### offset

▪  **offset**: object

*Defined in [scripts/scroll-trigger/scroll-trigger-option.ts:46](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger-option.ts#L46)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`element` | object | { x: () => number ; y: () => number  } |
`viewport` | object | { x: () => number ; y: () => number  } |

___

### toggle

▪ `Readonly` **toggle**: object

*Defined in [scripts/scroll-trigger/scroll-trigger-option.ts:57](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger-option.ts#L57)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`callback` | object | { in: () => void ; out: () => void  } |
`class` | object | { in: string[] = ["visible"]; out: string[] = ["invisible"] } |
