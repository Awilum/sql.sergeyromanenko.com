const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/TrainerReferenceDialog.BCWjKIGc.js","_astro/runtime-core.esm-bundler.-zXcZCZa.js","_astro/runtime-dom.esm-bundler.Bc_sfnOo.js","_astro/download.rSH2l-dA.js","_astro/clipboard.B4HicLjz.js"])))=>i.map(i=>d[i]);
import{A as e,C as t,E as n,I as r,L as i,M as a,S as o,T as s,a as c,c as l,g as u,h as d,l as f,m as p,n as m,nt as h,o as g,p as _,s as v}from"./runtime-core.esm-bundler.-zXcZCZa.js";import{A as y,B as ee,C as te,D as b,E as x,F as ne,H as S,I as C,L as w,M as T,N as re,O as E,P as D,R as ie,S as ae,T as oe,U as O,V as se,_ as k,a as ce,b as le,c as ue,d as de,f as A,g as fe,h as pe,i as j,j as M,k as me,l as he,m as ge,n as N,o as _e,p as ve,r as P,s as ye,t as be,u as F,v as xe,w as Se,x as Ce,y as we,z as I}from"./download.rSH2l-dA.js";import{t as Te}from"./clipboard.B4HicLjz.js";var L=u({__name:`CodeEditor`,props:{modelValue:{}},emits:[`update:modelValue`,`run`],setup(n,{expose:i,emit:s}){let c=n,l=s,u=e(`host`),d=r(),{theme:f,highlightStyle:p}=E(),m=y({dialect:me,upperCaseKeywords:!1});t(()=>{u.value&&(d.value=new I({state:O.create({doc:c.modelValue,extensions:[m,se(),O.tabSize.of(2),w.of(`  `),C(),T(),ne(),ie(p),f,ee.of([...M,...re,D,{key:`Mod-Enter`,preventDefault:!0,run:()=>(l(`run`),!0)}]),I.lineWrapping,I.editable.of(!0),S(`Напишите SQL и нажмите Выполнить SQL`),I.contentAttributes.of({"aria-label":`Источник SQL`,role:`textbox`,"aria-multiline":`true`}),I.updateListener.of(e=>{e.docChanged&&l(`update:modelValue`,e.state.doc.toString())})]}),parent:u.value}))});function h(e){let t=d.value;t&&t.dispatch({changes:{from:0,to:t.state.doc.length,insert:e}})}function g(e){let t=d.value;if(!t)return;let n=t.state.selection.main.from;t.dispatch({changes:{from:n,insert:e},selection:{anchor:n+e.length}}),t.focus()}a(()=>c.modelValue,e=>{e!==d.value?.state.doc.toString()&&h(e)}),o(()=>{d.value?.destroy(),d.value=void 0}),i({setDoc:h,insert:g,focus:()=>d.value?.focus()});let _={props:c,emit:l,host:u,view:d,theme:f,highlightStyle:p,sqlLanguage:m,setDoc:h,insert:g};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),Ee={ref:`host`,class:`sql-editor-host h-[22rem] xl:h-[30rem]`};function De(e,t,n,r,i,a){return s(),f(`div`,Ee,null,512)}var Oe=b(L,[[`render`,De]]),R=u({__name:`DatabaseExplorer`,props:{tables:{}},emits:[`select`],setup(e,{expose:t,emit:n}){t();let r={emit:n,get pluralizeRu(){return x}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),ke={class:`flex flex-col gap-2`},z={key:0,class:`label`},Ae={class:`sql-explorer-head`},je={class:`sql-explorer-details`},Me={class:`sql-explorer-summary`},Ne={class:`font-mono text-[0.875rem] text-ink`},Pe={class:`label-micro`},Fe={key:0,class:`sql-schema`},Ie={class:`font-mono text-[0.8125rem] text-ink`},Le={class:`meta-mono`},Re={class:`label`},ze={key:1,class:`label mt-2`},Be=[`onClick`],Ve={class:`sr-only`};function He(e,t,r,i,a,o){return s(),f(`div`,ke,[r.tables.length===0?(s(),f(`p`,z,` Таблиц пока нет. Загрузите пример датасета или напишите CREATE TABLE и выполните его. `)):l(``,!0),(s(!0),f(m,null,n(r.tables,e=>(s(),f(`div`,{key:e.name,class:`sql-explorer-table`},[g(`div`,Ae,[g(`details`,je,[g(`summary`,Me,[g(`span`,Ne,h(e.name),1),g(`span`,Pe,h(e.kind)+` · `+h(e.columns.length)+` `+h(e.columns.length)+` `+h(i.pluralizeRu(e.columns.length,[`столбец`,`столбца`,`столбцов`])),1)]),e.columns.length>0?(s(),f(`table`,Fe,[t[0]||=g(`thead`,null,[g(`tr`,null,[g(`th`,{scope:`col`},`Столбец`),g(`th`,{scope:`col`},`Тип`),g(`th`,{scope:`col`},`Ограничения`)])],-1),g(`tbody`,null,[(s(!0),f(m,null,n(e.columns,e=>(s(),f(`tr`,{key:e.name},[g(`td`,Ie,h(e.name),1),g(`td`,Le,h(e.type===``?`—`:e.type),1),g(`td`,Re,[e.primaryKey?(s(),f(m,{key:0},[_(`первичный ключ`)],64)):l(``,!0),e.primaryKey&&e.notNull?(s(),f(m,{key:1},[_(` · `)],64)):l(``,!0),e.notNull?(s(),f(m,{key:2},[_(`не null`)],64)):l(``,!0),e.defaultValue===null?l(``,!0):(s(),f(m,{key:3},[_(h(e.primaryKey||e.notNull?` · `:``)+`значение по умолчанию `+h(e.defaultValue),1)],64))])]))),128))])])):(s(),f(`p`,ze,h(e.kind)+` не содержит собственных столбцов.`,1))]),g(`button`,{type:`button`,class:`btn btn-ghost btn-sm sql-explorer-action`,onClick:t=>i.emit(`select`,e.name)},[t[1]||=_(` Запрос`,-1),g(`span`,Ve,h(e.name),1)],8,Be)])]))),128))])}var Ue=b(R,[[`render`,He]]),We=u({__name:`ResultsText`,props:{text:{}},setup(e,{expose:t}){t();let n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ge={class:`sql-text-scroll h-[22rem] xl:h-[30rem]`},Ke={class:`sql-text-view`};function qe(e,t,n,r,i,a){return s(),f(`div`,Ge,[g(`pre`,Ke,h(n.text),1)])}var Je=b(We,[[`render`,qe]]),Ye=u({__name:`SetupEditor`,props:{modelValue:{}},emits:[`update:modelValue`],setup(e,{expose:t,emit:n}){t();let r=n;function i(e){let t=e.target;r(`update:modelValue`,t.value)}let a={emit:r,onInput:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Xe={class:`sql-schema-host`},Ze=[`value`];function Qe(e,t,n,r,i,a){return s(),f(`div`,Xe,[t[0]||=g(`label`,{for:`sql-schema`,class:`label-micro`},`Схема SQL`,-1),g(`textarea`,{id:`sql-schema`,class:`sql-schema-input`,value:n.modelValue,spellcheck:`false`,autocomplete:`off`,autocapitalize:`off`,placeholder:`CREATE TABLE …
INSERT INTO …`,onInput:r.onInput},null,40,Ze),t[1]||=g(`p`,{class:`mt-2 label`},` Скрипт, который строит и заполняет базу данных. Вставьте схему или дамп из любой базы SQLite и нажмите Построить базу. Он выполняется в этом браузере, в памяти. `,-1)])}var $e=b(Ye,[[`render`,Qe]]),et=`-- The sample dataset: a players table, as a game backend might store it.
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
`,tt=`PRAGMA foreign_keys = ON;

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
`,nt=`-- Игроки из Москвы с уровнем выше 30, отсортированные по рейтингу.
SELECT nickname, city, level, rating, rank_title, guild
FROM players
WHERE city = 'Москва' AND level > 30
ORDER BY rating DESC;`,rt=`Игроки`;function it(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement(`base`),i=n.createElement(`a`);return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}var at=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function B(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}var V=null;function ot(e={}){return V||(e.includeStyleProperties?(V=e.includeStyleProperties,V):(V=B(window.getComputedStyle(document.documentElement)),V))}function H(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace(`px`,``)):0}function st(e){let t=H(e,`border-left-width`),n=H(e,`border-right-width`);return e.clientWidth+t+n}function ct(e){let t=H(e,`border-top-width`),n=H(e,`border-bottom-width`);return e.clientHeight+t+n}function lt(e,t={}){return{width:t.width||st(e),height:t.height||ct(e)}}function ut(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var U=16384;function dt(e){(e.width>U||e.height>U)&&(e.width>U&&e.height>U?e.width>e.height?(e.height*=U/e.width,e.width=U):(e.width*=U/e.height,e.height=U):e.width>U?(e.height*=U/e.width,e.width=U):(e.width*=U/e.height,e.height=U))}function W(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin=`anonymous`,r.decoding=`async`,r.src=e})}async function ft(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function pt(e,t,n){let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`),a=document.createElementNS(r,`foreignObject`);return i.setAttribute(`width`,`${t}`),i.setAttribute(`height`,`${n}`),i.setAttribute(`viewBox`,`0 0 ${t} ${n}`),a.setAttribute(`width`,`100%`),a.setAttribute(`height`,`100%`),a.setAttribute(`x`,`0`),a.setAttribute(`y`,`0`),a.setAttribute(`externalResourcesRequired`,`true`),i.appendChild(a),a.appendChild(e),ft(i)}var G=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||G(n,t)};function mt(e){let t=e.getPropertyValue(`content`);return`${e.cssText} content: '${t.replace(/'|"/g,``)}';`}function ht(e,t){return ot(t).map(t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)}function gt(e,t,n,r){let i=`.${e}:${t}`,a=n.cssText?mt(n):ht(n,r);return document.createTextNode(`${i}{${a}}`)}function K(e,t,n,r){let i=window.getComputedStyle(e,n),a=i.getPropertyValue(`content`);if(a===``||a===`none`)return;let o=at();try{t.className=`${t.className} ${o}`}catch{return}let s=document.createElement(`style`);s.appendChild(gt(o,n,i,r)),t.appendChild(s)}function _t(e,t,n){K(e,t,`:before`,n),K(e,t,`:after`,n)}var vt=`application/font-woff`,yt=`image/jpeg`,bt={woff:vt,woff2:vt,ttf:`application/font-truetype`,eot:`application/vnd.ms-fontobject`,png:`image/png`,jpg:yt,jpeg:yt,gif:`image/gif`,tiff:`image/tiff`,svg:`image/svg+xml`,webp:`image/webp`};function xt(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:``}function q(e){return bt[xt(e).toLowerCase()]||``}function St(e){return e.split(/,/)[1]}function J(e){return e.search(/^(data:)/)!==-1}function Ct(e,t){return`data:${t};base64,${e}`}async function wt(e,t,n){let r=await fetch(e,t);if(r.status===404)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{try{e(n({res:r,result:a.result}))}catch(e){t(e)}},a.readAsDataURL(i)})}var Y={};function Tt(e,t,n){let r=e.replace(/\?.*/,``);return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,``)),t?`[${t}]${r}`:r}async function X(e,t,n){let r=Tt(e,t,n.includeQueryParams);if(Y[r]!=null)return Y[r];n.cacheBust&&(e+=(/\?/.test(e)?`&`:`?`)+new Date().getTime());let i;try{i=Ct(await wt(e,n.fetchRequestInit,({res:e,result:n})=>(t||=e.headers.get(`Content-Type`)||``,St(n))),t)}catch(t){i=n.imagePlaceholder||``;let r=`Failed to fetch resource: ${e}`;t&&(r=typeof t==`string`?t:t.message),r&&console.warn(r)}return Y[r]=i,i}async function Et(e){let t=e.toDataURL();return t===`data:,`?e.cloneNode(!1):W(t)}async function Dt(e,t){if(e.currentSrc){let t=document.createElement(`canvas`),n=t.getContext(`2d`);return t.width=e.clientWidth,t.height=e.clientHeight,n?.drawImage(e,0,0,t.width,t.height),W(t.toDataURL())}let n=e.poster;return W(await X(n,q(n),t))}async function Ot(e,t){try{if(e?.contentDocument?.body)return await Z(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function kt(e,t){return G(e,HTMLCanvasElement)?Et(e):G(e,HTMLVideoElement)?Dt(e,t):G(e,HTMLIFrameElement)?Ot(e,t):e.cloneNode(jt(e))}var At=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SLOT`,jt=e=>e.tagName!=null&&e.tagName.toUpperCase()===`SVG`;async function Mt(e,t,n){if(jt(t))return t;let r=[];return r=At(e)&&e.assignedNodes?B(e.assignedNodes()):G(e,HTMLIFrameElement)&&e.contentDocument?.body?B(e.contentDocument.body.childNodes):B((e.shadowRoot??e).childNodes),r.length===0||G(e,HTMLVideoElement)||await r.reduce((e,r)=>e.then(()=>Z(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}function Nt(e,t,n){let r=t.style;if(!r)return;let i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):ot(n).forEach(n=>{let a=i.getPropertyValue(n);n===`font-size`&&a.endsWith(`px`)&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),G(e,HTMLIFrameElement)&&n===`display`&&a===`inline`&&(a=`block`),n===`d`&&t.getAttribute(`d`)&&(a=`path(${t.getAttribute(`d`)})`),r.setProperty(n,a,i.getPropertyPriority(n))})}function Pt(e,t){G(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),G(e,HTMLInputElement)&&t.setAttribute(`value`,e.value)}function Ft(e,t){if(G(e,HTMLSelectElement)){let n=t,r=Array.from(n.children).find(t=>e.value===t.getAttribute(`value`));r&&r.setAttribute(`selected`,``)}}function It(e,t,n){return G(t,Element)&&(Nt(e,t,n),_t(e,t,n),Pt(e,t),Ft(e,t)),t}async function Lt(e,t){let n=e.querySelectorAll?e.querySelectorAll(`use`):[];if(n.length===0)return e;let r={};for(let i=0;i<n.length;i++){let a=n[i].getAttribute(`xlink:href`);if(a){let n=e.querySelector(a),i=document.querySelector(a);!n&&i&&!r[a]&&(r[a]=await Z(i,t,!0))}}let i=Object.values(r);if(i.length){let t=`http://www.w3.org/1999/xhtml`,n=document.createElementNS(t,`svg`);n.setAttribute(`xmlns`,t),n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`,n.style.display=`none`;let r=document.createElementNS(t,`defs`);n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function Z(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(e=>kt(e,t)).then(n=>Mt(e,n,t)).then(n=>It(e,n,t)).then(e=>Lt(e,t))}var Rt=/url\((['"]?)([^'"]+?)\1\)/g,zt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Bt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Vt(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,`\\$1`);return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,`g`)}function Ht(e){let t=[];return e.replace(Rt,(e,n,r)=>(t.push(r),e)),t.filter(e=>!J(e))}async function Ut(e,t,n,r,i){try{let a=n?it(t,n):t,o=q(t),s;return s=i?Ct(await i(a),o):await X(a,o,r),e.replace(Vt(t),`$1${s}$3`)}catch{}return e}function Wt(e,{preferredFontFormat:t}){return t?e.replace(Bt,e=>{for(;;){let[n,,r]=zt.exec(e)||[];if(!r)return``;if(r===t)return`src: ${n};`}}):e}function Gt(e){return e.search(Rt)!==-1}async function Kt(e,t,n){if(!Gt(e))return e;let r=Wt(e,n);return Ht(r).reduce((e,r)=>e.then(e=>Ut(e,r,t,n)),Promise.resolve(r))}async function Q(e,t,n){let r=t.style?.getPropertyValue(e);if(r){let i=await Kt(r,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function qt(e,t){await Q(`background`,e,t)||await Q(`background-image`,e,t),await Q(`mask`,e,t)||await Q(`-webkit-mask`,e,t)||await Q(`mask-image`,e,t)||await Q(`-webkit-mask-image`,e,t)}async function Jt(e,t){let n=G(e,HTMLImageElement);if((!n||J(e.src))&&(!G(e,SVGImageElement)||J(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await X(r,q(r),t);await new Promise((r,a)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...e)=>{try{r(t.onImageErrorHandler(...e))}catch(e){a(e)}}:a;let o=e;o.decode&&=r,o.loading===`lazy`&&(o.loading=`eager`),n?(e.srcset=``,e.src=i):e.href.baseVal=i})}async function Yt(e,t){let n=B(e.childNodes).map(e=>Xt(e,t));await Promise.all(n).then(()=>e)}async function Xt(e,t){G(e,Element)&&(await qt(e,t),await Jt(e,t),await Yt(e,t))}function Zt(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(e=>{n[e]=r[e]}),e}var Qt={};async function $t(e){let t=Qt[e];return t??(t={url:e,cssText:await(await fetch(e)).text()},Qt[e]=t),t}async function en(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let a=i.replace(r,`$1`);return a.startsWith(`https://`)||(a=new URL(a,e.url).href),wt(a,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(i).then(()=>n)}function tn(e){if(e==null)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,``),r=RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`,`gi`);for(;;){let e=r.exec(n);if(e===null)break;t.push(e[0])}n=n.replace(r,``);let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`,`gi`);for(;;){let e=i.exec(n);if(e===null){if(e=a.exec(n),e===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(e[0])}return t}async function nn(e,t){let n=[],r=[];return e.forEach(n=>{if(`cssRules`in n)try{B(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let a=i+1,o=e.href,s=$t(o).then(e=>en(e,t)).then(e=>tn(e).forEach(e=>{try{n.insertRule(e,e.startsWith(`@import`)?a+=1:n.cssRules.length)}catch(t){console.error(`Error inserting rule from remote css`,{rule:e,error:t})}})).catch(e=>{console.error(`Error loading remote css`,e.toString())});r.push(s)}})}catch(i){let a=e.find(e=>e.href==null)||document.styleSheets[0];n.href!=null&&r.push($t(n.href).then(e=>en(e,t)).then(e=>tn(e).forEach(e=>{a.insertRule(e,a.cssRules.length)})).catch(e=>{console.error(`Error loading remote stylesheet`,e)})),console.error(`Error inlining remote css file`,i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if(`cssRules`in e)try{B(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}function rn(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Gt(e.style.getPropertyValue(`src`)))}async function an(e,t){if(e.ownerDocument==null)throw Error(`Provided element is not within a Document`);return rn(await nn(B(e.ownerDocument.styleSheets),t))}function on(e){return e.trim().replace(/["']/g,``)}function sn(e){let t=new Set;function n(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(`,`).forEach(e=>{t.add(on(e))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&n(e)})}return n(e),t}async function cn(e,t){let n=await an(e,t),r=sn(e);return(await Promise.all(n.filter(e=>r.has(on(e.style.fontFamily))).map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return Kt(e.cssText,n,t)}))).join(`
`)}async function ln(e,t){let n=t.fontEmbedCSS==null?t.skipFonts?null:await cn(e,t):t.fontEmbedCSS;if(n){let t=document.createElement(`style`),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function un(e,t={}){let{width:n,height:r}=lt(e,t),i=await Z(e,t,!0);return await ln(i,t),await Xt(i,t),Zt(i,t),await pt(i,n,r)}async function dn(e,t={}){let{width:n,height:r}=lt(e,t),i=await W(await un(e,t)),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=t.pixelRatio||ut(),c=t.canvasWidth||n,l=t.canvasHeight||r;return a.width=c*s,a.height=l*s,t.skipAutoScale||dt(a),a.style.width=`${c}`,a.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function fn(e,t={}){return(await dn(e,t)).toDataURL()}function pn(e,t,n){let r=(e||n||`file`).replace(/[^a-zA-Z0-9._-]/g,`_`);return t?`${r}.${t}`:r}function mn(e,t,n){hn(new Blob([e.slice()],{type:n}),t)}function hn(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),0)}var gn={narrow:640,wide:960,full:1280},_n={filename:`sql-results`,scale:2,background:`paper`,padding:20,contain:`wide`};function vn(e){return e===`paper`?`#fffdf8`:e}function yn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function bn(e){return`<table class="sql-export-table"><thead><tr>${e.columns.map(e=>`<th scope="col">${yn(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td${e===null?` class="sql-export-null"`:``}>${yn(k(e))}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`}function xn(e,t){let n=vn(t.background),r=t.background===`transparent`,i=gn[t.contain]??gn.wide,a=document.createElement(`div`);a.className=`sql-export-root`,a.style.minHeight=`240px`,a.style.width=`fit-content`,a.style.boxSizing=`border-box`,a.style.background=r?`transparent`:n;let o=document.createElement(`div`);o.className=`sql-export-frame`,o.style.width=`${i}px`,o.style.maxWidth=`100%`,o.style.boxSizing=`border-box`,o.style.padding=`${t.padding}px`,o.style.background=r?`transparent`:n,o.innerHTML=e,a.append(o);let s=document.createElement(`style`);return s.textContent=On,a.insertBefore(s,a.firstChild),a}async function Sn(e,t,n){let r=vn(n.background),i=n.background===`transparent`;e.style.position=`fixed`,e.style.left=`-100000px`,e.style.top=`0`,document.body.append(e);try{e.style.position=`static`,e.style.left=`auto`,e.style.top=`auto`,e.offsetHeight,await new Promise(e=>requestAnimationFrame(()=>e()));let a=await fn(e,i?{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0}:{pixelRatio:n.scale,cacheBust:!0,skipFonts:!0,backgroundColor:r}),o=document.createElement(`a`);o.href=a,o.download=pn(t,`png`),o.rel=`noopener`,document.body.append(o),o.click(),o.remove()}finally{e.remove()}}async function Cn(e,t){await Sn(xn(bn(e),t),t.filename,t)}var wn=`database`,Tn=`application/vnd.sqlite3`;function En(e,t){return pn(e,t,wn)}function Dn(e,t,n){let r=_e(e);if(r.length===0)throw Error(`SQLite produced no bytes for this database, so nothing was saved.`);let i=En(t,n);return mn(r,i,Tn),i}var On=`
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
`,kn=500,An=100;function jn(){let e=r(``),t=r(``),n=i(null),a=i(null),o=r(`loading`),s=r(``),l=r(null),u=r(``),d=r(`table`),f=r(``),p=r([]),m=r(null),h=r(null),g=r(!1),_=c(()=>o.value===`running`),v=c(()=>o.value!==`loading`&&a.value!==null),y=c(()=>{let e=l.value?.statements??[];for(let t=e.length-1;t>=0;--t){let n=e[t];if(n.columns.length>0)return n}return null}),ee=c(()=>y.value!==null),b=c(()=>(l.value?.statements??[]).reduce((e,t)=>e+t.changes,0)),ne=c(()=>{let e=l.value;if(e===null)return``;let t=e.statements.length,n=[`${t} ${x(t,[`оператор`,`оператора`,`операторов`])}`];return b.value>0&&n.push(`${b.value} ${x(b.value,[`строка`,`строки`,`строк`])} изменена`),n.push(`${Math.round(e.durationMs)} ms`),n.join(` · `)}),S=c(()=>{let e=y.value;return e===null?null:{columns:e.columns,rows:e.rows}}),C=c(()=>{let e=S.value;return{table:e===null?``:we(e),markdown:e===null?``:Ce(e),json:e===null?``:le(e),yaml:e===null?``:Se(e),csv:e===null?``:xe(e),toon:e===null?``:ae(e)}}),w=c(()=>y.value?.rows.slice(0,kn)??[]),T=c(()=>y.value?.rows.length??0),re=c(()=>T.value>w.value.length);function E(){let e=a.value;p.value=e===null?[]:F(e)}function D(){let e=a.value;return e!==null&&F(e).length>0}function ie(){let e=a.value;e!==null&&P(e),a.value=n.value===null?null:j(n.value),l.value=null,u.value=``,E()}function O(e){let t=a.value;t!==null&&P(t),a.value=e,l.value=null,u.value=``,E()}function se(){let t=a.value;if(!(t===null||_.value)){o.value=`running`,u.value=``,f.value=``;try{let n=de(t,e.value);l.value=n,E(),n.error===null?f.value=n.statements.length===0?`Нечего было выполнять.`:`Запрос выполнился.`:(u.value=n.error,f.value=n.statements.length>0?`Оператор ${n.statements.length+1} не выполнился. Операторы до него выполнились.`:`Этот SQL не выполнился.`)}catch(e){u.value=e instanceof Error?e.message:`Этот SQL не удалось выполнить.`,l.value=null}finally{o.value=`ready`}}}function k(){let e=n.value;if(e!==null){o.value=`running`;try{let n=j(e),r=de(n,t.value);if(r.error!==null){P(n),u.value=`Скрипт схемы не выполнился: ${r.error}`,f.value=`База данных оставлена как была. Исправьте скрипт и постройте снова.`;return}O(n),f.value=`База построена из скрипта схемы: ${oe(p.value.length,[`таблица`,`таблицы`,`таблиц`])}.`}finally{o.value=`ready`,m.value=null}}}function A(){t.value=et,k()}function M(){n.value!==null&&(ie(),f.value=`База данных сброшена. Ваш запрос и скрипт схемы не изменились.`,m.value=null)}async function me(e){let r=n.value;if(r!==null){g.value=!0;try{let n=new Uint8Array(await e.arrayBuffer()),i;try{i=ue(r,n)}catch{f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}try{F(i)}catch{P(i),f.value=`${e.name} не является базой SQLite, которую этот браузер может открыть.`,m.value=null;return}N(i),t.value=ce(i),f.value=`Открыто ${e.name}: ${oe(p.value.length,[`таблица`,`таблицы`,`таблиц`])}. Скрипт схемы теперь содержит скрипт, который перестраивает её.`,m.value=null}finally{g.value=!1}}}function N(e){O(e)}function _e(e,t){D()?(h.value={label:t,apply:e},m.value=`import`,f.value=`Это заменит таблицы, уже находящиеся в базе. Нажмите Импорт ещё раз для подтверждения.`):e()}function ve(){let e=h.value;h.value=null,m.value=null,e?.apply()}function be(){m.value=null,h.value=null}function I(e){D()?m.value===e?e===`reset`?M():A():m.value=e:e===`reset`?M():A()}async function L(e,t){if(t.trim().length===0){f.value=`Нечего копировать как ${e} пока.`;return}let n=await Te(t);f.value=n===`copied`?`${e} скопировано в буфер обмена.`:`Браузер отказал в доступе к буферу обмена.`}function Ee(){return L(`SQL`,e.value)}function De(){let e=S.value;return e===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):L(`TSV`,te(e))}function Oe(e){return S.value===null?(f.value=`Нечего копировать пока. Сначала выполните запрос.`,Promise.resolve()):L(pe[e],C.value[e])}let R=r(!1);async function ke(){let e=S.value;if(e===null)f.value=`Нечего сохранять: сначала выполните запрос, который вернёт строки.`;else{R.value=!0;try{await Cn(e,_n),f.value=`Результат сохранён как PNG.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить PNG: ${e.message}`:`Не удалось сохранить PNG.`}finally{R.value=!1}}}function z(){let e=a.value;if(e!==null)try{Dn(e,`sql-sandbox-database`,`sqlite`),f.value=`База данных сохранена как файл SQLite.`}catch(e){f.value=e instanceof Error?`Не удалось сохранить базу: ${e.message}`:`Не удалось сохранить базу.`}}async function Ae(){o.value=`loading`,s.value=``;try{n.value=await ye(),a.value=j(n.value),E()}catch(e){s.value=e instanceof Error?e.message:`SQLite не удалось запустить в этом браузере.`,o.value=`ready`;return}o.value=`ready`,e.value=nt,t.value=tt,k()}function je(){e.value=``,f.value=`Редактор очищен. База данных и её таблицы не изменились.`}function Me(t){e.value=t,u.value=``}function Ne(e){t.value=e}function Pe(e){return f.value=`Запрос для ${e} в редакторе.`,`SELECT *\nFROM ${he(e)}\nLIMIT ${An};\n`}return{source:e,setup:t,status:o,running:_,ready:v,initError:s,lastRun:l,runError:u,format:d,notice:f,tables:p,resultStatement:y,resultTable:S,hasResult:ee,visibleRows:w,totalRows:T,rowsHidden:re,DISPLAY_ROW_LIMIT:kn,formatted:C,changedRows:b,summary:ne,importing:g,pendingConfirm:m,RESULT_FORMATS:ge,RESULT_FORMAT_LABELS:fe,RESULT_FORMAT_COPY_LABELS:pe,start:Ae,runSql:se,clearEditor:je,onSourceInput:Me,onSetupInput:Ne,tableQueryFor:Pe,buildDatabase:k,loadSample:A,resetDatabase:M,importDatabaseFile:me,requestImport:_e,confirmImport:ve,cancelConfirm:be,confirmOrRun:I,copySql:Ee,copyTsv:De,copyFormat:Oe,exportPng:ke,exportingPng:R,exportDatabase:z}}var Mn=N({name:`database-zap`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]}),Nn=N({name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]}),Pn=N({name:`image-down`,size:24,node:[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19 3 3v-5.5`,key:`9ldu5r`}],[`path`,{d:`m17 22 3-3`,key:`1nkfve`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]}),Fn=N({name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]}),$=[{name:rt,sql:tt,query:nt},{name:`Интернет-магазин`,sql:`PRAGMA foreign_keys = ON;

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
`}];$.map(e=>e.name);var In=u({__name:`SqlEditor`,setup(n,{expose:i}){i();let a=jn(),o=d(()=>A(()=>import(`./TrainerReferenceDialog.BCWjKIGc.js`),__vite__mapDeps([0,1,2,3,4]))),s=r(!1),c=r(!1);function l(){s.value=!0,c.value=!0}let u=e(`codeEditor`),f=r(null),p=r(0);function m(e){if(e===p.value)return;let t=$[e];if(!t)return;let n=$[p.value];(!n||a.setup.value.trim()===n.sql.trim()||window.confirm(`Текущий скрипт схемы отличается от шаблона. Переключить базу и заменить скрипт?`))&&(p.value=e,a.setup.value=t.sql,a.source.value=t.query,a.buildDatabase())}function h(e){let t=a.tableQueryFor(e),n=u.value;n?n.insert(t):a.source.value=`${a.source.value}${t}`}function g(){a.pendingConfirm.value===`import`?a.confirmImport():f.value?.click()}function _(e){let t=e.target,n=t.files?.[0];t.value=``,n!==void 0&&a.requestImport(()=>void a.importDatabaseFile(n),n.name)}function v(){a.pendingConfirm.value===`reset`?a.resetDatabase():a.confirmOrRun(`reset`)}t(()=>{a.start()});let y={editor:a,TrainerReferenceDialog:o,referenceMounted:s,referenceOpen:c,openReference:l,codeEditor:u,fileInput:f,currentDbIndex:p,switchDatabase:m,selectTable:h,importFile:g,onFileChosen:_,runReset:v,CodeEditor:Oe,DatabaseExplorer:Ue,ResultsTable:ve,ResultsText:Je,SetupEditor:$e,get pluralizeRu(){return x},get DatabaseZap(){return Mn},get Download(){return be},get FileUp(){return Nn},get RotateCcw(){return Fn},get ImageDown(){return Pn},get EDUCATIONAL_DATABASES(){return $}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),Ln={"aria-label":`SQL-песочница`,class:`flex flex-col gap-4`},Rn={class:`grid grid-cols-1 gap-4 xl:grid-cols-2`},zn={class:`flex min-w-0 flex-col overflow-hidden card`},Bn={class:`border-b border-line px-4 py-3 sm:px-6`},Vn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Hn={class:`flex gap-2`,role:`group`,"aria-label":`SQL-запрос`},Un=[`disabled`,`aria-busy`],Wn={key:0,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},Gn={key:1,class:`sql-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,role:`alert`},Kn={class:`text-center`},qn={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Jn={class:`mt-auto border-t border-line px-4 py-3 sm:px-6 m-0!`},Yn=[`disabled`],Xn={class:`flex min-w-0 flex-col overflow-hidden card`},Zn={class:`border-b border-line px-4 py-3 sm:px-6`},Qn={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},$n={class:`flex gap-2`,role:`group`,"aria-label":`Выбор базы данных`},er=[`aria-pressed`,`onClick`],tr={class:`px-4 py-4 sm:px-6`},nr={class:`border-t border-line`},rr={class:`border-b border-line px-4 py-3 sm:px-6`},ir={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},ar=[`disabled`],or={class:`px-4 py-4 sm:px-6`},sr={class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},cr={class:`flex flex-wrap items-center gap-2`},lr=[`disabled`],ur=[`disabled`],dr=[`disabled`],fr={key:0,class:`mt-2 label`},pr={key:1,class:`mt-2 label`},mr={class:`flex min-w-0 flex-col overflow-hidden card`},hr={class:`border-b border-line px-4 py-3 sm:px-6`},gr={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2`},_r={role:`group`,"aria-label":`Формат результата`,class:`flex flex-wrap items-center gap-2`},vr=[`aria-pressed`,`onClick`],yr={class:`px-4 py-4 sm:px-6`},br={key:0,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},xr={key:1,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`,role:`alert`},Sr={class:`mt-2 font-mono text-[0.8125rem] leading-relaxed break-words text-ink`},Cr={key:4,class:`flex h-[22rem] flex-col justify-center xl:h-[30rem]`},wr={class:`mt-2 text-[0.9375rem] leading-relaxed text-muted`},Tr={key:5,class:`flex h-[22rem] items-center justify-center xl:h-[30rem]`},Er={class:`border-t border-line px-4 py-3 sm:px-6`},Dr={class:`flex flex-wrap items-center justify-between gap-x-6 gap-y-3`},Or={class:`meta-mono text-label`},kr={class:`flex flex-wrap items-center gap-2`},Ar=[`disabled`],jr=[`disabled`],Mr=[`disabled`,`onClick`],Nr={key:0,class:`mt-2 label`},Pr={class:`label`,role:`status`,"aria-live":`polite`};function Fr(e,t,r,i,a,o){return s(),f(`section`,Ln,[g(`div`,Rn,[g(`div`,zn,[g(`div`,Bn,[g(`div`,Vn,[t[11]||=g(`h3`,{class:`panel-header`},`SQL-запрос`,-1),g(`div`,Hn,[g(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value,"aria-busy":i.editor.running.value,onClick:t[0]||=(...e)=>i.editor.runSql&&i.editor.runSql(...e)},h(i.editor.running.value?`Выполняется…`:`Выполнить`),9,Un),g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:i.openReference},` Открыть справочник `)])])]),i.editor.status.value===`loading`?(s(),f(`div`,Wn,[...t[12]||=[g(`p`,{class:`label`},`Запуск SQLite…`,-1)]])):i.editor.initError.value===``?(s(),v(i.CodeEditor,{key:2,ref:`codeEditor`,modelValue:i.editor.source.value,"onUpdate:modelValue":[t[1]||=e=>i.editor.source.value=e,i.editor.onSourceInput],onRun:i.editor.runSql},null,8,[`modelValue`,`onUpdate:modelValue`,`onRun`])):(s(),f(`div`,Gn,[g(`div`,Kn,[t[13]||=g(`p`,{class:`label-micro`},`SQLite не запустился`,-1),g(`p`,qn,h(i.editor.initError.value),1)])])),g(`div`,Jn,[g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:i.editor.source.value.trim().length===0,onClick:t[2]||=(...e)=>i.editor.copySql&&i.editor.copySql(...e)},` Скопировать `,8,Yn),g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:t[3]||=(...e)=>i.editor.clearEditor&&i.editor.clearEditor(...e)},` Очистить `)]),t[14]||=g(`div`,{class:`mt-auto border-t border-line px-4 py-3 sm:px-6`},[g(`p`,{class:`label`},`Нажмите Ctrl или Cmd с Enter, чтобы выполнить запрос из редактора.`)],-1)]),g(`div`,Xn,[g(`div`,Zn,[g(`div`,Qn,[t[15]||=g(`h3`,{class:`panel-header`},`Предустановленные базы данных`,-1),g(`div`,$n,[(s(!0),f(m,null,n(i.EDUCATIONAL_DATABASES,(e,t)=>(s(),f(`button`,{key:e.name,type:`button`,class:`btn btn-ghost btn-sm`,"aria-pressed":i.currentDbIndex===t,onClick:e=>i.switchDatabase(t)},h(e.name),9,er))),128))])])]),g(`div`,tr,[t[16]||=g(`p`,{class:`m-0 mb-3 text-[0.85rem] leading-relaxed text-muted`},` В песочнице доступны две предустановленные базы данных: Игроки и Интернет-магазин. Выберите базу, чтобы посмотреть её структуру и SQL-скрипт создания. `,-1),p(i.DatabaseExplorer,{tables:i.editor.tables.value,onSelect:i.selectTable},null,8,[`tables`])]),g(`div`,nr,[g(`div`,rr,[g(`div`,ir,[t[18]||=g(`h3`,{class:`panel-header`},`Скрипт схемы`,-1),g(`button`,{type:`button`,class:`btn btn-accent btn-sm`,disabled:!i.editor.ready.value||i.editor.running.value||i.editor.setup.value.trim().length===0,onClick:t[4]||=(...e)=>i.editor.buildDatabase&&i.editor.buildDatabase(...e)},[p(i.DatabaseZap,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),t[17]||=_(` Построить базу `,-1)],8,ar)])]),g(`div`,or,[p(i.SetupEditor,{modelValue:i.editor.setup.value,"onUpdate:modelValue":[t[5]||=e=>i.editor.setup.value=e,i.editor.onSetupInput]},null,8,[`modelValue`,`onUpdate:modelValue`]),t[19]||=g(`p`,{class:`mt-3 label`},` Скрипт схемы создаёт базу с нуля: CREATE TABLE, INSERT, индексы. Он отделён от редактора запросов — постройте базу, а затем пишите к ней SQL сверху. Диалект — SQLite (об учебной базе курса на MySQL см. примечание выше). `,-1)])]),g(`div`,sr,[g(`div`,cr,[g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:i.runReset},[p(i.RotateCcw,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),_(` `+h(i.editor.pendingConfirm.value===`reset`?`Точно сбросить?`:`Сбросить базу`),1)],8,lr),g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value||i.editor.importing.value,onClick:i.importFile},[p(i.FileUp,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),_(` `+h(i.editor.pendingConfirm.value===`import`?`Точно импортировать?`:`Импорт .sqlite`),1)],8,ur),g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.ready.value,onClick:t[6]||=(...e)=>i.editor.exportDatabase&&i.editor.exportDatabase(...e)},[p(i.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),t[20]||=_(` Скачать базу `,-1)],8,dr),i.editor.pendingConfirm.value===`reset`||i.editor.pendingConfirm.value===`import`?(s(),f(`button`,{key:0,type:`button`,class:`btn btn-ghost btn-sm`,onClick:t[7]||=(...e)=>i.editor.cancelConfirm&&i.editor.cancelConfirm(...e)},` Отмена `)):l(``,!0),g(`input`,{ref:`fileInput`,type:`file`,accept:`.sqlite,.db,.sqlite3,.db3`,class:`hidden`,"aria-hidden":`true`,tabindex:`-1`,onChange:i.onFileChosen},null,544)]),i.editor.pendingConfirm.value===`reset`?(s(),f(`p`,fr,` Сброс удалит таблицы активной базы. Запрос и скрипт схемы останутся. `)):i.editor.pendingConfirm.value===`import`?(s(),f(`p`,pr,` Импорт заменит таблицы активной базы файлом, который вы выбрали. `)):l(``,!0)])])]),g(`div`,mr,[g(`div`,hr,[g(`div`,gr,[t[21]||=g(`h3`,{class:`panel-header`},`Результаты`,-1),g(`div`,_r,[(s(!0),f(m,null,n(i.editor.RESULT_FORMATS,e=>(s(),f(`button`,{key:e,type:`button`,class:`btn btn-secondary btn-sm`,"aria-pressed":i.editor.format.value===e,onClick:t=>i.editor.format.value=e},h(i.editor.RESULT_FORMAT_LABELS[e]),9,vr))),128))])])]),g(`div`,yr,[i.editor.running.value?(s(),f(`div`,br,[...t[22]||=[g(`p`,{class:`label`},`Выполняется…`,-1)]])):i.editor.runError.value===``?i.editor.hasResult.value&&i.editor.format.value===`table`?(s(),v(i.ResultsTable,{key:2,columns:i.editor.resultStatement.value?.columns??[],rows:i.editor.visibleRows.value},null,8,[`columns`,`rows`])):i.editor.hasResult.value?(s(),v(i.ResultsText,{key:3,text:i.editor.formatted.value[i.editor.format.value]},null,8,[`text`])):i.editor.lastRun.value===null?(s(),f(`div`,Tr,[...t[27]||=[g(`p`,{class:`label text-center`},`Напишите SQL и нажмите Выполнить SQL.`,-1)]])):(s(),f(`div`,Cr,[t[26]||=g(`p`,{class:`label-micro`},`Строк не возвращено`,-1),g(`p`,wr,[t[25]||=_(` Запрос выполнился без возвращения набора результатов. `,-1),i.editor.changedRows.value>0?(s(),f(m,{key:0},[_(` Он изменил `+h(i.editor.changedRows.value)+` `+h(i.pluralizeRu(i.editor.changedRows.value,[`строку`,`строки`,`строк`]))+`. `,1)],64)):l(``,!0)])])):(s(),f(`div`,xr,[t[23]||=g(`p`,{class:`label-micro`},`Этот SQL не выполнился`,-1),g(`p`,Sr,h(i.editor.runError.value),1),t[24]||=g(`p`,{class:`mt-3 label`},` Операторы до ошибочного выполнились, редактор не изменился. Исправьте оператор и запустите снова. `,-1)]))]),g(`div`,Er,[g(`div`,Dr,[g(`p`,Or,[i.editor.hasResult.value?(s(),f(m,{key:0},[_(h(i.editor.rowsHidden.value?`показано ${i.editor.visibleRows.value.length} из ${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`:`${i.editor.totalRows.value} ${i.pluralizeRu(i.editor.totalRows.value,[`строка`,`строки`,`строк`])}`),1)],64)):l(``,!0),i.editor.summary.value===``?l(``,!0):(s(),f(m,{key:1},[_(h(i.editor.hasResult.value?` · `:``)+h(i.editor.summary.value),1)],64))]),g(`div`,kr,[g(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:!i.editor.hasResult.value||i.editor.exportingPng.value,onClick:t[8]||=(...e)=>i.editor.exportPng&&i.editor.exportPng(...e)},[p(i.ImageDown,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),_(` `+h(i.editor.exportingPng.value?`Готовится…`:`Скачать PNG`),1)],8,Ar),t[28]||=g(`span`,{class:`meta-mono text-label`},`Скопировать:`,-1),g(`button`,{type:`button`,class:`btn btn-secondary btn-sm`,disabled:!i.editor.hasResult.value,onClick:t[9]||=(...e)=>i.editor.copyTsv&&i.editor.copyTsv(...e)},` TSV `,8,jr),(s(!0),f(m,null,n(i.editor.RESULT_FORMATS,e=>(s(),f(`button`,{key:`copy-${e}`,type:`button`,class:`btn btn-secondary btn-sm`,disabled:!i.editor.hasResult.value,onClick:t=>i.editor.copyFormat(e)},h(i.editor.RESULT_FORMAT_COPY_LABELS[e]),9,Mr))),128))])]),i.editor.rowsHidden.value?(s(),f(`p`,Nr,` Вид показывает первые `+h(i.editor.DISPLAY_ROW_LIMIT)+` строк, чтобы страница оставалась адаптивной. Копии содержат все `+h(i.editor.totalRows.value)+`. `,1)):l(``,!0)])]),g(`p`,Pr,[i.editor.notice.value===``?(s(),f(m,{key:1},[_(` Всё выполняется в этом браузере: база данных в памяти, ничего не загружается на сервер. `)],64)):(s(),f(m,{key:0},[_(h(i.editor.notice.value),1)],64))]),i.referenceMounted?(s(),v(i.TrainerReferenceDialog,{key:0,open:i.referenceOpen,onClose:t[10]||=e=>i.referenceOpen=!1},null,8,[`open`])):l(``,!0)])}var Ir=b(In,[[`render`,Fr]]);export{Ir as default};