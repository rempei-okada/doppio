---
id: "scrolltrigger"
title: "Class: ScrollTrigger"
sidebar_label: "ScrollTrigger"
---

## Hierarchy

* **ScrollTrigger**

## Constructors

### constructor

\+ **new ScrollTrigger**(`options?`: Partial<[ScrollOption](scrolloption.md)\>): [ScrollTrigger](scrolltrigger.md)

*Defined in [scripts/scroll-trigger/scroll-trigger.ts:10](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger.ts#L10)*

Constructor for the scroll trigger

#### Parameters:

Name | Type |
------ | ------ |
`options?` | Partial<[ScrollOption](scrolloption.md)\> |

**Returns:** [ScrollTrigger](scrolltrigger.md)

## Methods

### add

▸ **add**(`objects`: HTMLElement[], `options`: [TriggerOption](triggeroption.md)): this

*Defined in [scripts/scroll-trigger/scroll-trigger.ts:45](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger.ts#L45)*

Add elements as triger.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`objects` | HTMLElement[] | elements |
`options` | [TriggerOption](triggeroption.md) | options. |

**Returns:** this

this instance

___

### remove

▸ **remove**(`triggers`: HTMLElement[] \| NodeList \| [Trigger](trigger.md)[]): this

*Defined in [scripts/scroll-trigger/scroll-trigger.ts:64](https://github.com/rempei-okada/doppio/blob/db76d7d/package/src/scripts/scroll-trigger/scroll-trigger.ts#L64)*

Removes triggers

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`triggers` | HTMLElement[] \| NodeList \| [Trigger](trigger.md)[] | triggers for registter |

**Returns:** this

this instance
