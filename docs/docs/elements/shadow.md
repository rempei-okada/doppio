---
title: Shadow
sidebar_label: Shadow
slug: /shadow
---

import { useState } from "react";

The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.
There is a total of 25 elevation levels. You can set an element's elevation by using the class `elevation-{n}`,
where `n` is a integer between 0-24 corresponding to the desired elevation.

<div style={{width:"120px",height:"120px"}} className={"shadow-5 ma-3 d-flex align-center justify-center my-12"} >
    shadow-5
</div>

```html
<div class="shadow-4">Element</div>
```

## Play Glound

<div class="d-flex flex-wrap my-12">
{
    (() => {
        const [shadow, setShadow] = useState(1);
        return (
            <div class="ml-6">
                <input class="slider tooltip cyan-text" type="range" min="0" max="12" value={shadow} onInput={e=>setShadow(e.target.value)} />
                <div style={{width:"120px",height:"120px"}} className={"shadow-" + shadow + " mt-6 ma-3 d-flex align-center justify-center"} >
                    shadow-{shadow}
                </div>
            </div>
        );
    })()
}
</div>

<div class="d-flex flex-wrap mb-12">
{[...Array(13).keys()].map(x=>
    <div style={{width:"120px",height:"120px"}} className={"shadow-" + x + " ma-3 d-flex align-center justify-center"} >
        shadow-{x}
    </div>
)}
</div>