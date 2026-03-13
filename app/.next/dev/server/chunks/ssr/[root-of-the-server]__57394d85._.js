module.exports = [
"[project]/Documents/code/webdev/weibozhang-v3/app/icon.svg.mjs { IMAGE => \"[project]/Documents/code/webdev/weibozhang-v3/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/app/icon.svg.mjs { IMAGE => \"[project]/Documents/code/webdev/weibozhang-v3/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/opengraph-image.png.mjs { IMAGE => \"[project]/Documents/code/webdev/weibozhang-v3/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/app/opengraph-image.png.mjs { IMAGE => \"[project]/Documents/code/webdev/weibozhang-v3/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Documents/code/webdev/weibozhang-v3/lib/blog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const BLOG_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "contents/blog");
function getAllPosts() {
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(BLOG_DIR).filter((f)=>f.endsWith(".mdx"));
    return files.map((file)=>{
        const source = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BLOG_DIR, file), "utf-8");
        const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source);
        const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return {
            slug,
            fileName: file.replace(".mdx", ""),
            title: data.title,
            date: data.date,
            description: data.description,
            published: data.published
        };
    }).filter((post)=>post.published !== false).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
}
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/lib/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$mynaui$2b$icons$2d$react$40$0$2e$4$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$ChevronLeft$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/@mynaui+icons-react@0.4.2_react@19.2.3/node_modules/@mynaui/icons-react/dist/esm/icons/ChevronLeft.js [app-rsc] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])().find((p)=>p.slug === slug);
    if (!post) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { default: Post, frontmatter } = await __turbopack_context__.f({
        "@/contents/blog/2023-09-08.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-08.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-08.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-09.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-09.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-09.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-11.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-11.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-11.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-14.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-14.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-14.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-18.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-18.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-18.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-25.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-25.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-25.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-09-28.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-28.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-09-28.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-10-01.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-01.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-01.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-10-03.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-03.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-03.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-10-23.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-23.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-23.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-10-30.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-30.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-10-30.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2023-11-13.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-11-13.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2023-11-13.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2024-05-22.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-05-22.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-05-22.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2024-05-26.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-05-26.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-05-26.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2024-06-06.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-06.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-06.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2024-06-12.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-12.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-12.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2024-06-30.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-30.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2024-06-30.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/contents/blog/2026-03-02.mdx": {
            id: ()=>"[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2026-03-02.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Documents/code/webdev/weibozhang-v3/contents/blog/2026-03-02.mdx.tsx [app-rsc] (ecmascript, async loader)")
        }
    }).import(`@/contents/blog/${post.fileName}.mdx`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/blog",
                className: " flex items-center text-muted-foreground  underline-offset-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$mynaui$2b$icons$2d$react$40$0$2e$4$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$ChevronLeft$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "stroke-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    "Back to Blogs"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: frontmatter.title
            }, void 0, false, {
                fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: frontmatter.date
            }, void 0, false, {
                fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Post, {}, void 0, false, {
                fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__57394d85._.js.map