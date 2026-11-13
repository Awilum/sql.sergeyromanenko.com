const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/TrainerReferenceDialog.DxA9m7hX.js","_astro/runtime-core.esm-bundler.Dcxww3Pe.js","_astro/runtime-dom.esm-bundler.By7YIEGt.js","_astro/AppDialog.B_SqshoT.js","_astro/_plugin-vue_export-helper.BDNMzG2s.js","_astro/clipboard._lASIDAv.js"])))=>i.map(i=>d[i]);
import{B as e,D as t,N as n,O as r,_ as i,a,at as o,c as s,g as c,h as l,l as u,m as d,n as f,o as p,s as m,w as h,z as g}from"./runtime-core.esm-bundler.Dcxww3Pe.js";import{a as _,i as v,n as y,r as b,t as x}from"./CodeEditor.CriGoAnm.js";import{n as S,r as ee,t as te}from"./plural-ru.BrtHk6ut.js";import{t as C}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{a as ne,c as re,d as ie,f as ae,i as oe,l as se,n as ce,o as le,r as w,s as ue,t as T,u as de}from"./ResultsTable.D4xV3iMW.js";import{C as fe,S as pe,T as me,_ as E,b as D,v as O,w as k,x as he,y as ge}from"./editorTheme.BK5Fi_AM.js";import{t as _e}from"./clipboard._lASIDAv.js";import{t as A}from"./createLucideIcon.LxVZB8R_.js";import{t as j}from"./preload-helper.BEd-4ws3.js";var ve=A({name:`database-zap`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]}),M=A({name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]}),N=A({name:`image-down`,size:24,node:[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19 3 3v-5.5`,key:`9ldu5r`}],[`path`,{d:`m17 22 3-3`,key:`1nkfve`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]}),ye=i({__name:`DatabaseExplorer`,props:{tables:{}},emits:[`select`],setup(e,{expose:t,emit:n}){t();let r={emit:n,get pluralizeRu(){return S}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),P={class:`flex flex-col gap-2`},be={key:0,class:`label`},F={class:`sql-explorer-head`},I={class:`sql-explorer-details`},L={class:`sql-explorer-summary`},xe={class:`font-mono text-[0.875rem] text-ink`},Se={class:`label-micro`},Ce={key:0,class:`sql-schema`},we={class:`font-mono text-[0.8125rem] text-ink`},Te={class:`meta-mono`},Ee={class:`label`},R={key:1,class:`label mt-2`},De=[`onClick`],Oe={class:`sr-only`};function ke(e,n,i,a,c,l){return t(),u(`div`,P,[i.tables.length===0?(t(),u(`p`,be,` Таблиц пока нет. Загрузите пример датасета или напишите CREATE TABLE и выполните его. `)):s(``,!0),(t(!0),u(f,null,r(i.tables,e=>(t(),u(`div`,{key:e.name,class:`sql-explorer-table`},[p(`div`,F,[p(`details`,I,[p(`summary`,L,[p(`span`,xe,o(e.name),1),p(`span`,Se,o(e.kind)+` · `+o(e.columns.length)+` `+o(e.columns.length)+` `+o(a.pluralizeRu(e.columns.length,[`столбец`,`столбца`,`столбцов`])),1)]),e.columns.length>0?(t(),u(`table`,Ce,[n[0]||=p(`thead`,null,[p(`tr`,null,[p(`th`,{scope:`col`},`Столбец`),p(`th`,{scope:`col`},`Тип`),p(`th`,{scope:`col`},`Ограничения`)])],-1),p(`tbody`,null,[(t(!0),u(f,null,r(e.columns,e=>(t(),u(`tr`,{key:e.name},[p(`td`,we,o(e.name),1),p(`td`,Te,o(e.type===``?`—`:e.type),1),p(`td`,Ee,[e.primaryKey?(t(),u(f,{key:0},[d(`первичный ключ`)],64)):s(``,!0),e.primaryKey&&e.notNull?(t(),u(f,{key:1},[d(` · `)],64)):s(``,!0),e.notNull?(t(),u(f,{key:2},[d(`не null`)],64)):s(``,!0),e.defaultValue===null?s(``,!0):(t(),u(f,{key:3},[d(o(e.primaryKey||e.notNull?` · `:``)+`значение по умолчанию `+o(e.defaultValue),1)],64))])]))),128))])])):(t(),u(`p`,R,o(e.kind)+` не содержит собственных столбцов.`,1))]),p(`button`,{type:`button`,class:`btn btn-ghost btn-sm sql-explorer-action`,onClick:t=>a.emit(`select`,e.name)},[n[1]||=d(` Запрос`,-1),p(`span`,Oe,o(e.name),1)],8,De)])]))),128))])}var z=C(ye,[[`render`,ke]]),Ae=i({__name:`ResultsText`,props:{text:{}},setup(e,{expose:t}){t();let n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),je={class:`sql-text-scroll h-[22rem] xl:h-[30rem]`},Me={class:`sql-text-view`};function Ne(e,n,r,i,a,s){return t(),u(`div`,je,[p(`pre`,Me,o(r.text),1)])}var Pe=C(Ae,[[`render`,Ne]]),Fe=i({__name:`SetupEditor`,props:{modelValue:{}},emits:[`update:modelValue`],setup(e,{expose:t,emit:n}){t();let r=n;function i(e){let t=e.target;r(`update:modelValue`,t.value)}let a={emit:r,onInput:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Ie={class:`sql-schema-host`},Le=[`value`];function Re(e,n,r,i,a,o){return t(),u(`div`,Ie,[n[0]||=p(`label`,{for:`sql-schema`,class:`label-micro`},`Схема SQL`,-1),p(`textarea`,{id:`sql-schema`,class:`sql-schema-input`,value:r.modelValue,spellcheck:`false`,autocomplete:`off`,autocapitalize:`off`,placeholder:`CREATE TABLE …
INSERT INTO …`,onInput:i.onInput},null,40,Le),n[1]||=p(`p`,{class:`mt-2 label`},` Скрипт, который строит и заполняет базу данных. Вставьте схему или дамп из любой базы SQLite и нажмите Построить базу. Он выполняется в этом браузере, в памяти. `,-1)])}var ze=C(Fe,[[`render`,Re]]),Be=`-- The sample dataset: a players table, as a game backend might store it.
CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY,                  -- Unique player ID
  nickname TEXT NOT NULL,                  -- In-game nickname
  email TEXT NOT NULL,                     -- Player email
  city TEXT NOT NULL,                      -- City the player is from
  country TEXT NOT NULL,                   -- Country the player is from
  level INTEGER NOT NULL,                  -- Player level
  rating INTEGER NOT NULL,                 -- Player rating
  rank_title TEXT,                         -- Rank title: Bronze, Silver, Gold, Diamond, Master
  guild TEXT,                              -- Guild or clan
  wins INTEGER NOT NULL DEFAULT 0,         -- Wins
  losses INTEGER NOT NULL DEFAULT 0,       -- Losses
  win_rate REAL,                           -- Win percentage
  last_login DATE,                         -- Last login
  registration_date DATE NOT NULL          -- Registration date
);

CREATE INDEX IF NOT EXISTS idx_players_guild ON players(guild);
CREATE INDEX IF NOT EXISTS idx_players_rating ON players(rating);

INSERT INTO players

(nickname, email, city, country, level, rating, rank_title, guild, wins, losses,
win_rate, last_login, registration_date)

VALUES

('AlphaKnight', 'alpha_knight@example.co.th', 'Bangkok', 'Thailand', 45, 2100, 'Gold',
'Erafia Griffins', 120, 80, 60.00, '2026-06-20', '2025-01-15'),

('CatQueen', 'cat_queen@example.jp', 'Tokyo', 'Japan', 12, 850, 'Bronze',
NULL, 15, 30, 33.33, '2026-06-19', '2026-05-10'),

('ThunderStrike', 'thunder_strike@example.jp', 'Osaka', 'Japan', 89, 3450,
'Diamond', 'Nighon Black Dragons', 540, 410, 56.84, '2026-06-21',
'2024-08-22'),

('AliceFox', 'alice_fox99@example.com.my', 'Kuala Lumpur', 'Malaysia', 31, 1500,
'Silver', 'Avlee Golden Unicorns', 75, 70, 51.72, '2026-06-15', '2025-11-03'),

('MaxDrive', 'max_drive@example.co.th', 'Chiang Mai', 'Thailand', 55, 2400, 'Gold',
'Erafia Griffins', 210, 180, 53.85, '2026-06-21', '2025-03-14'),

('NightWolf', 'night_wolf@example.vn', 'Hanoi', 'Vietnam', 73, 2900, 'Platinum',
'Inferno Cerberi', 380, 310, 55.07, '2026-06-18', '2024-12-01'),

('StarDust', 'star_dust@example.vn', 'Ho Chi Minh City', 'Vietnam', 22, 1150,
'Silver', NULL, 42, 45, 48.28, '2026-06-11', '2026-02-18'),

('SteelKnight', 'steel_knight@example.vn', 'Da Nang', 'Vietnam', 61, 2650,
'Platinum', 'Nighon Black Dragons', 290, 240, 54.72, '2026-06-20',
'2025-05-20'),

('CyberKing', 'cyber_king@example.co.id', 'Jakarta', 'Indonesia', 40, 1950, 'Gold',
'Tatalia Hydras', 165, 140, 54.10, '2026-06-17', '2025-07-07'),

('PhoenixRF', 'phoenix_rf@example.vn', 'Hue', 'Vietnam', 50, 2200, 'Gold',
'Avlee Golden Unicorns', 200, 190, 51.28, '2026-06-19', '2025-04-12'),

('GnomeMiner', 'gnome_miner@example.co.id', 'Surabaya', 'Indonesia', 34, 1600,
'Silver', 'Inferno Cerberi', 95, 88, 51.91, '2026-06-14', '2025-09-30'),

('SiberianLion', 'siberian_lion@example.jp', 'Sapporo', 'Japan', 82, 3200,
'Diamond', 'Nighon Black Dragons', 490, 420, 53.85, '2026-06-21',
'2024-09-15'),

('WindChange', 'wind_change@example.vn', 'Nha Trang', 'Vietnam', 18, 980, 'Bronze',
NULL, 25, 35, 41.67, '2026-06-16', '2026-04-01'),

('SilentStream', 'silent_stream@example.jp', 'Yokohama', 'Japan', 28, 1350,
'Silver', 'Avlee Golden Unicorns', 58, 62, 48.33, '2026-06-12', '2025-12-10'),

('BalticStorm', 'baltic_storm@example.com.my', 'Ipoh', 'Malaysia', 67, 2800,
'Platinum', 'Erafia Griffins', 320, 280, 53.33, '2026-06-20',
'2025-02-28'),

('PrinceX', 'prince_x@example.vn', 'Can Tho', 'Vietnam', 5, 500, 'Bronze', NULL, 2,
8, 20.00, '2026-06-05', '2026-06-01'),

('ForestHunter', 'forest_hunter@example.jp', 'Nagoya', 'Japan', 70, 2950,
'Platinum', 'Inferno Cerberi', 350, 300, 53.85, '2026-06-21',
'2024-11-11'),

('AmurTiger', 'amur_tiger@example.co.id', 'Bandung', 'Indonesia', 58, 2500, 'Gold',
'Krewlod Thunderbirds', 240, 210, 53.33, '2026-06-19', '2025-06-14'),

('BlackSea', 'black_sea@example.co.th', 'Phuket', 'Thailand', 39, 1800, 'Gold', NULL,
130, 120, 52.00, '2026-06-18', '2025-08-19'),

('RiverMaid', 'river_maid@example.com.my', 'Johor Bahru', 'Malaysia', 25, 1200,
'Silver', 'Avlee Golden Unicorns', 50, 48, 51.02, '2026-06-14', '2026-01-25'),

('SeaWolf', 'sea_wolf@example.co.th', 'Pattaya', 'Thailand', 48, 2050, 'Gold',
'Erafia Griffins', 170, 155, 52.31, '2026-06-20', '2025-05-05'),

('SteppeEagle', 'steppe_eagle@example.com.my', 'Kota Kinabalu', 'Malaysia', 33, 1450,
'Silver', 'Tatalia Hydras', 80, 85, 48.48, '2026-06-13', '2025-10-12'),

('NorthLight', 'north_light@example.co.th', 'Krabi', 'Thailand', 15, 900, 'Bronze',
NULL, 18, 22, 45.00, '2026-06-10', '2026-04-20'),

('SilverArrow', 'silver_arrow@example.jp', 'Kobe', 'Japan', 64, 2700, 'Platinum',
'Nighon Black Dragons', 310, 260, 54.39, '2026-06-19', '2025-03-03'),

('Fisherman', 'fisherman@example.vn', 'Hai Phong', 'Vietnam', 29, 1300, 'Silver',
NULL, 64, 66, 49.23, '2026-06-16', '2025-11-15'),

('StormBringer', 'storm_bringer@example.co.id', 'Medan', 'Indonesia', 52, 2300,
'Gold', 'Inferno Cerberi', 205, 185, 52.56, '2026-06-17', '2025-04-29'),

('KazanCat', 'kazan_cat@example.co.id', 'Yogyakarta', 'Indonesia', 8, 600,
'Bronze', NULL, 4, 12, 25.00, '2026-06-03', '2026-05-28'),

('MountainQueen', 'mountain_queen@example.jp', 'Fukuoka', 'Japan', 77, 3100,
'Diamond', 'Conflux Phoenixes', 450, 390, 53.57, '2026-06-21',
'2024-10-05'),

('AdmiralB', 'admiral_b@example.com.my', 'George Town', 'Malaysia', 91, 3600,
'Master', 'Nighon Black Dragons', 620, 480, 56.36, '2026-06-21',
'2024-07-01'),

('MoscowGuy', 'moscow_guy@example.jp', 'Sendai', 'Japan', 42, 1980, 'Gold',
'Erafia Griffins', 150, 135, 52.63, '2026-06-20', '2025-07-20'),

('Meteorite', 'meteorite@example.co.id', 'Makassar', 'Indonesia', 36, 1700,
'Silver', 'Inferno Cerberi', 110, 105, 51.16, '2026-06-15', '2025-08-30'),

('DiamondUser', 'diamond_user@example.co.id', 'Denpasar', 'Indonesia', 60, 2600,
'Platinum', 'Krewlod Thunderbirds', 275, 245, 52.88, '2026-06-19', '2025-05-12'),

('RyazanRider', 'ryazan_rider@example.co.id', 'Semarang', 'Indonesia', 24, 1100,
'Silver', NULL, 48, 52, 48.00, '2026-06-12', '2026-01-10'),

('TverWanderer', 'tver_wanderer@example.co.id', 'Batam', 'Indonesia', 19, 950,
'Bronze', 'Ancient Behemoths', 32, 40, 44.44, '2026-06-11', '2026-03-15'),

('CossackRider', 'cossack_rider@example.com.my', 'Kuching', 'Malaysia', 57, 2450,
'Gold', 'Nighon Black Dragons', 230, 205, 52.87, '2026-06-20',
'2025-04-05'),

('YarBear', 'yar_bear@example.com.my', 'Malacca City', 'Malaysia', 44, 2000, 'Gold',
'Erafia Griffins', 160, 145, 52.46, '2026-06-18', '2025-06-25'),

('BaikalSeal', 'baikal_seal@example.com.my', 'Shah Alam', 'Malaysia', 68, 2850,
'Platinum', 'Dungeon Manticores', 340, 290, 53.97, '2026-06-21', '2024-12-15'),

('LipetskBoy', 'lipetsk_boy@example.co.th', 'Surat Thani', 'Thailand', 14, 880,
'Bronze', NULL, 14, 26, 35.00, '2026-06-08', '2026-05-01'),

('PskovLynx', 'pskov_lynx@example.co.th', 'Khon Kaen', 'Thailand', 32, 1480,
'Silver', 'Conflux Phoenixes', 77, 81, 48.73, '2026-06-14', '2025-10-22'),

('FalconScout', 'falcon_scout@example.co.th', 'Hat Yai', 'Thailand', 49, 2150, 'Gold',
'Tatalia Hydras', 185, 165, 52.86, '2026-06-17', '2025-05-18'),

('AltaiShaman', 'altai_shaman@example.co.th', 'Nakhon Ratchasima', 'Thailand', 72,
2980, 'Platinum', 'Nighon Black Dragons', 390, 330, 54.17, '2026-06-20',
'2024-11-20'),

('TulaBaker', 'tula_baker@example.co.th', 'Ayutthaya', 'Thailand', 21, 1050,
'Silver', NULL, 38, 42, 47.50, '2026-06-13', '2026-02-10'),

('KurskBird', 'kursk_bird@example.jp', 'Hiroshima', 'Japan', 38, 1750, 'Silver',
'Erafia Griffins', 125, 118, 51.44, '2026-06-16', '2025-08-05'),

('KamchatkaCrab', 'kamchatka_crab@example.vn', 'Bien Hoa', 'Vietnam', 63, 2750,
'Platinum', 'Dungeon Manticores', 305, 265, 53.51, '2026-06-21',
'2025-02-10'),

('VologdaUser', 'vologda_user@example.vn', 'Nha Trang', 'Vietnam', 27, 1250,
'Silver', 'Conflux Phoenixes', 60, 58, 50.85, '2026-06-15', '2025-12-05'),

('ShieldWall', 'shield_wall@example.co.th', 'Krabi', 'Thailand', 41, 1900, 'Gold',
NULL, 142, 138, 50.71, '2026-06-18', '2025-07-15'),

('RangerX', 'ranger_x@example.vn', 'Ho Chi Minh City', 'Vietnam', 53, 2350, 'Gold',
'Nighon Black Dragons', 215, 195, 52.44, '2026-06-19', '2025-04-25'),

('MagnetPoint', 'magnet_point@example.co.id', 'Semarang', 'Indonesia', 46, 2080,
'Gold', 'Inferno Cerberi', 172, 160, 51.81, '2026-06-20', '2025-06-01'),

('CheeseLover', 'cheese_lover@example.jp', 'Osaka', 'Japan', 17, 920, 'Bronze',
NULL, 22, 30, 42.31, '2026-06-09', '2026-03-20'),

('Lia', 'lia@example.co.th', 'Bangkok', 'Thailand', 52, 2380, 'Gold', 'Conflux
Phoenixes', 195, 150, 56.52, '2026-06-21', '2025-03-11');
`;function Ve(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement(`base`),i=n.createElement(`a`);return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}var He=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function B(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}var V=null;function Ue(e={}){return V||(e.includeStyleProperties?(V=e.includeStyleProperties,V):(V=B(window.getComputedStyle(document.documentElement)),V))}function H(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace(`px`,``)):0}function We(e){let t=H(e,`border-left-width`),n=H(e,`border-right-width`);return e.clientWidth+t+n}function Ge(e){let t=H(e,`border-top-width`),n=H(e,`border-bottom-width`);return e.clientHeight+t+n}function Ke(e,t={}){return{width:t.width||We(e),height:t.height||Ge(e)}}function qe(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var U=16384;function Je(e){(e.width>U||e.height>U)&&(e.width>U&&e.height>U?e.width>e.height?(e.height*=U/e.width,e.width=U):(e.width*=U/e.height,e.height=U):e.width>U?(e.height*=U/e.width,e.width=U):(e.width*=U/e.height,e.height=U))}function W(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin=`anonymous`,r.decoding=`async`,r.src=e})}async function Ye(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function Xe(e,t,n){let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`),a=document.createElementNS(r,`foreignObject`);return i.setAttribute(`width`,`${t}`),i.setAttribute(`height`,`${n}`),i.setAttribute(`viewBox`,`0 0 ${t} ${n}`),a.setAttribute(`width`,`100%`),a.setAttribute(`height`,`100%`),a.setAttribute(`x`,`0`),a.setAttribute(`y`,`0`),a.setAttribute(`externalResourcesRequired`,`true`),i.appendChild(a),a.appendChild(e),Ye(i)}var G=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||G(n,t)};function Ze(e){let t=e.getPropertyValue(`content`);return`${e.cssText} content: '${t.replace(/'|"/g,``)}';`}function Qe(e,t){return Ue(t).map(t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)}function $e(e,t,n,r){let i=`.${e}:${t}`,a=n.cssText?Ze(n):Qe(n,r);return document.createTextNode(`${i}{${a}}`)}function et(e,t,n,r){let i=window.getComputedStyle(e,n),a=i.getPropertyValue(`content`);if(a===``||a===`none`)return;let o=He();try{t.className=`${t.className} ${o}`}catch{return}let s=document.createElement(`style`);s.appendChild($e(o,n,i,r)),t.appendChild(s)}function tt(e,t,n){et(e,t,`:before`,n),et(e,t,`:after`,n)}var nt=`application/font-woff`,rt=`image/jpeg`,it={woff:nt,woff2:nt,ttf:`application/font-truetype`,eot:`application/vnd.ms-fontobject`,png:`image/png`,jpg:rt,jpeg:rt,gif:`image/gif`,tiff:`image/tiff`,svg:`image/svg+xml`,webp:`image/webp`};function at(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:``}function K(e){return it[at(e).toLowerCase()]||``}function ot(e){return e.split(/,/)[1]}function q(e){return e.search(/^(data:)/)!==-1}function st(e,t){return`data:${t};base64,${e}`}async function ct(e,t,n){let r=await fetch(e,t);if(r.status===404)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{try{e(n({res:r,result:a.result}))}catch(e){t(e)}},a.readAsDataURL(i)})}var J={};function lt(e,t,n){let r=e.replace(/\?.*/,``);return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,``)),t?`[${t}]${r}`:r}async function Y(e,t,n){let r=lt(e,t,n.includeQueryParams);if(J[r]!=null)return J[r];n.cacheBust&&(e+=(/\?/.test(e)?`&`:`?`)+new Date().getTime());let i;try{i=st(await ct(e,n.fetchRequestInit,({res:e,result:n})=>(t||=e.headers.get(`Content-Type`)||``,ot(n))),t)}catch(t){i=n.imagePlaceholder||``;let r=`Failed to fetch resource: ${e}`;t&&(r=typeof t==`string`?t:t.message),r&&console.warn(r)}return J[r]=i,i}async function ut(e){let t=e.toDataURL();return t===`data:,`?e.cloneNode(!1):W(t)}async function dt(e,t){if(e.currentSrc){let t=document.createElement(`canvas`),n=t.getContext(`2d`);return t.width=e.clientWidth,t.height=e.clientHeight,n?.drawImage(e,0,0,t.width,t.height),W(t.toDataURL())}let n=e.poster;return W(await Y(n,K(n),t))}async function ft(e,t){try{if(e?.contentDocument?.body)return await X(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function pt(e,t){return G(e,HTMLCanvasElement)?ut(e):G(e,HTMLVideoElement)?dt(e,t):G(e,HTMLIFrameElement)?ft(e,t):e.cloneNode(ht(e))}var mt=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SLOT`,ht=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SVG`;async function gt(e,t,n){if(ht(t))return t;let r=[];return r=mt(e)&&e.assignedNodes?B(e.assignedNodes()):G(e,HTMLIFrameElement)&&e.contentDocument?.body?B(e.contentDocument.body.childNodes):B((e.shadowRoot??e).childNodes),r.length===0||G(e,HTMLVideoElement)||await r.reduce((e,r)=>e.then(()=>X(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}function _t(e,t,n){let r=t.style;if(!r)return;let i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):Ue(n).forEach(n=>{let a=i.getPropertyValue(n);n===`font-size`&&a.endsWith(`px`)&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),G(e,HTMLIFrameElement)&&n===`display`&&a===`inline`&&(a=`block`),n===`d`&&t.getAttribute(`d`)&&(a=`path(${t.getAttribute(`d`)})`),r.setProperty(n,a,i.getPropertyPriority(n))})}function vt(e,t){G(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),G(e,HTMLInputElement)&&t.setAttribute(`value`,e.value)}function yt(e,t){if(G(e,HTMLSelectElement)){let n=t,r=Array.from(n.children).find(t=>e.value===t.getAttribute(`value`));r&&r.setAttribute(`selected`,``)}}function bt(e,t,n){return G(t,Element)&&(_t(e,t,n),tt(e,t,n),vt(e,t),yt(e,t)),t}async function xt(e,t){let n=e.querySelectorAll?e.querySelectorAll(`use`):[];if(n.length===0)return e;let r={};for(let i=0;i<n.length;i++){let a=n[i].getAttribute(`xlink:href`);if(a){let n=e.querySelector(a),i=document.querySelector(a);!n&&i&&!r[a]&&(r[a]=await X(i,t,!0))}}let i=Object.values(r);if(i.length){let t=`http://www.w3.org/1999/xhtml`,n=document.createElementNS(t,`svg`);n.setAttribute(`xmlns`,t),n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`,n.style.display=`none`;let r=document.createElementNS(t,`defs`);n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function X(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(e=>pt(e,t)).then(n=>gt(e,n,t)).then(n=>bt(e,n,t)).then(e=>xt(e,t))}var St=/url\((['"]?)([^'"]+?)\1\)/g,Ct=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,wt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Tt(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,`\\$1`);return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,`g`)}function Et(e){let t=[];return e.replace(St,(e,n,r)=>(t.push(r),e)),t.filter(e=>!q(e))}async function Dt(e,t,n,r,i){try{let a=n?Ve(t,n):t,o=K(t),s;return s=i?st(await i(a),o):await Y(a,o,r),e.replace(Tt(t),`$1${s}$3`)}catch{}return e}function Ot(e,{preferredFontFormat:t}){return t?e.replace(wt,e=>{for(;;){let[n,,r]=Ct.exec(e)||[];if(!r)return``;if(r===t)return`src: ${n};`}}):e}function kt(e){return e.search(St)!==-1}async function At(e,t,n){if(!kt(e))return e;let r=Ot(e,n);return Et(r).reduce((e,r)=>e.then(e=>Dt(e,r,t,n)),Promise.resolve(r))}async function Z(e,t,n){let r=t.style?.getPropertyValue(e);if(r){let i=await At(r,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function jt(e,t){await Z(`background`,e,t)||await Z(`background-image`,e,t),await Z(`mask`,e,t)||await Z(`-webkit-mask`,e,t)||await Z(`mask-image`,e,t)||await Z(`-webkit-mask-image`,e,t)}async function Mt(e,t){let n=G(e,HTMLImageElement);if((!n||q(e.src))&&(!G(e,SVGImageElement)||q(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await Y(r,K(r),t);await new Promise((r,a)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...e)=>{try{r(t.onImageErrorHandler(...e))}catch(e){a(e)}}:a;let o=e;o.decode&&=r,o.loading===`lazy`&&(o.loading=`eager`),n?(e.srcset=``,e.src=i):e.href.baseVal=i})}async function Nt(e,t){let n=B(e.childNodes).map(e=>Pt(e,t));await Promise.all(n).then(()=>e)}async function Pt(e,t){G(e,Element)&&(await jt(e,t),await Mt(e,t),await Nt(e,t))}function Ft(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(e=>{n[e]=r[e]}),e}var It={};async function Lt(e){let t=It[e];return t??(t={url:e,cssText:await(await fetch(e)).text()},It[e]=t),t}async function Rt(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let a=i.replace(r,`$1`);return a.startsWith(`https://`)||(a=new URL(a,e.url).href),ct(a,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(i).then(()=>n)}function zt(e){if(e==null)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,``),r=RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`,`gi`);for(;;){let e=r.exec(n);if(e===null)break;t.push(e[0])}n=n.replace(r,``);let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`,`gi`);for(;;){let e=i.exec(n);if(e===null){if(e=a.exec(n),e===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(e[0])}return t}async function Bt(e,t){let n=[],r=[];return e.forEach(n=>{if(`cssRules`in n)try{B(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let a=i+1,o=e.href,s=Lt(o).then(e=>Rt(e,t)).then(e=>zt(e).forEach(e=>{try{n.insertRule(e,e.startsWith(`@import`)?a+=1:n.cssRules.length)}catch(t){console.error(`Error inserting rule from remote css`,{rule:e,error:t})}})).catch(e=>{console.error(`Error loading remote css`,e.toString())});r.push(s)}})}catch(i){let a=e.find(e=>e.href==null)||document.styleSheets[0];n.href!=null&&r.push(Lt(n.href).then(e=>Rt(e,t)).then(e=>zt(e).forEach(e=>{a.insertRule(e,a.cssRules.length)})).catch(e=>{console.error(`Error loading remote stylesheet`,e)})),console.error(`Error inlining remote css file`,i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if(`cssRules`in e)try{B(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}function Vt(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>kt(e.style.getPropertyValue(`src`)))}async function Ht(e,t){if(e.ownerDocument==null)throw Error(`Provided element is not within a Document`);return Vt(await Bt(B(e.ownerDocument.styleSheets),t))}function Ut(e){return e.trim().replace(/["']/g,``)}function Wt(e){let t=new Set;function n(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(`,`).forEach(e=>{t.add(Ut(e))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&n(e)})}return n(e),t}async function Gt(e,t){let n=await Ht(e,t),r=Wt(e);return(await Promise.all(n.filter(e=>r.has(Ut(e.style.fontFamily))).map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return At(e.cssText,n,t)}))).join(`
`)}async function Kt(e,t){let n=t.fontEmbedCSS==null?t.skipFonts?null:await Gt(e,t):t.fontEmbedCSS;if(n){let t=document.createElement(`style`),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function qt(e,t={}){let{width:n,height:r}=Ke(e,t),i=await X(e,t,!0);return await Kt(i,t),await Pt(i,t),Ft(i,t),await Xe(i,n,r)}async function Jt(e,t={}){let{width:n,height:r}=Ke(e,t),i=await W(await qt(e,t)),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=t.pixelRatio||qe(),c=t.canvasWidth||n,l=t.canvasHeight||r;return a.width=c*s,a.height=l*s,t.skipAutoScale||Je(a),a.style.width=`${c}`,a.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function Yt(e,t={}){return(await Jt(e,t)).toDataURL()}function Q(e,t,n){let r=(e||n||`file`).replace(/[^a-zA-Z0-9._-]/g,`_`);return t?`${r}.${t}`:r}function Xt(e,t,n){Zt(new Blob([e.slice()],{type:n}),t)}function Zt(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),0)}var Qt={narrow:640,wide:960,full:1280},$t={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};function en(e){return e===`paper`?`#fffdf8`:e}function tn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function nn(e){return`<table class="sql-export-table"><thead><tr>${e.columns.map(e=>`<th scope="col">${tn(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td${e===null?` class="sql-export-null"`:``}>${tn(ne(e))}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`}function rn(e,t){let n=en(t.background),r=t.background===`transparent`,i=Qt[t.contain]??Qt.wide,a=document.createElement(`div`);a.className=`sql-export-root`,a.style.minHeight=`240px`,a.style.width=`fit-content`,a.style.boxSizing=`border-box`,a.style.background=r?`transparent`:n;let o=document.createElement(`div`);o.className=`sql-export-frame`,o.style.width=`${i}px`,o.style.maxWidth=`100%`,o.style.boxSizing=`border-box`,o.style.padding=`${t.padding}px`,o.style.background=r?`transparent`:n,o.innerHTML=e,a.append(o);let s=document.createElement(`style`);return s.textContent=dn,a.insertBefore(s,a.firstChild),a}async function an(e,t,n){let r=en(n.background),i=n.background===`transparent`;e.style.position=`fixed`,e.style.left=`-100000px`,e.style.top=`0`,document.body.append(e);try{e.style.position=`static`,e.style.left=`auto`,e.style.top=`auto`,e.offsetHeight,await new Promise(e=>requestAnimationFrame(()=>e()));let a=await Yt(e,i?{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0}:{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0,backgroundColor:r}),o=document.createElement(`a`);o.href=a,o.download=Q(t,`png`),o.rel=`noopener`,document.body.append(o),o.click(),o.remove()}finally{e.remove()}}async function on(e,t){await an(rn(nn(e),t),t.filename,t)}var sn=`database`,cn=`application/vnd.sqlite3`;function ln(e,t){return Q(e,t,sn)}function un(e,t,n){let r=D(e);if(r.length===0)throw Error(`SQLite produced no bytes for this database, so nothing was saved.`);let i=ln(t,n);return Xt(r,i,cn),i}var dn=`
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
`,fn=500,pn=100;function mn(){let t=g(``),n=g(``),r=e(null),i=e(null),o=g(`loading`),s=g(``),c=g(null),l=g(``),u=g(`table`),d=g(``),f=g([]),p=g(null),m=g(null),h=g(!1),_=a(()=>o.value===`running`),y=a(()=>o.value!==`loading`&&i.value!==null),x=a(()=>{let e=c.value?.statements??[];for(let t=e.length-1;t>=0;--t){let n=e[t];if(n.columns.length>0)return n}return null}),ee=a(()=>x.value!==null),C=a(()=>(c.value?.statements??[]).reduce((e,t)=>e+t.changes,0)),ne=a(()=>{let e=c.value;if(e===null)return``;let t=e.statements.length,n=[`${t} ${S(t,[`оператор`,`оператора`,`операторов`])}`];return C.value>0&&n.push(`${C.value} ${S(C.value,[`строка`,`строки`,`строк`])} изменена`),n.push(`${Math.round(e.durationMs)} ms`),n.join(` · `)}),T=a(()=>{let e=x.value;return e===null?null:{columns:e.columns,rows:e.rows}}),D=a(()=>{let e=T.value;return{table:e===null?``:ue(e),markdown:e===null?``:se(e),json:e===null?``:re(e),yaml:e===null?``:ae(e),csv:e===null?``:le(e),toon:e===null?``:de(e)}}),A=a(()=>x.value?.rows.slice(0,fn)??[]),j=a(()=>x.value?.rows.length??0),ve=a(()=>j.value>A.value.length);function M(){let e=i.value;f.value=e===null?[]:k(e)}function N(){let e=i.value;return e!==null&&k(e).length>0}function ye(){let e=i.value;e!==null&&E(e),i.value=r.value===null?null:O(r.value),c.value=null,l.value=``,M()}function P(e){let t=i.value;t!==null&&E(t),i.value=e,c.value=null,l.value=``,M()}function be(){let e=i.value;if(!(e===null||_.value)){o.value=`running`,l.value=``,d.value=``;try{let n=me(e,t.value);c.value=n,M(),n.error===null?d.value=n.statements.length===0?`Нечего было выполнять.`:`Запрос выполнился.`:(l.value=n.error,d.value=n.statements.length>0?`Оператор ${n.statements.length+1} не выполнился. Операторы до него выполнились.`:`Этот SQL не выполнился.`)}catch(e){l.value=e instanceof Error?e.message:`Этот SQL не удалось выполнить.`,c.value=null}finally{o.value=`ready`}}}function F(){let e=r.value;if(e!==null){o.value=`running`;try{let t=O(e),r=me(t,n.value);if(r.error!==null){E(t),l.value=`Скрипт схемы не выполнился: ${r.error}`,d.value=`База данных оставлена как была. Исправьте скрипт и постройте снова.`;return}P(t),d.value=`База построена из скрипта схемы: ${te(f.value.length,[`таблица`,`таблицы`,`таблиц`])}.`}finally{o.value=`ready`,p.value=null}}}function I(){n.value=Be,F()}function L(){r.value!==null&&(ye(),d.value=`База данных сброшена. Ваш запрос и скрипт схемы не изменились.`,p.value=null)}async function xe(e){let t=r.value;if(t!==null){h.value=!0;try{let r=new Uint8Array(await e.arrayBuffer()),i;try{i=pe(t,r)}catch{d.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,p.value=null;return}try{k(i)}catch{E(i),d.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,p.value=null;return}Se(i),n.value=ge(i),d.value=`Открыто ${e.name}: ${te(f.value.length,[`таблица`,`таблицы`,`таблиц`])}. Скрипт схемы теперь содержит скрипт, который перестраивает её.`,p.value=null}finally{h.value=!1}}}function Se(e){P(e)}function Ce(e,t){N()?(m.value={label:t,apply:e},p.value=`import`,d.value=`Это заменит таблицы, уже находящиеся в базе. Нажмите Импорт ещё раз для подтверждения.`):e()}function we(){let e=m.value;m.value=null,p.value=null,e?.apply()}function Te(){p.value=null,m.value=null}function Ee(e){N()?p.value===e?e===`reset`?L():I():p.value=e:e===`reset`?L():I()}async function R(e,t){if(t.trim().length===0){d.value=`Нечего копировать как ${e} пока.`;return}let n=await _e(t);d.value=n===`copied`?`${e} скопировано в буфер обмена.`:`Браузер отказал в доступе к буферу обмена.`}function De(){return R(`SQL`,t.value)}function Oe(){let e=T.value;return e===null?(d.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):R(`TSV`,ie(e))}function ke(e){return T.value===null?(d.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):R(w[e],D.value[e])}let z=g(!1);async function Ae(){let e=T.value;if(e===null)d.value=`Нечего сохранять: сначала выполните запрос, который вернёт строки.`;else{z.value=!0;try{await on(e,$t),d.value=`Результат сохранён как PNG.`}catch(e){d.value=e instanceof Error?`Не удалось сохранить PNG: ${e.message}`:`Не удалось сохранить PNG.`}finally{z.value=!1}}}function je(){let e=i.value;if(e!==null)try{un(e,`sql-sandbox-database`,`sqlite`),d.value=`База данных сохранена как файл SQLite.`}catch(e){d.value=e instanceof Error?`Не удалось сохранить базу: ${e.message}`:`Не удалось сохранить базу.`}}async function Me(){o.value=`loading`,s.value=``;try{r.value=await he(),i.value=O(r.value),M()}catch(e){s.value=e instanceof Error?e.message:`SQLite не удалось запустить в этом браузере.`,o.value=`ready`;return}o.value=`ready`,t.value=v,n.value=b,F()}function Ne(){t.value=``,d.value=`Редактор очищен. База данных и её таблицы не изменились.`}function Pe(e){t.value=e,l.value=``}function Fe(e){n.value=e}function Ie(e){return d.value=`Запрос для ${e} в редакторе.`,`SELECT *\nFROM ${fe(e)}\nLIMIT ${pn};\n`}return{source:t,setup:n,status:o,running:_,ready:y,initError:s,lastRun:c,runError:l,format:u,notice:d,tables:f,resultStatement:x,resultTable:T,hasResult:ee,visibleRows:A,totalRows:j,rowsHidden:ve,DISPLAY_ROW_LIMIT:fn,formatted:D,changedRows:C,summary:ne,importing:h,pendingConfirm:p,RESULT_FORMATS:ce,RESULT_FORMAT_LABELS:oe,RESULT_FORMAT_COPY_LABELS:w,start:Me,runSql:be,clearEditor:Ne,onSourceInput:Pe,onSetupInput:Fe,tableQueryFor:Ie,buildDatabase:F,loadSample:I,resetDatabase:L,importDatabaseFile:xe,requestImport:Ce,confirmImport:we,cancelConfirm:Te,confirmOrRun:Ee,copySql:De,copyTsv:Oe,copyFormat:ke,exportPng:Ae,exportingPng:z,exportDatabase:je}}var $=[{name:y,sql:b,query:v},{name:`Интернет-магазин`,sql:`PRAGMA foreign_keys = ON;

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
`,query:`-- Выручка по категориям среди оплаченных заказов.
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
`}];$.map(e=>e.name);var hn=i({__name:`SqlEditor`,setup(e,{expose:t}){t();let r=mn(),i=c(()=>j(()=>import(`./TrainerReferenceDialog.DxA9m7hX.js`),__vite__mapDeps([0,1,2,3,4,5]))),a=g(!1),o=g(!1);function s(){a.value=!0,o.value=!0}let l=n(`codeEditor`),u=g(null),d=g(0);function f(e){if(e===d.value)return;let t=$[e];if(!t)return;let n=$[d.value];(!n||r.setup.value.trim()===n.sql.trim()||window.confirm(`Текущий скрипт схемы отличается от шаблона. Переключить базу и заменить скрипт?`))&&(d.value=e,r.setup.value=t.sql,r.source.value=t.query,r.buildDatabase())}function p(e){let t=r.tableQueryFor(e),n=l.value;n?n.insert(t):r.source.value=`${r.source.value}${t}`}function m(){r.pendingConfirm.value===`import`?r.confirmImport():u.value?.click()}function v(e){let t=e.target,n=t.files?.[0];t.value=``,n!==void 0&&r.requestImport(()=>void r.importDatabaseFile(n),n.name)}function y(){r.pendingConfirm.value===`reset`?r.resetDatabase():r.confirmOrRun(`reset`)}h(()=>{r.start()});let b={editor:r,TrainerReferenceDialog:i,referenceMounted:a,referenceOpen:o,openReference:s,codeEditor:l,fileInput:u,currentDbIndex:d,switchDatabase:f,selectTable:p,importFile:m,onFileChosen:v,runReset:y,CodeEditor:x,DatabaseExplorer:z,ResultsTable:T,ResultsText:Pe,SetupEditor:ze,get pluralizeRu(){return S},get DatabaseZap(){return ve},get Download(){return ee},get FileUp(){return M},get RotateCcw(){return _},get ImageDown(){return N},get EDUCATIONAL_DATABASES(){return $}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),gn={"aria-label":`SQL-песочница`,class:`flex flex-col gap-4`},_n={class:`grid grid-cols-1 gap-4 xl:grid-cols-2`},vn={class:`flex min-w-0 flex-col overflow-hidden card`},yn={class:`border-b border-line px-4 py-3 sm:px-6`},bn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},xn={class:`flex gap-2`,role:`group`,"aria-label":`SQL-запрос`},Sn=[`disabled`,`aria-busy`],Cn={key:0,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},wn={key:1,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,role:`alert`},Tn={class:`text-center`},En={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Dn={class:`mt-auto border-t border-line px-4 py-3 sm:px-6 m-0!`},On=[`disabled`],kn={class:`flex min-w-0 flex-col overflow-hidden card`},An={class:`border-b border-line px-4 py-3 sm:px-6`},jn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Mn={class:`flex gap-2`,role:`group`,"aria-label":`Выбор базы данных`},Nn=[`aria-pressed`,`onClick`],Pn={class:`px-4 py-4 sm:px-6`},Fn={class:`border-t border-line`},In={class:`border-b border-line px-4 py-3 sm:px-6`},Ln={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Rn=[`disabled`],zn={class:`px-4 py-4 sm:px-6`},Bn={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},Vn={class:`flex flex-wrap items-center gap-2`},Hn=[`disabled`],Un=[`disabled`],Wn=[`disabled`],Gn={key:0,class:`mt-2 label`},Kn={key:1,class:`mt-2 label`},qn={class:`flex min-w-0 flex-col overflow-hidden card`},Jn={class:`border-b border-line px-4 py-3 sm:px-6`},Yn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2`},Xn={role:`group`,"aria-label":`Формат результата`,class:`flex flex-wrap items-center gap-2`},Zn=[`aria-pressed`,`onClick`],Qn={class:`px-4 py-4 sm:px-6`},$n={key:0,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},er={key:1,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`,role:`alert`},tr={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},nr={key:4,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`},rr={class:`mt-2 text-[0.9375rem] leading-relaxed text-muted`},ir={key:5,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`},ar={class:`border-t border-line px-4 py-3 sm:px-6`},or={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-3`},sr={class:`meta-mono text-label`},cr={class:`flex flex-wrap items-center gap-2`},lr=[`disabled`],ur=[`disabled`],dr=[`disabled`,`onClick`],fr={key:0,class:`mt-2 label`},pr={class:`label`,role:`status`,"aria-live":`polite`};function mr(e,n,i,a,c,h){return t(),u(`section`,gn,[p(`div`,_n,[p(`div`,vn,[p(`div`,yn,[p(`div`,bn,[n[11]||=p(`h3`,{class:`panel-header`},`SQL-запрос`,-1),p(`div`,xn,[p(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!a.editor.ready.value||a.editor.running.value,"aria-busy":a.editor.running.value,onClick:n[0]||=(...e)=>a.editor.runSql&&a.editor.runSql(...e)},o(a.editor.running.value?`Выполняется…`:`Выполнить`),9,Sn),p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:a.openReference},` Открыть справочник `)])])]),a.editor.status.value===`loading`?(t(),u(`div`,Cn,[...n[12]||=[p(`p`,{class:`label`},`Запуск SQLite…`,-1)]])):a.editor.initError.value===``?(t(),m(a.CodeEditor,{key:2,ref:`codeEditor`,modelValue:a.editor.source.value,"onUpdate:modelValue":[n[1]||=e=>a.editor.source.value=e,a.editor.onSourceInput],onRun:a.editor.runSql},null,8,[`modelValue`,`onUpdate:modelValue`,`onRun`])):(t(),u(`div`,wn,[p(`div`,Tn,[n[13]||=p(`p`,{class:`label-micro`},`SQLite не запустился`,-1),p(`p`,En,o(a.editor.initError.value),1)])])),p(`div`,Dn,[p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:a.editor.source.value.trim().length===0,onClick:n[2]||=(...e)=>a.editor.copySql&&a.editor.copySql(...e)},` Скопировать `,8,On),p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:n[3]||=(...e)=>a.editor.clearEditor&&a.editor.clearEditor(...e)},` Очистить `)]),n[14]||=p(`div`,{class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},[p(`p`,{class:`label`},`Нажмите Ctrl или Cmd с Enter, чтобы выполнить запрос из редактора.`)],-1)]),p(`div`,kn,[p(`div`,An,[p(`div`,jn,[n[15]||=p(`h3`,{class:`panel-header`},`Предустановленные базы данных`,-1),p(`div`,Mn,[(t(!0),u(f,null,r(a.EDUCATIONAL_DATABASES,(e,n)=>(t(),u(`button`,{key:e.name,type:`button`,class:`btn btn-ghost btn-sm`,"aria-pressed":a.currentDbIndex===n,onClick:e=>a.switchDatabase(n)},o(e.name),9,Nn))),128))])])]),p(`div`,Pn,[n[16]||=p(`p`,{class:`m-0 mb-3 text-[0.85rem] leading-relaxed text-muted`},` В песочнице доступны две предустановленные базы данных: Игроки и Интернет-магазин. Выберите базу, чтобы посмотреть её структуру и SQL-скрипт создания. `,-1),l(a.DatabaseExplorer,{tables:a.editor.tables.value,onSelect:a.selectTable},null,8,[`tables`])]),p(`div`,Fn,[p(`div`,In,[p(`div`,Ln,[n[18]||=p(`h3`,{class:`panel-header`},`Скрипт схемы`,-1),p(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!a.editor.ready.value||a.editor.running.value||a.editor.setup.value.trim().length===0,onClick:n[4]||=(...e)=>a.editor.buildDatabase&&a.editor.buildDatabase(...e)},[l(a.DatabaseZap,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[17]||=d(` Построить базу `,-1)],8,Rn)])]),p(`div`,zn,[l(a.SetupEditor,{modelValue:a.editor.setup.value,"onUpdate:modelValue":[n[5]||=e=>a.editor.setup.value=e,a.editor.onSetupInput]},null,8,[`modelValue`,`onUpdate:modelValue`]),n[19]||=p(`p`,{class:`mt-3 label`},` Скрипт схемы создаёт базу с нуля: CREATE TABLE, INSERT, индексы. Он отделён от редактора запросов — постройте базу, а затем пишите к ней SQL сверху. Диалект — SQLite (об учебной базе курса на MySQL см. примечание выше). `,-1)])]),p(`div`,Bn,[p(`div`,Vn,[p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value,onClick:a.runReset},[l(a.RotateCcw,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),d(` `+o(a.editor.pendingConfirm.value===`reset`?`Точно сбросить?`:`Сбросить базу`),1)],8,Hn),p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value||a.editor.importing.value,onClick:a.importFile},[l(a.FileUp,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),d(` `+o(a.editor.pendingConfirm.value===`import`?`Точно импортировать?`:`Импорт .sqlite`),1)],8,Un),p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value,onClick:n[6]||=(...e)=>a.editor.exportDatabase&&a.editor.exportDatabase(...e)},[l(a.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[20]||=d(` Скачать базу `,-1)],8,Wn),a.editor.pendingConfirm.value===`reset`||a.editor.pendingConfirm.value===`import`?(t(),u(`button`,{key:0,type:`button`,class:`btn btn-ghost btn-sm`,onClick:n[7]||=(...e)=>a.editor.cancelConfirm&&a.editor.cancelConfirm(...e)},` Отмена `)):s(``,!0),p(`input`,{ref:`fileInput`,type:`file`,accept:`.sqlite,.db,.sqlite3,.db3`,class:`hidden`,"aria-hidden":`true`,tabindex:`-1`,onChange:a.onFileChosen},null,544)]),a.editor.pendingConfirm.value===`reset`?(t(),u(`p`,Gn,` Сброс удалит таблицы активной базы. Запрос и скрипт схемы останутся. `)):a.editor.pendingConfirm.value===`import`?(t(),u(`p`,Kn,` Импорт заменит таблицы активной базы файлом, который вы выбрали. `)):s(``,!0)])])]),p(`div`,qn,[p(`div`,Jn,[p(`div`,Yn,[n[21]||=p(`h3`,{class:`panel-header`},`Результаты`,-1),p(`div`,Xn,[(t(!0),u(f,null,r(a.editor.RESULT_FORMATS,e=>(t(),u(`button`,{key:e,type:`button`,class:`btn btn-secondary btn-sm`,"aria-pressed":a.editor.format.value===e,onClick:t=>a.editor.format.value=e},o(a.editor.RESULT_FORMAT_LABELS[e]),9,Zn))),128))])])]),p(`div`,Qn,[a.editor.running.value?(t(),u(`div`,$n,[...n[22]||=[p(`p`,{class:`label`},`Выполняется…`,-1)]])):a.editor.runError.value===``?a.editor.hasResult.value&&a.editor.format.value===`table`?(t(),m(a.ResultsTable,{key:2,columns:a.editor.resultStatement.value?.columns??[],rows:a.editor.visibleRows.value},null,8,[`columns`,`rows`])):a.editor.hasResult.value?(t(),m(a.ResultsText,{key:3,text:a.editor.formatted.value[a.editor.format.value]},null,8,[`text`])):a.editor.lastRun.value===null?(t(),u(`div`,ir,[...n[27]||=[p(`p`,{class:`label text-center`},`Напишите SQL и нажмите Выполнить SQL.`,-1)]])):(t(),u(`div`,nr,[n[26]||=p(`p`,{class:`label-micro`},`Строк не возвращено`,-1),p(`p`,rr,[n[25]||=d(` Запрос выполнился без возвращения набора результатов. `,-1),a.editor.changedRows.value>0?(t(),u(f,{key:0},[d(` Он изменил `+o(a.editor.changedRows.value)+` `+o(a.pluralizeRu(a.editor.changedRows.value,[`строку`,`строки`,`строк`]))+`. `,1)],64)):s(``,!0)])])):(t(),u(`div`,er,[n[23]||=p(`p`,{class:`label-micro`},`Этот SQL не выполнился`,-1),p(`p`,tr,o(a.editor.runError.value),1),n[24]||=p(`p`,{class:`mt-3 label`},` Операторы до ошибочного выполнились, редактор не изменился. Исправьте оператор и запустите снова. `,-1)]))]),p(`div`,ar,[p(`div`,or,[p(`p`,sr,[a.editor.hasResult.value?(t(),u(f,{key:0},[d(o(a.editor.rowsHidden.value?`показано ${a.editor.visibleRows.value.length} из ${a.editor.totalRows.value} ${a.pluralizeRu(a.editor.totalRows.value,[`строка`,`строки`,`строк`])}`:`${a.editor.totalRows.value} ${a.pluralizeRu(a.editor.totalRows.value,[`строка`,`строки`,`строк`])}`),1)],64)):s(``,!0),a.editor.summary.value===``?s(``,!0):(t(),u(f,{key:1},[d(o(a.editor.hasResult.value?` · `:``)+o(a.editor.summary.value),1)],64))]),p(`div`,cr,[p(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.hasResult.value||a.editor.exportingPng.value,onClick:n[8]||=(...e)=>a.editor.exportPng&&a.editor.exportPng(...e)},[l(a.ImageDown,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),d(` `+o(a.editor.exportingPng.value?`Готовится…`:`Скачать PNG`),1)],8,lr),n[28]||=p(`span`,{class:`meta-mono text-label`},`Скопировать:`,-1),p(`button`,{type:`button`,class:`btn btn-secondary btn-sm`,disabled:!a.editor.hasResult.value,onClick:n[9]||=(...e)=>a.editor.copyTsv&&a.editor.copyTsv(...e)},` TSV `,8,ur),(t(!0),u(f,null,r(a.editor.RESULT_FORMATS,e=>(t(),u(`button`,{key:`copy-${e}`,type:`button`,class:`btn btn-secondary btn-sm`,disabled:!a.editor.hasResult.value,onClick:t=>a.editor.copyFormat(e)},o(a.editor.RESULT_FORMAT_COPY_LABELS[e]),9,dr))),128))])]),a.editor.rowsHidden.value?(t(),u(`p`,fr,` Вид показывает первые `+o(a.editor.DISPLAY_ROW_LIMIT)+` строк, чтобы страница оставалась адаптивной. Копии содержат все `+o(a.editor.totalRows.value)+`. `,1)):s(``,!0)])]),p(`p`,pr,[a.editor.notice.value===``?(t(),u(f,{key:1},[d(` Всё выполняется в этом браузере: база данных в памяти, ничего не загружается на сервер. `)],64)):(t(),u(f,{key:0},[d(o(a.editor.notice.value),1)],64))]),a.referenceMounted?(t(),m(a.TrainerReferenceDialog,{key:0,open:a.referenceOpen,onClose:n[10]||=e=>a.referenceOpen=!1},null,8,[`open`])):s(``,!0)])}var hr=C(hn,[[`render`,mr]]);export{hr as default};