const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/TrainerReferenceDialog.E_4vEw6L.js","_astro/runtime-core.esm-bundler.QXARJSnr.js","_astro/runtime-dom.esm-bundler.CJEas4C-.js","_astro/_plugin-vue_export-helper.BDNMzG2s.js","_astro/clipboard.B4HicLjz.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,L as r,N as i,R as a,S as o,a as s,c,g as l,h as u,j as d,l as f,m as p,n as m,o as h,p as g,rt as _,s as v}from"./runtime-core.esm-bundler.QXARJSnr.js";import{A as y,B as ee,C as b,D as x,E as te,F as S,I as C,L as w,M as T,N as E,O as D,P as O,R as ne,S as re,T as k,_ as ie,a as ae,b as oe,c as A,d as se,f as ce,g as le,h as ue,i as de,j,k as M,l as fe,m as N,n as P,o as pe,p as me,r as he,s as ge,t as F,u as _e,v as ve,w as ye,x as be,y as xe,z as I}from"./sql-database.BKc3uuEJ.js";import{t as L}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as Se}from"./clipboard.B4HicLjz.js";import{t as R}from"./createLucideIcon.gbakV2Gn.js";import{t as Ce}from"./preload-helper.DHhhL8Zf.js";var z=R({name:`database-zap`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]}),we=R({name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]}),Te=R({name:`image-down`,size:24,node:[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19 3 3v-5.5`,key:`9ldu5r`}],[`path`,{d:`m17 22 3-3`,key:`1nkfve`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]}),Ee=R({name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]}),B=l({__name:`CodeEditor`,props:{modelValue:{}},emits:[`update:modelValue`,`run`],setup(t,{expose:n,emit:a}){let s=t,c=a,l=d(`host`),u=r(),{theme:f,highlightStyle:p}=ye(),m=te({dialect:k,upperCaseKeywords:!1});e(()=>{l.value&&(u.value=new S({state:I.create({doc:s.modelValue,extensions:[m,w(),I.tabSize.of(2),E.of(`  `),T(),D(),j(),O(p),f,C.of([...x,...M,y,{key:`Mod-Enter`,preventDefault:!0,run:()=>(c(`run`),!0)}]),S.lineWrapping,S.editable.of(!0),ne(`Напишите SQL и нажмите Выполнить SQL`),S.contentAttributes.of({"aria-label":`Источник SQL`,role:`textbox`,"aria-multiline":`true`}),S.updateListener.of(e=>{e.docChanged&&c(`update:modelValue`,e.state.doc.toString())})]}),parent:l.value}))});function h(e){let t=u.value;t&&t.dispatch({changes:{from:0,to:t.state.doc.length,insert:e}})}function g(e){let t=u.value;if(!t)return;let n=t.state.selection.main.from;t.dispatch({changes:{from:n,insert:e},selection:{anchor:n+e.length}}),t.focus()}i(()=>s.modelValue,e=>{e!==u.value?.state.doc.toString()&&h(e)}),o(()=>{u.value?.destroy(),u.value=void 0}),n({setDoc:h,insert:g,focus:()=>u.value?.focus()});let _={props:s,emit:c,host:l,view:u,theme:f,highlightStyle:p,sqlLanguage:m,setDoc:h,insert:g};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),De={ref:`host`,class:`sql-editor-host h-[22rem] xl:h-[30rem]`};function Oe(e,t,r,i,a,o){return n(),f(`div`,De,null,512)}var ke=L(B,[[`render`,Oe]]),Ae=l({__name:`DatabaseExplorer`,props:{tables:{}},emits:[`select`],setup(e,{expose:t,emit:n}){t();let r={emit:n,get pluralizeRu(){return b}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),je={class:`flex flex-col gap-2`},Me={key:0,class:`label`},Ne={class:`sql-explorer-head`},Pe={class:`sql-explorer-details`},Fe={class:`sql-explorer-summary`},Ie={class:`font-mono text-[0.875rem] text-ink`},Le={class:`label-micro`},Re={key:0,class:`sql-schema`},ze={class:`font-mono text-[0.8125rem] text-ink`},Be={class:`meta-mono`},Ve={class:`label`},He={key:1,class:`label mt-2`},Ue=[`onClick`],We={class:`sr-only`};function Ge(e,r,i,a,o,s){return n(),f(`div`,je,[i.tables.length===0?(n(),f(`p`,Me,` Таблиц пока нет. Загрузите пример датасета или напишите CREATE TABLE и выполните его. `)):c(``,!0),(n(!0),f(m,null,t(i.tables,e=>(n(),f(`div`,{key:e.name,class:`sql-explorer-table`},[h(`div`,Ne,[h(`details`,Pe,[h(`summary`,Fe,[h(`span`,Ie,_(e.name),1),h(`span`,Le,_(e.kind)+` · `+_(e.columns.length)+` `+_(e.columns.length)+` `+_(a.pluralizeRu(e.columns.length,[`столбец`,`столбца`,`столбцов`])),1)]),e.columns.length>0?(n(),f(`table`,Re,[r[0]||=h(`thead`,null,[h(`tr`,null,[h(`th`,{scope:`col`},`Столбец`),h(`th`,{scope:`col`},`Тип`),h(`th`,{scope:`col`},`Ограничения`)])],-1),h(`tbody`,null,[(n(!0),f(m,null,t(e.columns,e=>(n(),f(`tr`,{key:e.name},[h(`td`,ze,_(e.name),1),h(`td`,Be,_(e.type===``?`—`:e.type),1),h(`td`,Ve,[e.primaryKey?(n(),f(m,{key:0},[g(`первичный ключ`)],64)):c(``,!0),e.primaryKey&&e.notNull?(n(),f(m,{key:1},[g(` · `)],64)):c(``,!0),e.notNull?(n(),f(m,{key:2},[g(`не null`)],64)):c(``,!0),e.defaultValue===null?c(``,!0):(n(),f(m,{key:3},[g(_(e.primaryKey||e.notNull?` · `:``)+`значение по умолчанию `+_(e.defaultValue),1)],64))])]))),128))])])):(n(),f(`p`,He,_(e.kind)+` не содержит собственных столбцов.`,1))]),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm sql-explorer-action`,onClick:t=>a.emit(`select`,e.name)},[r[1]||=g(` Запрос`,-1),h(`span`,We,_(e.name),1)],8,Ue)])]))),128))])}var Ke=L(Ae,[[`render`,Ge]]),qe=l({__name:`ResultsText`,props:{text:{}},setup(e,{expose:t}){t();let n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Je={class:`sql-text-scroll h-[22rem] xl:h-[30rem]`},Ye={class:`sql-text-view`};function Xe(e,t,r,i,a,o){return n(),f(`div`,Je,[h(`pre`,Ye,_(r.text),1)])}var Ze=L(qe,[[`render`,Xe]]),Qe=l({__name:`SetupEditor`,props:{modelValue:{}},emits:[`update:modelValue`],setup(e,{expose:t,emit:n}){t();let r=n;function i(e){let t=e.target;r(`update:modelValue`,t.value)}let a={emit:r,onInput:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),$e={class:`sql-schema-host`},et=[`value`];function tt(e,t,r,i,a,o){return n(),f(`div`,$e,[t[0]||=h(`label`,{for:`sql-schema`,class:`label-micro`},`Схема SQL`,-1),h(`textarea`,{id:`sql-schema`,class:`sql-schema-input`,value:r.modelValue,spellcheck:`false`,autocomplete:`off`,autocapitalize:`off`,placeholder:`CREATE TABLE …
INSERT INTO …`,onInput:i.onInput},null,40,et),t[1]||=h(`p`,{class:`mt-2 label`},` Скрипт, который строит и заполняет базу данных. Вставьте схему или дамп из любой базы SQLite и нажмите Построить базу. Он выполняется в этом браузере, в памяти. `,-1)])}var nt=L(Qe,[[`render`,tt]]),rt=`-- The sample dataset: a players table, as a game backend might store it.
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
`,it=`PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL DEFAULT 'Россия',
    level INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    rank_title VARCHAR(50),
    guild VARCHAR(50),
    wins INTEGER NOT NULL DEFAULT 0,
    losses INTEGER NOT NULL DEFAULT 0,
    win_rate DECIMAL(5,2),
    last_login DATE,
    registration_date DATE NOT NULL
);

INSERT INTO players (nickname, email, city, level, rating, rank_title, guild, wins, losses, win_rate, last_login, registration_date)
VALUES
('AlphaKnight', 'alpha_knight@yandex.ru', 'Москва', 45, 2100, 'Gold', 'Грифоны Эрафии', 120, 80, 60.00, '2026-06-20', '2025-01-15'),
('CatQueen', 'cat_queen@mail.ru', 'Санкт-Петербург', 12, 850, 'Bronze', NULL, 15, 30, 33.33, '2026-06-19', '2026-05-10'),
('ThunderStrike', 'thunder_strike@yandex.ru', 'Новосибирск', 89, 3450, 'Diamond', 'Черные Драконы Нигона', 540, 410, 56.84, '2026-06-21', '2024-08-22'),
('AliceFox', 'alice_fox99@mail.ru', 'Екатеринбург', 31, 1500, 'Silver', 'Золотые Единороги Авли', 75, 70, 51.72, '2026-06-15', '2025-11-03'),
('MaxDrive', 'max_drive@yandex.ru', 'Омск', 55, 2400, 'Gold', 'Грифоны Эрафии', 210, 180, 53.85, '2026-06-21', '2025-03-14'),
('NightWolf', 'night_wolf@mail.ru', 'Казань', 73, 2900, 'Platinum', 'Церберы Инферно', 380, 310, 55.07, '2026-06-18', '2024-12-01'),
('StarDust', 'star_dust@yandex.ru', 'Нижний Новгород', 22, 1150, 'Silver', NULL, 42, 45, 48.28, '2026-06-11', '2026-02-18'),
('SteelKnight', 'steel_knight@mail.ru', 'Челябинск', 61, 2650, 'Platinum', 'Черные Драконы Нигона', 290, 240, 54.72, '2026-06-20', '2025-05-20'),
('CyberKing', 'cyber_king@yandex.ru', 'Самара', 40, 1950, 'Gold', 'Гидры Таталии', 165, 140, 54.10, '2026-06-17', '2025-07-07'),
('PhoenixRF', 'phoenix_rf@mail.ru', 'Ростов-на-Дону', 50, 2200, 'Gold', 'Золотые Единороги Авли', 200, 190, 51.28, '2026-06-19', '2025-04-12'),
('GnomeMiner', 'gnome_miner@yandex.ru', 'Уфа', 34, 1600, 'Silver', 'Церберы Инферно', 95, 88, 51.91, '2026-06-14', '2025-09-30'),
('SiberianLion', 'siberian_lion@mail.ru', 'Красноярск', 82, 3200, 'Diamond', 'Черные Драконы Нигона', 490, 420, 53.85, '2026-06-21', '2024-09-15'),
('WindChange', 'wind_change@yandex.ru', 'Пермь', 18, 980, 'Bronze', NULL, 25, 35, 41.67, '2026-06-16', '2026-04-01'),
('SilentStream', 'silent_stream@mail.ru', 'Воронеж', 28, 1350, 'Silver', 'Золотые Единороги Авли', 58, 62, 48.33, '2026-06-12', '2025-12-10'),
('BalticStorm', 'baltic_storm@yandex.ru', 'Калининград', 67, 2800, 'Platinum', 'Грифоны Эрафии', 320, 280, 53.33, '2026-06-20', '2025-02-28'),
('PrinceX', 'prince_x@mail.ru', 'Владимир', 5, 500, 'Bronze', NULL, 2, 8, 20.00, '2026-06-05', '2026-06-01'),
('ForestHunter', 'forest_hunter@yandex.ru', 'Хабаровск', 70, 2950, 'Platinum', 'Церберы Инферно', 350, 300, 53.85, '2026-06-21', '2024-11-11'),
('AmurTiger', 'amur_tiger@mail.ru', 'Владивосток', 58, 2500, 'Gold', 'Громовые Птицы Крюлода', 240, 210, 53.33, '2026-06-19', '2025-06-14'),
('BlackSea', 'black_sea@yandex.ru', 'Сочи', 39, 1800, 'Gold', NULL, 130, 120, 52.00, '2026-06-18', '2025-08-19'),
('RiverMaid', 'river_maid@mail.ru', 'Волгоград', 25, 1200, 'Silver', 'Золотые Единороги Авли', 50, 48, 51.02, '2026-06-14', '2026-01-25'),
('SeaWolf', 'sea_wolf@yandex.ru', 'Мурманск', 48, 2050, 'Gold', 'Грифоны Эрафии', 170, 155, 52.31, '2026-06-20', '2025-05-05'),
('SteppeEagle', 'steppe_eagle@mail.ru', 'Оренбург', 33, 1450, 'Silver', 'Гидры Таталии', 80, 85, 48.48, '2026-06-13', '2025-10-12'),
('NorthLight', 'north_light@yandex.ru', 'Тула', 15, 900, 'Bronze', NULL, 18, 22, 45.00, '2026-06-10', '2026-04-20'),
('SilverArrow', 'silver_arrow@mail.ru', 'Ижевск', 64, 2700, 'Platinum', 'Черные Драконы Нигона', 310, 260, 54.39, '2026-06-19', '2025-03-03'),
('Fisherman', 'fisherman@yandex.ru', 'Астрахань', 29, 1300, 'Silver', NULL, 64, 66, 49.23, '2026-06-16', '2025-11-15'),
('StormBringer', 'storm_bringer@mail.ru', 'Саратов', 52, 2300, 'Gold', 'Церберы Инферно', 205, 185, 52.56, '2026-06-17', '2025-04-29'),
('KazanCat', 'kazan_cat@yandex.ru', 'Казань', 8, 600, 'Bronze', NULL, 4, 12, 25.00, '2026-06-03', '2026-05-28'),
('MountainQueen', 'mountain_queen@mail.ru', 'Екатеринбург', 77, 3100, 'Diamond', 'Фениксы Конфлюкса', 450, 390, 53.57, '2026-06-21', '2024-10-05'),
('AdmiralB', 'admiral_b@yandex.ru', 'Санкт-Петербург', 91, 3600, 'Master', 'Черные Драконы Нигона', 620, 480, 56.36, '2026-06-21', '2024-07-01'),
('MoscowGuy', 'moscow_guy@mail.ru', 'Москва', 42, 1980, 'Gold', 'Грифоны Эрафии', 150, 135, 52.63, '2026-06-20', '2025-07-20'),
('Meteorite', 'meteorite@yandex.ru', 'Челябинск', 36, 1700, 'Silver', 'Церберы Инферно', 110, 105, 51.16, '2026-06-15', '2025-08-30'),
('DiamondUser', 'diamond_user@mail.ru', 'Якутск', 60, 2600, 'Platinum', 'Громовые Птицы Крюлода', 275, 245, 52.88, '2026-06-19', '2025-05-12'),
('RyazanRider', 'ryazan_rider@yandex.ru', 'Рязань', 24, 1100, 'Silver', NULL, 48, 52, 48.00, '2026-06-12', '2026-01-10'),
('TverWanderer', 'tver_wanderer@mail.ru', 'Тверь', 19, 950, 'Bronze', 'Древние Бегемоты', 32, 40, 44.44, '2026-06-11', '2026-03-15'),
('CossackRider', 'cossack_rider@yandex.ru', 'Краснодар', 57, 2450, 'Gold', 'Черные Драконы Нигона', 230, 205, 52.87, '2026-06-20', '2025-04-05'),
('YarBear', 'yar_bear@mail.ru', 'Ярославль', 44, 2000, 'Gold', 'Грифоны Эрафии', 160, 145, 52.46, '2026-06-18', '2025-06-25'),
('BaikalSeal', 'baikal_seal@yandex.ru', 'Иркутск', 68, 2850, 'Platinum', 'Мантикоры Подземелья', 340, 290, 53.97, '2026-06-21', '2024-12-15'),
('LipetskBoy', 'lipetsk_boy@mail.ru', 'Липецк', 14, 880, 'Bronze', NULL, 14, 26, 35.00, '2026-06-08', '2026-05-01'),
('PskovLynx', 'pskov_lynx@mail.ru', 'Псков', 32, 1480, 'Silver', 'Фениксы Конфлюкса', 77, 81, 48.73, '2026-06-14', '2025-10-22'),
('FalconScout', 'falcon_scout@mail.ru', 'Ставрополь', 49, 2150, 'Gold', 'Гидры Таталии', 185, 165, 52.86, '2026-06-17', '2025-05-18'),
('AltaiShaman', 'altai_shaman@yandex.ru', 'Барнаул', 72, 2980, 'Platinum', 'Черные Драконы Нигона', 390, 330, 54.17, '2026-06-20', '2024-11-20'),
('TulaBaker', 'tula_baker@mail.ru', 'Тула', 21, 1050, 'Silver', NULL, 38, 42, 47.50, '2026-06-13', '2026-02-10'),
('KurskBird', 'kursk_bird@yandex.ru', 'Курск', 38, 1750, 'Silver', 'Грифоны Эрафии', 125, 118, 51.44, '2026-06-16', '2025-08-05'),
('KamchatkaCrab', 'kamchatka_crab@mail.ru', 'Петропавловск-Камчатский', 63, 2750, 'Platinum', 'Мантикоры Подземелья', 305, 265, 53.51, '2026-06-21', '2025-02-10'),
('VologdaUser', 'vologda_user@yandex.ru', 'Вологда', 27, 1250, 'Silver', 'Фениксы Конфлюкса', 60, 58, 50.85, '2026-06-15', '2025-12-05'),
('ShieldWall', 'shield_wall@mail.ru', 'Смоленск', 41, 1900, 'Gold', NULL, 142, 138, 50.71, '2026-06-18', '2025-07-15'),
('RangerX', 'ranger_x@yandex.ru', 'Брянск', 53, 2350, 'Gold', 'Черные Драконы Нигона', 215, 195, 52.44, '2026-06-19', '2025-04-25'),
('MagnetPoint', 'magnet_point@mail.ru', 'Магнитогорск', 46, 2080, 'Gold', 'Церберы Инферно', 172, 160, 51.81, '2026-06-20', '2025-06-01'),
('CheeseLover', 'cheese_lover@yandex.ru', 'Кострома', 17, 920, 'Bronze', NULL, 22, 30, 42.31, '2026-06-09', '2026-03-20'),
('Lia', 'lia@yandex.ru', 'Северодвинск', 52, 2380, 'Gold', 'Фениксы Конфлюкса', 195, 150, 56.52, '2026-06-21', '2025-03-11');
`,at=`-- Игроки из Москвы с уровнем выше 30, отсортированные по рейтингу.
SELECT nickname, city, level, rating, rank_title, guild
FROM players
WHERE city = 'Москва' AND level > 30
ORDER BY rating DESC;`,ot=`Игроки`;function st(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement(`base`),i=n.createElement(`a`);return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}var ct=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function V(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}var H=null;function lt(e={}){return H||(e.includeStyleProperties?(H=e.includeStyleProperties,H):(H=V(window.getComputedStyle(document.documentElement)),H))}function U(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace(`px`,``)):0}function ut(e){let t=U(e,`border-left-width`),n=U(e,`border-right-width`);return e.clientWidth+t+n}function dt(e){let t=U(e,`border-top-width`),n=U(e,`border-bottom-width`);return e.clientHeight+t+n}function ft(e,t={}){return{width:t.width||ut(e),height:t.height||dt(e)}}function pt(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var W=16384;function mt(e){(e.width>W||e.height>W)&&(e.width>W&&e.height>W?e.width>e.height?(e.height*=W/e.width,e.width=W):(e.width*=W/e.height,e.height=W):e.width>W?(e.height*=W/e.width,e.width=W):(e.width*=W/e.height,e.height=W))}function G(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin=`anonymous`,r.decoding=`async`,r.src=e})}async function ht(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function gt(e,t,n){let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`),a=document.createElementNS(r,`foreignObject`);return i.setAttribute(`width`,`${t}`),i.setAttribute(`height`,`${n}`),i.setAttribute(`viewBox`,`0 0 ${t} ${n}`),a.setAttribute(`width`,`100%`),a.setAttribute(`height`,`100%`),a.setAttribute(`x`,`0`),a.setAttribute(`y`,`0`),a.setAttribute(`externalResourcesRequired`,`true`),i.appendChild(a),a.appendChild(e),ht(i)}var K=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||K(n,t)};function _t(e){let t=e.getPropertyValue(`content`);return`${e.cssText} content: '${t.replace(/'|"/g,``)}';`}function vt(e,t){return lt(t).map(t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)}function yt(e,t,n,r){let i=`.${e}:${t}`,a=n.cssText?_t(n):vt(n,r);return document.createTextNode(`${i}{${a}}`)}function bt(e,t,n,r){let i=window.getComputedStyle(e,n),a=i.getPropertyValue(`content`);if(a===``||a===`none`)return;let o=ct();try{t.className=`${t.className} ${o}`}catch{return}let s=document.createElement(`style`);s.appendChild(yt(o,n,i,r)),t.appendChild(s)}function xt(e,t,n){bt(e,t,`:before`,n),bt(e,t,`:after`,n)}var St=`application/font-woff`,Ct=`image/jpeg`,wt={woff:St,woff2:St,ttf:`application/font-truetype`,eot:`application/vnd.ms-fontobject`,png:`image/png`,jpg:Ct,jpeg:Ct,gif:`image/gif`,tiff:`image/tiff`,svg:`image/svg+xml`,webp:`image/webp`};function Tt(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:``}function q(e){return wt[Tt(e).toLowerCase()]||``}function Et(e){return e.split(/,/)[1]}function J(e){return e.search(/^(data:)/)!==-1}function Dt(e,t){return`data:${t};base64,${e}`}async function Ot(e,t,n){let r=await fetch(e,t);if(r.status===404)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{try{e(n({res:r,result:a.result}))}catch(e){t(e)}},a.readAsDataURL(i)})}var Y={};function kt(e,t,n){let r=e.replace(/\?.*/,``);return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,``)),t?`[${t}]${r}`:r}async function X(e,t,n){let r=kt(e,t,n.includeQueryParams);if(Y[r]!=null)return Y[r];n.cacheBust&&(e+=(/\?/.test(e)?`&`:`?`)+new Date().getTime());let i;try{i=Dt(await Ot(e,n.fetchRequestInit,({res:e,result:n})=>(t||=e.headers.get(`Content-Type`)||``,Et(n))),t)}catch(t){i=n.imagePlaceholder||``;let r=`Failed to fetch resource: ${e}`;t&&(r=typeof t==`string`?t:t.message),r&&console.warn(r)}return Y[r]=i,i}async function At(e){let t=e.toDataURL();return t===`data:,`?e.cloneNode(!1):G(t)}async function jt(e,t){if(e.currentSrc){let t=document.createElement(`canvas`),n=t.getContext(`2d`);return t.width=e.clientWidth,t.height=e.clientHeight,n?.drawImage(e,0,0,t.width,t.height),G(t.toDataURL())}let n=e.poster;return G(await X(n,q(n),t))}async function Mt(e,t){try{if(e?.contentDocument?.body)return await Z(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Nt(e,t){return K(e,HTMLCanvasElement)?At(e):K(e,HTMLVideoElement)?jt(e,t):K(e,HTMLIFrameElement)?Mt(e,t):e.cloneNode(Ft(e))}var Pt=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SLOT`,Ft=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SVG`;async function It(e,t,n){if(Ft(t))return t;let r=[];return r=Pt(e)&&e.assignedNodes?V(e.assignedNodes()):K(e,HTMLIFrameElement)&&e.contentDocument?.body?V(e.contentDocument.body.childNodes):V((e.shadowRoot??e).childNodes),r.length===0||K(e,HTMLVideoElement)||await r.reduce((e,r)=>e.then(()=>Z(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}function Lt(e,t,n){let r=t.style;if(!r)return;let i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):lt(n).forEach(n=>{let a=i.getPropertyValue(n);n===`font-size`&&a.endsWith(`px`)&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),K(e,HTMLIFrameElement)&&n===`display`&&a===`inline`&&(a=`block`),n===`d`&&t.getAttribute(`d`)&&(a=`path(${t.getAttribute(`d`)})`),r.setProperty(n,a,i.getPropertyPriority(n))})}function Rt(e,t){K(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),K(e,HTMLInputElement)&&t.setAttribute(`value`,e.value)}function zt(e,t){if(K(e,HTMLSelectElement)){let n=t,r=Array.from(n.children).find(t=>e.value===t.getAttribute(`value`));r&&r.setAttribute(`selected`,``)}}function Bt(e,t,n){return K(t,Element)&&(Lt(e,t,n),xt(e,t,n),Rt(e,t),zt(e,t)),t}async function Vt(e,t){let n=e.querySelectorAll?e.querySelectorAll(`use`):[];if(n.length===0)return e;let r={};for(let i=0;i<n.length;i++){let a=n[i].getAttribute(`xlink:href`);if(a){let n=e.querySelector(a),i=document.querySelector(a);!n&&i&&!r[a]&&(r[a]=await Z(i,t,!0))}}let i=Object.values(r);if(i.length){let t=`http://www.w3.org/1999/xhtml`,n=document.createElementNS(t,`svg`);n.setAttribute(`xmlns`,t),n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`,n.style.display=`none`;let r=document.createElementNS(t,`defs`);n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function Z(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(e=>Nt(e,t)).then(n=>It(e,n,t)).then(n=>Bt(e,n,t)).then(e=>Vt(e,t))}var Ht=/url\((['"]?)([^'"]+?)\1\)/g,Ut=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Wt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Gt(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,`\\$1`);return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,`g`)}function Kt(e){let t=[];return e.replace(Ht,(e,n,r)=>(t.push(r),e)),t.filter(e=>!J(e))}async function qt(e,t,n,r,i){try{let a=n?st(t,n):t,o=q(t),s;return s=i?Dt(await i(a),o):await X(a,o,r),e.replace(Gt(t),`$1${s}$3`)}catch{}return e}function Jt(e,{preferredFontFormat:t}){return t?e.replace(Wt,e=>{for(;;){let[n,,r]=Ut.exec(e)||[];if(!r)return``;if(r===t)return`src: ${n};`}}):e}function Yt(e){return e.search(Ht)!==-1}async function Xt(e,t,n){if(!Yt(e))return e;let r=Jt(e,n);return Kt(r).reduce((e,r)=>e.then(e=>qt(e,r,t,n)),Promise.resolve(r))}async function Q(e,t,n){let r=t.style?.getPropertyValue(e);if(r){let i=await Xt(r,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function Zt(e,t){await Q(`background`,e,t)||await Q(`background-image`,e,t),await Q(`mask`,e,t)||await Q(`-webkit-mask`,e,t)||await Q(`mask-image`,e,t)||await Q(`-webkit-mask-image`,e,t)}async function Qt(e,t){let n=K(e,HTMLImageElement);if((!n||J(e.src))&&(!K(e,SVGImageElement)||J(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await X(r,q(r),t);await new Promise((r,a)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...e)=>{try{r(t.onImageErrorHandler(...e))}catch(e){a(e)}}:a;let o=e;o.decode&&=r,o.loading===`lazy`&&(o.loading=`eager`),n?(e.srcset=``,e.src=i):e.href.baseVal=i})}async function $t(e,t){let n=V(e.childNodes).map(e=>en(e,t));await Promise.all(n).then(()=>e)}async function en(e,t){K(e,Element)&&(await Zt(e,t),await Qt(e,t),await $t(e,t))}function tn(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(e=>{n[e]=r[e]}),e}var nn={};async function rn(e){let t=nn[e];return t??(t={url:e,cssText:await(await fetch(e)).text()},nn[e]=t),t}async function an(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let a=i.replace(r,`$1`);return a.startsWith(`https://`)||(a=new URL(a,e.url).href),Ot(a,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(i).then(()=>n)}function on(e){if(e==null)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,``),r=RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`,`gi`);for(;;){let e=r.exec(n);if(e===null)break;t.push(e[0])}n=n.replace(r,``);let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`,`gi`);for(;;){let e=i.exec(n);if(e===null){if(e=a.exec(n),e===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(e[0])}return t}async function sn(e,t){let n=[],r=[];return e.forEach(n=>{if(`cssRules`in n)try{V(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let a=i+1,o=e.href,s=rn(o).then(e=>an(e,t)).then(e=>on(e).forEach(e=>{try{n.insertRule(e,e.startsWith(`@import`)?a+=1:n.cssRules.length)}catch(t){console.error(`Error inserting rule from remote css`,{rule:e,error:t})}})).catch(e=>{console.error(`Error loading remote css`,e.toString())});r.push(s)}})}catch(i){let a=e.find(e=>e.href==null)||document.styleSheets[0];n.href!=null&&r.push(rn(n.href).then(e=>an(e,t)).then(e=>on(e).forEach(e=>{a.insertRule(e,a.cssRules.length)})).catch(e=>{console.error(`Error loading remote stylesheet`,e)})),console.error(`Error inlining remote css file`,i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if(`cssRules`in e)try{V(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}function cn(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Yt(e.style.getPropertyValue(`src`)))}async function ln(e,t){if(e.ownerDocument==null)throw Error(`Provided element is not within a Document`);return cn(await sn(V(e.ownerDocument.styleSheets),t))}function un(e){return e.trim().replace(/["']/g,``)}function dn(e){let t=new Set;function n(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(`,`).forEach(e=>{t.add(un(e))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&n(e)})}return n(e),t}async function fn(e,t){let n=await ln(e,t),r=dn(e);return(await Promise.all(n.filter(e=>r.has(un(e.style.fontFamily))).map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return Xt(e.cssText,n,t)}))).join(`
`)}async function pn(e,t){let n=t.fontEmbedCSS==null?t.skipFonts?null:await fn(e,t):t.fontEmbedCSS;if(n){let t=document.createElement(`style`),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function mn(e,t={}){let{width:n,height:r}=ft(e,t),i=await Z(e,t,!0);return await pn(i,t),await en(i,t),tn(i,t),await gt(i,n,r)}async function hn(e,t={}){let{width:n,height:r}=ft(e,t),i=await G(await mn(e,t)),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=t.pixelRatio||pt(),c=t.canvasWidth||n,l=t.canvasHeight||r;return a.width=c*s,a.height=l*s,t.skipAutoScale||mt(a),a.style.width=`${c}`,a.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function gn(e,t={}){return(await hn(e,t)).toDataURL()}function _n(e,t,n){let r=(e||n||`file`).replace(/[^a-zA-Z0-9._-]/g,`_`);return t?`${r}.${t}`:r}function vn(e,t,n){yn(new Blob([e.slice()],{type:n}),t)}function yn(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),0)}var bn={narrow:640,wide:960,full:1280},xn={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};function Sn(e){return e===`paper`?`#fffdf8`:e}function Cn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function wn(e){return`<table class="sql-export-table"><thead><tr>${e.columns.map(e=>`<th scope="col">${Cn(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td${e===null?` class="sql-export-null"`:``}>${Cn(N(e))}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`}function Tn(e,t){let n=Sn(t.background),r=t.background===`transparent`,i=bn[t.contain]??bn.wide,a=document.createElement(`div`);a.className=`sql-export-root`,a.style.minHeight=`240px`,a.style.width=`fit-content`,a.style.boxSizing=`border-box`,a.style.background=r?`transparent`:n;let o=document.createElement(`div`);o.className=`sql-export-frame`,o.style.width=`${i}px`,o.style.maxWidth=`100%`,o.style.boxSizing=`border-box`,o.style.padding=`${t.padding}px`,o.style.background=r?`transparent`:n,o.innerHTML=e,a.append(o);let s=document.createElement(`style`);return s.textContent=Mn,a.insertBefore(s,a.firstChild),a}async function En(e,t,n){let r=Sn(n.background),i=n.background===`transparent`;e.style.position=`fixed`,e.style.left=`-100000px`,e.style.top=`0`,document.body.append(e);try{e.style.position=`static`,e.style.left=`auto`,e.style.top=`auto`,e.offsetHeight,await new Promise(e=>requestAnimationFrame(()=>e()));let a=await gn(e,i?{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0}:{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0,backgroundColor:r}),o=document.createElement(`a`);o.href=a,o.download=_n(t,`png`),o.rel=`noopener`,document.body.append(o),o.click(),o.remove()}finally{e.remove()}}async function Dn(e,t){await En(Tn(wn(e),t),t.filename,t)}var On=`database`,kn=`application/vnd.sqlite3`;function An(e,t){return _n(e,t,On)}function jn(e,t,n){let r=de(e);if(r.length===0)throw Error(`SQLite produced no bytes for this database, so nothing was saved.`);let i=An(t,n);return vn(r,i,kn),i}var Mn=`
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
`,Nn=500,Pn=100;function Fn(){let e=r(``),t=r(``),n=a(null),i=a(null),o=r(`loading`),c=r(``),l=r(null),u=r(``),d=r(`table`),f=r(``),p=r([]),m=r(null),h=r(null),g=r(!1),_=s(()=>o.value===`running`),v=s(()=>o.value!==`loading`&&i.value!==null),y=s(()=>{let e=l.value?.statements??[];for(let t=e.length-1;t>=0;--t){let n=e[t];if(n.columns.length>0)return n}return null}),ee=s(()=>y.value!==null),x=s(()=>(l.value?.statements??[]).reduce((e,t)=>e+t.changes,0)),te=s(()=>{let e=l.value;if(e===null)return``;let t=e.statements.length,n=[`${t} ${b(t,[`оператор`,`оператора`,`операторов`])}`];return x.value>0&&n.push(`${x.value} ${b(x.value,[`строка`,`строки`,`строк`])} изменена`),n.push(`${Math.round(e.durationMs)} ms`),n.join(` · `)}),S=s(()=>{let e=y.value;return e===null?null:{columns:e.columns,rows:e.rows}}),C=s(()=>{let e=S.value;return{table:e===null?``:le(e),markdown:e===null?``:ve(e),json:e===null?``:ie(e),yaml:e===null?``:be(e),csv:e===null?``:ue(e),toon:e===null?``:xe(e)}}),w=s(()=>y.value?.rows.slice(0,Nn)??[]),T=s(()=>y.value?.rows.length??0),E=s(()=>T.value>w.value.length);function D(){let e=i.value;p.value=e===null?[]:A(e)}function O(){let e=i.value;return e!==null&&A(e).length>0}function ne(){let e=i.value;e!==null&&F(e),i.value=n.value===null?null:P(n.value),l.value=null,u.value=``,D()}function k(e){let t=i.value;t!==null&&F(t),i.value=e,l.value=null,u.value=``,D()}function de(){let t=i.value;if(!(t===null||_.value)){o.value=`running`,u.value=``,f.value=``;try{let n=fe(t,e.value);l.value=n,D(),n.error===null?f.value=n.statements.length===0?`Нечего было выполнять.`:`Запрос выполнился.`:(u.value=n.error,f.value=n.statements.length>0?`Оператор ${n.statements.length+1} не выполнился. Операторы до него выполнились.`:`Этот SQL не выполнился.`)}catch(e){u.value=e instanceof Error?e.message:`Этот SQL не удалось выполнить.`,l.value=null}finally{o.value=`ready`}}}function j(){let e=n.value;if(e!==null){o.value=`running`;try{let n=P(e),r=fe(n,t.value);if(r.error!==null){F(n),u.value=`Скрипт схемы не выполнился: ${r.error}`,f.value=`База данных оставлена как была. Исправьте скрипт и постройте снова.`;return}k(n),f.value=`База построена из скрипта схемы: ${re(p.value.length,[`таблица`,`таблицы`,`таблиц`])}.`}finally{o.value=`ready`,m.value=null}}}function M(){t.value=rt,j()}function N(){n.value!==null&&(ne(),f.value=`База данных сброшена. Ваш запрос и скрипт схемы не изменились.`,m.value=null)}async function _e(e){let r=n.value;if(r!==null){g.value=!0;try{let n=new Uint8Array(await e.arrayBuffer()),i;try{i=pe(r,n)}catch{f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}try{A(i)}catch{F(i),f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}ye(i),t.value=he(i),f.value=`Открыто ${e.name}: ${re(p.value.length,[`таблица`,`таблицы`,`таблиц`])}. Скрипт схемы теперь содержит скрипт, который перестраивает её.`,m.value=null}finally{g.value=!1}}}function ye(e){k(e)}function I(e,t){O()?(h.value={label:t,apply:e},m.value=`import`,f.value=`Это заменит таблицы, уже находящиеся в базе. Нажмите Импорт ещё раз для подтверждения.`):e()}function L(){let e=h.value;h.value=null,m.value=null,e?.apply()}function R(){m.value=null,h.value=null}function Ce(e){O()?m.value===e?e===`reset`?N():M():m.value=e:e===`reset`?N():M()}async function z(e,t){if(t.trim().length===0){f.value=`Нечего копировать как ${e} пока.`;return}let n=await Se(t);f.value=n===`copied`?`${e} скопировано в буфер обмена.`:`Браузер отказал в доступе к буферу обмена.`}function we(){return z(`SQL`,e.value)}function Te(){let e=S.value;return e===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):z(`TSV`,oe(e))}function Ee(e){return S.value===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):z(ce[e],C.value[e])}let B=r(!1);async function De(){let e=S.value;if(e===null)f.value=`Нечего сохранять: сначала выполните запрос, который вернёт строки.`;else{B.value=!0;try{await Dn(e,xn),f.value=`Результат сохранён как PNG.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить PNG: ${e.message}`:`Не удалось сохранить PNG.`}finally{B.value=!1}}}function Oe(){let e=i.value;if(e!==null)try{jn(e,`sql-sandbox-database`,`sqlite`),f.value=`База данных сохранена как файл SQLite.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить базу: ${e.message}`:`Не удалось сохранить базу.`}}async function ke(){o.value=`loading`,c.value=``;try{n.value=await ae(),i.value=P(n.value),D()}catch(e){c.value=e instanceof Error?e.message:`SQLite не удалось запустить в этом браузере.`,o.value=`ready`;return}o.value=`ready`,e.value=at,t.value=it,j()}function Ae(){e.value=``,f.value=`Редактор очищен. База данных и её таблицы не изменились.`}function je(t){e.value=t,u.value=``}function Me(e){t.value=e}function Ne(e){return f.value=`Запрос для ${e} в редакторе.`,`SELECT *\nFROM ${ge(e)}\nLIMIT ${Pn};\n`}return{source:e,setup:t,status:o,running:_,ready:v,initError:c,lastRun:l,runError:u,format:d,notice:f,tables:p,resultStatement:y,resultTable:S,hasResult:ee,visibleRows:w,totalRows:T,rowsHidden:E,DISPLAY_ROW_LIMIT:Nn,formatted:C,changedRows:x,summary:te,importing:g,pendingConfirm:m,RESULT_FORMATS:se,RESULT_FORMAT_LABELS:me,RESULT_FORMAT_COPY_LABELS:ce,start:ke,runSql:de,clearEditor:Ae,onSourceInput:je,onSetupInput:Me,tableQueryFor:Ne,buildDatabase:j,loadSample:M,resetDatabase:N,importDatabaseFile:_e,requestImport:I,confirmImport:L,cancelConfirm:R,confirmOrRun:Ce,copySql:we,copyTsv:Te,copyFormat:Ee,exportPng:De,exportingPng:B,exportDatabase:Oe}}var $=[{name:ot,sql:it,query:at},{name:`Интернет-магазин`,sql:`PRAGMA foreign_keys = ON;

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
`}];$.map(e=>e.name);var In=l({__name:`SqlEditor`,setup(t,{expose:n}){n();let i=Fn(),a=u(()=>Ce(()=>import(`./TrainerReferenceDialog.E_4vEw6L.js`),__vite__mapDeps([0,1,2,3,4]))),o=r(!1),s=r(!1);function c(){o.value=!0,s.value=!0}let l=d(`codeEditor`),f=r(null),p=r(0);function m(e){if(e===p.value)return;let t=$[e];if(!t)return;let n=$[p.value];(!n||i.setup.value.trim()===n.sql.trim()||window.confirm(`Текущий скрипт схемы отличается от шаблона. Переключить базу и заменить скрипт?`))&&(p.value=e,i.setup.value=t.sql,i.source.value=t.query,i.buildDatabase())}function h(e){let t=i.tableQueryFor(e),n=l.value;n?n.insert(t):i.source.value=`${i.source.value}${t}`}function g(){i.pendingConfirm.value===`import`?i.confirmImport():f.value?.click()}function _(e){let t=e.target,n=t.files?.[0];t.value=``,n!==void 0&&i.requestImport(()=>void i.importDatabaseFile(n),n.name)}function v(){i.pendingConfirm.value===`reset`?i.resetDatabase():i.confirmOrRun(`reset`)}e(()=>{i.start()});let y={editor:i,TrainerReferenceDialog:a,referenceMounted:o,referenceOpen:s,openReference:c,codeEditor:l,fileInput:f,currentDbIndex:p,switchDatabase:m,selectTable:h,importFile:g,onFileChosen:_,runReset:v,CodeEditor:ke,DatabaseExplorer:Ke,ResultsTable:_e,ResultsText:Ze,SetupEditor:nt,get pluralizeRu(){return b},get DatabaseZap(){return z},get Download(){return ee},get FileUp(){return we},get RotateCcw(){return Ee},get ImageDown(){return Te},get EDUCATIONAL_DATABASES(){return $}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),Ln={"aria-label":`SQL-песочница`,class:`flex flex-col gap-4`},Rn={class:`grid grid-cols-1 gap-4 xl:grid-cols-2`},zn={class:`flex min-w-0 flex-col overflow-hidden card`},Bn={class:`border-b border-line px-4 py-3 sm:px-6`},Vn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Hn={class:`flex gap-2`,role:`group`,"aria-label":`SQL-запрос`},Un=[`disabled`,`aria-busy`],Wn={key:0,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},Gn={key:1,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,role:`alert`},Kn={class:`text-center`},qn={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Jn={class:`mt-auto border-t border-line px-4 py-3 sm:px-6 m-0!`},Yn=[`disabled`],Xn={class:`flex min-w-0 flex-col overflow-hidden card`},Zn={class:`border-b border-line px-4 py-3 sm:px-6`},Qn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},$n={class:`flex gap-2`,role:`group`,"aria-label":`Выбор базы данных`},er=[`aria-pressed`,`onClick`],tr={class:`px-4 py-4 sm:px-6`},nr={class:`border-t border-line`},rr={class:`border-b border-line px-4 py-3 sm:px-6`},ir={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},ar=[`disabled`],or={class:`px-4 py-4 sm:px-6`},sr={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},cr={class:`flex flex-wrap items-center gap-2`},lr=[`disabled`],ur=[`disabled`],dr=[`disabled`],fr={key:0,class:`mt-2 label`},pr={key:1,class:`mt-2 label`},mr={class:`flex min-w-0 flex-col overflow-hidden card`},hr={class:`border-b border-line px-4 py-3 sm:px-6`},gr={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2`},_r={role:`group`,"aria-label":`Формат результата`,class:`flex flex-wrap items-center gap-2`},vr=[`aria-pressed`,`onClick`],yr={class:`px-4 py-4 sm:px-6`},br={key:0,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},xr={key:1,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`,role:`alert`},Sr={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Cr={key:4,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`},wr={class:`mt-2 text-[0.9375rem] leading-relaxed text-muted`},Tr={key:5,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`},Er={class:`border-t border-line px-4 py-3 sm:px-6`},Dr={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-3`},Or={class:`meta-mono text-label`},kr={class:`flex flex-wrap items-center gap-2`},Ar=[`disabled`],jr=[`disabled`],Mr=[`disabled`,`onClick`],Nr={key:0,class:`mt-2 label`},Pr={class:`label`,role:`status`,"aria-live":`polite`};function Fr(e,r,i,a,o,s){return n(),f(`section`,Ln,[h(`div`,Rn,[h(`div`,zn,[h(`div`,Bn,[h(`div`,Vn,[r[11]||=h(`h3`,{class:`panel-header`},`SQL-запрос`,-1),h(`div`,Hn,[h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!a.editor.ready.value||a.editor.running.value,"aria-busy":a.editor.running.value,onClick:r[0]||=(...e)=>a.editor.runSql&&a.editor.runSql(...e)},_(a.editor.running.value?`Выполняется…`:`Выполнить`),9,Un),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:a.openReference},` Открыть справочник `)])])]),a.editor.status.value===`loading`?(n(),f(`div`,Wn,[...r[12]||=[h(`p`,{class:`label`},`Запуск SQLite…`,-1)]])):a.editor.initError.value===``?(n(),v(a.CodeEditor,{key:2,ref:`codeEditor`,modelValue:a.editor.source.value,"onUpdate:modelValue":[r[1]||=e=>a.editor.source.value=e,a.editor.onSourceInput],onRun:a.editor.runSql},null,8,[`modelValue`,`onUpdate:modelValue`,`onRun`])):(n(),f(`div`,Gn,[h(`div`,Kn,[r[13]||=h(`p`,{class:`label-micro`},`SQLite не запустился`,-1),h(`p`,qn,_(a.editor.initError.value),1)])])),h(`div`,Jn,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:a.editor.source.value.trim().length===0,onClick:r[2]||=(...e)=>a.editor.copySql&&a.editor.copySql(...e)},` Скопировать `,8,Yn),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:r[3]||=(...e)=>a.editor.clearEditor&&a.editor.clearEditor(...e)},` Очистить `)]),r[14]||=h(`div`,{class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},[h(`p`,{class:`label`},`Нажмите Ctrl или Cmd с Enter, чтобы выполнить запрос из редактора.`)],-1)]),h(`div`,Xn,[h(`div`,Zn,[h(`div`,Qn,[r[15]||=h(`h3`,{class:`panel-header`},`Предустановленные базы данных`,-1),h(`div`,$n,[(n(!0),f(m,null,t(a.EDUCATIONAL_DATABASES,(e,t)=>(n(),f(`button`,{key:e.name,type:`button`,class:`btn btn-ghost btn-sm`,"aria-pressed":a.currentDbIndex===t,onClick:e=>a.switchDatabase(t)},_(e.name),9,er))),128))])])]),h(`div`,tr,[r[16]||=h(`p`,{class:`m-0 mb-3 text-[0.85rem] leading-relaxed text-muted`},` В песочнице доступны две предустановленные базы данных: Игроки и Интернет-магазин. Выберите базу, чтобы посмотреть её структуру и SQL-скрипт создания. `,-1),p(a.DatabaseExplorer,{tables:a.editor.tables.value,onSelect:a.selectTable},null,8,[`tables`])]),h(`div`,nr,[h(`div`,rr,[h(`div`,ir,[r[18]||=h(`h3`,{class:`panel-header`},`Скрипт схемы`,-1),h(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!a.editor.ready.value||a.editor.running.value||a.editor.setup.value.trim().length===0,onClick:r[4]||=(...e)=>a.editor.buildDatabase&&a.editor.buildDatabase(...e)},[p(a.DatabaseZap,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),r[17]||=g(` Построить базу `,-1)],8,ar)])]),h(`div`,or,[p(a.SetupEditor,{modelValue:a.editor.setup.value,"onUpdate:modelValue":[r[5]||=e=>a.editor.setup.value=e,a.editor.onSetupInput]},null,8,[`modelValue`,`onUpdate:modelValue`]),r[19]||=h(`p`,{class:`mt-3 label`},` Скрипт схемы создаёт базу с нуля: CREATE TABLE, INSERT, индексы. Он отделён от редактора запросов — постройте базу, а затем пишите к ней SQL сверху. Диалект — SQLite (об учебной базе курса на MySQL см. примечание выше). `,-1)])]),h(`div`,sr,[h(`div`,cr,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value,onClick:a.runReset},[p(a.RotateCcw,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),g(` `+_(a.editor.pendingConfirm.value===`reset`?`Точно сбросить?`:`Сбросить базу`),1)],8,lr),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value||a.editor.importing.value,onClick:a.importFile},[p(a.FileUp,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),g(` `+_(a.editor.pendingConfirm.value===`import`?`Точно импортировать?`:`Импорт .sqlite`),1)],8,ur),h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.ready.value,onClick:r[6]||=(...e)=>a.editor.exportDatabase&&a.editor.exportDatabase(...e)},[p(a.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),r[20]||=g(` Скачать базу `,-1)],8,dr),a.editor.pendingConfirm.value===`reset`||a.editor.pendingConfirm.value===`import`?(n(),f(`button`,{key:0,type:`button`,class:`btn btn-ghost btn-sm`,onClick:r[7]||=(...e)=>a.editor.cancelConfirm&&a.editor.cancelConfirm(...e)},` Отмена `)):c(``,!0),h(`input`,{ref:`fileInput`,type:`file`,accept:`.sqlite,.db,.sqlite3,.db3`,class:`hidden`,"aria-hidden":`true`,tabindex:`-1`,onChange:a.onFileChosen},null,544)]),a.editor.pendingConfirm.value===`reset`?(n(),f(`p`,fr,` Сброс удалит таблицы активной базы. Запрос и скрипт схемы останутся. `)):a.editor.pendingConfirm.value===`import`?(n(),f(`p`,pr,` Импорт заменит таблицы активной базы файлом, который вы выбрали. `)):c(``,!0)])])]),h(`div`,mr,[h(`div`,hr,[h(`div`,gr,[r[21]||=h(`h3`,{class:`panel-header`},`Результаты`,-1),h(`div`,_r,[(n(!0),f(m,null,t(a.editor.RESULT_FORMATS,e=>(n(),f(`button`,{key:e,type:`button`,class:`btn btn-secondary btn-sm`,"aria-pressed":a.editor.format.value===e,onClick:t=>a.editor.format.value=e},_(a.editor.RESULT_FORMAT_LABELS[e]),9,vr))),128))])])]),h(`div`,yr,[a.editor.running.value?(n(),f(`div`,br,[...r[22]||=[h(`p`,{class:`label`},`Выполняется…`,-1)]])):a.editor.runError.value===``?a.editor.hasResult.value&&a.editor.format.value===`table`?(n(),v(a.ResultsTable,{key:2,columns:a.editor.resultStatement.value?.columns??[],rows:a.editor.visibleRows.value},null,8,[`columns`,`rows`])):a.editor.hasResult.value?(n(),v(a.ResultsText,{key:3,text:a.editor.formatted.value[a.editor.format.value]},null,8,[`text`])):a.editor.lastRun.value===null?(n(),f(`div`,Tr,[...r[27]||=[h(`p`,{class:`label text-center`},`Напишите SQL и нажмите Выполнить SQL.`,-1)]])):(n(),f(`div`,Cr,[r[26]||=h(`p`,{class:`label-micro`},`Строк не возвращено`,-1),h(`p`,wr,[r[25]||=g(` Запрос выполнился без возвращения набора результатов. `,-1),a.editor.changedRows.value>0?(n(),f(m,{key:0},[g(` Он изменил `+_(a.editor.changedRows.value)+` `+_(a.pluralizeRu(a.editor.changedRows.value,[`строку`,`строки`,`строк`]))+`. `,1)],64)):c(``,!0)])])):(n(),f(`div`,xr,[r[23]||=h(`p`,{class:`label-micro`},`Этот SQL не выполнился`,-1),h(`p`,Sr,_(a.editor.runError.value),1),r[24]||=h(`p`,{class:`mt-3 label`},` Операторы до ошибочного выполнились, редактор не изменился. Исправьте оператор и запустите снова. `,-1)]))]),h(`div`,Er,[h(`div`,Dr,[h(`p`,Or,[a.editor.hasResult.value?(n(),f(m,{key:0},[g(_(a.editor.rowsHidden.value?`показано ${a.editor.visibleRows.value.length} из ${a.editor.totalRows.value} ${a.pluralizeRu(a.editor.totalRows.value,[`строка`,`строки`,`строк`])}`:`${a.editor.totalRows.value} ${a.pluralizeRu(a.editor.totalRows.value,[`строка`,`строки`,`строк`])}`),1)],64)):c(``,!0),a.editor.summary.value===``?c(``,!0):(n(),f(m,{key:1},[g(_(a.editor.hasResult.value?` · `:``)+_(a.editor.summary.value),1)],64))]),h(`div`,kr,[h(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!a.editor.hasResult.value||a.editor.exportingPng.value,onClick:r[8]||=(...e)=>a.editor.exportPng&&a.editor.exportPng(...e)},[p(a.ImageDown,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),g(` `+_(a.editor.exportingPng.value?`Готовится…`:`Скачать PNG`),1)],8,Ar),r[28]||=h(`span`,{class:`meta-mono text-label`},`Скопировать:`,-1),h(`button`,{type:`button`,class:`btn btn-secondary btn-sm`,disabled:!a.editor.hasResult.value,onClick:r[9]||=(...e)=>a.editor.copyTsv&&a.editor.copyTsv(...e)},` TSV `,8,jr),(n(!0),f(m,null,t(a.editor.RESULT_FORMATS,e=>(n(),f(`button`,{key:`copy-${e}`,type:`button`,class:`btn btn-secondary btn-sm`,disabled:!a.editor.hasResult.value,onClick:t=>a.editor.copyFormat(e)},_(a.editor.RESULT_FORMAT_COPY_LABELS[e]),9,Mr))),128))])]),a.editor.rowsHidden.value?(n(),f(`p`,Nr,` Вид показывает первые `+_(a.editor.DISPLAY_ROW_LIMIT)+` строк, чтобы страница оставалась адаптивной. Копии содержат все `+_(a.editor.totalRows.value)+`. `,1)):c(``,!0)])]),h(`p`,Pr,[a.editor.notice.value===``?(n(),f(m,{key:1},[g(` Всё выполняется в этом браузере: база данных в памяти, ничего не загружается на сервер. `)],64)):(n(),f(m,{key:0},[g(_(a.editor.notice.value),1)],64))]),a.referenceMounted?(n(),v(a.TrainerReferenceDialog,{key:0,open:a.referenceOpen,onClose:r[10]||=e=>a.referenceOpen=!1},null,8,[`open`])):c(``,!0)])}var Ir=L(In,[[`render`,Fr]]);export{Ir as default};