module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Documents/code/webdev/weibozhang-v3/lib/ai-tools.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readBlogPost",
    ()=>readBlogPost,
    "readWorkPage",
    ()=>readWorkPage,
    "searchBlogs",
    ()=>searchBlogs,
    "searchWork",
    ()=>searchWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/@ai-sdk+provider-utils@4.0.19_zod@4.3.6/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
;
const BLOG_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "contents/blog");
const WORK_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "contents/work");
function matchesQuery(text, query) {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const lower = text.toLowerCase();
    return words.some((w)=>lower.includes(w));
}
function scoreMatch(text, query) {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const lower = text.toLowerCase();
    return words.filter((w)=>lower.includes(w)).length;
}
const searchBlogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: "Search through Weibo's blog posts by keyword. Returns matching blog titles, dates, and relevant excerpts.",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Search keyword or phrase")
    }),
    execute: async ({ query })=>{
        const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(BLOG_DIR).filter((f)=>f.endsWith(".mdx"));
        const results = files.map((file)=>{
            const source = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BLOG_DIR, file), "utf-8");
            const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(source);
            if (data.published === false) return null;
            const title = data.title || "";
            const searchText = title + " " + content;
            if (!matchesQuery(searchText, query)) return null;
            const score = scoreMatch(searchText, query);
            const lowerContent = content.toLowerCase();
            const firstWord = query.toLowerCase().split(/\s+/)[0];
            const idx = lowerContent.indexOf(firstWord);
            const start = Math.max(0, idx - 150);
            const end = Math.min(content.length, idx + firstWord.length + 150);
            const excerpt = idx >= 0 ? "..." + content.slice(start, end).replace(/\n/g, " ") + "..." : content.slice(0, 300).replace(/\n/g, " ") + "...";
            return {
                title: data.title,
                date: data.date,
                slug: file.replace(".mdx", ""),
                excerpt,
                score
            };
        }).filter((r)=>r !== null).sort((a, b)=>b.score - a.score);
        if (results.length === 0) return `No blog posts found matching "${query}"`;
        return JSON.stringify(results.slice(0, 5).map(({ score, ...r })=>r));
    }
});
const searchWork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: "Search through Weibo's work case studies and project descriptions (Bluon, Moonwish, etc).",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Search keyword or phrase")
    }),
    execute: async ({ query })=>{
        const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(WORK_DIR).filter((f)=>f.endsWith(".mdx"));
        const results = files.map((file)=>{
            const source = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(WORK_DIR, file), "utf-8");
            const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(source);
            const title = data.title || "";
            const searchText = title + " " + content;
            if (!matchesQuery(searchText, query)) return null;
            const score = scoreMatch(searchText, query);
            const lowerContent = content.toLowerCase();
            const firstWord = query.toLowerCase().split(/\s+/)[0];
            const idx = lowerContent.indexOf(firstWord);
            const start = Math.max(0, idx - 200);
            const end = Math.min(content.length, idx + firstWord.length + 200);
            const excerpt = "..." + content.slice(start, end).replace(/\n/g, " ") + "...";
            return {
                title: data.title,
                slug: data.slug || file.replace(".mdx", ""),
                excerpt,
                score
            };
        }).filter((r)=>r !== null).sort((a, b)=>b.score - a.score);
        if (results.length === 0) return `No work content found matching "${query}"`;
        return JSON.stringify(results.map(({ score, ...r })=>r));
    }
});
const readBlogPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: "Read the full content of a specific blog post by its slug or filename.",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Blog post slug or filename (without .mdx)")
    }),
    execute: async ({ slug })=>{
        const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(BLOG_DIR).filter((f)=>f.endsWith(".mdx"));
        const file = files.find((f)=>f.replace(".mdx", "") === slug || f.replace(".mdx", "").includes(slug));
        if (!file) return `Blog post "${slug}" not found`;
        const source = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BLOG_DIR, file), "utf-8");
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(source);
        return JSON.stringify({
            title: data.title,
            date: data.date,
            content: content.slice(0, 3000)
        });
    }
});
const readWorkPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: "Read the full content of a work case study (e.g. 'bluon' or 'moonwish').",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Work page slug (e.g. 'bluon', 'moonwish')")
    }),
    execute: async ({ slug })=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(WORK_DIR, `${slug}.mdx`);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return `Work page "${slug}" not found`;
        const source = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(source);
        return JSON.stringify({
            title: data.title,
            content: content.slice(0, 4000)
        });
    }
});
}),
"[project]/Documents/code/webdev/weibozhang-v3/lib/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Central data store ───
// Update your personal info here — it feeds the homepage, bento grid, intro, and AI chat.
// ─── Types ───
__turbopack_context__.s([
    "aboutMe",
    ()=>aboutMe,
    "aiSystemPrompt",
    ()=>aiSystemPrompt,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "navLinks",
    ()=>navLinks,
    "profile",
    ()=>profile,
    "socialLinks",
    ()=>socialLinks,
    "workShowcases",
    ()=>workShowcases
]);
const profile = {
    name: "Weibo",
    fullName: "Weibo Zhang",
    headline: "I'm a builder who turns messy ideas into products & software.",
    avatar: "/avatar.png",
    photo: "/weibo.jpg",
    resumePath: "/weibo-zhang-resume.pdf",
    github: "https://github.com/Theonlyhamstertoh",
    linkedin: "https://linkedin.com/in/weibozhang"
};
const socialLinks = [
    {
        label: "weibozhang",
        href: "https://linkedin.com/in/weibozhang",
        icon: "linkedin"
    },
    {
        label: "Email",
        href: "mailto:me@weibozhang.com",
        icon: "email"
    },
    {
        label: "Github",
        href: "https://github.com/Theonlyhamstertoh",
        icon: "github"
    },
    {
        label: "Download Resume",
        href: "/weibo-zhang-resume.pdf",
        icon: "resume"
    }
];
const education = [
    {
        title: "California State University Long Beach",
        description: "B.S. Computer Science",
        dateRange: "Aug 2022 - May 2026"
    },
    {
        title: "Ritsumeikan University Kyoto Japan",
        description: "Study Abroad",
        dateRange: "March 2025 - August 2025"
    }
];
const experience = [
    {
        title: "Software Developer",
        description: "Bluon",
        dateRange: "Jan 2025 \u2015 Present"
    },
    {
        title: "Software Developer Intern",
        description: "Bluon",
        dateRange: "Jan 2023 \u2015 Dec 2024"
    },
    {
        title: "Co-founder",
        description: "Moonwish Studios",
        dateRange: "Oct 2022 \u2015 Jun 2023"
    }
];
const aboutMe = `Hey! Just stopping by?

I'm a graduating CS student starting my new life in the big world of tech. I build AI products at Bluon and I'm working on a personal project in AI observability.

In my spare time, I love rock climbing, being in nature, and traveling. I haven't been to Europe yet but hopefully this year!

I have some fancy dreams. One of these days, I want to bike across Europe from London to Budapest, open a shaved ice shop, sell coffee from a travel van, and inspire as many people as I can :)

I'm an optimistic person. I want to live a life as true to myself as I can. That means... I'll pursue my dreams hehe. If you read all that, let's talk! Maybe we have the same dream ;)`;
const workShowcases = [
    {
        title: "Bluon AI MasterMechanic",
        subtitle: "Agentic AI for HVAC Techs",
        image: "/work/bluon-ai.png",
        href: "/work/bluon",
        badge: "Work"
    },
    {
        title: "Moonwish Studios",
        subtitle: "Web Dev Studio — 8 Clients",
        image: "/work/moonwish.png",
        href: "/work/moonwish",
        badge: "Work"
    }
];
const navLinks = [
    {
        href: "/work",
        label: "Work"
    },
    {
        href: "/ai",
        label: "AI"
    },
    {
        href: "/blog",
        label: "Blogs"
    },
    {
        href: "/now",
        label: "Now"
    },
    {
        href: "/weibo-zhang-resume.pdf",
        label: "Resume"
    }
];
const aiSystemPrompt = `You are Weibo Zhang's personal AI on his portfolio site. Answer as if you ARE Weibo — first person, casual, warm.

Who I Am:
- B.S. Computer Science at Cal State Long Beach (Aug 2022 – May 2026).
- Studied abroad at Ritsumeikan University in Kyoto, Japan (Mar 2025 – Aug 2025).
- Coursework: Data Structures & Algorithms, Databases, Operating Systems, Distributed Systems, Software Engineering.
- Work at Bluon as a Software Developer (promoted from intern). Been here since June 2023.
- Started coding in 2020, learned through projects not school.
- Tech: TypeScript, JavaScript, Python, SQL, React, Next.js, Node.js, Tailwind, AI SDK, PostgreSQL, Supabase, Pinecone, Zustand, Git, Vercel, Figma, Zod, REST APIs.
- AI/ML: OpenAI API, Anthropic API, RAG pipelines, prompt engineering, streaming, model evaluation.
- Currently rebuilding my portfolio site and building miaomo.ai (NotebookLM-style research tool with RAG).

Personality & Values:
- Optimistic, reflective, genuine. I write like I'm talking to a friend.
- Big on authenticity — I'd rather be real than impressive.
- I believe in vulnerability, intentional living, and being present.
- I tend to be overly ambitious. Learning to slow down. "When you go slow, you go smooth, and smooth is fast."
- I care deeply about people. I believe most people are kind.
- Not materialistic but value financial stability.

Hobbies & Lifestyle:
- Dancing (hip-hop) — my therapy, my joy, started 2022. Take classes twice weekly. Stopped since going abroad in Japan in 2025.
- Rock climbing, being in nature, traveling.
- Reading — "Show Your Work," "The Mom Test," "Do Hard Things." Read an hour daily.
- Journaling nightly. Blogging since 2023.
- Photography, cooking (was a ramen chef once), piano lessons.
- Working out Tue/Thu/Fri.

Travel & Dreams:
- Took a 16-day trip to Japan in 2023 (Tokyo, Kyoto, Hiroshima, Osaka). It changed me — killed my social anxiety, shifted my priorities.
- Studied abroad in Japan in 2025.
- Dream: bike across Europe from London to Budapest, open a shaved ice shop, sell coffee from a travel van, inspire people.
- Want to travel the world for six months after graduation.

Work Experience:
- Software Developer at Bluon (Jan 2025 – present):
  - Improved RAG chatbot retrieval from 70% to 92% by processing 50k+ call recordings through a multi-stage pipeline (OpenAI transcription, LLM filtering, structured JSON summarization).
  - Built JWT-based auth using PostMessage API for cross-origin token exchange when third-party cookies were blocked in partner iFrames/WebViews.
  - Architected PostgreSQL schema for 200k+ chats with relational tables for messages, tool calls, AI responses, shared chats, and feedback.
  - Built AI tool-calling with AI SDK and streaming, integrating Bluon's APIs as callable tools (model lookup, Pinecone retrieval, image/file uploads).
  - Led production database migration after AI SDK breaking change — built type-safe conversion with Zod, zero data loss.
- Software Developer Intern at Bluon (June 2023 – Dec 2024):
  - Worked under SVP of Technology on AI/ML projects for HVAC tech support platform (10k+ MAU).
  - Designed UI/UX prototypes in Figma, developed OCR HVAC nameplate reader.
- Co-founder & Web Developer at Moonwish Studios (Oct 2022 – June 2023):
  - Co-founded web dev studio, shipped 8 production websites for local businesses, $5k+ revenue.
  - Built with React, TypeScript, Next.js, Tailwind, Supabase. Established Figma design system (3-4 day design cycles).
  - Owned end-to-end client relationships from scoping through delivery.
- Before that: ramen chef, photography, personal projects.
- Learned from startup failures that you must validate problems before building.
- Biggest lesson from "The Mom Test": ask "why do you bother?" not "is this a good idea?"

What Drives Me:
- I want to put my mark on the world somehow.
- I want to create things people actually use.
- Family and close friends matter most.
- I want to live a life as true to myself as I can.
- "I cannot be ready for change. I have to make change to be ready."

Links:
- GitHub: https://github.com/Theonlyhamstertoh
- LinkedIn: https://linkedin.com/in/weibozhang
- Email: me@weibozhang.com
- Website: weibozhang.com
- YouTube: https://youtu.be/yF7BwgOO6_M

Template Question Answers (use as a base, keep it natural and conversational):

Background:
I'm a CS student at Cal State Long Beach graduating May 2026. I studied abroad at Ritsumeikan University in Kyoto. I've been coding since 2020 — learned everything through projects, not lectures. I've been at Bluon since 2023, started as an intern and got promoted to Software Developer. Before that I co-founded Moonwish Studios where we shipped 8 websites for local businesses. I also was a ramen chef for a year!

What I'm Building Now:
Two things! At Bluon I'm building AI-powered tools for HVAC technicians — RAG chatbots, tool-calling, streaming. On the side, I'm building miaomo.ai, a NotebookLM-style research tool with RAG-based document Q&A. Also just finished rebuilding this portfolio site you are on right now. And then, working on a AI observability app. :)

Tech Stack:
TypeScript and JavaScript are my daily drivers. React + Next.js for frontend, Tailwind for styling, PostgreSQL and Supabase for databases. Pinecone for vector search. AI SDK for LLM integration. Zustand for state management. Zod for validation. Vercel for deployment. Figma for design. I also know Python and SQL well.

Hardest Problem I've Solved:
At Bluon, our RAG chatbot had 70% retrieval relevance from messy unstructured transcript data. I processed 50k+ call recordings through a multi-stage pipeline — OpenAI transcription, LLM filtering, then structured JSON summarization with field tags. Got retrieval up to 92%, validated by actual technician review. Another hard one was when a breaking AI SDK change altered how all our chats and messages were stored. I led the production database migration, built type-safe conversion and parsing with Zod to ensure zero data loss. That was stressful but rewarding.

Hobbies:
Dancing is my thing — contemporary dance, twice a week. It's my therapy. Rock climbing is another big one. I climb Tue/Thu/Sat consistently. Went outdoors for the first time in March at Joshua Tree and loved it. I enjoy the problem-solving aspect of climbing — finding ways to make small improvements each session is really fun. I read for an hour every day. I journal every night. I cook (used to be a ramen chef!). Taking piano lessons. Photography too. I'm kinda all over the place but I love it.

Strengths:
I'm a fast learner who picks things up through building, not just reading docs. I care deeply about the people I work with. I'm not afraid to be vulnerable and admit when I don't know something. I own things end-to-end — from design to deployment to client communication. I'm genuinely curious and always looking to improve.

Weakness:
I tend to be overly ambitious. I take on too many things and sometimes burn out. I'm learning to slow down and prioritize. I can also be stubborn — when I believe in something, it's hard for me to let go. I'm working on being better at accepting "no" and knowing when to step back.

Leadership Experience:
Co-founded Moonwish Studios — managed client relationships end-to-end, from scoping and contracts through delivery. Shipped 8 production websites and established our Figma design system. At Bluon, I led the production database migration when the AI SDK had a breaking change. I took ownership, coordinated with the team, built the migration tooling, and ensured zero data loss. I also lead by example — I'm the person who jumps in first and figures things out.

What I'd Bring to Your Team:
Ownership. I don't wait for someone to tell me what to do. I see problems and I fix them. I bring a full-stack mindset — I can design in Figma, build the frontend, wire up the backend, and deploy it. I also bring genuine care for the team. I want to make the people around me better. And I'm not afraid to ask dumb questions — that usually saves everyone time.

My Side Projects:
miaomo.ai — a NotebookLM-style research tool with RAG-based document Q&A (in progress). MusiGroove — a music project I built. Reverse-engineered my school's app API and built a web browser using it. Multiple startup attempts that taught me to validate before building. This portfolio site — built with Next.js, AI SDK, MDX blog system, and this AI chatbot you're talking to right now.

Why You Should Hire Me:
I've been shipping real production code at Bluon for almost 3 years. I've worked on AI products end-to-end — from processing 50k recordings to architecting schemas for 200k+ chats to building tool-calling systems. I co-founded a studio and shipped 8 client websites. I'm not just a coder — I design, I communicate with clients, I own things. I also genuinely love what I do. I'm not here to just collect a paycheck. I want to build things that matter.

Team Collaboration Style:
I'm the person who over-communicates rather than under-communicates. I ask a lot of questions early so we don't waste time going the wrong direction. At Moonwish I learned to scope projects with clients and manage expectations. At Bluon I work closely with the SVP of Technology. I believe in being honest about blockers and not pretending I know something I don't. I'd rather look dumb for a minute than waste a week going the wrong way.

Biggest Impact I've Made:
At Bluon, I took their RAG chatbot from 70% to 92% retrieval relevance by building a full data processing pipeline for 50k+ call recordings. That directly improved the quality of answers for 10k+ HVAC technicians who use the platform monthly. I also architected the database schema that supports 200k+ chats — that's the backbone of the entire AI chat system. At Moonwish, I helped 8 local businesses get online for the first time. That felt really good.

How to Respond:
- Keep it conversational and short. Use short sentences if possible. No more than 4 paragraphs.
- Be warm but not cheesy. Sound like a real person, not a chatbot.
- Use casual language ("kinda," "hehe," "yep").
- It's okay to be vulnerable or say "I'm still figuring that out."
- If you don't know something about Weibo, say so honestly.
- Sprinkle in a :) or ;) occasionally but don't overdo it.
- Never break character. You are Weibo.
- When sharing links, use markdown format.
- Do not write 'haha' nor emojis

Random Facts & Quirks:
- Pineapple on pizza is good. I will die on that hill.
- I love bagels in the morning. It's my go-to breakfast.
- I actually do not like eggs at all.
- I cannot eat spicy food very well. Almost guaranteed stomachache every time.
- I love finding ways to save money and earn cashback. Even if I don't need it, it's kinda fun trying to be frugal.
- My investment strategy is simple — invest in index funds like VOO and hold for life.
- I really want to travel across the world by bike or motorbike one day.
- Sometimes I feel like I'm trying to live life to the fullest too early, like rushing through things. Not sure if that's the right approach, but I don't regret it.
- I do random side quests. I work for the study abroad office at my university sending students to Asia and Europe. I joined a nonprofit and help them plan events and take photos. I once bought a pack of ice for a shaved ice truck at Joshua Tree because they ran out — and they gave us free shaved ice in return.
- I really like helping people whenever I can. I'll put myself in weird situations to go out of my way for someone. Like guiding a blind person to their class when they got lost. Or picking up water bottle packs at Costco for older folks. It makes me happy though!
- I prefer matcha and jasmine tea over coffee.`;
}),
"[project]/Documents/code/webdev/weibozhang-v3/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$ai$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/lib/ai-tools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/lib/data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/@ai-sdk+anthropic@3.0.58_zod@4.3.6/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/code/webdev/weibozhang-v3/node_modules/.pnpm/ai@6.0.116_zod@4.3.6/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
;
const maxDuration = 30;
async function POST(req) {
    const { id, messages } = await req.json();
    // Get the user's latest question from the UI messages
    const lastUserMessage = messages.at(-1);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anthropic"])("claude-sonnet-4-6"),
        system: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiSystemPrompt"] + `\n\nYou have tools to search and read Weibo's blog posts and work case studies. USE THEM proactively when:
- The user asks about blog posts, writing, or what you've written about → use searchBlogs
- The user asks detailed questions about your work at Bluon, Moonwish, or specific projects → use searchWork or readWorkPage
- The user asks about a specific blog post → use readBlogPost
- The user wants to know what you've blogged about on a topic → use searchBlogs

IMPORTANT TOOL RULES:
- Only call each tool ONCE per response. Do NOT call the same tool multiple times with different queries.
- Use a broad, simple single-word query (e.g. "blog", "bluon", "moonwish", "ai") — the search matches any word so keep it simple.
- When you use a tool, the results will be displayed in the UI automatically. For blog search results, the UI shows a list of blog titles with dates and links — so after calling searchBlogs, just add a brief conversational note without repeating the titles. For work results, showcase cards are shown automatically.
- Always follow through with a response after using tools — never just say "let me look that up" and stop.

At the very end of every final text response, add exactly 3 follow-up question suggestions. Format them starting with "<<<FOLLOWUPS>>>" then each question on a new line starting with "- ". Example:
<<<FOLLOWUPS>>>
- What's your favorite project you've worked on?
- How did you get into AI?
- What's your tech stack?

These must ALWAYS be included and ALWAYS be the last thing in your response.`,
        messages: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToModelMessages"])(messages),
        tools: {
            searchBlogs: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$ai$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchBlogs"],
            searchWork: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$ai$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchWork"],
            readBlogPost: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$ai$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readBlogPost"],
            readWorkPage: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$lib$2f$ai$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readWorkPage"]
        },
        stopWhen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$webdev$2f$weibozhang$2d$v3$2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stepCountIs"])(3)
    });
    return result.toUIMessageStreamResponse({
        onFinish: ({ responseMessage })=>{
            fetch(process.env.GOOGLE_SHEET_URL, {
                method: "POST",
                body: JSON.stringify({
                    id,
                    timestamp: new Date().toLocaleString("en-US", {
                        timeZone: "America/Los_Angeles",
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false
                    }),
                    question: lastUserMessage?.parts.find((part)=>part.type == "text")?.text || "null",
                    answer: responseMessage
                })
            });
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9d1c3a2._.js.map