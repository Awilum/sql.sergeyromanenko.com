import{O as e,_ as t,c as n,l as r,lt as i,o as a}from"./runtime-core.esm-bundler.nu_UAaCd.js";import{t as o}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as s}from"./createLucideIcon.BvC9IsH-.js";var c=s({name:`database-zap`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]}),l=s({name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]}),ee=s({name:`image-down`,size:24,node:[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19 3 3v-5.5`,key:`9ldu5r`}],[`path`,{d:`m17 22 3-3`,key:`1nkfve`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]}),u=t({__name:`SetupEditor`,props:{modelValue:{},label:{},placeholder:{},inputId:{},hideDescription:{type:Boolean}},emits:[`update:modelValue`],setup(e,{expose:t,emit:n}){t();let r=n;function i(e){let t=e.target;r(`update:modelValue`,t.value)}let a={emit:r,onInput:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),d={class:`sql-schema-host`},f=[`for`],p=[`id`,`value`,`placeholder`],te={key:0,class:`mt-2 label`};function ne(t,o,s,c,l,ee){return e(),r(`div`,d,[a(`label`,{for:s.inputId??`sql-schema`,class:`label-micro`},i(s.label??`Схема SQL`),9,f),a(`textarea`,{id:s.inputId??`sql-schema`,class:`sql-schema-input`,value:s.modelValue,spellcheck:`false`,autocomplete:`off`,autocapitalize:`off`,placeholder:s.placeholder??`CREATE TABLE …
INSERT INTO …`,onInput:c.onInput},null,40,p),s.hideDescription===!0?n(``,!0):(e(),r(`p`,te,` Скрипт, который строит и заполняет базу данных. Вставьте схему или дамп из любой базы SQLite и нажмите Построить базу. Он выполняется в этом браузере, в памяти. `))])}var re=o(u,[[`render`,ne]]);function ie(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement(`base`),i=n.createElement(`a`);return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}var ae=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function m(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}var h=null;function g(e={}){return h||(e.includeStyleProperties?(h=e.includeStyleProperties,h):(h=m(window.getComputedStyle(document.documentElement)),h))}function _(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace(`px`,``)):0}function v(e){let t=_(e,`border-left-width`),n=_(e,`border-right-width`);return e.clientWidth+t+n}function y(e){let t=_(e,`border-top-width`),n=_(e,`border-bottom-width`);return e.clientHeight+t+n}function b(e,t={}){return{width:t.width||v(e),height:t.height||y(e)}}function oe(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var x=16384;function se(e){(e.width>x||e.height>x)&&(e.width>x&&e.height>x?e.width>e.height?(e.height*=x/e.width,e.width=x):(e.width*=x/e.height,e.height=x):e.width>x?(e.height*=x/e.width,e.width=x):(e.width*=x/e.height,e.height=x))}function S(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin=`anonymous`,r.decoding=`async`,r.src=e})}async function ce(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function le(e,t,n){let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`),a=document.createElementNS(r,`foreignObject`);return i.setAttribute(`width`,`${t}`),i.setAttribute(`height`,`${n}`),i.setAttribute(`viewBox`,`0 0 ${t} ${n}`),a.setAttribute(`width`,`100%`),a.setAttribute(`height`,`100%`),a.setAttribute(`x`,`0`),a.setAttribute(`y`,`0`),a.setAttribute(`externalResourcesRequired`,`true`),i.appendChild(a),a.appendChild(e),ce(i)}var C=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||C(n,t)};function ue(e){let t=e.getPropertyValue(`content`);return`${e.cssText} content: '${t.replace(/'|"/g,``)}';`}function de(e,t){return g(t).map(t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)}function fe(e,t,n,r){let i=`.${e}:${t}`,a=n.cssText?ue(n):de(n,r);return document.createTextNode(`${i}{${a}}`)}function w(e,t,n,r){let i=window.getComputedStyle(e,n),a=i.getPropertyValue(`content`);if(a===``||a===`none`)return;let o=ae();try{t.className=`${t.className} ${o}`}catch{return}let s=document.createElement(`style`);s.appendChild(fe(o,n,i,r)),t.appendChild(s)}function pe(e,t,n){w(e,t,`:before`,n),w(e,t,`:after`,n)}var T=`application/font-woff`,E=`image/jpeg`,me={woff:T,woff2:T,ttf:`application/font-truetype`,eot:`application/vnd.ms-fontobject`,png:`image/png`,jpg:E,jpeg:E,gif:`image/gif`,tiff:`image/tiff`,svg:`image/svg+xml`,webp:`image/webp`};function D(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:``}function O(e){return me[D(e).toLowerCase()]||``}function k(e){return e.split(/,/)[1]}function A(e){return e.search(/^(data:)/)!==-1}function j(e,t){return`data:${t};base64,${e}`}async function M(e,t,n){let r=await fetch(e,t);if(r.status===404)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{try{e(n({res:r,result:a.result}))}catch(e){t(e)}},a.readAsDataURL(i)})}var N={};function P(e,t,n){let r=e.replace(/\?.*/,``);return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,``)),t?`[${t}]${r}`:r}async function F(e,t,n){let r=P(e,t,n.includeQueryParams);if(N[r]!=null)return N[r];n.cacheBust&&(e+=(/\?/.test(e)?`&`:`?`)+new Date().getTime());let i;try{i=j(await M(e,n.fetchRequestInit,({res:e,result:n})=>(t||=e.headers.get(`Content-Type`)||``,k(n))),t)}catch(t){i=n.imagePlaceholder||``;let r=`Failed to fetch resource: ${e}`;t&&(r=typeof t==`string`?t:t.message),r&&console.warn(r)}return N[r]=i,i}async function I(e){let t=e.toDataURL();return t===`data:,`?e.cloneNode(!1):S(t)}async function L(e,t){if(e.currentSrc){let t=document.createElement(`canvas`),n=t.getContext(`2d`);return t.width=e.clientWidth,t.height=e.clientHeight,n?.drawImage(e,0,0,t.width,t.height),S(t.toDataURL())}let n=e.poster;return S(await F(n,O(n),t))}async function R(e,t){try{if(e?.contentDocument?.body)return await V(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function z(e,t){return C(e,HTMLCanvasElement)?I(e):C(e,HTMLVideoElement)?L(e,t):C(e,HTMLIFrameElement)?R(e,t):e.cloneNode(B(e))}var he=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SLOT`,B=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SVG`;async function ge(e,t,n){if(B(t))return t;let r=[];return r=he(e)&&e.assignedNodes?m(e.assignedNodes()):C(e,HTMLIFrameElement)&&e.contentDocument?.body?m(e.contentDocument.body.childNodes):m((e.shadowRoot??e).childNodes),r.length===0||C(e,HTMLVideoElement)||await r.reduce((e,r)=>e.then(()=>V(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}function _e(e,t,n){let r=t.style;if(!r)return;let i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):g(n).forEach(n=>{let a=i.getPropertyValue(n);n===`font-size`&&a.endsWith(`px`)&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),C(e,HTMLIFrameElement)&&n===`display`&&a===`inline`&&(a=`block`),n===`d`&&t.getAttribute(`d`)&&(a=`path(${t.getAttribute(`d`)})`),r.setProperty(n,a,i.getPropertyPriority(n))})}function ve(e,t){C(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),C(e,HTMLInputElement)&&t.setAttribute(`value`,e.value)}function ye(e,t){if(C(e,HTMLSelectElement)){let n=t,r=Array.from(n.children).find(t=>e.value===t.getAttribute(`value`));r&&r.setAttribute(`selected`,``)}}function be(e,t,n){return C(t,Element)&&(_e(e,t,n),pe(e,t,n),ve(e,t),ye(e,t)),t}async function xe(e,t){let n=e.querySelectorAll?e.querySelectorAll(`use`):[];if(n.length===0)return e;let r={};for(let i=0;i<n.length;i++){let a=n[i].getAttribute(`xlink:href`);if(a){let n=e.querySelector(a),i=document.querySelector(a);!n&&i&&!r[a]&&(r[a]=await V(i,t,!0))}}let i=Object.values(r);if(i.length){let t=`http://www.w3.org/1999/xhtml`,n=document.createElementNS(t,`svg`);n.setAttribute(`xmlns`,t),n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`,n.style.display=`none`;let r=document.createElementNS(t,`defs`);n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function V(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(e=>z(e,t)).then(n=>ge(e,n,t)).then(n=>be(e,n,t)).then(e=>xe(e,t))}var H=/url\((['"]?)([^'"]+?)\1\)/g,Se=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Ce=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function we(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,`\\$1`);return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,`g`)}function Te(e){let t=[];return e.replace(H,(e,n,r)=>(t.push(r),e)),t.filter(e=>!A(e))}async function Ee(e,t,n,r,i){try{let a=n?ie(t,n):t,o=O(t),s;return s=i?j(await i(a),o):await F(a,o,r),e.replace(we(t),`$1${s}$3`)}catch{}return e}function De(e,{preferredFontFormat:t}){return t?e.replace(Ce,e=>{for(;;){let[n,,r]=Se.exec(e)||[];if(!r)return``;if(r===t)return`src: ${n};`}}):e}function U(e){return e.search(H)!==-1}async function W(e,t,n){if(!U(e))return e;let r=De(e,n);return Te(r).reduce((e,r)=>e.then(e=>Ee(e,r,t,n)),Promise.resolve(r))}async function G(e,t,n){let r=t.style?.getPropertyValue(e);if(r){let i=await W(r,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function Oe(e,t){await G(`background`,e,t)||await G(`background-image`,e,t),await G(`mask`,e,t)||await G(`-webkit-mask`,e,t)||await G(`mask-image`,e,t)||await G(`-webkit-mask-image`,e,t)}async function ke(e,t){let n=C(e,HTMLImageElement);if((!n||A(e.src))&&(!C(e,SVGImageElement)||A(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await F(r,O(r),t);await new Promise((r,a)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...e)=>{try{r(t.onImageErrorHandler(...e))}catch(e){a(e)}}:a;let o=e;o.decode&&=r,o.loading===`lazy`&&(o.loading=`eager`),n?(e.srcset=``,e.src=i):e.href.baseVal=i})}async function Ae(e,t){let n=m(e.childNodes).map(e=>K(e,t));await Promise.all(n).then(()=>e)}async function K(e,t){C(e,Element)&&(await Oe(e,t),await ke(e,t),await Ae(e,t))}function je(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(e=>{n[e]=r[e]}),e}var q={};async function J(e){let t=q[e];return t??(t={url:e,cssText:await(await fetch(e)).text()},q[e]=t),t}async function Y(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let a=i.replace(r,`$1`);return a.startsWith(`https://`)||(a=new URL(a,e.url).href),M(a,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(i).then(()=>n)}function X(e){if(e==null)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,``),r=RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`,`gi`);for(;;){let e=r.exec(n);if(e===null)break;t.push(e[0])}n=n.replace(r,``);let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`,`gi`);for(;;){let e=i.exec(n);if(e===null){if(e=a.exec(n),e===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(e[0])}return t}async function Me(e,t){let n=[],r=[];return e.forEach(n=>{if(`cssRules`in n)try{m(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let a=i+1,o=e.href,s=J(o).then(e=>Y(e,t)).then(e=>X(e).forEach(e=>{try{n.insertRule(e,e.startsWith(`@import`)?a+=1:n.cssRules.length)}catch(t){console.error(`Error inserting rule from remote css`,{rule:e,error:t})}})).catch(e=>{console.error(`Error loading remote css`,e.toString())});r.push(s)}})}catch(i){let a=e.find(e=>e.href==null)||document.styleSheets[0];n.href!=null&&r.push(J(n.href).then(e=>Y(e,t)).then(e=>X(e).forEach(e=>{a.insertRule(e,a.cssRules.length)})).catch(e=>{console.error(`Error loading remote stylesheet`,e)})),console.error(`Error inlining remote css file`,i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if(`cssRules`in e)try{m(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}function Ne(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>U(e.style.getPropertyValue(`src`)))}async function Pe(e,t){if(e.ownerDocument==null)throw Error(`Provided element is not within a Document`);return Ne(await Me(m(e.ownerDocument.styleSheets),t))}function Z(e){return e.trim().replace(/["']/g,``)}function Fe(e){let t=new Set;function n(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(`,`).forEach(e=>{t.add(Z(e))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&n(e)})}return n(e),t}async function Q(e,t){let n=await Pe(e,t),r=Fe(e);return(await Promise.all(n.filter(e=>r.has(Z(e.style.fontFamily))).map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return W(e.cssText,n,t)}))).join(`
`)}async function Ie(e,t){let n=t.fontEmbedCSS==null?t.skipFonts?null:await Q(e,t):t.fontEmbedCSS;if(n){let t=document.createElement(`style`),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function Le(e,t={}){let{width:n,height:r}=b(e,t),i=await V(e,t,!0);return await Ie(i,t),await K(i,t),je(i,t),await le(i,n,r)}async function Re(e,t={}){let{width:n,height:r}=b(e,t),i=await S(await Le(e,t)),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=t.pixelRatio||oe(),c=t.canvasWidth||n,l=t.canvasHeight||r;return a.width=c*s,a.height=l*s,t.skipAutoScale||se(a),a.style.width=`${c}`,a.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function ze(e,t={}){return(await Re(e,t)).toDataURL()}function Be(e,t,n){let r=(e||n||`file`).replace(/[^a-zA-Z0-9._-]/g,`_`);return t?`${r}.${t}`:r}function Ve(e,t,n){$(new Blob([e],{type:`${n};charset=utf-8`}),t)}function He(e,t,n){$(new Blob([e.slice()],{type:n}),t)}function $(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),0)}var Ue=`PRAGMA foreign_keys = ON;

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  price REAL NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  ordered_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('paid', 'pending', 'shipped', 'cancelled'))
);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price REAL NOT NULL CHECK (unit_price >= 0)
);

INSERT INTO categories (id, name) VALUES
  (1, 'Ноутбуки'),
  (2, 'Смартфоны'),
  (3, 'Аксессуары'),
  (4, 'Аудио'),
  (5, 'Мониторы');

INSERT INTO products (id, name, category_id, price, stock) VALUES
  (1, 'Ноутбук Pro 14', 1, 89990, 12),
  (2, 'Ноутбук Air 13', 1, 64990, 8),
  (3, 'Ноутбук Game 16', 1, 119990, 5),
  (4, 'Смартфон X', 2, 54990, 20),
  (5, 'Смартфон Mini', 2, 39990, 14),
  (6, 'Смартфон Max', 2, 74990, 7),
  (7, 'Наушники Studio', 4, 12990, 30),
  (8, 'Наушники Air', 4, 8990, 40),
  (9, 'Колонка Mini', 4, 5990, 25),
  (10, 'Монитор 27', 5, 24990, 10),
  (11, 'Монитор 32', 5, 34990, 6),
  (12, 'Клавиатура Mech', 3, 7990, 22),
  (13, 'Мышь Pro', 3, 4490, 35),
  (14, 'Кабель USB-C', 3, 990, 100),
  (15, 'Чехол для смартфона', 3, 1990, 50);

INSERT INTO customers (id, name, email, city, created_at) VALUES
  (1, 'Анна Смирнова', 'anna@example.ru', 'Москва', '2025-11-04'),
  (2, 'Борис Иванов', 'boris@example.ru', 'Санкт-Петербург', '2025-12-12'),
  (3, 'Вера Кузнецова', 'vera@example.ru', 'Казань', '2026-01-08'),
  (4, 'Глеб Морозов', 'gleb@example.ru', 'Новосибирск', '2026-01-19'),
  (5, 'Дарья Волкова', 'darya@example.ru', 'Москва', '2026-02-02'),
  (6, 'Егор Соколов', 'egor@example.ru', 'Екатеринбург', '2026-02-14'),
  (7, 'Жанна Лебедева', 'zhanna@example.ru', 'Санкт-Петербург', '2026-02-27'),
  (8, 'Захар Новиков', 'zahar@example.ru', 'Казань', '2026-03-05'),
  (9, 'Ирина Павлова', 'irina@example.ru', 'Москва', '2026-03-21'),
  (10, 'Кирилл Орлов', 'kirill@example.ru', 'Новосибирск', '2026-04-02'),
  (11, 'Лариса Фёдорова', 'larisa@example.ru', 'Самара', '2026-04-18'),
  (12, 'Максим Белов', 'maksim@example.ru', 'Екатеринбург', '2026-05-01'),
  (13, 'Нина Григорьева', 'nina@example.ru', 'Москва', '2026-05-17'),
  (14, 'Олег Тарасов', 'oleg@example.ru', 'Санкт-Петербург', '2026-06-03'),
  (15, 'Полина Ершова', 'polina@example.ru', 'Казань', '2026-06-21');

INSERT INTO orders (id, customer_id, ordered_at, status) VALUES
  (1, 1, '2026-01-12', 'paid'),
  (2, 2, '2026-01-18', 'paid'),
  (3, 1, '2026-02-03', 'shipped'),
  (4, 3, '2026-02-14', 'pending'),
  (5, 4, '2026-02-20', 'paid'),
  (6, 5, '2026-03-02', 'paid'),
  (7, 2, '2026-03-11', 'cancelled'),
  (8, 6, '2026-03-18', 'paid'),
  (9, 7, '2026-04-01', 'paid'),
  (10, 1, '2026-04-09', 'shipped'),
  (11, 8, '2026-04-15', 'pending'),
  (12, 9, '2026-05-03', 'paid'),
  (13, 4, '2026-05-21', 'paid'),
  (14, 10, '2026-06-02', 'cancelled'),
  (15, 5, '2026-06-10', 'paid'),
  (16, 2, '2026-06-18', 'shipped'),
  (17, 11, '2026-07-01', 'paid'),
  (18, 1, '2026-07-14', 'paid'),
  (19, 12, '2026-08-05', 'pending'),
  (20, 7, '2026-08-19', 'paid'),
  (21, 13, '2026-09-02', 'paid'),
  (22, 3, '2026-09-16', 'shipped'),
  (23, 4, '2026-10-01', 'paid'),
  (24, 10, '2026-10-08', 'paid');

INSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES
  (1, 1, 1, 1, 89990),
  (2, 1, 13, 2, 4490),
  (3, 2, 4, 1, 54990),
  (4, 2, 7, 1, 12990),
  (5, 3, 2, 1, 64990),
  (6, 3, 12, 1, 7990),
  (7, 4, 5, 1, 39990),
  (8, 5, 10, 2, 24990),
  (9, 5, 14, 2, 990),
  (10, 6, 6, 1, 74990),
  (11, 6, 8, 1, 8990),
  (12, 7, 9, 1, 5990),
  (13, 8, 11, 1, 34990),
  (14, 8, 13, 1, 4490),
  (15, 9, 7, 2, 12990),
  (16, 10, 15, 1, 1990),
  (17, 10, 14, 1, 990),
  (18, 11, 1, 1, 89990),
  (19, 12, 4, 1, 54990),
  (20, 12, 8, 2, 8990),
  (21, 13, 3, 1, 119990),
  (22, 14, 12, 1, 7990),
  (23, 15, 5, 2, 39990),
  (24, 15, 13, 1, 4490),
  (25, 16, 10, 1, 24990),
  (26, 17, 9, 2, 5990),
  (27, 18, 1, 1, 89990),
  (28, 18, 7, 1, 12990),
  (29, 19, 2, 1, 64990),
  (30, 20, 6, 1, 74990),
  (31, 20, 15, 2, 1990),
  (32, 21, 11, 2, 34990),
  (33, 22, 4, 1, 54990),
  (34, 22, 14, 1, 990),
  (35, 23, 8, 1, 8990),
  (36, 23, 12, 1, 7990),
  (37, 24, 3, 1, 119990),
  (38, 24, 10, 1, 24990),
  (39, 9, 9, 1, 5990),
  (40, 17, 14, 3, 990);

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(ordered_at);
CREATE INDEX idx_items_order ON order_items(order_id);
CREATE INDEX idx_items_product ON order_items(product_id);
`,We=`-- Выручка по категориям среди оплаченных заказов.
-- Сначала прочитайте запрос, затем нажмите «Выполнить».
SELECT
  c.name AS category,
  COUNT(DISTINCT o.id) AS orders,
  SUM(oi.quantity * oi.unit_price) AS revenue
FROM categories AS c
JOIN products AS p ON p.category_id = c.id
JOIN order_items AS oi ON oi.product_id = p.id
JOIN orders AS o ON o.id = oi.order_id
WHERE o.status = 'paid'
GROUP BY c.name
ORDER BY revenue DESC;
`,Ge=`Интернет-магазин`;export{Ve as a,re as c,c as d,He as i,ee as l,Ue as n,Be as o,We as r,ze as s,Ge as t,l as u};