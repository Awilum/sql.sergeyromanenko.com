import{D as e,E as t,F as n,L as r,N as i,a,c as o,g as s,l as c,m as l,n as u,o as d,p as f,rt as p,tt as m,x as h}from"./runtime-core.esm-bundler.QXARJSnr.js";import{i as g}from"./runtime-dom.esm-bundler.CJEas4C-.js";import{r as _}from"./createLucideIcon.DFvGaCxj.js";import{t as v}from"./clipboard.B4HicLjz.js";var ee=`8 ноября 2026`,y=[{id:`select`,group:`basics`,title:`SELECT`,summary:`Выбирает столбцы и вычисляемые выражения из таблицы.`,syntax:`SELECT столбец, выражение AS псевдоним
FROM таблица
WHERE условие
ORDER BY столбец
LIMIT количество;`,example:`SELECT name, city
FROM customers
WHERE city = 'Москва'
ORDER BY name;`,exampleDialect:`SQLite`,executable:!0,notes:[`Перечисляйте нужные столбцы явно: «*» ломается, когда меняется схема таблицы.`,`Порядок выполнения: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.`],course:{href:`/courses/sql-introduction/`,label:`SQL Введение`}},{id:`where`,group:`basics`,title:`WHERE`,summary:`Оставляет строки, для которых условие истинно.`,syntax:`WHERE условие
  AND (условие OR условие)`,example:`SELECT name, price
FROM products
WHERE price BETWEEN 5000 AND 50000
  AND stock > 0;`,exampleDialect:`SQLite`,executable:!0,notes:[`AND имеет более высокий приоритет, чем OR; группируйте условия скобками.`,`NULL не сравнивается через = или <>: используйте IS NULL и IS NOT NULL.`],course:{href:`/courses/sql-conditional-logic/`,label:`SQL Условная логика`}},{id:`order-limit`,group:`basics`,title:`ORDER BY и LIMIT`,summary:`Сортирует результат и ограничивает число строк.`,syntax:`ORDER BY столбец ASC | DESC
LIMIT количество OFFSET пропустить;`,example:`SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;`,exampleDialect:`SQLite`,executable:!0,notes:[`Без ORDER BY порядок строк не гарантирован, даже если он кажется стабильным.`,`LIMIT без сортировки не отвечает на вопрос «самые дорогие»: сначала задайте порядок.`]},{id:`distinct`,group:`basics`,title:`DISTINCT`,summary:`Удаляет одинаковые строки из результата.`,syntax:`SELECT DISTINCT столбец1, столбец2
FROM таблица;`,example:`SELECT DISTINCT city
FROM customers
ORDER BY city;`,exampleDialect:`SQLite`,executable:!0,notes:[`DISTINCT сравнивает всю строку результата, а не отдельный столбец.`,`COUNT(DISTINCT столбец) считает уникальные значения и пропускает NULL.`]},{id:`group-having`,group:`grouping`,title:`GROUP BY и HAVING`,summary:`Собирает строки в группы и фильтрует уже готовые группы.`,syntax:`SELECT столбец, COUNT(*) AS количество
FROM таблица
GROUP BY столбец
HAVING COUNT(*) > 1;`,example:`SELECT status, COUNT(*) AS orders_count
FROM orders
GROUP BY status
HAVING COUNT(*) >= 2
ORDER BY orders_count DESC;`,exampleDialect:`SQLite`,executable:!0,notes:[`WHERE фильтрует строки до группировки, HAVING — готовые группы.`,`Столбец в SELECT должен входить в GROUP BY или быть агрегатом; в MySQL 8 это проверяет ONLY_FULL_GROUP_BY.`],course:{href:`/courses/sql-for-beginners/`,label:`SQL для начинающих`}},{id:`join`,group:`joins`,title:`JOIN`,summary:`Соединяет строки двух таблиц по условию ON.`,syntax:`FROM левая AS l
JOIN правая AS r ON r.id = l.foreign_id`,example:`SELECT c.name, o.ordered_at, o.status
FROM customers AS c
JOIN orders AS o ON o.customer_id = c.id
ORDER BY o.ordered_at DESC;`,exampleDialect:`SQLite`,executable:!0,notes:[`INNER JOIN оставляет только совпадения, LEFT JOIN сохраняет все строки левой таблицы.`,`RIGHT и FULL OUTER JOIN появились в SQLite 3.39.0; проверяйте, не размножает ли соединение строки.`],course:{href:`/courses/sql-for-beginners/`,label:`SQL для начинающих`}},{id:`null`,group:`logic`,title:`NULL`,summary:`Отмечает отсутствующее или неизвестное значение.`,syntax:`WHERE столбец IS NULL
WHERE столбец IS NOT NULL`,example:`SELECT name
FROM customers
WHERE city IS NULL;`,exampleDialect:`SQLite`,executable:!0,notes:[`NULL — не ноль и не пустая строка; сравнение с ним даёт UNKNOWN, а не TRUE.`,`COUNT(столбец) и AVG(столбец) пропускают NULL, а COUNT(*) считает все строки.`]},{id:`case`,group:`logic`,title:`CASE`,summary:`Возвращает значение по первому выполненному условию.`,syntax:`CASE
  WHEN условие THEN значение
  ELSE значение
END`,example:`SELECT
  name,
  CASE
    WHEN price >= 50000 THEN 'дорогой'
    WHEN price >= 10000 THEN 'средний'
    ELSE 'доступный'
  END AS segment
FROM products;`,exampleDialect:`SQLite`,executable:!0,notes:[`CASE работает в SELECT, ORDER BY, GROUP BY и внутри агрегатных функций.`,`Без ELSE результат будет NULL, а не исходное значение.`]},{id:`in-between-like`,group:`logic`,title:`IN, BETWEEN, LIKE`,summary:`Три коротких способа записать список, диапазон или шаблон.`,syntax:`WHERE столбец IN (значение1, значение2)
WHERE столбец BETWEEN минимум AND максимум
WHERE столбец LIKE 'шаблон%'`,example:`SELECT name, city
FROM customers
WHERE city IN ('Москва', 'Санкт-Петербург')
  AND name LIKE 'А%';`,exampleDialect:`SQLite`,executable:!0,notes:[`BETWEEN включает границы; NOT IN с NULL в списке не вернёт ни одной строки.`,`В SQLite LIKE без учёта регистра работает только для латиницы: для кириллицы регистр важен.`]},{id:`union`,group:`complex`,title:`UNION и UNION ALL`,summary:`Складывает результаты запросов один под другим.`,syntax:`SELECT столбцы FROM таблица1
UNION | UNION ALL
SELECT столбцы FROM таблица2
ORDER BY столбец;`,example:`SELECT name AS label FROM customers
UNION
SELECT name FROM products
ORDER BY label;`,exampleDialect:`SQLite`,executable:!0,notes:[`UNION удаляет дубликаты, UNION ALL оставляет все строки и обычно работает быстрее.`,`Число и типы столбцов должны совпадать; ORDER BY пишется один раз в конце.`]},{id:`cte`,group:`complex`,title:`Подзапросы и CTE`,summary:`Разбивает запрос на именованные шаги.`,syntax:`WITH имя AS (
  SELECT ...
)
SELECT ...
FROM имя;`,example:`WITH paid AS (
  SELECT customer_id, id
  FROM orders
  WHERE status = 'paid'
)
SELECT c.name, COUNT(*) AS paid_orders
FROM customers AS c
JOIN paid ON paid.customer_id = c.id
GROUP BY c.id, c.name;`,exampleDialect:`SQLite`,executable:!0,notes:[`CTE не гарантирует ускорение: PostgreSQL 12+ может встраивать простые CTE в основной запрос.`,`Скалярный подзапрос возвращает одно значение; EXISTS проверяет только наличие строк.`],course:{href:`/courses/sql-common-table-expressions/`,label:`SQL Общие табличные выражения`}},{id:`window`,group:`complex`,title:`Оконные функции`,summary:`Считают по окну строк, не сворачивая результат.`,syntax:`функция(...) OVER (
  PARTITION BY столбец
  ORDER BY столбец
)`,example:`SELECT
  name,
  category,
  price,
  RANK() OVER (
    PARTITION BY category
    ORDER BY price DESC
  ) AS price_rank
FROM products;`,exampleDialect:`SQLite`,executable:!0,notes:[`Оконные функции нельзя использовать в WHERE: оберните запрос в CTE или подзапрос.`,`ORDER BY внутри OVER задаёт порядок вычисления, а не порядок вывода строк.`],course:{href:`/courses/sql-window-functions/`,label:`SQL Оконные функции`}},{id:`dml`,group:`dml`,title:`INSERT, UPDATE, DELETE`,summary:`Добавляет, изменяет и удаляет строки.`,syntax:`INSERT INTO таблица (столбцы) VALUES (значения);
UPDATE таблица SET столбец = значение WHERE условие;
DELETE FROM таблица WHERE условие;`,example:`UPDATE products
SET stock = stock - 1
WHERE id = 1
  AND stock > 0;`,exampleDialect:`SQLite`,executable:!0,notes:[`UPDATE и DELETE без WHERE изменяют все строки таблицы.`,`Сначала проверьте условие через SELECT, а несколько операций выполняйте в транзакции.`],course:{href:`/courses/sql-practical-trainer/`,label:`Практический тренажёр по SQL`}},{id:`dialects`,group:`dialects`,title:`Диалекты SQL`,summary:`Базовый синтаксис общий, функции и ограничения различаются.`,syntax:`-- SQLite / PostgreSQL / MySQL
SELECT ... LIMIT 10;

-- SQL Server
SELECT TOP 10 ...;`,example:`-- SQLite и PostgreSQL
SELECT name FROM products
ORDER BY price DESC
LIMIT 3;

-- SQL Server
SELECT TOP 3 name FROM products
ORDER BY price DESC;`,exampleDialect:`SQLite · SQL Server`,executable:!1,notes:[`Проверяйте версию СУБД: RIGHT и FULL JOIN появились в SQLite 3.39.0, оконные функции — в 3.25.0.`,`Песочница сайта работает на SQLite, курсы — в основном на MySQL: сверяйте функции дат, строк и типы.`]}].map((e,t)=>({...e,number:String(t+1).padStart(2,`0`)})),b=s({__name:`RefTextVue`,props:{text:{}},setup(e,{expose:t}){t();let n=e,r={props:n,parts:a(()=>n.text.split(/`([^`]*)`/g))};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),x={key:0,class:`ref-inline-code`};function S(n,r,i,a,o,s){return t(!0),c(u,null,e(a.parts,(e,n)=>(t(),c(u,{key:n},[n%2==1?(t(),c(`code`,x,p(e),1)):(t(),c(u,{key:1},[f(p(e),1)],64))],64))),128)}var C=_(b,[[`render`,S]]),w=s({__name:`RefCodeBlock`,props:{label:{},code:{},title:{},variant:{},dialect:{},caption:{}},setup(e,{expose:t}){t();let n=e,i=a(()=>n.variant===`syntax`),o=r(!1),s=null;async function c(){let e=await v(n.code);o.value=e===`copied`,s!==null&&window.clearTimeout(s),s=window.setTimeout(()=>{o.value=!1,s=null},2e3)}let l={props:n,isSyntax:i,copied:o,get copiedTimer(){return s},set copiedTimer(e){s=e},copy:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),T={class:`flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1`},E=[`aria-label`],D=[`aria-label`];function O(e,n,r,i,a,s){return t(),c(`div`,{class:m([`overflow-hidden rounded-none border`,i.isSyntax?`on-dark border-ink-deep bg-ink-deep`:`border-line bg-surface`])},[d(`div`,{class:m([`flex items-center justify-between gap-3 border-b px-3.5 py-2`,i.isSyntax?`border-white/10`:`border-line`])},[d(`div`,T,[d(`p`,{class:m([`label m-0`,i.isSyntax?`text-[#c9bfae]`:``])},p(r.label),3),r.dialect?(t(),c(`span`,{key:0,class:m([`meta-mono truncate leading-none`,i.isSyntax?`text-[#a99e8c]`:``])},p(r.dialect),3)):o(``,!0)]),d(`button`,{type:`button`,class:m([`ref-code-copy`,i.isSyntax?`ref-code-copy--dark`:``]),"aria-label":`${r.label}: ${r.title} — скопировать код`,onClick:i.copy},p(i.copied?`Скопировано`:`Копировать`),11,E)],2),d(`pre`,{tabindex:`0`,"aria-label":`${r.label}: ${r.title}`,class:m([`m-0 overflow-x-auto p-4 font-mono text-[0.78rem] leading-relaxed`,i.isSyntax?`text-[#f3ede2]`:`text-ink`])},[d(`code`,null,p(r.code),1)],10,D),r.caption?(t(),c(`p`,{key:0,class:m([`m-0 border-t px-3.5 py-2 text-[0.75rem] leading-relaxed`,i.isSyntax?`border-white/10 text-[#c9bfae]`:`border-line text-muted`])},p(r.caption),3)):o(``,!0)],2)}var k=_(w,[[`render`,O],[`__scopeId`,`data-v-bc203a4f`]]),A=s({__name:`TrainerReferenceDialog`,props:{open:{type:Boolean}},emits:[`close`],setup(e,{expose:t,emit:n}){t();let o=e,s=n,c=r(null),l=r(null),u=r(null),d=r(``),f=r(y[0]?.id??``);function p(e){let t=[e.title,e.summary];return t.push(e.syntax,e.example,e.notes.join(` `)),t.join(` `).toLowerCase()}let m=new Map(y.map(e=>[e.id,p(e)])),g=a(()=>{let e=d.value.trim().toLowerCase();return e?y.filter(t=>m.get(t.id)?.includes(e)):y});function _(){let e=u.value;if(!e)return;let t=g.value[0]?.id??``;for(let n of g.value){let r=e.querySelector(`[data-ref-section="${n.id}"]`);if(r&&r.getBoundingClientRect().top<=120)t=n.id;else break}f.value=t}function v(e){let t=u.value,n=t?.querySelector(`[data-ref-section="${e}"]`);t&&n&&t.scrollTo({top:n.offsetTop-16,behavior:`smooth`})}function b(){let e=u.value?.querySelector(`[data-ref-dialog-toc]`);e&&(e.open=!1)}function x(){c.value?.close()}function S(e){e.target===c.value&&x()}function w(){document.body.style.overflow=``,s(`close`)}i(()=>o.open,async(e,t)=>{if(e===t&&!e)return;let n=c.value;!n&&(await h(),n=c.value,!n)||(e&&!n.open?(document.body.style.overflow=`hidden`,n.showModal(),await h(),l.value?.focus(),_()):!e&&n.open&&n.close())},{immediate:!0}),i(g,()=>{h(_)});let T={props:o,emit:s,dialogEl:c,searchEl:l,contentHost:u,query:d,activeSectionId:f,sectionText:p,sectionTexts:m,filteredSections:g,updateActiveSection:_,scrollToSection:v,closeMobileToc:b,requestClose:x,onBackdropClick:S,onNativeClose:w,get REFERENCE_UPDATED_LABEL(){return ee},get referenceSections(){return y},RefTextVue:C,RefCodeBlock:k};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}}),j={class:`ref-frame`},M={class:`ref-header`},N={class:`flex items-start justify-between gap-4`},P={class:`min-w-0`},F={class:`meta-mono mt-1 text-label`,"aria-live":`polite`},I={class:`mt-3 block`},L={class:`ref-body`},R={class:`ref-toc hidden lg:block`,"aria-label":`Содержание справочника`},z={class:`m-0 mt-4 grid list-none gap-1 p-0`},B=[`aria-current`,`onClick`],te={class:`meta-mono pt-0.5`},V={ref:`contentHost`,class:`ref-content`},H={class:`mb-6 border border-line bg-surface lg:hidden`,"data-ref-dialog-toc":``},U={class:`flex cursor-pointer items-center justify-between gap-3 px-4 py-3`},W={class:`meta-mono`},G={class:`border-t border-line px-4 py-4`},K={class:`m-0 grid list-none gap-1 p-0`},q=[`onClick`],J={class:`meta-mono pt-0.5`},Y={key:0,class:`p-6 text-center text-[0.95rem] text-muted`,role:`status`},X=[`id`,`data-ref-section`,`aria-labelledby`],Z={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},Q=[`id`],ne={class:`meta-mono mr-3 align-baseline`},re={class:`mt-3 max-w-[44rem] text-[0.95rem] leading-relaxed text-muted`},ie={class:`mt-5 grid gap-4`},ae={key:0,class:`mt-4 grid max-w-[52rem] gap-1.5 pl-5 text-[0.9rem] leading-relaxed text-muted`},oe={key:1,class:`mt-4 text-[0.88rem] leading-relaxed text-muted`},$=[`href`],se={key:1,class:`label`};function ce(r,i,a,s,h,_){return t(),c(`dialog`,{ref:`dialogEl`,class:`ref-dialog`,"aria-labelledby":`ref-dialog-title`,onClose:s.onNativeClose,onClick:s.onBackdropClick},[d(`div`,j,[d(`header`,M,[d(`div`,N,[d(`div`,P,[i[1]||=d(`h2`,{id:`ref-dialog-title`,class:`ref-title`},`Справочник по SQL`,-1),d(`p`,F,[f(p(s.filteredSections.length)+` из `+p(s.referenceSections.length)+` разделов `,1),s.REFERENCE_UPDATED_LABEL?(t(),c(u,{key:0},[f(` · обновлено `+p(s.REFERENCE_UPDATED_LABEL),1)],64)):o(``,!0)])]),d(`button`,{type:`button`,class:`ref-close`,"aria-label":`Закрыть справочник`,onClick:s.requestClose},[...i[2]||=[d(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[d(`path`,{d:`M6 6l12 12M18 6 6 18`})],-1)]])]),d(`label`,I,[i[3]||=d(`span`,{class:`sr-only`},`Поиск по справочнику`,-1),n(d(`input`,{ref:`searchEl`,"onUpdate:modelValue":i[0]||=e=>s.query=e,type:`search`,class:`ref-search`,placeholder:`Поиск: функция, конструкция или раздел`},null,512),[[g,s.query]])])]),d(`div`,L,[d(`nav`,R,[i[4]||=d(`p`,{class:`label m-0`},`Содержание`,-1),d(`ol`,z,[(t(!0),c(u,null,e(s.filteredSections,e=>(t(),c(`li`,{key:e.id},[d(`button`,{type:`button`,class:m([`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.88rem] leading-snug`,{"is-active":e.id===s.activeSectionId}]),"aria-current":e.id===s.activeSectionId?`location`:void 0,onClick:t=>s.scrollToSection(e.id)},[d(`span`,te,p(e.number),1),d(`span`,null,p(e.title),1)],10,B)]))),128))])]),d(`div`,V,[d(`details`,H,[d(`summary`,U,[i[5]||=d(`span`,{class:`label m-0`},`Содержание`,-1),d(`span`,W,p(s.filteredSections.length)+` разделов`,1)]),d(`div`,G,[d(`ol`,K,[(t(!0),c(u,null,e(s.filteredSections,e=>(t(),c(`li`,{key:e.id},[d(`button`,{type:`button`,class:`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.9rem] leading-snug`,onClick:t=>{s.scrollToSection(e.id),s.closeMobileToc()}},[d(`span`,J,p(e.number),1),d(`span`,null,p(e.title),1)],8,q)]))),128))])])]),s.filteredSections.length===0?(t(),c(`p`,Y,` По запросу «`+p(s.query.trim())+`» в справочнике ничего не найдено. Попробуйте другое слово — например, «join» или «group by». `,1)):o(``,!0),(t(!0),c(u,null,e(s.filteredSections,n=>(t(),c(`article`,{id:`ref-dialog-${n.id}`,key:n.id,"data-ref-section":n.id,class:`border-b border-line py-8 last:border-b-0`,"aria-labelledby":`ref-dialog-${n.id}-title`},[d(`div`,Z,[d(`h3`,{id:`ref-dialog-${n.id}-title`,class:`section-title m-0`},[d(`span`,ne,p(n.number),1),f(` `+p(n.title),1)],8,Q)]),d(`p`,re,[l(s.RefTextVue,{text:n.summary},null,8,[`text`])]),d(`div`,ie,[l(s.RefCodeBlock,{label:`Шаблон синтаксиса`,code:n.syntax,title:n.title,variant:`syntax`},null,8,[`code`,`title`]),l(s.RefCodeBlock,{label:n.executable?`Пример`:`Сравнение`,code:n.example,title:n.title,dialect:n.exampleDialect,caption:n.executable?void 0:`Не выполняется в песочнице: она поддерживает только SQLite.`},null,8,[`label`,`code`,`title`,`dialect`,`caption`])]),n.notes.length>0?(t(),c(`ul`,ae,[(t(!0),c(u,null,e(n.notes,(e,n)=>(t(),c(`li`,{key:n},[l(s.RefTextVue,{text:e},null,8,[`text`])]))),128))])):o(``,!0),n.course?(t(),c(`p`,oe,[i[6]||=d(`span`,{class:`label`},`Курс`,-1),d(`a`,{href:n.course.href,class:`text-accent`},` «`+p(n.course.label)+`» →`,9,$)])):o(``,!0)],8,X))),128)),s.filteredSections.length===0?(t(),c(`p`,se,` Ничего не найдено. Попробуйте другой запрос — например, «join» или «group by». `)):o(``,!0)],512)])])],544)}var le=_(A,[[`render`,ce],[`__scopeId`,`data-v-46de054d`]]);export{le as default};