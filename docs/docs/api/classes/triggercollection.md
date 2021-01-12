---
id: "triggercollection"
title: "Class: TriggerCollection"
sidebar_label: "TriggerCollection"
---

## Hierarchy

* **TriggerCollection**

## Properties

### triggers

•  **triggers**: [Trigger](trigger.md)[] = []

*Defined in [scripts/scroll-trigger/trigger-collection.ts:3](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L3)*

## Methods

### add

▸ **add**(`trigger`: [Trigger](trigger.md)): number

*Defined in [scripts/scroll-trigger/trigger-collection.ts:9](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L9)*

Adds one or multiple Trigger objects

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`trigger` | [Trigger](trigger.md) | trigger for add  |

**Returns:** number

___

### call

▸ **call**(`callback`: (trigger: [Trigger](trigger.md)) => void): void

*Defined in [scripts/scroll-trigger/trigger-collection.ts:55](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L55)*

Calls a function on all triggers

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | (trigger: [Trigger](trigger.md)) => void |   |

**Returns:** void

___

### query

▸ **query**(`selector`: string): [Trigger](trigger.md)[]

*Defined in [scripts/scroll-trigger/trigger-collection.ts:32](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L32)*

Lookup one or multiple triggers by a query string

#### Parameters:

Name | Type |
------ | ------ |
`selector` | string |

**Returns:** [Trigger](trigger.md)[]

triggers

___

### remove

▸ **remove**(`trigger`: [Trigger](trigger.md)): void

*Defined in [scripts/scroll-trigger/trigger-collection.ts:23](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L23)*

Removes one or multiple Trigger objects

#### Parameters:

Name | Type |
------ | ------ |
`trigger` | [Trigger](trigger.md) |

**Returns:** void

___

### search

▸ **search**(`element`: HTMLElement): [Trigger](trigger.md)[]

*Defined in [scripts/scroll-trigger/trigger-collection.ts:47](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/trigger-collection.ts#L47)*

Lookup one or multiple triggers by a certain HTMLElement or NodeList

#### Parameters:

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** [Trigger](trigger.md)[]

triggers
