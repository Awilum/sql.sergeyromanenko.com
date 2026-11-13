import{D as e,F as t,I as n,L as r,O as i,S as a,_ as o,a as s,at as c,c as l,h as u,l as d,m as f,n as p,o as m,rt as h,s as g,z as _}from"./runtime-core.esm-bundler.Dcxww3Pe.js";import{i as v}from"./runtime-dom.esm-bundler.By7YIEGt.js";import{t as y}from"./AppDialog.B_SqshoT.js";import{t as b}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as x}from"./clipboard._lASIDAv.js";var S=`8 ноября 2026`,C=[{id:`select`,group:`basics`,title:`SELECT`,summary:`Выбирает столбцы и вычисляемые выражения из таблицы.`,syntax:`SELECT столбец, выражение AS псевдоним
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
ORDER BY price DESC;`,exampleDialect:`SQLite · SQL Server`,executable:!1,notes:[`Проверяйте версию СУБД: RIGHT и FULL JOIN появились в SQLite 3.39.0, оконные функции — в 3.25.0.`,`Песочница сайта работает на SQLite, курсы — в основном на MySQL: сверяйте функции дат, строк и типы.`]}].map((e,t)=>({...e,number:String(t+1).padStart(2,`0`)})),w=o({__name:`RefTextVue`,props:{text:{}},setup(e,{expose:t}){t();let n=e,r={props:n,parts:s(()=>n.text.split(/`([^`]*)`/g))};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),T={key:0,class:`ref-inline-code`};function E(t,n,r,a,o,s){return e(!0),d(p,null,i(a.parts,(t,n)=>(e(),d(p,{key:n},[n%2==1?(e(),d(`code`,T,c(t),1)):(e(),d(p,{key:1},[f(c(t),1)],64))],64))),128)}var D=b(w,[[`render`,E]]),O=o({__name:`RefCodeBlock`,props:{label:{},code:{},title:{},variant:{},dialect:{},caption:{}},setup(e,{expose:t}){t();let n=e,r=s(()=>n.variant===`syntax`),i=_(!1),a=null;async function o(){let e=await x(n.code);i.value=e===`copied`,a!==null&&window.clearTimeout(a),a=window.setTimeout(()=>{i.value=!1,a=null},2e3)}let c={props:n,isSyntax:r,copied:i,get copiedTimer(){return a},set copiedTimer(e){a=e},copy:o};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),k={class:`flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1`},A=[`aria-label`],j=[`aria-label`];function M(t,n,r,i,a,o){return e(),d(`div`,{class:h([`overflow-hidden rounded-none border`,i.isSyntax?`on-dark border-ink-deep bg-ink-deep`:`border-line bg-surface`])},[m(`div`,{class:h([`flex items-center justify-between gap-3 border-b px-3.5 py-2`,i.isSyntax?`border-white/10`:`border-line`])},[m(`div`,k,[m(`p`,{class:h([`label m-0`,i.isSyntax?`text-[#c9bfae]`:``])},c(r.label),3),r.dialect?(e(),d(`span`,{key:0,class:h([`meta-mono truncate leading-none`,i.isSyntax?`text-[#a99e8c]`:``])},c(r.dialect),3)):l(``,!0)]),m(`button`,{type:`button`,class:h([`ref-code-copy`,i.isSyntax?`ref-code-copy--dark`:``]),"aria-label":`${r.label}: ${r.title} — скопировать код`,onClick:i.copy},c(i.copied?`Скопировано`:`Копировать`),11,A)],2),m(`pre`,{tabindex:`0`,"aria-label":`${r.label}: ${r.title}`,class:h([`m-0 overflow-x-auto p-4 font-mono text-[0.78rem] leading-relaxed`,i.isSyntax?`text-[#f3ede2]`:`text-ink`])},[m(`code`,null,c(r.code),1)],10,j),r.caption?(e(),d(`p`,{key:0,class:h([`m-0 border-t px-3.5 py-2 text-[0.75rem] leading-relaxed`,i.isSyntax?`border-white/10 text-[#c9bfae]`:`border-line text-muted`])},c(r.caption),3)):l(``,!0)],2)}var N=b(O,[[`render`,M],[`__scopeId`,`data-v-bc203a4f`]]),P=o({__name:`TrainerReferenceDialog`,props:{open:{type:Boolean}},emits:[`close`],setup(e,{expose:n,emit:r}){n();let i=e,o=r,c=_(null),l=_(null),u=_(``),d=_(C[0]?.id??``);function f(e){let t=[e.title,e.summary];return t.push(e.syntax,e.example,e.notes.join(` `)),t.join(` `).toLowerCase()}let p=new Map(C.map(e=>[e.id,f(e)])),m=s(()=>{let e=u.value.trim().toLowerCase();return e?C.filter(t=>p.get(t.id)?.includes(e)):C});function h(){let e=l.value;if(!e)return;let t=m.value[0]?.id??``;for(let n of m.value){let r=e.querySelector(`[data-ref-section="${n.id}"]`);if(r&&r.getBoundingClientRect().top<=120)t=n.id;else break}d.value=t}function g(e){let t=l.value,n=t?.querySelector(`[data-ref-section="${e}"]`);t&&n&&t.scrollTo({top:n.offsetTop-16,behavior:`smooth`})}function v(){let e=l.value?.querySelector(`[data-ref-dialog-toc]`);e&&(e.open=!1)}function b(){o(`close`)}t(()=>i.open,async(e,t)=>{e!==t&&e&&(await a(),c.value?.focus(),h())},{immediate:!0}),t(m,()=>{a(h)});let x={props:i,emit:o,searchEl:c,contentHost:l,query:u,activeSectionId:d,sectionText:f,sectionTexts:p,filteredSections:m,updateActiveSection:h,scrollToSection:g,closeMobileToc:v,onNativeClose:b,AppDialog:y,get REFERENCE_UPDATED_LABEL(){return S},get referenceSections(){return C},RefTextVue:D,RefCodeBlock:N};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),F={"aria-live":`polite`},I={class:`mt-3 block`},L={class:`ref-body`},R={class:`ref-toc hidden lg:block`,"aria-label":`Содержание справочника`},z={class:`m-0 mt-4 grid list-none gap-1 p-0`},B=[`aria-current`,`onClick`],V={class:`meta-mono pt-0.5`},H={ref:`contentHost`,class:`ref-content`},ee={class:`mb-6 border border-line bg-surface lg:hidden`,"data-ref-dialog-toc":``},U={class:`flex cursor-pointer items-center justify-between gap-3 px-4 py-3`},W={class:`meta-mono`},G={class:`border-t border-line px-4 py-4`},K={class:`m-0 grid list-none gap-1 p-0`},q=[`onClick`],J={class:`meta-mono pt-0.5`},Y={key:0,class:`p-6 text-center text-[0.95rem] text-muted`,role:`status`},X=[`id`,`data-ref-section`,`aria-labelledby`],Z={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},Q=[`id`],$={class:`meta-mono mr-3 align-baseline`},te={class:`mt-3 max-w-[44rem] text-[0.95rem] leading-relaxed text-muted`},ne={class:`mt-5 grid gap-4`},re={key:0,class:`mt-4 grid max-w-[52rem] gap-1.5 pl-5 text-[0.9rem] leading-relaxed text-muted`},ie={key:1,class:`mt-4 text-[0.88rem] leading-relaxed text-muted`},ae=[`href`],oe={key:1,class:`label`};function se(t,a,o,s,_,y){return e(),g(s.AppDialog,{open:o.open,id:`ref-dialog-title`,title:`Справочник по SQL`,"close-label":`Закрыть справочник`,measure:`fluid`,onClose:s.onNativeClose},{subtitle:n(()=>[m(`span`,F,[f(c(s.filteredSections.length)+` из `+c(s.referenceSections.length)+` разделов`,1),s.REFERENCE_UPDATED_LABEL?(e(),d(p,{key:0},[f(` · обновлено `+c(s.REFERENCE_UPDATED_LABEL),1)],64)):l(``,!0)])]),header:n(()=>[m(`label`,I,[a[1]||=m(`span`,{class:`sr-only`},`Поиск по справочнику`,-1),r(m(`input`,{ref:`searchEl`,"onUpdate:modelValue":a[0]||=e=>s.query=e,type:`search`,class:`ref-search`,placeholder:`Поиск: функция, конструкция или раздел`},null,512),[[v,s.query]])])]),default:n(()=>[m(`div`,L,[m(`nav`,R,[a[2]||=m(`p`,{class:`label m-0`},`Содержание`,-1),m(`ol`,z,[(e(!0),d(p,null,i(s.filteredSections,t=>(e(),d(`li`,{key:t.id},[m(`button`,{type:`button`,class:h([`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.88rem] leading-snug`,{"is-active":t.id===s.activeSectionId}]),"aria-current":t.id===s.activeSectionId?`location`:void 0,onClick:e=>s.scrollToSection(t.id)},[m(`span`,V,c(t.number),1),m(`span`,null,c(t.title),1)],10,B)]))),128))])]),m(`div`,H,[m(`details`,ee,[m(`summary`,U,[a[3]||=m(`span`,{class:`label m-0`},`Содержание`,-1),m(`span`,W,c(s.filteredSections.length)+` разделов`,1)]),m(`div`,G,[m(`ol`,K,[(e(!0),d(p,null,i(s.filteredSections,t=>(e(),d(`li`,{key:t.id},[m(`button`,{type:`button`,class:`ref-toc-link flex w-full gap-2.5 py-1.5 text-left text-[0.9rem] leading-snug`,onClick:e=>{s.scrollToSection(t.id),s.closeMobileToc()}},[m(`span`,J,c(t.number),1),m(`span`,null,c(t.title),1)],8,q)]))),128))])])]),s.filteredSections.length===0?(e(),d(`p`,Y,` По запросу «`+c(s.query.trim())+`» в справочнике ничего не найдено. Попробуйте другое слово — например, «join» или «group by». `,1)):l(``,!0),(e(!0),d(p,null,i(s.filteredSections,t=>(e(),d(`article`,{id:`ref-dialog-${t.id}`,key:t.id,"data-ref-section":t.id,class:`border-b border-line py-8 last:border-b-0`,"aria-labelledby":`ref-dialog-${t.id}-title`},[m(`div`,Z,[m(`h3`,{id:`ref-dialog-${t.id}-title`,class:`section-title m-0`},[m(`span`,$,c(t.number),1),f(` `+c(t.title),1)],8,Q)]),m(`p`,te,[u(s.RefTextVue,{text:t.summary},null,8,[`text`])]),m(`div`,ne,[u(s.RefCodeBlock,{label:`Шаблон синтаксиса`,code:t.syntax,title:t.title,variant:`syntax`},null,8,[`code`,`title`]),u(s.RefCodeBlock,{label:t.executable?`Пример`:`Сравнение`,code:t.example,title:t.title,dialect:t.exampleDialect,caption:t.executable?void 0:`Не выполняется в песочнице: она поддерживает только SQLite.`},null,8,[`label`,`code`,`title`,`dialect`,`caption`])]),t.notes.length>0?(e(),d(`ul`,re,[(e(!0),d(p,null,i(t.notes,(t,n)=>(e(),d(`li`,{key:n},[u(s.RefTextVue,{text:t},null,8,[`text`])]))),128))])):l(``,!0),t.course?(e(),d(`p`,ie,[a[4]||=m(`span`,{class:`label`},`Курс`,-1),m(`a`,{href:t.course.href,class:`text-accent`},` «`+c(t.course.label)+`» →`,9,ae)])):l(``,!0)],8,X))),128)),s.filteredSections.length===0?(e(),d(`p`,oe,` Ничего не найдено. Попробуйте другой запрос — например, «join» или «group by». `)):l(``,!0)],512)])]),_:1},8,[`open`])}var ce=b(P,[[`render`,se],[`__scopeId`,`data-v-9885f757`]]);export{ce as default};