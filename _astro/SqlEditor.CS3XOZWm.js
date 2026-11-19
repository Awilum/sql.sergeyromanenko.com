const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/TrainerReferenceDialog.DPWe3j5E.js","_astro/runtime-core.esm-bundler.nu_UAaCd.js","_astro/runtime-dom.esm-bundler.CFdarX-Y.js","_astro/AppDialog.mnlXinou.js","_astro/_plugin-vue_export-helper.BDNMzG2s.js","_astro/clipboard.CwnQ0M1R.js"])))=>i.map(i=>d[i]);
import{B as e,O as t,P as n,T as r,V as i,_ as a,a as o,c as s,g as c,h as l,k as u,l as d,lt as f,m as p,n as m,o as h,s as g}from"./runtime-core.esm-bundler.nu_UAaCd.js";import{t as _}from"./CodeEditor._N_G4Lgn.js";import{a as v,i as y,n as ee,r as te,t as ne}from"./use-share.Do3TTo6Y.js";import{n as b,t as x}from"./use-toasts.DHe7LhTi.js";import{n as S,t as re}from"./plural-ru.D2xqVzlp.js";import{t as C}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as w}from"./ResultsTable.D0F3mzDt.js";import{_ as T,a as ie,c as ae,g as E,h as D,i as oe,l as se,m as ce,n as O,o as le,r as ue,s as de,t as k}from"./ecommerce-database.CIMtbev7.js";import{a as fe,c as A,l as pe,n as j,o as me,r as he,s as ge,t as M}from"./sql-database.CQe7mSfq.js";import{c as _e,d as ve,f as ye,l as be,m as xe,n as N,p as Se,r as Ce,t as we,u as Te}from"./sql-results.BGrDTEXw.js";import{a as P,i as F,n as I,r as L,t as R}from"./players-database.B2qlRRdh.js";import{t as z}from"./download.BrZu-jki.js";import{t as B}from"./eraser.C4V5Bo9L.js";import{t as V}from"./book-open.Du-y9hX5.js";import{t as Ee}from"./preload-helper.DHhhL8Zf.js";var H=a({__name:`DatabaseExplorer`,props:{tables:{}},emits:[`select`],setup(e,{expose:t,emit:n}){t();let r={emit:n,get pluralizeRu(){return S}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),De={class:`flex flex-col gap-2`},U={key:0,class:`label`,"data-markdown-skip":``},W={class:`sql-explorer-head`},G={class:`sql-explorer-details`},K={class:`sql-explorer-summary`},Oe={class:`font-mono text-[0.875rem] text-ink`},ke={class:`label-micro`},Ae={key:0,class:`sql-schema`},je={class:`font-mono text-[0.8125rem] text-ink`},Me={class:`meta-mono`},Ne={class:`label`},q={key:1,class:`label mt-2`},Pe=[`onClick`],Fe={class:`sr-only`};function Ie(e,n,r,i,a,o){return t(),d(`div`,De,[r.tables.length===0?(t(),d(`p`,U,` Таблиц пока нет. Загрузите пример датасета или напишите CREATE TABLE и выполните его. `)):s(``,!0),(t(!0),d(m,null,u(r.tables,e=>(t(),d(`div`,{key:e.name,class:`sql-explorer-table`},[h(`div`,W,[h(`details`,G,[h(`summary`,K,[h(`span`,Oe,f(e.name),1),h(`span`,ke,f(e.kind)+` · `+f(e.columns.length)+` `+f(e.columns.length)+` `+f(i.pluralizeRu(e.columns.length,[`столбец`,`столбца`,`столбцов`])),1)]),e.columns.length>0?(t(),d(`table`,Ae,[n[0]||=h(`thead`,null,[h(`tr`,null,[h(`th`,{scope:`col`},`Столбец`),h(`th`,{scope:`col`},`Тип`),h(`th`,{scope:`col`},`Ограничения`)])],-1),h(`tbody`,null,[(t(!0),d(m,null,u(e.columns,e=>(t(),d(`tr`,{key:e.name},[h(`td`,je,f(e.name),1),h(`td`,Me,f(e.type===``?`—`:e.type),1),h(`td`,Ne,[e.primaryKey?(t(),d(m,{key:0},[p(`первичный ключ`)],64)):s(``,!0),e.primaryKey&&e.notNull?(t(),d(m,{key:1},[p(` · `)],64)):s(``,!0),e.notNull?(t(),d(m,{key:2},[p(`не null`)],64)):s(``,!0),e.defaultValue===null?s(``,!0):(t(),d(m,{key:3},[p(f(e.primaryKey||e.notNull?` · `:``)+`значение по умолчанию `+f(e.defaultValue),1)],64))])]))),128))])])):(t(),d(`p`,q,f(e.kind)+` не содержит собственных столбцов.`,1))]),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm sql-explorer-action`,onClick:t=>i.emit(`select`,e.name)},[n[1]||=p(` Запрос`,-1),h(`span`,Fe,f(e.name),1)],8,Pe)])]))),128))])}var J=C(H,[[`render`,Ie]]),Y=a({__name:`ResultsText`,props:{text:{}},setup(e,{expose:t}){t();let n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Le={class:`sql-text-scroll h-[22rem] xl:h-[30rem]`},Re={class:`sql-text-view`};function X(e,n,r,i,a,o){return t(),d(`div`,Le,[h(`pre`,Re,f(r.text),1)])}var Z=C(Y,[[`render`,X]]),ze=`-- The sample dataset: a players table, as a game backend might store it.
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
`,Be=500,Ve=100;function He(){let t=e(``),n=e(``),r=i(null),a=i(null),s=e(`loading`),c=e(``),l=e(null),u=e(``),d=e(`table`),f=e(``),p=e([]),m=e(null),h=e(null),g=e(!1),{toasts:_,push:v,dismiss:y}=x();function b(e,t){f.value=t,v(e,t)}let C=te({push:b}),w=ee({push:b}),T=o(()=>s.value===`running`),E=o(()=>s.value!==`loading`&&a.value!==null),D=o(()=>{let e=l.value?.statements??[];for(let t=e.length-1;t>=0;--t){let n=e[t];if(n.columns.length>0)return n}return null}),ce=o(()=>D.value!==null),O=o(()=>(l.value?.statements??[]).reduce((e,t)=>e+t.changes,0)),ue=o(()=>{let e=l.value;if(e===null)return``;let t=e.statements.length,n=[`${t} ${S(t,[`оператор`,`оператора`,`операторов`])}`];return O.value>0&&n.push(`${O.value} ${S(O.value,[`строка`,`строки`,`строк`])} изменена`),n.push(`${Math.round(e.durationMs)} ms`),n.join(` · `)}),k=o(()=>{let e=D.value;return e===null?null:{columns:e.columns,rows:e.rows}}),P=o(()=>{let e=k.value;return{table:e===null?``:be(e),markdown:e===null?``:ve(e),json:e===null?``:Te(e),yaml:e===null?``:xe(e),csv:e===null?``:_e(e),toon:e===null?``:ye(e)}}),F=o(()=>D.value?.rows.slice(0,Be)??[]),R=o(()=>D.value?.rows.length??0),z=o(()=>R.value>F.value.length);function B(){let e=a.value;p.value=e===null?[]:A(e)}function V(){let e=a.value;return e!==null&&A(e).length>0}function Ee(){let e=a.value;e!==null&&M(e),a.value=r.value===null?null:j(r.value),l.value=null,u.value=``,B()}function H(e){let t=a.value;t!==null&&M(t),a.value=e,l.value=null,u.value=``,B()}function De(){let e=a.value;if(!(e===null||T.value)){s.value=`running`,u.value=``,f.value=``;try{let n=pe(e,t.value);l.value=n,B(),n.error===null?b(n.statements.length===0?`info`:`success`,n.statements.length===0?`Нечего было выполнять.`:`Запрос выполнился.`):(u.value=n.error,b(`error`,n.statements.length>0?`Оператор ${n.statements.length+1} не выполнился. Операторы до него выполнились.`:`Этот SQL не выполнился.`))}catch(e){u.value=e instanceof Error?e.message:`Этот SQL не удалось выполнить.`,l.value=null,b(`error`,`Этот SQL не выполнился.`)}finally{s.value=`ready`}}}function U(){let e=r.value;if(e===null)return!1;s.value=`running`;try{let t=j(e),r=pe(t,n.value);return r.error===null?(H(t),!0):(M(t),u.value=`Скрипт схемы не выполнился: ${r.error}`,!1)}finally{s.value=`ready`,m.value=null}}function W(){U()?b(`success`,`База построена из скрипта схемы: ${re(p.value.length,[`таблица`,`таблицы`,`таблиц`])}.`):b(`error`,`База данных оставлена как была. Исправьте скрипт и постройте снова.`)}function G(){n.value=ze,W()}function K(){r.value!==null&&(Ee(),b(`success`,`База данных сброшена. Ваш запрос и скрипт схемы не изменились.`),m.value=null)}async function Oe(e){let t=r.value;if(t!==null){g.value=!0;try{let r=new Uint8Array(await e.arrayBuffer()),i;try{i=me(t,r)}catch{b(`error`,`${e.name} не является базой SQLite, которую этот браузер может открыть.`),m.value=null;return}try{A(i)}catch{M(i),b(`error`,`${e.name} не является базой SQLite, которую этот браузер может открыть.`),m.value=null;return}ke(i),n.value=he(i),b(`success`,`Открыто ${e.name}: ${re(p.value.length,[`таблица`,`таблицы`,`таблиц`])}. Скрипт схемы теперь содержит скрипт, который перестраивает её.`),m.value=null}finally{g.value=!1}}}function ke(e){H(e)}function Ae(e,t){V()?(h.value={label:t,apply:e},m.value=`import`,b(`info`,`Это заменит таблицы, уже находящиеся в базе. Нажмите Импорт ещё раз для подтверждения.`)):e()}function je(){let e=h.value;h.value=null,m.value=null,e?.apply()}function Me(){m.value=null,h.value=null}function Ne(e){V()?m.value===e?e===`reset`?K():G():m.value=e:e===`reset`?K():G()}function q(e,t){return C.copy(t,{success:`${e} скопировано в буфер обмена.`,error:`Браузер отказал в доступе к буферу обмена.`,empty:`Нечего копировать как ${e} пока.`})}function Pe(){return q(`SQL`,t.value)}function Fe(){let e=k.value;return e===null?(b(`info`,`Нечего копировать пока. Сначала выполните запрос.`),Promise.resolve(!1)):q(`TSV`,Se(e))}function Ie(e){return k.value===null?(b(`info`,`Нечего копировать пока. Сначала выполните запрос.`),Promise.resolve(!1)):q(N[e],P.value[e])}let J=e(!1);async function Y(){let e=k.value;if(e===null)b(`info`,`Нечего сохранять: сначала выполните запрос, который вернёт строки.`);else{J.value=!0;try{await se(e,de),b(`success`,`Результат сохранён как PNG.`)}catch(e){b(`error`,e instanceof Error?`Не удалось сохранить PNG: ${e.message}`:`Не удалось сохранить PNG.`)}finally{J.value=!1}}}function Le(){let e=a.value;if(e!==null)try{ae(e,`sql-sandbox-database`,`sqlite`),b(`success`,`База данных сохранена как файл SQLite.`)}catch(e){b(`error`,e instanceof Error?`Не удалось сохранить базу: ${e.message}`:`Не удалось сохранить базу.`)}}function Re(){return typeof window>`u`?``:window.location.href.split(`#`)[0]??``}function X(){return{version:1,sql:t.value,setup:n.value,format:d.value,results:ie(l.value),png:{...de}}}function Z(e){if(t.value=e.sql,n.value=e.setup,d.value=e.format,!U())throw Error(u.value||`Скрипт схемы не выполнился.`);l.value=e.results,u.value=e.results?.error??``}function He(){return w.share(()=>oe(X(),Re()),{success:`Ссылка скопирована`,error:`Не удалось скопировать ссылку`})}function Q(){return ne(le,Z)}async function $(){s.value=`loading`,c.value=``;try{r.value=await fe(),a.value=j(r.value),B()}catch(e){c.value=e instanceof Error?e.message:`SQLite не удалось запустить в этом браузере.`,s.value=`ready`;return}s.value=`ready`,f.value=``;let e=Q();e.ok?b(`success`,`Состояние восстановлено из ссылки.`):e.error===null?(t.value=L,n.value=I,W()):(v(`error`,`Не удалось открыть ссылку`,e.error),f.value=`Ссылка не открылась.`)}function Ue(){t.value=``,b(`info`,`Редактор очищен. База данных и её таблицы не изменились.`)}function We(e){t.value=e,u.value=``}function Ge(e){n.value=e}function Ke(e){return b(`info`,`Запрос для ${e} в редакторе.`),`SELECT *\nFROM ${ge(e)}\nLIMIT ${Ve};\n`}return{source:t,setup:n,status:s,running:T,ready:E,initError:c,lastRun:l,runError:u,format:d,notice:f,tables:p,resultStatement:D,resultTable:k,hasResult:ce,visibleRows:F,totalRows:R,rowsHidden:z,DISPLAY_ROW_LIMIT:Be,formatted:P,changedRows:O,summary:ue,importing:g,pendingConfirm:m,toasts:_,dismissToast:y,copyCopied:C.copied,shareCopied:w.shareCopied,RESULT_FORMATS:we,RESULT_FORMAT_LABELS:Ce,RESULT_FORMAT_COPY_LABELS:N,start:$,runSql:De,clearEditor:Ue,onSourceInput:We,onSetupInput:Ge,tableQueryFor:Ke,shareState:He,restoreFromUrl:Q,buildShareState:X,applyShareState:Z,buildDatabase:W,loadSample:G,resetDatabase:K,importDatabaseFile:Oe,requestImport:Ae,confirmImport:je,cancelConfirm:Me,confirmOrRun:Ne,copySql:Pe,copyTsv:Fe,copyFormat:Ie,exportPng:Y,exportingPng:J,exportDatabase:Le}}var Q=[{name:R,sql:I,query:L},{name:k,sql:O,query:ue}];Q.map(e=>e.name);function $(e){let t=e.trim();return t.length===0?-1:Q.findIndex(e=>e.sql.trim()===t)}var Ue=a({__name:`SqlEditor`,setup(t,{expose:i}){i();let a=He(),o=[`table`,`markdown`,`json`],s=c(()=>Ee(()=>import(`./TrainerReferenceDialog.DPWe3j5E.js`),__vite__mapDeps([0,1,2,3,4,5]))),l=e(!1),u=e(!1);function d(){l.value=!0,u.value=!0}let f=n(`codeEditor`),p=e(null),m=e(0);function h(e){if(e===m.value)return;let t=Q[e];t&&(a.setup.value.trim()===t.sql.trim()||window.confirm(`Текущий скрипт схемы отличается от выбранной базы. Переключить базу и заменить скрипт?`))&&(m.value=e,a.setup.value=t.sql,a.source.value=t.query,a.buildDatabase())}function g(e){let t=a.tableQueryFor(e),n=f.value;n?n.insert(t):a.source.value=`${a.source.value}${t}`}function ee(){a.pendingConfirm.value===`import`?a.confirmImport():p.value?.click()}function te(e){let t=e.target,n=t.files?.[0];t.value=``,n!==void 0&&a.requestImport(()=>{a.importDatabaseFile(n).then(()=>{m.value=$(a.setup.value)})},n.name)}function ne(){a.pendingConfirm.value===`reset`?a.resetDatabase():a.confirmOrRun(`reset`)}r(async()=>{await a.start(),m.value=$(a.setup.value)});let x={editor:a,simpleFormats:o,TrainerReferenceDialog:s,referenceMounted:l,referenceOpen:u,openReference:d,codeEditor:f,fileInput:p,currentDbIndex:m,switchDatabase:h,selectTable:g,importFile:ee,onFileChosen:te,runReset:ne,CodeEditor:_,CopyButton:v,ShareButton:y,AppToasts:b,DatabaseExplorer:J,ResultsTable:w,ResultsText:Z,SetupEditor:ce,get pluralizeRu(){return S},get DatabaseZap(){return T},get Download(){return z},get FileUp(){return E},get RotateCcw(){return F},get ImageDown(){return D},get Play(){return P},get Eraser(){return B},get BookOpen(){return V},get EDUCATIONAL_DATABASES(){return Q}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),We={"aria-label":`SQL-песочница`,class:`flex flex-col gap-4`,"data-markdown-skip":``},Ge={class:`grid grid-cols-1 gap-4 xl:grid-cols-2`},Ke={class:`flex min-w-0 flex-col overflow-hidden card`},qe={class:`border-b border-line px-4 py-3 sm:px-6`},Je={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Ye={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`SQL-запрос`},Xe=[`disabled`],Ze=[`disabled`,`aria-busy`],Qe={key:0,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},$e={key:1,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,role:`alert`},et={class:`text-center`},tt={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},nt={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},rt={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-2`},it={class:`flex min-w-0 flex-col overflow-hidden card`},at={class:`border-b border-line px-4 py-3 sm:px-6`},ot={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},st={class:`flex gap-2`,role:`group`,"aria-label":`Выбор базы данных`},ct=[`aria-pressed`,`onClick`],lt={class:`px-4 py-4 sm:px-6`},ut={class:`border-t border-line`},dt={class:`border-b border-line px-4 py-3 sm:px-6`},ft={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},pt=[`disabled`],mt={class:`px-4 py-4 sm:px-6`},ht={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},gt={class:`flex flex-wrap items-center gap-2`},_t=[`disabled`],vt=[`disabled`],yt=[`disabled`],bt={key:0,class:`mt-2 label`},xt={key:1,class:`mt-2 label`},St={class:`flex min-w-0 flex-col overflow-hidden card`},Ct={class:`border-b border-line px-4 py-3 sm:px-6`},wt={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2`},Tt={role:`group`,"aria-label":`Формат результата`,class:`flex flex-wrap items-center gap-2`},Et=[`aria-pressed`,`onClick`],Dt={class:`px-4 py-4 sm:px-6`},Ot={key:0,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},kt={key:1,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`,role:`alert`},At={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},jt={key:4,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`},Mt={class:`mt-2 text-[0.9375rem] leading-relaxed text-muted`},Nt={key:5,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`},Pt={class:`border-t border-line px-4 py-3 sm:px-6`},Ft={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-3`},It={class:`meta-mono text-label`},Lt={class:`flex flex-wrap items-center gap-2`},Rt=[`disabled`],zt={key:0,class:`mt-2 label`},Bt={class:`label`,role:`status`,"aria-live":`polite`};function Vt(e,n,r,i,a,o){return t(),d(`section`,We,[h(`div`,Ge,[h(`div`,Ke,[h(`div`,qe,[h(`div`,Je,[n[12]||=h(`h3`,{class:`panel-header`},`SQL-запрос`,-1),h(`div`,Ye,[l(i.CopyButton,{copied:i.editor.copyCopied.value,disabled:i.editor.source.value.trim().length===0,"data-testid":`copy-sql`,onClick:n[0]||=e=>i.editor.copySql()},null,8,[`copied`,`disabled`]),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:i.editor.source.value.length===0,"data-testid":`clear-editor`,onClick:n[1]||=e=>i.editor.clearEditor()},[l(i.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[11]||=p(` Очистить `,-1)],8,Xe),l(i.ShareButton,{copied:i.editor.shareCopied.value,"data-testid":`share`,onClick:n[2]||=e=>i.editor.shareState()},null,8,[`copied`]),h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value,"aria-busy":i.editor.running.value,"data-testid":`run-sql`,onClick:n[3]||=e=>i.editor.runSql()},[l(i.Play,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.running.value?`Выполняется…`:`Выполнить`),1)],8,Ze)])])]),i.editor.status.value===`loading`?(t(),d(`div`,Qe,[...n[13]||=[h(`p`,{class:`label`},`Запуск SQLite…`,-1)]])):i.editor.initError.value===``?(t(),g(i.CodeEditor,{key:2,ref:`codeEditor`,modelValue:i.editor.source.value,"onUpdate:modelValue":[n[4]||=e=>i.editor.source.value=e,i.editor.onSourceInput],onRun:i.editor.runSql},null,8,[`modelValue`,`onUpdate:modelValue`,`onRun`])):(t(),d(`div`,$e,[h(`div`,et,[n[14]||=h(`p`,{class:`label-micro`},`SQLite не запустился`,-1),h(`p`,tt,f(i.editor.initError.value),1)])])),h(`div`,nt,[h(`div`,rt,[n[16]||=h(`p`,{class:`label m-0`},`Ctrl или Cmd с Enter — выполнить запрос из редактора.`,-1),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:i.openReference},[l(i.BookOpen,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[15]||=p(` Открыть справочник `,-1)])])])]),h(`div`,it,[h(`div`,at,[h(`div`,ot,[n[17]||=h(`h3`,{class:`panel-header`},`Предустановленные базы данных`,-1),h(`div`,st,[(t(!0),d(m,null,u(i.EDUCATIONAL_DATABASES,(e,n)=>(t(),d(`button`,{key:e.name,type:`button`,class:`btn btn-ghost btn-sm`,"aria-pressed":i.currentDbIndex===n,onClick:e=>i.switchDatabase(n)},f(e.name),9,ct))),128))])])]),h(`div`,lt,[n[18]||=h(`p`,{class:`m-0 mb-3 text-[0.85rem] leading-relaxed text-muted`},` В песочнице доступны две предустановленные базы данных: Игроки и Интернет-магазин. Выберите базу, чтобы посмотреть её структуру и SQL-скрипт создания. `,-1),l(i.DatabaseExplorer,{tables:i.editor.tables.value,onSelect:i.selectTable},null,8,[`tables`])]),h(`div`,ut,[h(`div`,dt,[h(`div`,ft,[n[20]||=h(`h3`,{class:`panel-header`},`Скрипт схемы`,-1),h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value||i.editor.setup.value.trim().length===0,onClick:n[5]||=(...e)=>i.editor.buildDatabase&&i.editor.buildDatabase(...e)},[l(i.DatabaseZap,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[19]||=p(` Построить базу `,-1)],8,pt)])]),h(`div`,mt,[l(i.SetupEditor,{modelValue:i.editor.setup.value,"onUpdate:modelValue":[n[6]||=e=>i.editor.setup.value=e,i.editor.onSetupInput]},null,8,[`modelValue`,`onUpdate:modelValue`]),n[21]||=h(`p`,{class:`mt-3 label`},` Скрипт схемы создаёт базу с нуля: CREATE TABLE, INSERT, индексы. Он отделён от редактора запросов — постройте базу, а затем пишите к ней SQL сверху. Диалект — SQLite (об учебной базе курса на MySQL см. примечание выше). `,-1)])]),h(`div`,ht,[h(`div`,gt,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:i.runReset},[l(i.RotateCcw,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.pendingConfirm.value===`reset`?`Точно сбросить?`:`Сбросить базу`),1)],8,_t),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value||i.editor.importing.value,onClick:i.importFile},[l(i.FileUp,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.pendingConfirm.value===`import`?`Точно импортировать?`:`Импорт .sqlite`),1)],8,vt),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:n[7]||=(...e)=>i.editor.exportDatabase&&i.editor.exportDatabase(...e)},[l(i.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),n[22]||=p(` Скачать базу `,-1)],8,yt),i.editor.pendingConfirm.value===`reset`||i.editor.pendingConfirm.value===`import`?(t(),d(`button`,{key:0,type:`button`,class:`btn btn-ghost btn-sm`,onClick:n[8]||=(...e)=>i.editor.cancelConfirm&&i.editor.cancelConfirm(...e)},` Отмена `)):s(``,!0),h(`input`,{ref:`fileInput`,type:`file`,accept:`.sqlite,.db,.sqlite3,.db3`,class:`hidden`,"aria-hidden":`true`,tabindex:`-1`,onChange:i.onFileChosen},null,544)]),i.editor.pendingConfirm.value===`reset`?(t(),d(`p`,bt,` Сброс удалит таблицы активной базы. Запрос и скрипт схемы останутся. `)):i.editor.pendingConfirm.value===`import`?(t(),d(`p`,xt,` Импорт заменит таблицы активной базы файлом, который вы выбрали. `)):s(``,!0)])])]),h(`div`,St,[h(`div`,Ct,[h(`div`,wt,[n[23]||=h(`h3`,{class:`panel-header`},`Результаты`,-1),h(`div`,Tt,[(t(),d(m,null,u(i.simpleFormats,e=>h(`button`,{key:e,type:`button`,class:`btn btn-secondary btn-sm`,"aria-pressed":i.editor.format.value===e,onClick:t=>i.editor.format.value=e},f(i.editor.RESULT_FORMAT_LABELS[e]),9,Et)),64))])])]),h(`div`,Dt,[i.editor.running.value?(t(),d(`div`,Ot,[...n[24]||=[h(`p`,{class:`label`},`Выполняется…`,-1)]])):i.editor.runError.value===``?i.editor.hasResult.value&&i.editor.format.value===`table`?(t(),g(i.ResultsTable,{key:2,columns:i.editor.resultStatement.value?.columns??[],rows:i.editor.visibleRows.value},null,8,[`columns`,`rows`])):i.editor.hasResult.value?(t(),g(i.ResultsText,{key:3,text:i.editor.formatted.value[i.editor.format.value]},null,8,[`text`])):i.editor.lastRun.value===null?(t(),d(`div`,Nt,[...n[29]||=[h(`p`,{class:`label text-center`},`Напишите SQL и нажмите Выполнить SQL.`,-1)]])):(t(),d(`div`,jt,[n[28]||=h(`p`,{class:`label-micro`},`Строк не возвращено`,-1),h(`p`,Mt,[n[27]||=p(` Запрос выполнился без возвращения набора результатов. `,-1),i.editor.changedRows.value>0?(t(),d(m,{key:0},[p(` Он изменил `+f(i.editor.changedRows.value)+` `+f(i.pluralizeRu(i.editor.changedRows.value,[`строку`,`строки`,`строк`]))+`. `,1)],64)):s(``,!0)])])):(t(),d(`div`,kt,[n[25]||=h(`p`,{class:`label-micro`},`Этот SQL не выполнился`,-1),h(`p`,At,f(i.editor.runError.value),1),n[26]||=h(`p`,{class:`mt-3 label`},` Операторы до ошибочного выполнились, редактор не изменился. Исправьте оператор и запустите снова. `,-1)]))]),h(`div`,Pt,[h(`div`,Ft,[h(`p`,It,[i.editor.hasResult.value?(t(),d(m,{key:0},[p(f(i.editor.rowsHidden.value?`показано ${i.editor.visibleRows.value.length} из ${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`:`${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`),1)],64)):s(``,!0),i.editor.summary.value===``?s(``,!0):(t(),d(m,{key:1},[p(f(i.editor.hasResult.value?` · `:``)+f(i.editor.summary.value),1)],64))]),h(`div`,Lt,[h(`button`,{type:`button`,class:`btn btn-secondary btn-sm`,disabled:!i.editor.hasResult.value||i.editor.exportingPng.value,onClick:n[9]||=(...e)=>i.editor.exportPng&&i.editor.exportPng(...e)},[l(i.ImageDown,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),p(` `+f(i.editor.exportingPng.value?`Готовится…`:`Скачать PNG`),1)],8,Rt)])]),i.editor.rowsHidden.value?(t(),d(`p`,zt,` Показаны первые `+f(i.editor.DISPLAY_ROW_LIMIT)+` строк — этого достаточно для учебных заданий. Больше возможностей и экспорта вы найдёте в SQL Редакторе. `,1)):s(``,!0)])]),h(`p`,Bt,[i.editor.notice.value===``?(t(),d(m,{key:1},[p(` Всё выполняется в этом браузере: база данных в памяти, ничего не загружается на сервер. `)],64)):(t(),d(m,{key:0},[p(f(i.editor.notice.value),1)],64))]),i.referenceMounted?(t(),g(i.TrainerReferenceDialog,{key:0,open:i.referenceOpen,onClose:n[10]||=e=>i.referenceOpen=!1},null,8,[`open`])):s(``,!0),l(i.AppToasts,{toasts:i.editor.toasts.value,announce:!1,onDismiss:i.editor.dismissToast},null,8,[`toasts`,`onDismiss`])])}var Ht=C(Ue,[[`render`,Vt]]);export{Ht as default};