import{O as e,_ as t,c as n,l as r,lt as i,o as a}from"./runtime-core.esm-bundler.nu_UAaCd.js";import{t as o}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{a as s,c,i as l,n as u,o as ee,r as te,s as ne}from"./share.C1W2XaKG.js";import{r as d}from"./use-toasts.DHe7LhTi.js";import{i as re}from"./sql-database.CQe7mSfq.js";import{o as ie,t as ae}from"./sql-results.BGrDTEXw.js";var oe=d({name:`database-zap`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]}),se=d({name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]}),ce=d({name:`image-down`,size:24,node:[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19 3 3v-5.5`,key:`9ldu5r`}],[`path`,{d:`m17 22 3-3`,key:`1nkfve`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]}),le=t({__name:`SetupEditor`,props:{modelValue:{},label:{},placeholder:{},inputId:{},hideDescription:{type:Boolean}},emits:[`update:modelValue`],setup(e,{expose:t,emit:n}){t();let r=n;function i(e){let t=e.target;r(`update:modelValue`,t.value)}let a={emit:r,onInput:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),f={class:`sql-schema-host`},p=[`for`],ue=[`id`,`value`,`placeholder`],de={key:0,class:`mt-2 label`};function fe(t,o,s,c,l,u){return e(),r(`div`,f,[a(`label`,{for:s.inputId??`sql-schema`,class:`label-micro`},i(s.label??`Схема SQL`),9,p),a(`textarea`,{id:s.inputId??`sql-schema`,class:`sql-schema-input`,value:s.modelValue,spellcheck:`false`,autocomplete:`off`,autocapitalize:`off`,placeholder:s.placeholder??`CREATE TABLE …
INSERT INTO …`,onInput:c.onInput},null,40,ue),s.hideDescription===!0?n(``,!0):(e(),r(`p`,de,` Скрипт, который строит и заполняет базу данных. Вставьте схему или дамп из любой базы SQLite и нажмите Построить базу. Он выполняется в этом браузере, в памяти. `))])}var pe=o(le,[[`render`,fe]]);function me(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement(`base`),i=n.createElement(`a`);return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}var he=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function m(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}var h=null;function g(e={}){return h||(e.includeStyleProperties?(h=e.includeStyleProperties,h):(h=m(window.getComputedStyle(document.documentElement)),h))}function _(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace(`px`,``)):0}function ge(e){let t=_(e,`border-left-width`),n=_(e,`border-right-width`);return e.clientWidth+t+n}function _e(e){let t=_(e,`border-top-width`),n=_(e,`border-bottom-width`);return e.clientHeight+t+n}function v(e,t={}){return{width:t.width||ge(e),height:t.height||_e(e)}}function ve(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var y=16384;function ye(e){(e.width>y||e.height>y)&&(e.width>y&&e.height>y?e.width>e.height?(e.height*=y/e.width,e.width=y):(e.width*=y/e.height,e.height=y):e.width>y?(e.height*=y/e.width,e.width=y):(e.width*=y/e.height,e.height=y))}function b(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin=`anonymous`,r.decoding=`async`,r.src=e})}async function be(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function xe(e,t,n){let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`),a=document.createElementNS(r,`foreignObject`);return i.setAttribute(`width`,`${t}`),i.setAttribute(`height`,`${n}`),i.setAttribute(`viewBox`,`0 0 ${t} ${n}`),a.setAttribute(`width`,`100%`),a.setAttribute(`height`,`100%`),a.setAttribute(`x`,`0`),a.setAttribute(`y`,`0`),a.setAttribute(`externalResourcesRequired`,`true`),i.appendChild(a),a.appendChild(e),be(i)}var x=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||x(n,t)};function Se(e){let t=e.getPropertyValue(`content`);return`${e.cssText} content: '${t.replace(/'|"/g,``)}';`}function Ce(e,t){return g(t).map(t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)}function we(e,t,n,r){let i=`.${e}:${t}`,a=n.cssText?Se(n):Ce(n,r);return document.createTextNode(`${i}{${a}}`)}function S(e,t,n,r){let i=window.getComputedStyle(e,n),a=i.getPropertyValue(`content`);if(a===``||a===`none`)return;let o=he();try{t.className=`${t.className} ${o}`}catch{return}let s=document.createElement(`style`);s.appendChild(we(o,n,i,r)),t.appendChild(s)}function Te(e,t,n){S(e,t,`:before`,n),S(e,t,`:after`,n)}var C=`application/font-woff`,w=`image/jpeg`,T={woff:C,woff2:C,ttf:`application/font-truetype`,eot:`application/vnd.ms-fontobject`,png:`image/png`,jpg:w,jpeg:w,gif:`image/gif`,tiff:`image/tiff`,svg:`image/svg+xml`,webp:`image/webp`};function E(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:``}function D(e){return T[E(e).toLowerCase()]||``}function O(e){return e.split(/,/)[1]}function k(e){return e.search(/^(data:)/)!==-1}function A(e,t){return`data:${t};base64,${e}`}async function j(e,t,n){let r=await fetch(e,t);if(r.status===404)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{try{e(n({res:r,result:a.result}))}catch(e){t(e)}},a.readAsDataURL(i)})}var M={};function Ee(e,t,n){let r=e.replace(/\?.*/,``);return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,``)),t?`[${t}]${r}`:r}async function N(e,t,n){let r=Ee(e,t,n.includeQueryParams);if(M[r]!=null)return M[r];n.cacheBust&&(e+=(/\?/.test(e)?`&`:`?`)+new Date().getTime());let i;try{i=A(await j(e,n.fetchRequestInit,({res:e,result:n})=>(t||=e.headers.get(`Content-Type`)||``,O(n))),t)}catch(t){i=n.imagePlaceholder||``;let r=`Failed to fetch resource: ${e}`;t&&(r=typeof t==`string`?t:t.message),r&&console.warn(r)}return M[r]=i,i}async function De(e){let t=e.toDataURL();return t===`data:,`?e.cloneNode(!1):b(t)}async function Oe(e,t){if(e.currentSrc){let t=document.createElement(`canvas`),n=t.getContext(`2d`);return t.width=e.clientWidth,t.height=e.clientHeight,n?.drawImage(e,0,0,t.width,t.height),b(t.toDataURL())}let n=e.poster;return b(await N(n,D(n),t))}async function ke(e,t){try{if(e?.contentDocument?.body)return await F(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Ae(e,t){return x(e,HTMLCanvasElement)?De(e):x(e,HTMLVideoElement)?Oe(e,t):x(e,HTMLIFrameElement)?ke(e,t):e.cloneNode(P(e))}var je=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SLOT`,P=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SVG`;async function Me(e,t,n){if(P(t))return t;let r=[];return r=je(e)&&e.assignedNodes?m(e.assignedNodes()):x(e,HTMLIFrameElement)&&e.contentDocument?.body?m(e.contentDocument.body.childNodes):m((e.shadowRoot??e).childNodes),r.length===0||x(e,HTMLVideoElement)||await r.reduce((e,r)=>e.then(()=>F(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}function Ne(e,t,n){let r=t.style;if(!r)return;let i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):g(n).forEach(n=>{let a=i.getPropertyValue(n);n===`font-size`&&a.endsWith(`px`)&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),x(e,HTMLIFrameElement)&&n===`display`&&a===`inline`&&(a=`block`),n===`d`&&t.getAttribute(`d`)&&(a=`path(${t.getAttribute(`d`)})`),r.setProperty(n,a,i.getPropertyPriority(n))})}function Pe(e,t){x(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),x(e,HTMLInputElement)&&t.setAttribute(`value`,e.value)}function Fe(e,t){if(x(e,HTMLSelectElement)){let n=t,r=Array.from(n.children).find(t=>e.value===t.getAttribute(`value`));r&&r.setAttribute(`selected`,``)}}function Ie(e,t,n){return x(t,Element)&&(Ne(e,t,n),Te(e,t,n),Pe(e,t),Fe(e,t)),t}async function Le(e,t){let n=e.querySelectorAll?e.querySelectorAll(`use`):[];if(n.length===0)return e;let r={};for(let i=0;i<n.length;i++){let a=n[i].getAttribute(`xlink:href`);if(a){let n=e.querySelector(a),i=document.querySelector(a);!n&&i&&!r[a]&&(r[a]=await F(i,t,!0))}}let i=Object.values(r);if(i.length){let t=`http://www.w3.org/1999/xhtml`,n=document.createElementNS(t,`svg`);n.setAttribute(`xmlns`,t),n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`,n.style.display=`none`;let r=document.createElementNS(t,`defs`);n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function F(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(e=>Ae(e,t)).then(n=>Me(e,n,t)).then(n=>Ie(e,n,t)).then(e=>Le(e,t))}var I=/url\((['"]?)([^'"]+?)\1\)/g,Re=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,ze=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Be(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,`\\$1`);return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,`g`)}function Ve(e){let t=[];return e.replace(I,(e,n,r)=>(t.push(r),e)),t.filter(e=>!k(e))}async function He(e,t,n,r,i){try{let a=n?me(t,n):t,o=D(t),s;return s=i?A(await i(a),o):await N(a,o,r),e.replace(Be(t),`$1${s}$3`)}catch{}return e}function Ue(e,{preferredFontFormat:t}){return t?e.replace(ze,e=>{for(;;){let[n,,r]=Re.exec(e)||[];if(!r)return``;if(r===t)return`src: ${n};`}}):e}function L(e){return e.search(I)!==-1}async function R(e,t,n){if(!L(e))return e;let r=Ue(e,n);return Ve(r).reduce((e,r)=>e.then(e=>He(e,r,t,n)),Promise.resolve(r))}async function z(e,t,n){let r=t.style?.getPropertyValue(e);if(r){let i=await R(r,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function We(e,t){await z(`background`,e,t)||await z(`background-image`,e,t),await z(`mask`,e,t)||await z(`-webkit-mask`,e,t)||await z(`mask-image`,e,t)||await z(`-webkit-mask-image`,e,t)}async function Ge(e,t){let n=x(e,HTMLImageElement);if((!n||k(e.src))&&(!x(e,SVGImageElement)||k(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await N(r,D(r),t);await new Promise((r,a)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...e)=>{try{r(t.onImageErrorHandler(...e))}catch(e){a(e)}}:a;let o=e;o.decode&&=r,o.loading===`lazy`&&(o.loading=`eager`),n?(e.srcset=``,e.src=i):e.href.baseVal=i})}async function Ke(e,t){let n=m(e.childNodes).map(e=>B(e,t));await Promise.all(n).then(()=>e)}async function B(e,t){x(e,Element)&&(await We(e,t),await Ge(e,t),await Ke(e,t))}function qe(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(e=>{n[e]=r[e]}),e}var V={};async function H(e){let t=V[e];return t??(t={url:e,cssText:await(await fetch(e)).text()},V[e]=t),t}async function U(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let a=i.replace(r,`$1`);return a.startsWith(`https://`)||(a=new URL(a,e.url).href),j(a,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(i).then(()=>n)}function W(e){if(e==null)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,``),r=RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`,`gi`);for(;;){let e=r.exec(n);if(e===null)break;t.push(e[0])}n=n.replace(r,``);let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`,`gi`);for(;;){let e=i.exec(n);if(e===null){if(e=a.exec(n),e===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(e[0])}return t}async function Je(e,t){let n=[],r=[];return e.forEach(n=>{if(`cssRules`in n)try{m(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let a=i+1,o=e.href,s=H(o).then(e=>U(e,t)).then(e=>W(e).forEach(e=>{try{n.insertRule(e,e.startsWith(`@import`)?a+=1:n.cssRules.length)}catch(t){console.error(`Error inserting rule from remote css`,{rule:e,error:t})}})).catch(e=>{console.error(`Error loading remote css`,e.toString())});r.push(s)}})}catch(i){let a=e.find(e=>e.href==null)||document.styleSheets[0];n.href!=null&&r.push(H(n.href).then(e=>U(e,t)).then(e=>W(e).forEach(e=>{a.insertRule(e,a.cssRules.length)})).catch(e=>{console.error(`Error loading remote stylesheet`,e)})),console.error(`Error inlining remote css file`,i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if(`cssRules`in e)try{m(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}function Ye(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>L(e.style.getPropertyValue(`src`)))}async function Xe(e,t){if(e.ownerDocument==null)throw Error(`Provided element is not within a Document`);return Ye(await Je(m(e.ownerDocument.styleSheets),t))}function G(e){return e.trim().replace(/["']/g,``)}function Ze(e){let t=new Set;function n(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(`,`).forEach(e=>{t.add(G(e))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&n(e)})}return n(e),t}async function Qe(e,t){let n=await Xe(e,t),r=Ze(e);return(await Promise.all(n.filter(e=>r.has(G(e.style.fontFamily))).map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return R(e.cssText,n,t)}))).join(`
`)}async function $e(e,t){let n=t.fontEmbedCSS==null?t.skipFonts?null:await Qe(e,t):t.fontEmbedCSS;if(n){let t=document.createElement(`style`),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function et(e,t={}){let{width:n,height:r}=v(e,t),i=await F(e,t,!0);return await $e(i,t),await B(i,t),qe(i,t),await xe(i,n,r)}async function tt(e,t={}){let{width:n,height:r}=v(e,t),i=await b(await et(e,t)),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=t.pixelRatio||ve(),c=t.canvasWidth||n,l=t.canvasHeight||r;return a.width=c*s,a.height=l*s,t.skipAutoScale||ye(a),a.style.width=`${c}`,a.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function K(e,t={}){return(await tt(e,t)).toDataURL()}function q(e,t,n){let r=(e||n||`file`).replace(/[^a-zA-Z0-9._-]/g,`_`);return t?`${r}.${t}`:r}function nt(e,t,n){Y(new Blob([e],{type:`${n};charset=utf-8`}),t)}function J(e,t,n){Y(new Blob([e.slice()],{type:n}),t)}function Y(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),0)}var X={narrow:640,wide:960,full:1280},rt={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};function Z(e){return e===`paper`?`#fffdf8`:e}function Q(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function it(e){return`<table class="sql-export-table"><thead><tr>${e.columns.map(e=>`<th scope="col">${Q(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td${e===null?` class="sql-export-null"`:``}>${Q(ie(e))}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`}function at(e,t){let n=Z(t.background),r=t.background===`transparent`,i=X[t.contain]??X.wide,a=document.createElement(`div`);a.className=`sql-export-root`,a.style.minHeight=`240px`,a.style.width=`fit-content`,a.style.boxSizing=`border-box`,a.style.background=r?`transparent`:n;let o=document.createElement(`div`);o.className=`sql-export-frame`,o.style.width=`${i}px`,o.style.maxWidth=`100%`,o.style.boxSizing=`border-box`,o.style.padding=`${t.padding}px`,o.style.background=r?`transparent`:n,o.innerHTML=e,a.append(o);let s=document.createElement(`style`);return s.textContent=ft,a.insertBefore(s,a.firstChild),a}async function ot(e,t,n){let r=Z(n.background),i=n.background===`transparent`;e.style.position=`fixed`,e.style.left=`-100000px`,e.style.top=`0`,document.body.append(e);try{e.style.position=`static`,e.style.left=`auto`,e.style.top=`auto`,e.offsetHeight,await new Promise(e=>requestAnimationFrame(()=>e()));let a=await K(e,i?{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0}:{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0,backgroundColor:r}),o=document.createElement(`a`);o.href=a,o.download=q(t,`png`),o.rel=`noopener`,document.body.append(o),o.click(),o.remove()}finally{e.remove()}}async function st(e,t){await ot(at(it(e),t),t.filename,t)}var ct=`database`,lt=`application/vnd.sqlite3`;function ut(e,t){return q(e,t,ct)}function dt(e,t,n){let r=re(e);if(r.length===0)throw Error(`SQLite produced no bytes for this database, so nothing was saved.`);let i=ut(t,n);return J(r,i,lt),i}var ft=`
.sql-export-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
}
.sql-export-frame {
  box-sizing: border-box;
  flex: none;
}
.sql-export-block + .sql-export-block { margin-top: 22px; }
.sql-export-label {
  margin: 0 0 6px;
  font-size: 12px;
  font-style: italic;
  color: #746a5c;
  letter-spacing: 0.01em;
}
.sql-export-query {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: #302d29;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.sql-export-table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}
.sql-export-table th {
  background: #f4efe6;
  color: #302d29;
  font-weight: 500;
  text-align: left;
  padding: 8px 12px;
  border-bottom: 1px solid #e4dcce;
  /* A header is often a whole expression, and a header that cannot wrap would
     push the table past the padding on one side. It wraps, at a word where it
     can and inside a word where it cannot. */
  overflow-wrap: anywhere;
  vertical-align: bottom;
}
.sql-export-table td {
  padding: 7px 12px;
  border-bottom: 1px solid rgba(228, 220, 206, 0.6);
  color: #302d29;
  vertical-align: top;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.sql-export-table tbody tr:last-child td { border-bottom: none; }
.sql-export-table tbody tr:nth-child(even) { background: rgba(244, 239, 230, 0.45); }
.sql-export-null { color: #746a5c; font-style: italic; }
`;function $(e){return e===null||typeof e==`number`||typeof e==`string`?e:typeof e==`bigint`?e.toString():{$blob:ee(e)}}function pt(e){if(e===null||typeof e==`string`||typeof e==`number`)return e;if(typeof e==`object`&&`$blob`in e&&typeof e.$blob==`string`)try{return l(e.$blob)}catch{return null}return null}function mt(e){return e===null?null:{durationMs:e.durationMs,error:e.error,statements:e.statements.map(e=>({sql:e.sql,columns:e.columns,rows:e.rows.map(e=>e.map($)),changes:e.changes}))}}function ht(e){if(typeof e!=`object`||!e)return null;let t=e;if(!Array.isArray(t.statements))return null;let n=[];for(let e of t.statements){if(typeof e!=`object`||!e)return null;let t=e;if(!Array.isArray(t.columns)||!Array.isArray(t.rows))return null;let r=[];for(let e of t.rows){if(!Array.isArray(e))return null;r.push(e.map(pt))}n.push({sql:typeof t.sql==`string`?t.sql:``,columns:t.columns.filter(e=>typeof e==`string`),rows:r,changes:typeof t.changes==`number`?t.changes:0})}return{statements:n,durationMs:Number(t.durationMs)||0,error:t.error??null}}function gt(e,t){return te(c(e),t)}function _t(e){let t=ne(e),n;try{n=s(t)}catch(e){throw new u(`invalid-payload`,e instanceof Error?e.message:`The shared payload could not be read.`)}if(typeof n!=`object`||!n||Array.isArray(n))throw new u(`invalid-payload`,`The shared payload is not a link from this editor.`);let r=n;if(r.version!==1)throw new u(`unsupported-version`,`This link was shared by a different version of the editor (payload version ${String(r.version)}).`);if(typeof r.sql!=`string`||typeof r.setup!=`string`)throw new u(`invalid-payload`,`The shared payload is missing the editor state.`);let i=r.format;if(typeof i!=`string`||!ae.includes(i))throw new u(`invalid-payload`,`The shared payload names a result format this editor does not have.`);let a=vt(r.png);return{version:1,sql:r.sql,setup:r.setup,format:i,results:r.results===null?null:ht(r.results),png:a}}function vt(e){let t={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};if(typeof e!=`object`||!e)return t;let n=e;return{filename:typeof n.filename==`string`&&n.filename.length>0?n.filename:t.filename,scale:typeof n.scale==`number`?n.scale:t.scale,background:typeof n.background==`string`?n.background:t.background,padding:typeof n.padding==`number`?n.padding:t.padding,contain:typeof n.contain==`string`?n.contain:t.contain}}var yt=`PRAGMA foreign_keys = ON;

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
`,bt=`-- Выручка по категориям среди оплаченных заказов.
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
`,xt=`Интернет-магазин`;export{oe as _,mt as a,dt as c,nt as d,q as f,se as g,ce as h,gt as i,st as l,pe as m,yt as n,_t as o,K as p,bt as r,rt as s,xt as t,J as u};