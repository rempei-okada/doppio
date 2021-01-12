module.exports = {
    title: "Doppio Design",
    tagline: "Light Weight and Modern web design frame work",
    baseUrl: "/doppio/",
    url: "https://rempei-okada.github.io",
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "rempei-okada",
    projectName: "doppio",
    themeConfig: {
        navbar: {
            title: "Doppio Design",
            logo: {
                alt: "Doppio design Logo",
                src: "img/doppio-icon.png",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/rempei-okada/doppio",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Built with 💛 by Rempei Okada.`,
        },
    },
    plugins: [
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/rempei-okada/doppio/tree/master/docs/docs",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
