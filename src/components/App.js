import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
const test = require("decode-encode-binary");

function App() {
    const [html, setHtml] = useLocalStorage("html", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");
    const [view1, setView1] = useState("html");
    const [view2, setView2] = useState("default");
    const [modal, setModal] = useState(false);
    const [tooltipStatus, setTooltipStatus] = useState(0);

    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let html = params.get("html");
        let js = params.get("js");
        let decodedHTML = "";
        let decodedJS = "";
        if (html.length > 10) decodedHTML = test.decode(html);
        if (js.length > 10) decodedJS = test.decode(js);
        decodedHTML && setHtml(decodedHTML);
        decodedJS && setJs(decodedJS);
    }, [html, js]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>
          <head><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
          </head>
          ${html}</body>
        
          <script>${js}</script>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, js]);

    return (
        <>
            <div className="h-full relative z-0">
                <nav className="w-full bg-gray-900 px-6 xl:px-20 ">
                    <div className="flex items-stretch justify-between ">
                        <div className="flex items-center">
                            <div className="py-3 ">
                                <img src="https://cdn.tuk.dev/doge-ui/craft/craft-logo.png" alt="logo" className="w-26 h-10" />
                            </div>
                            <div className=" border rounded border-gray-700 ml-8 flex items-center py-3 px-4">
                                <div className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={16} viewBox="0 0 27 16" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.38133 5.33333C7.25567 1.77792 9.44215 0 12.9399 0C18.1868 0 18.8427 4 21.4661 4.66667C23.2152 5.11125 24.7454 4.44458 26.0571 2.66667C25.1828 6.22208 22.9963 8 19.4985 8C14.2516 8 13.5958 4 10.9723 3.33333C9.22325 2.88875 7.69305 3.55542 6.38133 5.33333ZM0 13.3333C0.874344 9.77789 3.06082 7.99998 6.5586 7.99998C11.8055 7.99998 12.4613 12 15.0848 12.6666C16.8339 13.1112 18.3641 12.4446 19.6758 10.6666C18.8015 14.2221 16.615 16 13.1172 16C7.87032 16 7.21446 12 4.59102 11.3333C2.84192 10.8887 1.31172 11.5554 0 13.3333Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="-36.1903" y1="-6.22208" x2="-25.6094" y2="41.6432" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2383AE" />
                                                <stop offset={1} stopColor="#6DD7B9" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="mr-4 " onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                                    {tooltipStatus === 1 && (
                                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out   shadow-lg p-3 bg-gray-600 text-gray-600 rounded  mt-7 -ml-3">
                                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                            <p className="text-xs font-bold text-gray-200 ">Coming Soon</p>
                                        </div>
                                    )}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M0 13.937C0 15.0765 0.923658 16 2.06305 16H13.937C15.0765 16 16 15.0763 16 13.937V2.06305C16 0.923533 15.0763 0 13.937 0H2.06305C0.923533 0 0 0.923658 0 2.06305V13.937Z" fill="#6B7280" />
                                        <path
                                            d="M6.63486 7.07738V4.81154H8.62935C8.8193 4.81154 9.00247 4.82737 9.17885 4.85903C9.35523 4.89068 9.51126 4.94722 9.64694 5.02862C9.78262 5.11003 9.89117 5.2231 9.97257 5.36782C10.054 5.51255 10.0947 5.69797 10.0947 5.92411C10.0947 6.33115 9.97258 6.62512 9.72835 6.80602C9.48413 6.98693 9.17207 7.07738 8.79217 7.07738H6.63486ZM4.5047 3.15625V12.8438H9.1992C9.63338 12.8438 10.0562 12.7895 10.4678 12.6809C10.8794 12.5724 11.2457 12.4051 11.5668 12.1789C11.8879 11.9528 12.1434 11.6611 12.3334 11.3038C12.5233 10.9465 12.6183 10.5236 12.6183 10.0352C12.6183 9.42915 12.4713 8.91131 12.1774 8.48166C11.8834 8.05201 11.4379 7.75126 10.8409 7.57939C11.2751 7.37135 11.603 7.10452 11.8246 6.77889C12.0462 6.45325 12.157 6.04622 12.157 5.55777C12.157 5.10551 12.0824 4.72561 11.9331 4.41807C11.7839 4.11053 11.5736 3.86404 11.3022 3.67862C11.0309 3.49319 10.7052 3.35977 10.3253 3.27836C9.94544 3.19695 9.52484 3.15625 9.06352 3.15625H4.5047ZM6.63486 11.1885V8.52915H8.95498C9.41629 8.52915 9.78715 8.63543 10.0676 8.848C10.348 9.06056 10.4882 9.41558 10.4882 9.91308C10.4882 10.1663 10.4452 10.3744 10.3593 10.5372C10.2733 10.7 10.158 10.8289 10.0133 10.9239C9.86855 11.0189 9.70122 11.0867 9.51127 11.1274C9.32131 11.1681 9.12232 11.1885 8.91428 11.1885H6.63486Z"
                                            fill="#111827"
                                        />
                                    </svg>
                                </div>
                                <div onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
                                    {tooltipStatus === 2 && (
                                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out   shadow-lg p-3 bg-gray-600 text-gray-600 rounded  mt-7 -ml-3">
                                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                            <p className="text-xs font-bold text-gray-200 ">Coming Soon</p>
                                        </div>
                                    )}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={16} viewBox="0 0 12 16" fill="none">
                                        <path d="M0 11L1.00313 4L5.01567 0L10.0313 5L7.02194 8L11.0345 12L5.01567 16L0 11Z" fill="#6B7280" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="hidden xl:flex items-center">
                            <div onClick={() => setView2("default")} className={view2 === "default" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M6.66667 16L25.3333 16L25.3333 6.66667L6.66667 6.66667L6.66667 16ZM4 26.6667L4 5.33333C4 4.97971 4.14047 4.64057 4.39052 4.39052C4.64057 4.14047 4.97971 4 5.33333 4L26.6667 4C27.0203 4 27.3594 4.14047 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333L28 26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28L5.33333 28C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14048 27.3594 4 27.0203 4 26.6667Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div onClick={() => setView2("col-reverse")} className={view2 === "col-reverse" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M25.3333 16L6.66667 16L6.66667 25.3333L25.3333 25.3333L25.3333 16ZM28 5.33333L28 26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28L5.33333 28C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14047 27.3594 4 27.0203 4 26.6667L4 5.33333C4 4.97971 4.14047 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4L26.6667 4C27.0203 4 27.3594 4.14048 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div onClick={() => setView2("row")} className={view2 === "row" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 21.3333L12 2.66667L2.66666 2.66667L2.66667 21.3333L12 21.3333ZM22.6667 24L1.33333 24C0.979712 24 0.640572 23.8595 0.390522 23.6095C0.140474 23.3594 -8.56491e-08 23.0203 -1.16564e-07 22.6667L-1.98158e-06 1.33333C-2.0125e-06 0.979714 0.140472 0.640574 0.39052 0.390524C0.64057 0.140476 0.979709 2.0125e-06 1.33333 1.98158e-06L22.6667 1.16564e-07C23.0203 8.56491e-08 23.3594 0.140474 23.6095 0.390522C23.8595 0.640572 24 0.979712 24 1.33333L24 22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div onClick={() => setView2("row-reverse")} className={view2 === "row-reverse" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2.66667L12 21.3333L21.3333 21.3333L21.3333 2.66667L12 2.66667ZM1.33333 0L22.6667 0C23.0203 0 23.3594 0.140476 23.6095 0.390524C23.8595 0.640573 24 0.979711 24 1.33333L24 22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24L1.33333 24C0.979711 24 0.640573 23.8595 0.390524 23.6095C0.140476 23.3594 0 23.0203 0 22.6667L0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div onClick={() => setView2("hidden")} className={view2 === "hidden" ? " mr-10 cursor-pointer text-white" : " mr-10 cursor-pointer text-gray-400"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={27} height={24} viewBox="0 0 27 24" fill="none">
                                    <rect width="26.67" height={24} rx={1} fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-stretch">
                            <div className="hidden sm:flex items-center border-l border-r px-4 border-gray-700">
                                <div onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)} className="flex items-center">
                                    {tooltipStatus === 3 && (
                                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out   shadow-lg p-3 bg-gray-600 text-gray-600 rounded top-0 mt-14 -ml-3">
                                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                            <p className="text-xs font-bold text-gray-200 ">Coming Soon</p>
                                        </div>
                                    )}
                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16666 9.1665H15.8333V10.8332H4.16666V9.1665Z" fill="white" />
                                    </svg>
                                    <svg className="mx-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z" fill="white" />
                                    </svg>
                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16666 9.1665V4.1665H10.8333V9.1665H15.8333V10.8332H10.8333V15.8332H9.16666V10.8332H4.16666V9.1665H9.16666Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div onMouseEnter={() => setTooltipStatus(4)} onMouseLeave={() => setTooltipStatus(0)} className="hidden sm:flex items-center border-r px-4 border-gray-700">
                                {tooltipStatus === 4 && (
                                    <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out   shadow-lg p-3 bg-gray-600 text-gray-600 rounded top-0  mt-14 -ml-3">
                                        <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                                                    <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                                        <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                        <p className="text-xs font-bold text-gray-200 ">Coming Soon</p>
                                    </div>
                                )}
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14" cy="14" r="14" fill="url(#paint0_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0EA5E9" />
                                            <stop offset="0.5" stopColor="#6DD7B9" />
                                            <stop offset="1" stopColor="#F0D35D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div onMouseEnter={() => setTooltipStatus(5)} onMouseLeave={() => setTooltipStatus(0)} className="flex items-center sm:px-4 sm:border-r border-gray-700">
                                {tooltipStatus === 5 && (
                                    <div role="tooltip" className="hidden sm:block z-20 absolute transition duration-150 ease-in-out shadow-lg p-3 bg-gray-600 text-gray-600 rounded top-0 mt-14 -ml-2">
                                        <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                                                    <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                                        <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                        <p className="text-xs font-bold text-gray-200 ">Clear</p>
                                    </div>
                                )}
                                <svg
                                    onClick={() => {
                                        setHtml("");
                                        setJs("");
                                    }}
                                    className="cursor-pointer"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.66663 8.1665H23.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.6666 12.8335V19.8335" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.3334 12.8335V19.8335" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.83337 8.1665L7.00004 22.1665C7.00004 22.7853 7.24587 23.3788 7.68346 23.8164C8.12104 24.254 8.71454 24.4998 9.33337 24.4998H18.6667C19.2855 24.4998 19.879 24.254 20.3166 23.8164C20.7542 23.3788 21 22.7853 21 22.1665L22.1667 8.1665" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 8.16667V4.66667C10.5 4.35725 10.6229 4.0605 10.8417 3.84171C11.0605 3.62292 11.3572 3.5 11.6667 3.5H16.3333C16.6428 3.5 16.9395 3.62292 17.1583 3.84171C17.3771 4.0605 17.5 4.35725 17.5 4.66667V8.16667" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={view2 === "default" ? "flex-col  flex relative z-0 h-full w-full" : view2 === "col-reverse" ? "flex-col-reverse  flex relative z-0 h-full w-full" : view2 === "row" ? "flex-row  flex relative z-0 h-full w-full" : view2 === "row-reverse" ? "flex-row-reverse  flex relative z-0 h-full w-full" : ""}>
                    <div className={view2 === "default" ? "height2 " : view2 === "col-reverse" ? "height2 " : view2 === "row" ? "view4_height w-1/2 " : view2 === "row-reverse" ? "view4_height w-1/2 " : view2 === "hidden" ? "hidden" : ""}>
                        <div className="w-full   h-full px-2 xl:px-20 bg-gray-800  ">
                            <div className="bg-gray-800  ">
                                <div className="flex items-center justify-between border-b border-gray-700 pt-7">
                                    <div className="flex items-center">
                                        <button onClick={() => setView1("html")} className={view1 === "html" ? "text-white mr-6 focus:outline-none" : "text-gray-400 cursor-pointer mr-6 focus:outline-none hover:text-gray-500"}>
                                            HTML
                                            <div className={view1 === "html" ? "w-10 h-1 mt-3 bg-blue-500" : "w-10 h-1 mt-3"} />
                                        </button>
                                        <button onClick={() => setView1("js")} className={view1 === "js" ? "text-white mr-6 focus:outline-none" : " text-gray-400 mr-6 cursor-pointer focus:outline-none hover:text-gray-500"}>
                                            Javascript
                                            <div className={view1 === "js" ? " w-16 h-1 mt-3 bg-blue-500" : "w-16 h-1 mt-3"} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setView1("preview");
                                            }}
                                            className={view1 === "preview" ? "xl:hidden text-white mr-6 focus:outline-none" : "xl:hidden text-gray-400 cursor-pointer focus:outline-none hover:text-gray-500"}
                                        >
                                            Preview
                                            <div className={view1 === "preview" ? " w-16 h-1 mt-3 bg-blue-500 " : "w-16 h-1 mt-3"} />
                                        </button>
                                    </div>
                                    <div className="flex items-center"></div>
                                </div>
                            </div>
                            {view1 === "html" ? (
                                <div className={view2 === "default" ? "w-full  pt-4  relative normal-h h-69" : view2 === "col-reverse" ? "w-full pt-4  relative normal-h h-69" : view2 === "row" ? " relative w-full pt-4 pb-12  h-94" : view2 === "row-reverse" ? "w-full relative pt-4 pb-12 view4_height  h-94" : view2 === "hidden" ? "w-full pt-4 pb-12 relative normal-h" : ""}>
                                    <Editor customHeight={"height_viewer"} language="xml" value={html} onChange={setHtml} />
                                    <img src="https://i.ibb.co/C73Hn6L/image-1.png" alt="doge" className="pointer-events-none absolute m-auto  inset-0 z-10 h-80 w-60 " />
                                </div>
                            ) : view1 === "js" ? (
                                <div className={view2 === "default" ? "w-full  pt-4  relative normal-h h-69" : view2 === "col-reverse" ? "w-full pt-4  relative normal-h h-69" : view2 === "row" ? " relative w-full pt-4 pb-12  h-94" : view2 === "row-reverse" ? "w-full relative pt-4 pb-12  h-94" : view2 === "hidden" ? "w-full pt-4 pb-12 relative normal-h" : ""}>
                                    <Editor customHeight={"height_viewer"} language="javascript" value={js} onChange={setJs} />
                                    <img src="https://i.ibb.co/C73Hn6L/image-1.png" alt="doge" className="pointer-events-none absolute m-auto  inset-0 z-10 h-80 w-60 " />
                                </div>
                            ) : (
                                <div className="xl:hidden">
                                    <div className={view2 === "default" ? "height1" : view2 === "col-reverse" ? "height1" : view2 === "row" ? "view4_height w-1/2" : view2 === "row-reverse" ? "view4_height w-1/2" : view2 === "hidden" ? "view4_height" : ""}>
                                        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hidden xl:block w-full">
                        <div className={view2 === "default" ? "height1" : view2 === "col-reverse" ? "height1" : view2 === "row" ? "view4_height w-1/2" : view2 === "row-reverse" ? "view4_height w-1/2" : view2 === "hidden" ? "view4_height" : ""}>
                            <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <>
                    <div className=" w-full h-full  flex items-center justify-center transition duration-150 ease-in-out z-10 fixed inset-0">
                        <div onClick={() => setModal(false)} className="fixed inset-0 overlay" />
                        <div className="container mx-auto w-80 bg-gray-800 rounded flex justify-center">
                            <div className="relative md:w-80 rounded shadow-lg p-6 bg-gray-800">
                                <p className="text-xl font-bold leading-tight text-gray-100">Settings</p>
                                <div className="flex items-center justify-between pt-7">
                                    <p className="text-sm leading-tight text-gray-100">Integrations</p>
                                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                                <div className="pt-5">
                                    <div className="flex item-center justify-between px-4 py-3 bg-gray-700 rounded-lg">
                                        <p className="text-base font-medium leading-tight text-gray-100">HTML</p>
                                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M10 18.3333C5.3975 18.3333 1.66666 14.6025 1.66666 9.99999C1.66666 5.39749 5.3975 1.66666 10 1.66666C14.6025 1.66666 18.3333 5.39749 18.3333 9.99999C18.3333 14.6025 14.6025 18.3333 10 18.3333ZM10 8.82166L7.64333 6.46416L6.46416 7.64332L8.82166 9.99999L6.46416 12.3567L7.64333 13.5358L10 11.1783L12.3567 13.5358L13.5358 12.3567L11.1783 9.99999L13.5358 7.64332L12.3567 6.46416L10 8.82166Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="flex item-center justify-between mt-4 px-4 py-3 bg-gray-700 rounded-lg">
                                        <p className="text-base font-medium leading-tight text-gray-100">Javascript</p>
                                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M10 18.3333C5.3975 18.3333 1.66666 14.6025 1.66666 9.99999C1.66666 5.39749 5.3975 1.66666 10 1.66666C14.6025 1.66666 18.3333 5.39749 18.3333 9.99999C18.3333 14.6025 14.6025 18.3333 10 18.3333ZM10 8.82166L7.64333 6.46416L6.46416 7.64332L8.82166 9.99999L6.46416 12.3567L7.64333 13.5358L10 11.1783L12.3567 13.5358L13.5358 12.3567L11.1783 9.99999L13.5358 7.64332L12.3567 6.46416L10 8.82166Z" fill="white" />
                                        </svg>
                                    </div>
                                    <button className="w-full py-2.5 text-sm font-semibold leading-normal text-center text-white bg-blue-500 rounded mt-6 focus:outline-none hover:bg-blue-600" onClick={() => setModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default App;
