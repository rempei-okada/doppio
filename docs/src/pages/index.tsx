import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import "./style.css";
import { animate, ScrollTrigger, delay } from "doppio";

export default function () {
    return (
        <Home />
    );
}

function Home() {
    useEffect(() => {
        (async () => {
            const trigger = new ScrollTrigger({});
            trigger.add(document.querySelectorAll("[data-trigger]") as any, {
                once: true,
                offset: {
                    element: {
                        x: () => 0,
                        y: () => 0
                    },
                    viewport: {
                        x: () => 0,
                        y: () => 0
                    }
                },
                toggle: {
                    class: {
                        in: ["visible", "test"],
                        out: ["invisible", "test"]
                    },
                    callback: {
                        in: () => { },
                        out: () => delay(10)
                    }
                },
            });

            await animate(document.documentElement, "opacity", "1", 600);
            document.querySelectorAll(".opening-animation").forEach(x => x.classList.add("is-show"));
        })();
    }, []);

    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main className="doppio toppage">
                <article className="title-section strech d-flex flex-column justify-center align-center  ma-auto">
                    <section className="d-flex flex-column justify-center align-center ma-auto">
                        <img src="img/doppio.png" height="240" alt="doppio logo" />
                        <p className="hero__subtitle px-4">{siteConfig.tagline}</p>

                        <section className="mt-12 d-flex" style={{ height: "60px" }}>
                            <div className="opening-animation top-button">
                                <Link
                                    className={clsx(
                                        'btn shadow-2',
                                    )}
                                    target="_blank"
                                    style={{ background: "#539da7" }}
                                    to={useBaseUrl('docs/')}>
                                    Docs
                                </Link>
                            </div>

                            <div className="opening-animation ml-2 top-button" style={{ transitionDelay: "0.4s" }}>
                                <a className="btn shadow-2" href="https://github.com/rempei-okada/doppio" target="_blank"
                                    style={{ background: "#77aca2" }}>Github</a>
                            </div>

                            <div className="opening-animation top-button" style={{ transitionDelay: "0.8s" }}>
                                <a className="btn shadow-2 ml-2" style={{ background: "#9dbebb" }}>Quick Start</a>
                            </div>
                        </section>
                    </section>
                </article>

                {/* Cards */}
                <article className="strech-x cream lighten-5 mt-auto">
                    <article className="container d-flex flex-column" style={{ maxWidth: "1280px" }}>
                        <section className="row ma-auto strech-x pa-3 mt-8" style={{ minHeight: "240px", transitionDelay: "0.2s" }}>
                            <div className="column col-3 col-sm-6 pa-3 opening-animation top-card">
                                <div className="card shadow-6 ">
                                    <div className="card-header">
                                        <div className="font-lg mint-text text-truncate font-bold">Light Weight</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Standard
                                        </div>
                                        <div className="font-xs mt-3 gray-text">Script bundle size of ~0KB</div>
                                        <div className="font-xs mt-3 gray-text">CSS bundle size of ~60KB</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(122, 108, 87)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Full
                                        </div>
                                        <div className="font-xs mt-3 gray-text">Script bundle size of ~20KB</div>
                                        <div className="font-xs mt-3 gray-text">CSS bundle size of ~60KB</div>
                                        <div className="font-xs mt-3 gray-text">Color pack CSS bundle size of ~50KB</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-3 col-sm-6 pa-3 opening-animation top-card" style={{ transitionDelay: "0.6s" }}>
                                <div className="card shadow-6">
                                    <div className="card-header">
                                        <div className="font-lg mint-text text-truncate font-bold">Feature</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Resopnsive
                                        </div>
                                        <div className="font-sm mt-3 gray-text">・ Flexbox based responsive mobile friendly layout</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Flexible
                                        </div>
                                        <div>・ Easy customization with a small amount of code</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-3 col-sm-6 pa-3 opening-animation top-card" style={{ transitionDelay: "1s" }}>
                                <div className="card shadow-6">
                                    <div className="card-header">
                                        <div className="font-lg mint-text text-truncate font-bold">Modern</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Simple
                                        </div>
                                        <div className="font-sm mt-3 gray-text">Faster and extensible develop since designed for simple implementation</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Reliability
                                        </div>
                                        <div className="font-sm mt-3 gray-text">Script part is made robust using TypeScript.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-3 col-sm-6 pa-3 opening-animation top-card" style={{ transitionDelay: "0.8s" }}>
                                <div className="card shadow-6">
                                    <div className="card-header">
                                        <div className="font-lg mint-text text-truncate font-bold">Clean</div>
                                        <div
                                            style={{ borderLeft: "4px solid rgb(117, 84, 71)" }}
                                            className="font-sm pl-3 mt-3"
                                        >
                                            Coexistence with other frameworks
                                        </div>
                                        <div className="font-sm mt-3 gray-text">Setup of styles for a clean starting point.Doppio is good for building websites, not web apps, so it's designed to keep other libraries and frameworks clean.</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Features */}
                    <article className="text-center mt-12">
                        <h1>Features</h1>
                        <section className="text-left max-width-sm ma-auto pa-7 mb-12 mt-4 d-flex flex-column justify-start">
                            <div className="my-12 pl-12" style={{ borderLeft: "6px solid rgb(119, 91, 79)" }} data-trigger>
                                <p>Lightweight, responsive, powerful and modern web design frame
                                work.
                                </p>
                                <p>
                                    Consists of pure CSS part and
                                    script-dependent part.
                                </p>
                            </div>

                            <div className="my-12 pl-12 " style={{ borderLeft: "6px solid rgb(204, 182, 141)" }} data-trigger>
                                <p >
                                    Most core features are built entirely with CSS, but can be made even more powerful by
                                    loading
                            scripts.</p>
                            </div>

                            <div className="my-12 pl-12" style={{ borderLeft: "6px solid rgb(86, 67, 50)" }} data-trigger>
                                <p >
                                    Doppio provides basic styles for typography and elements, flexbox based responsive layout
                                    system,
                                    pure CSS components and utilities with best practice coding and consistent design language.
                                </p>
                            </div>

                            <div className="my-12 pl-12" style={{ borderLeft: "6px solid rgb(117, 105, 96)" }} data-trigger>
                                <p>
                                    Specially designed for better performance and higher productivity with fewer properties to
                                    reset
                                    resulting in cleaner div.
                        </p>
                                <p >
                                    If you load a script, it will provide even more powerful utility functions and components.
                        </p>
                            </div>
                        </section>
                    </article>

                    {/* Overreview */}

                    <article className="container my-12" style={{ maxWidth: "800px" }} data-trigger>
                        <section className="row">
                            <div className="column" />
                            <h2 className="column">Overview</h2>
                            <div className="column" />
                        </section>

                        {/* Loader */}
                        <section className="row">
                            <div className="column col-6 col-sm-12 pa-2">
                                <progress className="progress" value="25" max="100"></progress>
                                <progress className="progress cyan-text" value="70" max="100"></progress>
                                <progress className="progress deep-orange-text" style={{ animationDelay: "0.02s" }} max="100"></progress>
                            </div>
                            <div className="column col-6 col-sm-12 pa-2">
                                <svg className="circular cyan-text" style={{ height: "60px", width: "60px" }}>
                                    <circle />
                                </svg>
                                <svg className="circular teal-text" style={{ height: "60px", width: "60px" }}>
                                    <circle />
                                </svg>
                                <svg className="circular lime-text" style={{ height: "60px", width: "60px" }}>
                                    <circle />
                                </svg>
                            </div>
                        </section>

                        {/* Buttons */}
                        <section className="row mt-4">
                            <div className="column col-6 col-sm-12 pa-2">
                                <button className="btn cyan xl ma-2">X Large</button>
                                <button className="btn yellow foreground-5 lg ma-2">Large</button>
                                <button className="btn lime ma-2">Normal</button>
                                <button className="btn pink sm ma-2">Small</button>
                                <button className="btn orange xs ma-3">X Small</button>
                                <button className="btn deep-purple ma-2 block">Blocked</button>
                            </div>
                            <div className="column col-6 col-sm-12 pa-2">
                                <button className="btn yellow rounded foreground-1 ma-2">Default Button</button>
                                <button className="btn pink rounded ma-2">Button Color</button>
                                <button className="btn orange-text outlined ma-2">Default Button</button>
                                <button className="btn indigo-text outlined  ma-2">Button Color</button>

                                <div className="d-flex mt-4">
                                    <div className="radio purple-text">
                                        <input id="r1" type="radio" name="g" />
                                        <label htmlFor="r1">
                                            <span>Option 1</span>
                                        </label>
                                    </div>
                                    <div className="radio purple-text">
                                        <input id="r2" type="radio" name="g" />
                                        <label htmlFor="r2">
                                            <span>Option 2</span>
                                        </label>
                                    </div>
                                    <div className="radio purple-text">
                                        <input id="r3" type="radio" name="g" />
                                        <label htmlFor="r3">
                                            <span>Option 3</span>
                                        </label>
                                    </div>
                                    <div className="radio purple-text">
                                        <input id="r4" type="radio" name="g" />
                                        <label htmlFor="r4">
                                            <span>Option 4</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Buttons */}
                        <section className="row mt-4">
                            <div className="column col-6 col-sm-12 pa-2">
                                <span className="chip teal">C#</span>
                                <span className="chip chip-text blue-text outlined">C++</span>
                                <span className="chip">
                                    Rust
                                </span>
                                <span className="chip lime">
                                    Haskell
                                </span>
                                <div className="chip">
                                    <figure className="avatar" data-initial="P"></figure>
                                    Python
                                </div>

                                <div>
                                    <label className="checkbox red-text ma-2">
                                        <input type="checkbox" />
                                        <span>Red</span>
                                    </label>
                                    <label className="checkbox orange-text  ma-2" >
                                        <input type="checkbox" />
                                        <span>Orange</span>
                                    </label>
                                    <label className="checkbox yellow-text  ma-2" >
                                        <input type="checkbox" checked />
                                        <span>Yellow Checled</span>
                                    </label>
                                    <label className="checkbox lime-text  ma-2" >
                                        <input type="checkbox" />
                                        <span>Lime</span>
                                    </label>
                                </div>
                            </div>
                            <div className="column col-6 col-sm-12 pa-2">
                                <input className="slider lime-text" type="range" min="0" max="100" />
                                <input className="slider cyan-text mt-3" type="range" min="0" max="100" />
                                <input className="slider pink-text mt-3" type="range" min="0" max="100" />
                            </div>
                        </section>

                        {/* Buttons */}
                        <section className="row mt-4">
                            <div className="column col-6 col-sm-12 pa-2">
                                <div className="bg1 my-5">
                                    <div className="toggle-switch">
                                        <input id="toggle" className="toggle-input" type="checkbox" />
                                        <label htmlFor="toggle" className="toggle-label orange-text" />
                                    </div>
                                </div>

                                <div className="toggle-switch">
                                    <input id="toggle" className="toggle-input" type="checkbox" />
                                    <label htmlFor="toggle" className="toggle-label green-text" />
                                </div>

                                <div className="text-field solo white mt-4">
                                    <input placeholder="Placeholder" />
                                </div>

                                <ul className="stepper purple-text my-12">
                                    <li className="stepper-item">
                                        <a className="tooltip" data-tooltip="Step 1">Step 1</a>
                                    </li>
                                    <li className="stepper-item active ">
                                        <a className="tooltip" data-tooltip="Step 2">Step 2</a>
                                    </li>
                                    <li className="stepper-item">
                                        <a className="tooltip" data-tooltip="Step 3">Step 3</a>
                                    </li>
                                    <li className="stepper-item">
                                        <a className="tooltip" data-tooltip="Step 4">Step 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="column col-6 col-sm-12 pa-2">
                                <input placeholder="Placeholder" />
                                <label className="text-field cyan-text mt-4">
                                    <input placeholder="Placeholder" />
                                    <span>Textfield</span>
                                </label>

                                <textarea className="mt-4" placeholder="Text Area" />
                                <label className="text-field cyan-text mt-4">
                                    <textarea placeholder="Text Area" />
                                    <span>Textfield</span>
                                </label>
                            </div>
                        </section>
                    </article>

                    <h2 className="text-center mint-text my-12" data-trigger>There are various other Components and Features !</h2>

                    {/* Getting Standards */}
                    <article className="mt-12 d-flex flex-column align-center">
                        <h2 data-trigger>Getting Standard</h2>
                        <section className="container text-center" >
                            <h3 data-trigger className="mb-5 mint-text mx-auto">Install with CDN</h3>
                            <section className="row">
                                <section data-trigger className="col-12">
                                    <h5 className="mt-4 text-center">Full | Script and CSS</h5>
                                    <p>Includes CSS and Javascript so you do not have to load css or anything else</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<link rel="stylesheet" href="https://unpkg.com/doppio/dist/doppio.js"/>`}
                                    </div>
                                </section>
                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">Standard | CSS </h5>
                                    <p>When using as Pure CSS as standard version</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<link rel="stylesheet" href="https://unpkg.com/doppio/dist/doppio-css.css"/>`}
                                    </div>
                                </section>
                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">Standard | Script </h5>
                                    <p>When you need additional script as full version</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<link rel="stylesheet" href="https://unpkg.com/doppio/dist/doppio-js.js"/>`}
                                    </div>
                                </section>
                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">Standard | Script </h5>
                                    <p>If you want to support old browser, remove all scripts and add this and pure css part</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<link rel="stylesheet" href="https://unpkg.com/doppio/dist/doppio.oldbrowser.js"/>`}
                                    </div>
                                </section>
                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">Addon | Color Pack </h5>
                                    <p>If you want to support old browser (IE, etc.)</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<link rel="stylesheet" href="https://unpkg.com/doppio/dist/doppio-colorpack.css"/>`}
                                    </div>
                                </section>
                            </section>
                        </section>

                        <section className="container text-center mt-8" >
                            <h3 data-trigger className="mb-5 mint-text mx-auto">Install with package manager</h3>
                            <section className="row">
                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">npm</h5>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        $ npm install --save doppio
                                        </div>
                                </section>

                                <section data-trigger className="col-6 col-sm-12">
                                    <h5 className="mt-4 text-center">yarn</h5>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        $ yarn add doppio
                                        </div>
                                </section>
                            </section>

                            <section className="row">
                                <section data-trigger className="col-12">
                                    <h5 className="mt-4 text-center">CSS</h5>
                                    <p>You sould import in your source</p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`import "doppio/dist/doppio-css.css";`}
                                    </div>
                                </section>

                                <section data-trigger className="col-12">
                                    <h5 className="mt-4 text-center">With Scripts</h5>
                                    <p>
                                        If you import it somewhere in your source, it includes CSS and Javascript so you don't have to load css file or anything else
                                    </p>
                                    <div className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        import "doppio";
                                    </div>
                                </section>
                            </section>

                            <section className="row mt-12">
                                <div className="column col-12">
                                    <h3 data-trigger className="mb-5 mint-text mx-auto">Let's display the button !!</h3>
                                    <div data-trigger className="pa-3 mt-6 code" style={{ display: "block" }}>
                                        {`<button className="btn cyan ml-3">Button Color</button>`}
                                    </div>
                                    <div data-trigger >
                                        <button className="btn cyan mt-5">Button Color</button>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </article>

                    <div className="my-12" style={{ height: "60px" }} />
                    <div className="my-12 d-flex justify-center" style={{ height: "240px" }}>
                        <div data-trigger className="text-center">
                            <Link
                                className={clsx(
                                    'btn shadow-2 xl',
                                )}
                                target="_blank"
                                style={{ background: "#53927a" }}
                                to={useBaseUrl('docs/')}>
                                Docs
                            </Link>
                        </div>
                        <div data-trigger className="ml-4" style={{ transitionDelay: "0.4s" }}>
                            <a className="btn shadow-2 xl" href="https://github.com/rempei-okada/doppio" target="_blank"
                                style={{ background: "#9dbebb" }}>Github</a>
                        </div>
                    </div>
                    <div className="my-12" />
                </article>
            </main >
        </Layout >
    );
}
