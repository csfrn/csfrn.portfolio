(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ThemeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const isDarkMode = document.documentElement.classList.contains("dark");
            setIsDark(isDarkMode);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity",
        "aria-label": "Toggle theme",
        children: isDark ? "Light" : "Dark"
    }, void 0, false, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "q9ovQTvwIdpxeVii6kJLTuTYpwE=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/typing-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingAnimation",
    ()=>TypingAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TypingAnimation() {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fullText = "CSFRN";
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingAnimation.useEffect": ()=>{
            let index = isDeleting ? fullText.length : 0;
            const timer = setInterval({
                "TypingAnimation.useEffect.timer": ()=>{
                    if (!isDeleting) {
                        if (index <= fullText.length) {
                            setText(fullText.slice(0, index));
                            index++;
                        } else {
                            setTimeout({
                                "TypingAnimation.useEffect.timer": ()=>setIsDeleting(true)
                            }["TypingAnimation.useEffect.timer"], 2000);
                        }
                    } else {
                        if (index >= 0) {
                            setText(fullText.slice(0, index));
                            index--;
                        } else {
                            setTimeout({
                                "TypingAnimation.useEffect.timer": ()=>setIsDeleting(false)
                            }["TypingAnimation.useEffect.timer"], 500);
                        }
                    }
                }
            }["TypingAnimation.useEffect.timer"], isDeleting ? 100 : 150);
            return ({
                "TypingAnimation.useEffect": ()=>clearInterval(timer)
            })["TypingAnimation.useEffect"];
        }
    }["TypingAnimation.useEffect"], [
        isDeleting
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-extrabold text-2xl md:text-3xl tracking-tight",
        children: [
            text,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "animate-pulse",
                children: "_"
            }, void 0, false, {
                fileName: "[project]/components/typing-animation.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/typing-animation.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(TypingAnimation, "VcpHOVY/qX/OL0MPaIntZR5og8o=");
_c = TypingAnimation;
var _c;
__turbopack_context__.k.register(_c, "TypingAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cursor-effect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorEffect",
    ()=>CursorEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CursorEffect() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorEffect.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);
            const resizeCanvas = {
                "CursorEffect.useEffect.resizeCanvas": ()=>{
                    dpr = Math.min(window.devicePixelRatio || 1, 2);
                    canvas.width = Math.floor(window.innerWidth * dpr);
                    canvas.height = Math.floor(window.innerHeight * dpr);
                    canvas.style.width = `${window.innerWidth}px`;
                    canvas.style.height = `${window.innerHeight}px`;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
                }
            }["CursorEffect.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            const ripples = [];
            // Smooth spawning control
            let lastSpawn = 0;
            let lastX = window.innerWidth / 2;
            let lastY = window.innerHeight / 2;
            const minSpawnMs = 18 // ~55 spawns/sec max
            ;
            const minDist = 10 // px
            ;
            const handleMouseMove = {
                "CursorEffect.useEffect.handleMouseMove": (e)=>{
                    const now = performance.now();
                    const x = e.clientX;
                    const y = e.clientY;
                    const dx = x - lastX;
                    const dy = y - lastY;
                    const dist = Math.hypot(dx, dy);
                    if (now - lastSpawn < minSpawnMs || dist < minDist) return;
                    lastSpawn = now;
                    lastX = x;
                    lastY = y;
                    ripples.push({
                        x,
                        y,
                        r: 0,
                        life: 1
                    });
                    // Keep it bounded
                    if (ripples.length > 40) ripples.shift();
                }
            }["CursorEffect.useEffect.handleMouseMove"];
            document.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            // Easing helpers
            const easeOutCubic = {
                "CursorEffect.useEffect.easeOutCubic": (t)=>1 - Math.pow(1 - t, 3)
            }["CursorEffect.useEffect.easeOutCubic"];
            let lastTime = performance.now();
            let raf = 0;
            const animate = {
                "CursorEffect.useEffect.animate": (t)=>{
                    const dt = Math.min((t - lastTime) / 1000, 0.033) // seconds, clamp
                    ;
                    lastTime = t;
                    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    // optional: a tiny bit of blur for smoothness
                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    for(let i = ripples.length - 1; i >= 0; i--){
                        const rp = ripples[i];
                        // Time-based updates
                        rp.r += 520 * dt; // expansion speed (px/sec)
                        rp.life -= 1.25 * dt; // fade speed (life/sec)
                        if (rp.life <= 0) {
                            ripples.splice(i, 1);
                            continue;
                        }
                        const progress = 1 - rp.life // 0 -> 1
                        ;
                        const e = easeOutCubic(progress);
                        const maxR = 160;
                        const r = Math.min(rp.r * (0.85 + 0.15 * e), maxR);
                        const baseAlpha = rp.life;
                        const col = {
                            "CursorEffect.useEffect.animate.col": (a)=>`rgba(15, 16, 17, ${a})`
                        }["CursorEffect.useEffect.animate.col"];
                        // If you want it even smoother, uncomment:
                        // ctx.shadowBlur = 10
                        // ctx.shadowColor = col(baseAlpha * 0.35)
                        // Outer ring
                        ctx.beginPath();
                        ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2);
                        ctx.strokeStyle = col(baseAlpha * 0.45);
                        ctx.lineWidth = 2.25;
                        ctx.stroke();
                        // Middle ring
                        ctx.beginPath();
                        ctx.arc(rp.x, rp.y, r * 0.68, 0, Math.PI * 2);
                        ctx.strokeStyle = col(baseAlpha * 0.28);
                        ctx.lineWidth = 1.6;
                        ctx.stroke();
                        // Inner ring
                        ctx.beginPath();
                        ctx.arc(rp.x, rp.y, r * 0.38, 0, Math.PI * 2);
                        ctx.strokeStyle = col(baseAlpha * 0.22);
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                        // Center dot
                        ctx.beginPath();
                        ctx.arc(rp.x, rp.y, 2.2, 0, Math.PI * 2);
                        ctx.fillStyle = col(baseAlpha * 0.6);
                        ctx.fill();
                    // ctx.shadowBlur = 0
                    }
                    raf = requestAnimationFrame(animate);
                }
            }["CursorEffect.useEffect.animate"];
            raf = requestAnimationFrame(animate);
            return ({
                "CursorEffect.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    document.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("resize", resizeCanvas);
                }
            })["CursorEffect.useEffect"];
        }
    }["CursorEffect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-[9999]",
        style: {
            mixBlendMode: "difference"
        }
    }, void 0, false, {
        fileName: "[project]/components/cursor-effect.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(CursorEffect, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CursorEffect;
var _c;
__turbopack_context__.k.register(_c, "CursorEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_302cc11b._.js.map