const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/TrainerReferenceDialog.CtNTcI31.js","_astro/runtime-core.esm-bundler.nu_UAaCd.js","_astro/runtime-dom.esm-bundler.CFdarX-Y.js","_astro/AppDialog.mnlXinou.js","_astro/_plugin-vue_export-helper.BDNMzG2s.js","_astro/clipboard._lASIDAv.js"])))=>i.map(i=>d[i]);
import{B as e,O as t,P as n,T as r,V as i,_ as a,a as o,c as s,g as c,h as l,k as u,l as d,lt as f,m as p,n as m,o as h,s as g}from"./runtime-core.esm-bundler.nu_UAaCd.js";import{t as _}from"./CodeEditor.DC-ORsqZ.js";import{n as v,t as y}from"./plural-ru.D2xqVzlp.js";import{t as b}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as x}from"./ResultsTable.D0F3mzDt.js";import{c as S,d as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./ecommerce-database.3hwk-qen.js";import{a as ee,c as M,i as N,l as P,n as F,o as te,r as ne,s as re,t as I}from"./sql-database.CQe7mSfq.js";import{c as ie,d as ae,f as oe,l as se,m as ce,n as L,o as R,p as le,r as ue,t as de,u as fe}from"./sql-results.BGrDTEXw.js";import{i as z,n as B,r as V,t as H}from"./players-database.B_DS5d42.js";import{t as pe}from"./clipboard._lASIDAv.js";import{t as U}from"./download.CA8zd5Cz.js";import{t as W}from"./preload-helper.DHhhL8Zf.js";var G=a({__name:`DatabaseExplorer`,props:{tables:{}},emits:[`select`],setup(e,{expose:t,emit:n}){t();let r={emit:n,get pluralizeRu(){return v}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),K={class:`flex flex-col gap-2`},q={key:0,class:`label`},J={class:`sql-explorer-head`},me={class:`sql-explorer-details`},he={class:`sql-explorer-summary`},Y={class:`font-mono text-[0.875rem] text-ink`},ge={class:`label-micro`},_e={key:0,class:`sql-schema`},ve={class:`font-mono text-[0.8125rem] text-ink`},X={class:`meta-mono`},ye={class:`label`},be={key:1,class:`label mt-2`},xe=[`onClick`],Se={class:`sr-only`};function Ce(e,n,r,i,a,o){return t(),d(`div`,K,[r.tables.length===0?(t(),d(`p`,q,` Таблиц пока нет. Загрузите пример датасета или напишите CREATE TABLE и выполните его. `)):s(``,!0),(t(!0),d(m,null,u(r.tables,e=>(t(),d(`div`,{key:e.name,class:`sql-explorer-table`},[h(`div`,J,[h(`details`,me,[h(`summary`,he,[h(`span`,Y,f(e.name),1),h(`span`,ge,f(e.kind)+` · `+f(e.columns.length)+` `+f(e.columns.length)+` `+f(i.pluralizeRu(e.columns.length,[`столбец`,`столбца`,`столбцов`])),1)]),e.columns.length>0?(t(),d(`table`,_e,[n[0]||=h(`thead`,null,[h(`tr`,null,[h(`th`,{scope:`col`},`Столбец`),h(`th`,{scope:`col`},`Тип`),h(`th`,{scope:`col`},`Ограничения`)])],-1),h(`tbody`,null,[(t(!0),d(m,null,u(e.columns,e=>(t(),d(`tr`,{key:e.name},[h(`td`,ve,f(e.name),1),h(`td`,X,f(e.type===``?`—`:e.type),1),h(`td`,ye,[e.primaryKey?(t(),d(m,{key:0},[p(`первичный ключ`)],64)):s(``,!0),e.primaryKey&&e.notNull?(t(),d(m,{key:1},[p(` · `)],64)):s(``,!0),e.notNull?(t(),d(m,{key:2},[p(`не null`)],64)):s(``,!0),e.defaultValue===null?s(``,!0):(t(),d(m,{key:3},[p(f(e.primaryKey||e.notNull?` · `:``)+`значение по умолчанию `+f(e.defaultValue),1)],64))])]))),128))])])):(t(),d(`p`,be,f(e.kind)+` не содержит собственных столбцов.`,1))]),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm sql-explorer-action`,onClick:t=>i.emit(`select`,e.name)},[n[1]||=p(` Запрос`,-1),h(`span`,Se,f(e.name),1)],8,xe)])]))),128))])}var we=b(G,[[`render`,Ce]]),Z=a({__name:`ResultsText`,props:{text:{}},setup(e,{expose:t}){t();let n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Te={class:`sql-text-scroll h-[22rem] xl:h-[30rem]`},Ee={class:`sql-text-view`};function De(e,n,r,i,a,o){return t(),d(`div`,Te,[h(`pre`,Ee,f(r.text),1)])}var Oe=b(Z,[[`render`,De]]),ke=`-- The sample dataset: a players table, as a game backend might store it.
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
`,Ae={narrow:640,wide:960,full:1280},je={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};function Me(e){return e===`paper`?`#fffdf8`:e}function Ne(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Pe(e){return`<table class="sql-export-table"><thead><tr>${e.columns.map(e=>`<th scope="col">${Ne(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td${e===null?` class="sql-export-null"`:``}>${Ne(R(e))}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`}function Fe(e,t){let n=Me(t.background),r=t.background===`transparent`,i=Ae[t.contain]??Ae.wide,a=document.createElement(`div`);a.className=`sql-export-root`,a.style.minHeight=`240px`,a.style.width=`fit-content`,a.style.boxSizing=`border-box`,a.style.background=r?`transparent`:n;let o=document.createElement(`div`);o.className=`sql-export-frame`,o.style.width=`${i}px`,o.style.maxWidth=`100%`,o.style.boxSizing=`border-box`,o.style.padding=`${t.padding}px`,o.style.background=r?`transparent`:n,o.innerHTML=e,a.append(o);let s=document.createElement(`style`);return s.textContent=He,a.insertBefore(s,a.firstChild),a}async function Ie(e,t,n){let r=Me(n.background),i=n.background===`transparent`;e.style.position=`fixed`,e.style.left=`-100000px`,e.style.top=`0`,document.body.append(e);try{e.style.position=`static`,e.style.left=`auto`,e.style.top=`auto`,e.offsetHeight,await new Promise(e=>requestAnimationFrame(()=>e()));let a=i?{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0}:{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0,backgroundColor:r},o=await k(e,a),s=document.createElement(`a`);s.href=o,s.download=D(t,`png`),s.rel=`noopener`,document.body.append(s),s.click(),s.remove()}finally{e.remove()}}async function Le(e,t){await Ie(Fe(Pe(e),t),t.filename,t)}var Re=`database`,ze=`application/vnd.sqlite3`;function Be(e,t){return D(e,t,Re)}function Ve(e,t,n){let r=N(e);if(r.length===0)throw Error(`SQLite produced no bytes for this database, so nothing was saved.`);let i=Be(t,n);return w(r,i,ze),i}var He=`
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
`,Q=500,Ue=100;function We(){let t=e(``),n=e(``),r=i(null),a=i(null),s=e(`loading`),c=e(``),l=e(null),u=e(``),d=e(`table`),f=e(``),p=e([]),m=e(null),h=e(null),g=e(!1),_=o(()=>s.value===`running`),b=o(()=>s.value!==`loading`&&a.value!==null),x=o(()=>{let e=l.value?.statements??[];for(let t=e.length-1;t>=0;--t){let n=e[t];if(n.columns.length>0)return n}return null}),S=o(()=>x.value!==null),C=o(()=>(l.value?.statements??[]).reduce((e,t)=>e+t.changes,0)),w=o(()=>{let e=l.value;if(e===null)return``;let t=e.statements.length,n=[`${t} ${v(t,[`оператор`,`оператора`,`операторов`])}`];return C.value>0&&n.push(`${C.value} ${v(C.value,[`строка`,`строки`,`строк`])} изменена`),n.push(`${Math.round(e.durationMs)} ms`),n.join(` · `)}),T=o(()=>{let e=x.value;return e===null?null:{columns:e.columns,rows:e.rows}}),E=o(()=>{let e=T.value;return{table:e===null?``:se(e),markdown:e===null?``:ae(e),json:e===null?``:fe(e),yaml:e===null?``:ce(e),csv:e===null?``:ie(e),toon:e===null?``:oe(e)}}),D=o(()=>x.value?.rows.slice(0,Q)??[]),O=o(()=>x.value?.rows.length??0),k=o(()=>O.value>D.value.length);function A(){let e=a.value;p.value=e===null?[]:M(e)}function j(){let e=a.value;return e!==null&&M(e).length>0}function N(){let e=a.value;e!==null&&I(e),a.value=r.value===null?null:F(r.value),l.value=null,u.value=``,A()}function R(e){let t=a.value;t!==null&&I(t),a.value=e,l.value=null,u.value=``,A()}function z(){let e=a.value;if(!(e===null||_.value)){s.value=`running`,u.value=``,f.value=``;try{let n=P(e,t.value);l.value=n,A(),n.error===null?f.value=n.statements.length===0?`Нечего было выполнять.`:`Запрос выполнился.`:(u.value=n.error,f.value=n.statements.length>0?`Оператор ${n.statements.length+1} не выполнился. Операторы до него выполнились.`:`Этот SQL не выполнился.`)}catch(e){u.value=e instanceof Error?e.message:`Этот SQL не удалось выполнить.`,l.value=null}finally{s.value=`ready`}}}function H(){let e=r.value;if(e!==null){s.value=`running`;try{let t=F(e),r=P(t,n.value);if(r.error!==null){I(t),u.value=`Скрипт схемы не выполнился: ${r.error}`,f.value=`База данных оставлена как была. Исправьте скрипт и постройте снова.`;return}R(t),f.value=`База построена из скрипта схемы: ${y(p.value.length,[`таблица`,`таблицы`,`таблиц`])}.`}finally{s.value=`ready`,m.value=null}}}function U(){n.value=ke,H()}function W(){r.value!==null&&(N(),f.value=`База данных сброшена. Ваш запрос и скрипт схемы не изменились.`,m.value=null)}async function G(e){let t=r.value;if(t!==null){g.value=!0;try{let r=new Uint8Array(await e.arrayBuffer()),i;try{i=te(t,r)}catch{f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}try{M(i)}catch{I(i),f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}K(i),n.value=ne(i),f.value=`Открыто ${e.name}: ${y(p.value.length,[`таблица`,`таблицы`,`таблиц`])}. Скрипт схемы теперь содержит скрипт, который перестраивает её.`,m.value=null}finally{g.value=!1}}}function K(e){R(e)}function q(e,t){j()?(h.value={label:t,apply:e},m.value=`import`,f.value=`Это заменит таблицы, уже находящиеся в базе. Нажмите Импорт ещё раз для подтверждения.`):e()}function J(){let e=h.value;h.value=null,m.value=null,e?.apply()}function me(){m.value=null,h.value=null}function he(e){j()?m.value===e?e===`reset`?W():U():m.value=e:e===`reset`?W():U()}async function Y(e,t){if(t.trim().length===0){f.value=`Нечего копировать как ${e} пока.`;return}let n=await pe(t);f.value=n===`copied`?`${e} скопировано в буфер обмена.`:`Браузер отказал в доступе к буферу обмена.`}function ge(){return Y(`SQL`,t.value)}function _e(){let e=T.value;return e===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):Y(`TSV`,le(e))}function ve(e){return T.value===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):Y(L[e],E.value[e])}let X=e(!1);async function ye(){let e=T.value;if(e===null)f.value=`Нечего сохранять: сначала выполните запрос, который вернёт строки.`;else{X.value=!0;try{await Le(e,je),f.value=`Результат сохранён как PNG.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить PNG: ${e.message}`:`Не удалось сохранить PNG.`}finally{X.value=!1}}}function be(){let e=a.value;if(e!==null)try{Ve(e,`sql-sandbox-database`,`sqlite`),f.value=`База данных сохранена как файл SQLite.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить базу: ${e.message}`:`Не удалось сохранить базу.`}}async function xe(){s.value=`loading`,c.value=``;try{r.value=await ee(),a.value=F(r.value),A()}catch(e){c.value=e instanceof Error?e.message:`SQLite не удалось запустить в этом браузере.`,s.value=`ready`;return}s.value=`ready`,t.value=V,n.value=B,H()}function Se(){t.value=``,f.value=`Редактор очищен. База данных и её таблицы не изменились.`}function Ce(e){t.value=e,u.value=``}function we(e){n.value=e}function Z(e){return f.value=`Запрос для ${e} в редакторе.`,`SELECT *\nFROM ${re(e)}\nLIMIT ${Ue};\n`}return{source:t,setup:n,status:s,running:_,ready:b,initError:c,lastRun:l,runError:u,format:d,notice:f,tables:p,resultStatement:x,resultTable:T,hasResult:S,visibleRows:D,totalRows:O,rowsHidden:k,DISPLAY_ROW_LIMIT:Q,formatted:E,changedRows:C,summary:w,importing:g,pendingConfirm:m,RESULT_FORMATS:de,RESULT_FORMAT_LABELS:ue,RESULT_FORMAT_COPY_LABELS:L,start:xe,runSql:z,clearEditor:Se,onSourceInput:Ce,onSetupInput:we,tableQueryFor:Z,buildDatabase:H,loadSample:U,resetDatabase:W,importDatabaseFile:G,requestImport:q,confirmImport:J,cancelConfirm:me,confirmOrRun:he,copySql:ge,copyTsv:_e,copyFormat:ve,exportPng:ye,exportingPng:X,exportDatabase:be}}var $=[{name:H,sql:B,query:V},{name:A,sql:E,query:O}];$.map(e=>e.name);var Ge=a({__name:`SqlEditor`,setup(t,{expose:i}){i();let a=We(),o=[`table`,`markdown`,`json`],s=c(()=>W(()=>import(`./TrainerReferenceDialog.CtNTcI31.js`),__vite__mapDeps([0,1,2,3,4,5]))),l=e(!1),u=e(!1);function d(){l.value=!0,u.value=!0}let f=n(`codeEditor`),p=e(null),m=e(0);function h(e){if(e===m.value)return;let t=$[e];if(!t)return;let n=$[m.value];(!n||a.setup.value.trim()===n.sql.trim()||window.confirm(`Текущий скрипт схемы отличается от шаблона. Переключить базу и заменить скрипт?`))&&(m.value=e,a.setup.value=t.sql,a.source.value=t.query,a.buildDatabase())}function g(e){let t=a.tableQueryFor(e),n=f.value;n?n.insert(t):a.source.value=`${a.source.value}${t}`}function y(){a.pendingConfirm.value===`import`?a.confirmImport():p.value?.click()}function b(e){let t=e.target,n=t.files?.[0];t.value=``,n!==void 0&&a.requestImport(()=>void a.importDatabaseFile(n),n.name)}function w(){a.pendingConfirm.value===`reset`?a.resetDatabase():a.confirmOrRun(`reset`)}r(()=>{a.start()});let E={editor:a,simpleFormats:o,TrainerReferenceDialog:s,referenceMounted:l,referenceOpen:u,openReference:d,codeEditor:f,fileInput:p,currentDbIndex:m,switchDatabase:h,selectTable:g,importFile:y,onFileChosen:b,runReset:w,CodeEditor:_,DatabaseExplorer:we,ResultsTable:x,ResultsText:Oe,SetupEditor:S,get pluralizeRu(){return v},get DatabaseZap(){return C},get Download(){return U},get FileUp(){return j},get RotateCcw(){return z},get ImageDown(){return T},get EDUCATIONAL_DATABASES(){return $}};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}),Ke={"aria-label":`SQL-песочница`,class:`flex flex-col gap-4`},qe={class:`grid grid-cols-1 gap-4 xl:grid-cols-2`},Je={class:`flex min-w-0 flex-col overflow-hidden card`},Ye={class:`border-b border-line px-4 py-3 sm:px-6`},Xe={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Ze={class:`flex gap-2`,role:`group`,"aria-label":`SQL-запрос`},Qe=[`disabled`,`aria-busy`],$e={key:0,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},et={key:1,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,role:`alert`},tt={class:`text-center`},nt={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},rt={class:`mt-auto border-t border-line px-4 py-3 sm:px-6 m-0!`},it=[`disabled`],at={class:`flex min-w-0 flex-col overflow-hidden card`},ot={class:`border-b border-line px-4 py-3 sm:px-6`},st={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},ct={class:`flex gap-2`,role:`group`,"aria-label":`Выбор базы данных`},lt=[`aria-pressed`,`onClick`],ut={class:`px-4 py-4 sm:px-6`},dt={class:`border-t border-line`},ft={class:`border-b border-line px-4 py-3 sm:px-6`},pt={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},mt=[`disabled`],ht={class:`px-4 py-4 sm:px-6`},gt={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},_t={class:`flex flex-wrap items-center gap-2`},vt=[`disabled`],yt=[`disabled`],bt=[`disabled`],xt={key:0,class:`mt-2 label`},St={key:1,class:`mt-2 label`},Ct={class:`flex min-w-0 flex-col overflow-hidden card`},wt={class:`border-b border-line px-4 py-3 sm:px-6`},Tt={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2`},Et={role:`group`,"aria-label":`Формат результата`,class:`flex flex-wrap items-center gap-2`},Dt=[`aria-pressed`,`onClick`],Ot={class:`px-4 py-4 sm:px-6`},kt={key:0,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},At={key:1,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`,role:`alert`},jt={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Mt={key:4,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`},Nt={class:`mt-2 text-[0.9375rem] leading-relaxed text-muted`},Pt={key:5,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`},Ft={class:`border-t border-line px-4 py-3 sm:px-6`},It={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-3`},Lt={class:`meta-mono text-label`},Rt={class:`flex flex-wrap items-center gap-2`},zt=[`disabled`],Bt={key:0,class:`mt-2 label`},Vt={class:`label`,role:`status`,"aria-live":`polite`};function Ht(e,n,r,i,a,o){return t(),d(`section`,Ke,[h(`div`,qe,[h(`div`,Je,[h(`div`,Ye,[h(`div`,Xe,[n[10]||=h(`h3`,{class:`panel-header`},`SQL-запрос`,-1),h(`div`,Ze,[h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value,"aria-busy":i.editor.running.value,onClick:n[0]||=(...e)=>i.editor.runSql&&i.editor.runSql(...e)},f(i.editor.running.value?`Выполняется…`:`Выполнить`),9,Qe),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:i.openReference},` Открыть справочник `)])])]),i.editor.status.value===`loading`?(t(),d(`div`,$e,[...n[11]||=[h(`p`,{class:`label`},`Запуск SQLite…`,-1)]])):i.editor.initError.value===``?(t(),g(i.CodeEditor,{key:2,ref:`codeEditor`,modelValue:i.editor.source.value,"onUpdate:modelValue":[n[1]||=e=>i.editor.source.value=e,i.editor.onSourceInput],onRun:i.editor.runSql},null,8,[`modelValue`,`onUpdate:modelValue`,`onRun`])):(t(),d(`div`,et,[h(`div`,tt,[n[12]||=h(`p`,{class:`label-micro`},`SQLite не запустился`,-1),h(`p`,nt,f(i.editor.initError.value),1)])])),h(`div`,rt,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:i.editor.source.value.trim().length===0,onClick:n[2]||=(...e)=>i.editor.copySql&&i.editor.copySql(...e)},` Скопировать `,8,it),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:n[3]||=(...e)=>i.editor.clearEditor&&i.editor.clearEditor(...e)},` Очистить `)]),n[13]||=h(`div`,{class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},[h(`p`,{class:`label`},`Нажмите Ctrl или Cmd с Enter, чтобы выполнить запрос из редактора.`)],-1)]),h(`div`,at,[h(`div`,ot,[h(`div`,st,[n[14]||=h(`h3`,{class:`panel-header`},`Предустановленные базы данных`,-1),h(`div`,ct,[(t(!0),d(m,null,u(i.EDUCATIONAL_DATABASES,(e,n)=>(t(),d(`button`,{key:e.name,type:`button`,class:`btn btn-ghost btn-sm`,"aria-pressed":i.currentDbIndex===n,onClick:e=>i.switchDatabase(n)},f(e.name),9,lt))),128))])])]),h(`div`,ut,[n[15]||=h(`p`,{class:`m-0 mb-3 text-[0.85rem] leading-relaxed text-muted`},` В песочнице доступны две предустановленные базы данных: Игроки и Интернет-магазин. Выберите базу, чтобы посмотреть её структуру и SQL-скрипт создания. `,-1),l(i.DatabaseExplorer,{tables:i.editor.tables.value,onSelect:i.selectTable},null,8,[`tables`])]),h(`div`,dt,[h(`div`,ft,[h(`div`,pt,[n[17]||=h(`h3`,{class:`panel-header`},`Скрипт схемы`,-1),h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value||i.editor.setup.value.trim().length===0,onClick:n[4]||=(...e)=>i.editor.buildDatabase&&i.editor.buildDatabase(...e)},[l(i.DatabaseZap,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[16]||=p(` Построить базу `,-1)],8,mt)])]),h(`div`,ht,[l(i.SetupEditor,{modelValue:i.editor.setup.value,"onUpdate:modelValue":[n[5]||=e=>i.editor.setup.value=e,i.editor.onSetupInput]},null,8,[`modelValue`,`onUpdate:modelValue`]),n[18]||=h(`p`,{class:`mt-3 label`},` Скрипт схемы создаёт базу с нуля: CREATE TABLE, INSERT, индексы. Он отделён от редактора запросов — постройте базу, а затем пишите к ней SQL сверху. Диалект — SQLite (об учебной базе курса на MySQL см. примечание выше). `,-1)])]),h(`div`,gt,[h(`div`,_t,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:i.runReset},[l(i.RotateCcw,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.pendingConfirm.value===`reset`?`Точно сбросить?`:`Сбросить базу`),1)],8,vt),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value||i.editor.importing.value,onClick:i.importFile},[l(i.FileUp,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.pendingConfirm.value===`import`?`Точно импортировать?`:`Импорт .sqlite`),1)],8,yt),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:n[6]||=(...e)=>i.editor.exportDatabase&&i.editor.exportDatabase(...e)},[l(i.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[19]||=p(` Скачать базу `,-1)],8,bt),i.editor.pendingConfirm.value===`reset`||i.editor.pendingConfirm.value===`import`?(t(),d(`button`,{key:0,type:`button`,class:`btn btn-ghost btn-sm`,onClick:n[7]||=(...e)=>i.editor.cancelConfirm&&i.editor.cancelConfirm(...e)},` Отмена `)):s(``,!0),h(`input`,{ref:`fileInput`,type:`file`,accept:`.sqlite,.db,.sqlite3,.db3`,class:`hidden`,"aria-hidden":`true`,tabindex:`-1`,onChange:i.onFileChosen},null,544)]),i.editor.pendingConfirm.value===`reset`?(t(),d(`p`,xt,` Сброс удалит таблицы активной базы. Запрос и скрипт схемы останутся. `)):i.editor.pendingConfirm.value===`import`?(t(),d(`p`,St,` Импорт заменит таблицы активной базы файлом, который вы выбрали. `)):s(``,!0)])])]),h(`div`,Ct,[h(`div`,wt,[h(`div`,Tt,[n[20]||=h(`h3`,{class:`panel-header`},`Результаты`,-1),h(`div`,Et,[(t(),d(m,null,u(i.simpleFormats,e=>h(`button`,{key:e,type:`button`,class:`btn btn-secondary btn-sm`,"aria-pressed":i.editor.format.value===e,onClick:t=>i.editor.format.value=e},f(i.editor.RESULT_FORMAT_LABELS[e]),9,Dt)),64))])])]),h(`div`,Ot,[i.editor.running.value?(t(),d(`div`,kt,[...n[21]||=[h(`p`,{class:`label`},`Выполняется…`,-1)]])):i.editor.runError.value===``?i.editor.hasResult.value&&i.editor.format.value===`table`?(t(),g(i.ResultsTable,{key:2,columns:i.editor.resultStatement.value?.columns??[],rows:i.editor.visibleRows.value},null,8,[`columns`,`rows`])):i.editor.hasResult.value?(t(),g(i.ResultsText,{key:3,text:i.editor.formatted.value[i.editor.format.value]},null,8,[`text`])):i.editor.lastRun.value===null?(t(),d(`div`,Pt,[...n[26]||=[h(`p`,{class:`label text-center`},`Напишите SQL и нажмите Выполнить SQL.`,-1)]])):(t(),d(`div`,Mt,[n[25]||=h(`p`,{class:`label-micro`},`Строк не возвращено`,-1),h(`p`,Nt,[n[24]||=p(` Запрос выполнился без возвращения набора результатов. `,-1),i.editor.changedRows.value>0?(t(),d(m,{key:0},[p(` Он изменил `+f(i.editor.changedRows.value)+` `+f(i.pluralizeRu(i.editor.changedRows.value,[`строку`,`строки`,`строк`]))+`. `,1)],64)):s(``,!0)])])):(t(),d(`div`,At,[n[22]||=h(`p`,{class:`label-micro`},`Этот SQL не выполнился`,-1),h(`p`,jt,f(i.editor.runError.value),1),n[23]||=h(`p`,{class:`mt-3 label`},` Операторы до ошибочного выполнились, редактор не изменился. Исправьте оператор и запустите снова. `,-1)]))]),h(`div`,Ft,[h(`div`,It,[h(`p`,Lt,[i.editor.hasResult.value?(t(),d(m,{key:0},[p(f(i.editor.rowsHidden.value?`показано ${i.editor.visibleRows.value.length} из ${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`:`${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`),1)],64)):s(``,!0),i.editor.summary.value===``?s(``,!0):(t(),d(m,{key:1},[p(f(i.editor.hasResult.value?` · `:``)+f(i.editor.summary.value),1)],64))]),h(`div`,Rt,[h(`button`,{type:`button`,class:`btn btn-secondary btn-sm`,disabled:!i.editor.hasResult.value||i.editor.exportingPng.value,onClick:n[8]||=(...e)=>i.editor.exportPng&&i.editor.exportPng(...e)},[l(i.ImageDown,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.exportingPng.value?`Готовится…`:`Скачать PNG`),1)],8,zt)])]),i.editor.rowsHidden.value?(t(),d(`p`,Bt,` Показаны первые `+f(i.editor.DISPLAY_ROW_LIMIT)+` строк — этого достаточно для учебных заданий. Больше возможностей и экспорта вы найдёте в SQL Редакторе. `,1)):s(``,!0)])]),h(`p`,Vt,[i.editor.notice.value===``?(t(),d(m,{key:1},[p(` Всё выполняется в этом браузере: база данных в памяти, ничего не загружается на сервер. `)],64)):(t(),d(m,{key:0},[p(f(i.editor.notice.value),1)],64))]),i.referenceMounted?(t(),g(i.TrainerReferenceDialog,{key:0,open:i.referenceOpen,onClose:n[9]||=e=>i.referenceOpen=!1},null,8,[`open`])):s(``,!0)])}var Ut=b(Ge,[[`render`,Ht]]);export{Ut as default};