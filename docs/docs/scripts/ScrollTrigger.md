---
title: Scroll Trigger
sidebar_label: Scroll Trigger
slug: /scroll-triggers
---

import { useEffect } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

<a href="#preview">Preview</a>

Scroll trrigger realizes detect overlap element from current scroll position and element position, and add css classes for animation, transition or other styles.

### Usage

Import fot HTML project

```js
var ScrollTrigger = Doppio.ScrollTrigger;
```

Import for ES6 project

```ts
import { ScrollTrigger } from "doppio";
```

Import for CommonJS project

```js
const { ScrollTrigger } = require("doppio");
```

```ts
// Create instance
const triggerHandler = new ScrollTrigger({});
// elements to register as scroll trigger
const elements = document.querySelectorAll(".scroll-trigger");

triggerHandler.add(elements, {
    once: false,
    offset: {
        // viewport trigger position offset
        viewport: {
            x: (trigger: Trigger, rect: ClientRect, direction: Direction) => 0,
            y: trigger => trigger.visible ? 0 : 0.2
        },
        // element trriger position offset
        element: {
            x: () => 0,
            y: () => 0.2
        }
    },
    toggle: {
        class: {
            // overlap element will be added classes.
            in: ["visible-css-class"],
            // unoverlap element will be added classes.
            out: ["invisible-css-class"]
        },
        callback: {
            // delay switch classes
            in: () => delay(500),
            out: () => delay(500)
        }
    },
});
```

### ScrollOption

```ts
{
  sustain: 300,
  element: window,
  callback: (position: { x: number; y: number; }, direction: Direction) => void,
  start: () => { },
  stop: () => { },
  directionChange: (direction: Direction) => void
}
```

### TriggerOption

```ts
{
  // Whether when overlapped elements and switch visible classes when first time only
  once: false,
  offset: {
    // viewport trigger position offset
    viewport: {
        x: (trigger: Trigger, rect: ClientRect, direction: Direction) => 0,
        y: (trigger: Trigger, rect: ClientRect, direction: Direction) => 0,
    },
    // element trriger position offset
    element: {
        x: (trigger: Trigger, rect: ClientRect, direction: Direction) => 0,
        y: (trigger: Trigger, rect: ClientRect, direction: Direction) => 0,
    }
  },
  toggle: {
    class: {
        // default is ["visible"]
        in: string[],
        // default is ["invisible"]
        out: string[]
    },
    callback: {
        in: () => { },
        out: () => { },
    }
  }
}
```

---

<a id="preview"></a>

## Preview

When scrolling and overlapping, the class specified ```( toggle.class.in ): string[]``` will be given after 500 msec.

<div>
  <BrowserOnly>{
    (()=>{
      useEffect(() => {
        (async () => {
            const { ScrollTrigger, delay } = await import("doppio");
            const triggerHandler = new ScrollTrigger({});
            triggerHandler.add(document.querySelectorAll(".scroll-trigger"), {
            once: false,
            offset: {
                element: {
                    x: () => 0,
                    y: () => 0
                },
                viewport: {
                    x: () => 0,
                    y: (trigger) => trigger.visible ? 0 : 0.2
                }
            },
            toggle: {
                class: {
                    in: ["yellow"],
                    out: ["cyan"]
                },
                callback: {
                    in: () => delay(500),
                    out: () => delay(500)
                }
            },
            });
        });
      }, []);
      return (
        <div>
          <div className="row flex-column" style={{height:"1480px"}}>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
            <div className="scroll-trigger pa-3" style={{height:"80px"}}>
              Trigger
            </div>
          </div>
        </div>
      );
    })()
  }</BrowserOnly>
</div>