import{B as e,C as t,I as n,L as r,O as i,R as a,_ as o,a as s,c,h as l,k as u,l as d,lt as f,m as p,n as m,o as h,s as g,st as _}from"./runtime-core.esm-bundler.nu_UAaCd.js";import{s as v}from"./runtime-dom.esm-bundler.D1Ao6Kpe.js";import{t as y}from"./AppDialog.BCxhy0SV.js";import{t as b}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as x}from"./clipboard.CwnQ0M1R.js";var S=`8 ноября 2026`,C=[{id:`select`,group:`basics`,title:`SELECT`,summary:`Выбирает столбцы и вычисляемые выражения из таблицы.`,syntax:`SELECT столбец, выражение AS псевдоним
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
ORDER BY price DESC;`,exampleDialect:`SQLite · SQL Server`,executable:!1,notes:[`Проверяйте версию СУБД: RIGHT и FULL JOIN появились в SQLite 3.39.0, оконные функции — в 3.25.0.`,`Песочница сайта работает на SQLite, курсы — в основном на MySQL: сверяйте функции дат, строк и типы.`]}].map((e,t)=>({...e,number:String(t+1).padStart(2,`0`)})),w=o({__name:`RefTextVue`,props:{text:{}},setup(e,{expose:t}){t();let n=e,r={props:n,parts:s(()=>n.text.split(/`([^`]*)`/g))};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),T={key:0,class:`ref-inline-code`};function E(e,t,n,r,a,o){return i(!0),d(m,null,u(r.parts,(e,t)=>(i(),d(m,{key:t},[t%2==1?(i(),d(`code`,T,f(e),1)):(i(),d(m,{key:1},[p(f(e),1)],64))],64))),128)}var D=b(w,[[`render`,E]]),O=o({__name:`RefCodeBlock`,props:{label:{},code:{},title:{},variant:{},dialect:{},caption:{}},setup(t,{expose:n}){n();let r=t,i=s(()=>r.variant===`syntax`),a=e(!1),o=null;async function c(){let e=await x(r.code);a.value=e===`copied`,o!==null&&window.clearTimeout(o),o=window.setTimeout(()=>{a.value=!1,o=null},2e3)}let l={props:r,isSyntax:i,copied:a,get copiedTimer(){return o},set copiedTimer(e){o=e},copy:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),k={class:`flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1`},A=[`aria-label`],j=[`aria-label`];function M(e,t,n,r,a,o){return i(),d(`div`,{class:_([`overflow-hidden rounded-none border`,r.isSyntax?`on-dark border-ink-deep bg-ink-deep`:`border-line bg-surface`])},[h(`div`,{class:_([`flex items-center justify-between gap-3 border-b px-3.5 py-2`,r.isSyntax?`border-white/10`:`border-line`])},[h(`div`,k,[h(`p`,{class:_([`label m-0`,r.isSyntax?`text-[#c9bfae]`:``])},f(n.label),3),n.dialect?(i(),d(`span`,{key:0,class:_([`meta-mono truncate leading-none`,r.isSyntax?`text-[#a99e8c]`:``])},f(n.dialect),3)):c(``,!0)]),h(`button`,{type:`button`,class:_([`ref-code-copy`,r.isSyntax?`ref-code-copy--dark`:``]),"aria-label":`${n.label}: ${n.title} — скопировать код`,onClick:r.copy},f(r.copied?`Скопировано`:`Копировать`),11,A)],2),h(`pre`,{tabindex:`0`,"aria-label":`${n.label}: ${n.title}`,class:_([`m-0 overflow-x-auto p-4 font-mono text-[0.78rem] leading-relaxed`,r.isSyntax?`text-[#f3ede2]`:`text-ink`])},[h(`code`,null,f(n.code),1)],10,j),n.caption?(i(),d(`p`,{key:0,class:_([`m-0 border-t px-3.5 py-2 text-[0.75rem] leading-relaxed`,r.isSyntax?`border-white/10 text-[#c9bfae]`:`border-line text-muted`])},f(n.caption),3)):c(``,!0)],2)}var N=b(O,[[`render`,M],[`__scopeId`,`data-v-bc203a4f`]]),P=o({__name:`TrainerReferenceDialog`,props:{open:{type:Boolean}},emits:[`close`],setup(r,{expose:i,emit:a}){i();let o=r,c=a,l=e(null),u=e(null),d=e(``),f=e(C[0]?.id??``);function p(e){let t=[e.title,e.summary];return t.push(e.syntax,e.example,e.notes.join(` `)),t.join(` `).toLowerCase()}let m=new Map(C.map(e=>[e.id,p(e)])),h=s(()=>{let e=d.value.trim().toLowerCase();return e?C.filter(t=>m.get(t.id)?.includes(e)):C});function g(){let e=u.value;if(!e)return;let t=h.value[0]?.id??``;for(let n of h.value){let r=e.querySelector(`[data-ref-section="${n.id}"]`);if(r&&r.getBoundingClientRect().top<=120)t=n.id;else break}f.value=t}function _(e){let t=u.value,n=t?.querySelector(`[data-ref-section="${e}"]`);t&&n&&t.scrollTo({top:n.offsetTop-16,behavior:`smooth`})}function v(){let e=u.value?.querySelector(`[data-ref-dialog-toc]`);e&&(e.open=!1)}function b(){c(`close`)}n(()=>o.open,async(e,n)=>{e!==n&&e&&(await t(),l.value?.focus(),g())},{immediate:!0}),n(h,()=>{t(g)});let x={props:o,emit:c,searchEl:l,contentHost:u,query:d,activeSectionId:f,sectionText:p,sectionTexts:m,filteredSections:h,updateActiveSection:g,scrollToSection:_,closeMobileToc:v,onNativeClose:b,AppDialog:y,get REFERENCE_UPDATED_LABEL(){return S},get referenceSections(){return C},RefTextVue:D,RefCodeBlock:N};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),F={"aria-live":`polite`},I={class:`mt-3 block`},L={class:`ref-body`},R={class:`ref-toc hidden lg:block`,"aria-label":`Содержание справочника`},z={class:`m-0 mt-4 grid list-none gap-1 p-0`},B=[`aria-current`,`onClick`],V={class:`meta-mono pt-0.5`},H={ref:`contentHost`,class:`ref-content`},ee={class:`mb-6 border border-line bg-surface lg:hidden`,"data-ref-dialog-toc":``},U={class:`flex cursor-pointer items-center justify-between gap-3 px-4 py-3`},W={class:`meta-mono`},G={class:`border-t border-line px-4 py-4`},K={class:`m-0 grid list-none gap-1 p-0`},q=[`onClick`],J={class:`meta-mono pt-0.5`},Y={key:0,class:`p-6 text-center text-[0.95rem] text-muted`,role:`status`},X=[`id`,`data-ref-section`,`aria-labelledby`],Z={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},Q=[`id`],$={class:`meta-mono mr-3 align-baseline`},te={class:`mt-3 max-w-[44rem] text-[0.95rem] leading-relaxed text-muted`},ne={class:`mt-5 grid gap-4`},re={key:0,class:`mt-4 grid max-w-[52rem] gap-1.5 pl-5 text-[0.9rem] leading-relaxed text-muted`},ie={key:1,class:`mt-4 text-[0.88rem] leading-relaxed text-muted`},ae=[`href`],oe={key:1,class:`label`};function se(e,t,n,o,s,y){return i(),g(o.AppDialog,{open:n.open,id:`ref-dialog-title`,title:`Справочник по SQL`,"close-label":`Закрыть справочник`,measure:`fluid`,onClose:o.onNativeClose},{subtitle:r(()=>[h(`span`,F,[p(f(o.filteredSections.length)+` из `+f(o.referenceSections.length)+` разделов`,1),o.REFERENCE_UPDATED_LABEL?(i(),d(m,{key:0},[p(` · обновлено `+f(o.REFERENCE_UPDATED_LABEL),1)],64)):c(``,!0)])]),header:r(()=>[h(`label`,I,[t[1]||=h(`span`,{class:`sr-only`},`Поиск по справочнику`,-1),a(h(`input`,{ref:`searchEl`,"onUpdate:modelValue":t[0]||=e=>o.query=e,type:`search`,class:`ref-search`,placeholder:`Поиск: функция, конструкция или раздел`},null,512),[[v,o.query]])])]),default:r(()=>[h(`div`,L,[h(`nav`,R,[t[2]||=h(`p`,{class:`label m-0`},`Содержание`,-1),h(`ol`,z,[(i(!0),d(m,null,u(o.filteredSections,e=>(i(),d(`li`,{key:e.id},[h(`button`,{type:`button`,class:_([`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.88rem] leading-snug`,{"is-active":e.id===o.activeSectionId}]),"aria-current":e.id===o.activeSectionId?`location`:void 0,onClick:t=>o.scrollToSection(e.id)},[h(`span`,V,f(e.number),1),h(`span`,null,f(e.title),1)],10,B)]))),128))])]),h(`div`,H,[h(`details`,ee,[h(`summary`,U,[t[3]||=h(`span`,{class:`label m-0`},`Содержание`,-1),h(`span`,W,f(o.filteredSections.length)+` разделов`,1)]),h(`div`,G,[h(`ol`,K,[(i(!0),d(m,null,u(o.filteredSections,e=>(i(),d(`li`,{key:e.id},[h(`button`,{type:`button`,class:`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.9rem] leading-snug`,onClick:t=>{o.scrollToSection(e.id),o.closeMobileToc()}},[h(`span`,J,f(e.number),1),h(`span`,null,f(e.title),1)],8,q)]))),128))])])]),o.filteredSections.length===0?(i(),d(`p`,Y,` По запросу «`+f(o.query.trim())+`» в справочнике ничего не найдено. Попробуйте другое слово — например, «join» или «group by». `,1)):c(``,!0),(i(!0),d(m,null,u(o.filteredSections,e=>(i(),d(`article`,{id:`ref-dialog-${e.id}`,key:e.id,"data-ref-section":e.id,class:`border-b border-line py-8 last:border-b-0`,"aria-labelledby":`ref-dialog-${e.id}-title`},[h(`div`,Z,[h(`h3`,{id:`ref-dialog-${e.id}-title`,class:`section-title m-0`},[h(`span`,$,f(e.number),1),p(` `+f(e.title),1)],8,Q)]),h(`p`,te,[l(o.RefTextVue,{text:e.summary},null,8,[`text`])]),h(`div`,ne,[l(o.RefCodeBlock,{label:`Шаблон синтаксиса`,code:e.syntax,title:e.title,variant:`syntax`},null,8,[`code`,`title`]),l(o.RefCodeBlock,{label:e.executable?`Пример`:`Сравнение`,code:e.example,title:e.title,dialect:e.exampleDialect,caption:e.executable?void 0:`Не выполняется в песочнице: она поддерживает только SQLite.`},null,8,[`label`,`code`,`title`,`dialect`,`caption`])]),e.notes.length>0?(i(),d(`ul`,re,[(i(!0),d(m,null,u(e.notes,(e,t)=>(i(),d(`li`,{key:t},[l(o.RefTextVue,{text:e},null,8,[`text`])]))),128))])):c(``,!0),e.course?(i(),d(`p`,ie,[t[4]||=h(`span`,{class:`label`},`Курс`,-1),h(`a`,{href:e.course.href,class:`text-accent`},` «`+f(e.course.label)+`» →`,9,ae)])):c(``,!0)],8,X))),128)),o.filteredSections.length===0?(i(),d(`p`,oe,` Ничего не найдено. Попробуйте другой запрос — например, «join» или «group by». `)):c(``,!0)],512)])]),_:1},8,[`open`])}var ce=b(P,[[`render`,se],[`__scopeId`,`data-v-d520aaed`]]);export{ce as default};