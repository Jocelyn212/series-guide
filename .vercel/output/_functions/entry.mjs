import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cz4QXI7g.mjs';
import { manifest } from './manifest_DvVBumXB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/add-analysis.astro.mjs');
const _page3 = () => import('./pages/admin/add-serie.astro.mjs');
const _page4 = () => import('./pages/admin/manage-analysis.astro.mjs');
const _page5 = () => import('./pages/admin/manage-series.astro.mjs');
const _page6 = () => import('./pages/admin/update-images.astro.mjs');
const _page7 = () => import('./pages/admin.astro.mjs');
const _page8 = () => import('./pages/analisis.astro.mjs');
const _page9 = () => import('./pages/api/analysis.astro.mjs');
const _page10 = () => import('./pages/api/auth.astro.mjs');
const _page11 = () => import('./pages/api/series.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/series/_slug_.astro.mjs');
const _page14 = () => import('./pages/series.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.1_@types+node@24.0.7_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.1_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/add-analysis.astro", _page2],
    ["src/pages/admin/add-serie.astro", _page3],
    ["src/pages/admin/manage-analysis.astro", _page4],
    ["src/pages/admin/manage-series.astro", _page5],
    ["src/pages/admin/update-images.astro", _page6],
    ["src/pages/admin/index.astro", _page7],
    ["src/pages/analisis.astro", _page8],
    ["src/pages/api/analysis.ts", _page9],
    ["src/pages/api/auth.ts", _page10],
    ["src/pages/api/series.ts", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/series/[slug].astro", _page13],
    ["src/pages/series.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "33686be8-b704-434d-80ad-0ec4b01e1c02",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
