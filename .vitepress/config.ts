import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Algo Visualizer Tutorial",
  description:
    "Hands-on guide to the visual API (Pyodide, snapshots, watchables).",
  srcDir: "./docs",
  base: "/tutorial/",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/introduction" },
      {
        text: "Reference",
        link: "https://algo-visualizer.github.io/docs/visual.html",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Quick Start", link: "/guide/quick-start" },
            { text: "Snapshots & Breakpoints", link: "/guide/snapshots" },
            { text: "Watching Data Structures", link: "/guide/watchables" },
            { text: "Graph/Nodes Visualization", link: "/guide/nodes" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            {
              text: "API Surface",
              link: "https://algo-visualizer.github.io/docs/visual.html",
            },
            { text: "Common Patterns", link: "/reference/patterns" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/algo-visualizer" },
    ],
  },
});
