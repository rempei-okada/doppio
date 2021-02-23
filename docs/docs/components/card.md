---
title: Card
sidebar_label: Card
slug: /card
---

Cards are flexible content containers.

<div class="container my-5">
    <div class="row">
        <div class="column col-4 col-xs-12 pa-2">
            <div class="card">
                <div class="card-image">
                    <img
                        class="img-responsive"
                        src="/img/docs/lake.jpg"
                    />
                </div>
                <div class="card-header px-6 pt-3">
                    <h3 class="card-title">TypeScript</h3>
                    <div class="card-subtitle gray-text">
                        programinng language
                    </div>
                </div>
                <div class="card-body px-6">
                    TypeScript is an open-source programming language developed and maintained by Microsoft. 
                </div>
                <div class="card-footer px-6 pb-6">
                    <div class="btn-group btn-group-block">
                        <a class="btn cyan" href="https://github.com/microsoft/TypeScript" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

Add a container element with the ```card``` class. And add child elements with the ```card-image```, ```card-header```, ```card-body``` and/or ```card-footer``` classes. The ```card-image``` can be placed in any position.

```html
<div class="card shadow-{depth}">
  <div class="card-image">
    <img src="img/osx-el-capitan.jpg" class="img-responsive">
  </div>
  <div class="card-header">
    <div class="card-title h5">...</div>
    <div class="card-subtitle text-gray">...</div>
  </div>
  <div class="card-body">
    ...
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">...</button>
  </div>
</div>
```

---

## Outlined

<div class="container my-5">
    <div class="row">
        <div class="column col-4 col-xs-12 pa-2">
            <div class="card outlined">
                <div class="card-header">
                    <div class="card-title h5">C#</div>
                    <div class="card-subtitle text-gray">
                        Programinng language
                    </div>
                </div>
                <div class="card-image">
                    <img
                        class="img-responsive"
                        src="/img/docs/lake.jpg"
                        alt="OS X Yosemite"
                    />
                </div>
                <div class="card-body">
                    Multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented and component-oriented programming disciplines.
                </div>
                <div class="card-footer">
                    <div class="btn-group btn-group-block">
                        <a class="btn cyan" href="https://github.com/dotnet/csharplang" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

Add a container element with the ```card``` class. 

```html
<div class="card outlined">
  <div class="card-image">
    <img src="img/osx-el-capitan.jpg" class="img-responsive">
  </div>
  <div class="card-header">
    <div class="card-title h5">...</div>
    <div class="card-subtitle text-gray">...</div>
  </div>
  <div class="card-body">
    ...
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">...</button>
  </div>
</div>
```