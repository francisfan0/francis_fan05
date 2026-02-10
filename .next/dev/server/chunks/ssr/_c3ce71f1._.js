module.exports = [
"[project]/src/app/valentine/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Valentine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Valentine() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [noClickCount, setNoClickCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [noButtonPosition, setNoButtonPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 50,
        left: 70
    });
    const floatingHeartIcons = [
        "💕",
        "💖",
        "💗",
        "💘"
    ];
    const floatingPhotoSourceUrls = [
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690098/IMG_4542_ptxl3b.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690096/IMG_6978_cxhdb3.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690096/IMG_0235_nm1kxv.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_0038_tdg5q7.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_2251_qt4fbk.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_2967_jqz6ge.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_0202_jvh56i.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_1780_vfhsle.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_1768_rimivb.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_0021_tkxo6p.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_0911_u4lk2t.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_1210_hzzm0u.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_0880_d26ew7.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690092/IMG_0516_yykhfg.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690092/IMG_0582_gkp1wd.jpg",
        "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690091/72015401014__369B9AA7-C783-4CCF-9733-B2928C2ABF48_ft51nm.jpg"
    ];
    const createCloudinaryUrl = (publicId, transformation)=>`https://res.cloudinary.com/ddyvrjaqp/image/upload/${transformation}/${publicId}.jpg`;
    const floatingPhotoUrls = floatingPhotoSourceUrls.map((url)=>url.replace("/image/upload/", "/image/upload/f_auto,q_auto,fl_immutable_cache,w_220,h_220,c_fill/"));
    const image2024Url = createCloudinaryUrl("v1770672785/IMG_9756_d8ijcd", "f_auto,q_auto,fl_immutable_cache,w_960,c_limit");
    const image2025Url = createCloudinaryUrl("v1770672785/IMG_2341_qiwoih", "f_auto,q_auto,fl_immutable_cache,w_960,c_limit");
    const handleNext = ()=>{
        setStep(step + 1);
    };
    const handleImageError = (e, year)=>{
        console.error(`Failed to load ${year} image:`, e.currentTarget.src);
    };
    const handleNo = ()=>{
        if (noClickCount === 0) {
            // First "no" - show sad face and restart
            setNoClickCount(1);
            setStep(4); // Go to sad face step
            setTimeout(()=>{
                setStep(0); // Loop back to beginning
                setNoClickCount(1); // Keep count at 1 for second attempt
                setNoButtonPosition({
                    top: 50,
                    left: 70
                }); // Reset button position to initial
            }, 2000);
        }
    // On second attempt (noClickCount === 1), button will move, handled by mouse events
    };
    const handleYes = ()=>{
        setStep(5); // Go to poem step
    };
    const handleNoButtonHover = ()=>{
        if (noClickCount === 1) {
            // Make button move to random position
            const newTop = Math.random() * 80 + 10; // 10-90% of container height
            const newLeft = Math.random() * 80 + 10; // 10-90% of container width
            setNoButtonPosition({
                top: newTop,
                left: newLeft
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "valentine-container",
        children: [
            step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "valentine-step fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image2024Url,
                        alt: "2024 Valentine",
                        className: "valentine-image",
                        onError: (e)=>handleImageError(e, "2024")
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "valentine-text",
                        children: "You have been my 2024 valentine..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "valentine-btn",
                        onClick: handleNext,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/valentine/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "valentine-step fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image2025Url,
                        alt: "2025 Valentine",
                        className: "valentine-image",
                        onError: (e)=>handleImageError(e, "2025")
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "valentine-text",
                        children: "You have been my 2025 valentine..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "valentine-btn",
                        onClick: handleNext,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/valentine/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "valentine-step fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "valentine-text",
                        children: "I must ask..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "valentine-btn",
                        onClick: handleNext,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/valentine/page.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "valentine-step fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "valentine-question",
                        children: "Will you be my 2026 valentine?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "valentine-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "valentine-btn-choice btn-yes",
                                onClick: handleYes,
                                children: "Yes! 💕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            noClickCount === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "valentine-btn-choice btn-no",
                                onClick: handleNo,
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "valentine-btn-choice btn-no no-placeholder",
                                        "aria-hidden": "true",
                                        tabIndex: -1,
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/valentine/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "valentine-btn-choice btn-no moving-button",
                                        style: {
                                            position: "absolute",
                                            top: `${noButtonPosition.top}%`,
                                            left: `${noButtonPosition.left}%`,
                                            transform: "translate(-50%, -50%)"
                                        },
                                        onMouseEnter: handleNoButtonHover,
                                        onClick: handleNoButtonHover,
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/valentine/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/valentine/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this),
            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "valentine-step fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sad-face",
                        children: "😢"
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "valentine-text",
                        children: "Let's try that again..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/valentine/page.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floating-photos-layer",
                        "aria-hidden": "true",
                        children: floatingPhotoUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: "",
                                className: "floating-photo",
                                loading: "lazy",
                                decoding: "async",
                                style: {
                                    "--start-left": `${4 + index * 37 % 92}%`,
                                    "--duration": `${11 + index * 53 % 15 + index * 29 % 10 / 10}s`,
                                    "--delay": `${-1 * (index * 47 % 38)}s`,
                                    "--size": `${64 + index * 19 % 58}px`
                                }
                            }, url, false, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floating-hearts-layer",
                        "aria-hidden": "true",
                        children: Array.from({
                            length: 26
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "floating-heart",
                                style: {
                                    "--heart-left": `${2 + index * 41 % 96}%`,
                                    "--heart-duration": `${7 + index * 31 % 11 + index * 17 % 10 / 10}s`,
                                    "--heart-delay": `${-1 * (index * 29 % 22)}s`,
                                    "--heart-size": `${14 + index * 13 % 18}px`
                                },
                                children: floatingHeartIcons[index % floatingHeartIcons.length]
                            }, `heart-${index}`, false, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "valentine-step fade-in poem-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "valentine-success",
                                children: "Yes! 🎉💖"
                            }, void 0, false, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "valentine-poem",
                                style: {
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Dear Joy,"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/valentine/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "You are the love of my life, and with every day I am more grateful that you are by my side. This third valentine's day to be celebrated together, caps a long list of third times with you. Third birthdays together, third new years together (lunar and solar), and not too far in the distant future, though not all that close, a third anniversary together. I know you have been waiting for this valentine invitation, and I hope it was worth it."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/valentine/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "I hope we can enjoy ourselves here: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://calendar.app.google/8DYHniAeSXVrXmkD8",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "click for a surprise!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/valentine/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/valentine/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/valentine/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/valentine/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/valentine/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_c3ce71f1._.js.map