if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IbEBZIK6Yi4VBsHsNnvhT/_buildManifest.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/IbEBZIK6Yi4VBsHsNnvhT/_ssgManifest.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.15d2d80c06229016429c.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/framework.4b1beca48388539e3889.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/main-ef0aa7add9ba730e7d18.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/pages/_app-20a744f595a9ee528ac6.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/pages/_error-f4db149185d74af348d7.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/pages/index-a37ef56617de68c79fcd.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/_next/static/css/3f469a553468e3834c7c.css",revision:"IbEBZIK6Yi4VBsHsNnvhT"},{url:"/blue_1080p.mp4",revision:"be618298180500759dc83d43443d3020"},{url:"/blue_240p.mp4",revision:"bf03570e56986966932aa1d8214962c4"},{url:"/blue_720p.mp4",revision:"92b7a606e03403045d13c7681c248c3c"},{url:"/icons/android-chrome-144x144.png",revision:"84f829f6ef71c78b65c0344306f1aaab"},{url:"/icons/android-chrome-192x192.png",revision:"1f1698965705d53cba130afab825774a"},{url:"/icons/android-chrome-256x256.png",revision:"77bd458b10c39213200c834de536ec8f"},{url:"/icons/android-chrome-36x36.png",revision:"812e32296216ff71cc3d6ea1cf3db609"},{url:"/icons/android-chrome-384x384.png",revision:"1af0bb5e92d647bcea882630e81e8b00"},{url:"/icons/android-chrome-48x48.png",revision:"86ed61ebd884ed2f36362796818ea513"},{url:"/icons/android-chrome-512x512.png",revision:"69fcc866431a5189c03155f7043966dc"},{url:"/icons/android-chrome-72x72.png",revision:"04a42188c402eb6863a8d11b059a0e3c"},{url:"/icons/android-chrome-96x96.png",revision:"6fa32cca97139e349823eab0e407b808"},{url:"/icons/apple-touch-icon-114x114-precomposed.png",revision:"c5807609d4c0e0bc6a7c1c83e0e85630"},{url:"/icons/apple-touch-icon-114x114.png",revision:"5affdf491989bbb8c45bb3abf5d54bb7"},{url:"/icons/apple-touch-icon-120x120-precomposed.png",revision:"836b42b797b5de051859f497dad80bb7"},{url:"/icons/apple-touch-icon-120x120.png",revision:"ea931ec0a9e07f4bc4ff9b286820c47d"},{url:"/icons/apple-touch-icon-144x144-precomposed.png",revision:"5bd8fea41552e9c2d2b7e5f995051435"},{url:"/icons/apple-touch-icon-144x144.png",revision:"c11fc93b809e0575f3c9bfebaf8bfa2d"},{url:"/icons/apple-touch-icon-152x152-precomposed.png",revision:"20500247cb58c01be1a6e345b4b24ace"},{url:"/icons/apple-touch-icon-152x152.png",revision:"725b9a134d1482c1cdf8788010f5b490"},{url:"/icons/apple-touch-icon-180x180-precomposed.png",revision:"8d3420b62fd931d44541569661f2e292"},{url:"/icons/apple-touch-icon-180x180.png",revision:"970f537449fc13df66f31f7d9b28cc17"},{url:"/icons/apple-touch-icon-57x57-precomposed.png",revision:"d7f0e1ddb7ad0d3882687c5e1254950a"},{url:"/icons/apple-touch-icon-57x57.png",revision:"300d6b9ae6ae5e0533f43ee45fac5efb"},{url:"/icons/apple-touch-icon-60x60-precomposed.png",revision:"f2b9316873077cd8389698f5442b1cd0"},{url:"/icons/apple-touch-icon-60x60.png",revision:"ad8b22e84b5158e9826c1643e5724cbf"},{url:"/icons/apple-touch-icon-72x72-precomposed.png",revision:"bffe7b89f79249f961b509a7b2c4a03d"},{url:"/icons/apple-touch-icon-72x72.png",revision:"a158c2c45f7b27cc892f79b913962dd4"},{url:"/icons/apple-touch-icon-76x76-precomposed.png",revision:"970d328fb6c45be9d950f44ab75b7cc0"},{url:"/icons/apple-touch-icon-76x76.png",revision:"bd57ffba13b7a651f8644599337db50e"},{url:"/icons/apple-touch-icon-precomposed.png",revision:"8d3420b62fd931d44541569661f2e292"},{url:"/icons/apple-touch-icon.png",revision:"970f537449fc13df66f31f7d9b28cc17"},{url:"/icons/browserconfig.xml",revision:"877baf90031a478def6cf6d7a813f66b"},{url:"/icons/favicon-16x16.png",revision:"de00ab7ebff72bbbc282e3aceaa039a4"},{url:"/icons/favicon-32x32.png",revision:"1e7068ae9cf3e5ffab4ba5f52c3cc6ef"},{url:"/icons/favicon.ico",revision:"265f6ffe89b8c3c0f235af5f1ab36c9b"},{url:"/icons/html_code.html",revision:"bffa7face915575517af1a88d1e73d01"},{url:"/icons/mstile-144x144.png",revision:"84f829f6ef71c78b65c0344306f1aaab"},{url:"/icons/mstile-150x150.png",revision:"a8903a1dca8a57ba6f0f8533b47796e8"},{url:"/icons/mstile-310x150.png",revision:"cabfff6f68c160508ea738c289db8545"},{url:"/icons/mstile-310x310.png",revision:"251edc6f4287714ef99e4311feb9d330"},{url:"/icons/mstile-70x70.png",revision:"9e5914bc726cf1fe19c4ce5fff056e3c"},{url:"/icons/safari-pinned-tab.svg",revision:"a8f786bb4833a439bb2c2a1aeadb1ece"},{url:"/icons/site.webmanifest",revision:"832ee70bf075a3bf43810a43b5faa359"},{url:"/logo.png",revision:"bef8930298fc5c808b5cbb5c47b02938"},{url:"/logo.svg",revision:"e438d56ce5330811defff14ee0ab8bb6"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
