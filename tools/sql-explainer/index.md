---
title: "Разбор SQL-запроса"
seo_title: "Разбор SQL-запроса онлайн — SQL с нуля до результата"
description: "Бесплатный инструмент для разбора SELECT-запросов. Изучайте FROM, JOIN, WHERE, GROUP BY, HAVING и другие части SQL с понятными объяснениями на русском языке."
canonical_url: "https://sql.sergeyromanenko.com/tools/sql-explainer/"
markdown_url: "https://sql.sergeyromanenko.com/tools/sql-explainer/index.md"
section: "Tools"
language: "ru"
robots: "index, follow, max-image-preview:large"
---

1. [Инструменты](https://sql.sergeyromanenko.com/tools/)
2. Разбор SQL-запроса

# Разбор SQL-запроса

Вставьте SQL-запрос, чтобы увидеть, из каких частей он состоит, что делает каждый блок и в каком логическом порядке обрабатываются данные.

MySQL · SQLite

Локально

Без регистрации

Важно

Это логическая модель обработки SQL-запроса для обучения, а не фактический план выполнения СУБД. Оптимизатор базы данных может выбирать другой порядок физических операций.

Инструмент только анализирует структуру запроса и не выполняет его.

## SQL-запрос

MySQL

SQLite

Разобрать запрос

Очистить

Копировать запрос

MySQL · Ctrl / Cmd + Enter — разобрать

Выбрать запрос для разбора

## Разбор запроса

Здесь появится подробный разбор SQL-запроса.

Вставьте SQL-запрос или выберите один из примеров.

## Выберите запрос для разбора

39 из 39 запросов из курса «SQL Введение»

### SELECT и DISTINCT

- Все столбцы таблицы playersЗвёздочка возвращает все столбцы.`SELECT * FROM players;`
- Несколько столбцовВыбор конкретных столбцов через запятую.`SELECT nickname, level, rating FROM players;`
- Уникальные городаDISTINCT убирает дубликаты.`SELECT DISTINCT city FROM players;`
- Уникальные пары «ранг + клан»DISTINCT для нескольких столбцов.`SELECT DISTINCT rank_title, guild FROM players;`

### ORDER BY и LIMIT

- Топ-3 игроков по рейтингуORDER BY rating DESC и LIMIT.`SELECT nickname, level, rating FROM players ORDER BY rating DESC LIMIT 3;`
- Топ-3 со смещениемLIMIT с OFFSET — вторая страница.`SELECT nickname, level, rating FROM players ORDER BY rating DESC LIMIT 3 OFFSET 3;`
- Сортировка по уровнюORDER BY ... ASC.`SELECT nickname, city, level FROM players ORDER BY level ASC;`
- Сортировка по рейтингуORDER BY ... DESC.`SELECT nickname, rank_title, rating FROM players ORDER BY rating DESC;`
- Сортировка по городу и рейтингуСортировка по нескольким столбцам.`SELECT city, nickname, rating FROM players ORDER BY city ASC, rating DESC;`

### WHERE: фильтрация строк

- Москвичи уровня выше 40WHERE с AND и LIMIT.`SELECT nickname, city, level FROM players WHERE city = 'Москва' AND level > 40 LIMIT 2;`
- Игроки, зарегистрированные после датыСравнение дат в WHERE.`SELECT nickname, level, registration_date FROM players WHERE registration_date > '2025-01-15';`
- Игроки уровня выше 40 с рангом GoldAND между двумя условиями.`SELECT nickname, level, rank_title FROM players WHERE level > 40 AND rank_title = 'Gold';`
- Игроки двух кланов с высоким рейтингомСкобки, OR и AND.`SELECT nickname, guild, rating, last_login FROM players WHERE (guild = 'Грифоны Эрафии' OR guild = 'Фениксы Конфлюкса') AND rating > 2000 AND last_login > '2026-06-01';`
- Даты регистрации вне спискаNOT IN со списком значений.`SELECT nickname, registration_date FROM players WHERE registration_date NOT IN ('2025-01-15', '2025-02-10');`
- Игроки с рангом SilverПростое равенство в WHERE.`SELECT * FROM players WHERE rank_title = 'Silver';`
- Все города, кроме МосквыОператор <> и комментарий в запросе.`SELECT * FROM players WHERE city <> 'Москва'; -- все города, кроме Москвы`
- Игроки уровня 50 и вышеОператор >=.`SELECT * FROM players WHERE level >= 50;`
- Игроки меньше чем с 10 победамиОператор <.`SELECT * FROM players WHERE wins < 10;`
- Рейтинг между 1500 и 2500BETWEEN включает границы.`SELECT * FROM players WHERE rating BETWEEN 1500 AND 2500; -- включает границы`
- Почта в домене @yandex.ruLIKE с шаблоном.`SELECT * FROM players WHERE email LIKE '%@yandex.ru';`
- Игроки без кланаIS NULL — игроки без клана.`SELECT * FROM players WHERE guild IS NULL; -- игроки без клана`
- Всего игр у каждого игрокаВычисляемый столбец wins + losses.`SELECT nickname, wins, losses, (wins + losses) AS total_games FROM players WHERE level > 30;`
- Разница между победами и поражениямиВычисляемый столбец wins - losses.`SELECT nickname, (wins - losses) AS win_difference FROM players WHERE wins > losses;`
- Бонусное золотоВычисляемый столбец wins * 10.`SELECT nickname, wins, (wins * 10) AS bonus_gold FROM players WHERE wins >= 100;`
- Побед на один уровеньДеление побед на уровень.`SELECT nickname, level, wins, (wins / level) AS wins_per_level FROM players WHERE level > 0;`

### Псевдонимы (AS)

- Псевдонимы для всех столбцов выборкиAS переименовывает столбцы.`SELECT id AS player_id, nickname AS player_name, level AS player_level, rank_title AS player_rank, rating AS competitive_rating FROM players;`
- Псевдоним для таблицыFROM players AS p.`SELECT p.id, p.nickname AS player_name, p.city FROM players AS p;`

### GROUP BY и HAVING

- Средний уровень в каждом городеAVG + GROUP BY city.`SELECT city, AVG(level) AS avg_level FROM players GROUP BY city;`
- Средний уровень с округлениемROUND(AVG(level), 1).`SELECT city, ROUND(AVG(level), 1) AS avg_level FROM players GROUP BY city;`
- Количество игроков каждого рангаCOUNT(id) + GROUP BY rank_title.`SELECT rank_title, COUNT(id) AS players_count FROM players GROUP BY rank_title;`
- Ранги, где больше 10 игроковHAVING COUNT(id) > 10.`SELECT rank_title, COUNT(id) AS players_count FROM players GROUP BY rank_title HAVING COUNT(id) > 10;`
- Ранги по убыванию количестваHAVING + ORDER BY players_count.`SELECT rank_title, COUNT(id) AS players_count FROM players GROUP BY rank_title HAVING COUNT(id) > 10 ORDER BY players_count DESC;`
- Максимальный и минимальный рейтинг по кланамMAX/MIN + GROUP BY guild.`SELECT guild, MAX(rating) AS max_rating, MIN(rating) AS min_rating FROM players WHERE guild IS NOT NULL GROUP BY guild;`
- Группировка по дате регистрации и уровнюGROUP BY с двумя столбцами.`SELECT registration_date, level, COUNT(id) AS players_count FROM players GROUP BY registration_date, level;`

### Агрегатные функции

- Общее количество игроковCOUNT(*).`SELECT COUNT(*) FROM players;`
- Сумма побед клана «Фениксы Конфлюкса»SUM(wins) с WHERE.`SELECT SUM(wins) FROM players WHERE guild = 'Фениксы Конфлюкса';`
- Средний рейтинг среди GoldAVG(rating) с WHERE.`SELECT AVG(rating) FROM players WHERE rank_title = 'Gold';`
- Минимальный уровеньMIN(level).`SELECT MIN(level) FROM players;`
- Максимальное число победMAX(wins).`SELECT MAX(wins) FROM players;`

Ваш SQL-запрос анализируется непосредственно в браузере и не отправляется на сервер.

## Поддерживаемые SQL-диалекты: MySQL и SQLite

SQL Explainer поддерживает два популярных диалекта SQL — MySQL и SQLite. Основные принципы работы с запросами у них похожи, однако синтаксис отдельных функций, типы данных и некоторые возможности различаются.

| Возможность | MySQL | SQLite |
| --- | --- | --- |
| Общие табличные выражения (CTE) | MySQL 8.0+ | SQLite 3.8.3+ |
| Оконные функции (OVER, PARTITION BY) | MySQL 8.0+ | SQLite 3.25.0+ |
| RIGHT JOIN | Есть | SQLite 3.39.0+ |
| FULL OUTER JOIN | Нет (обычно через LEFT JOIN + UNION) | SQLite 3.39.0+ |
| Типы данных | Статические (INT, VARCHAR, DATETIME…) | Динамические (storage classes: INTEGER, REAL, TEXT, BLOB, NULL); STRICT-таблицы с 3.37.0 |
| Дата и время | Типы DATE, TIME, DATETIME, TIMESTAMP, YEAR | Отдельного типа нет; значения хранят как TEXT, REAL или INTEGER |
| Функции даты/времени | NOW(), CURDATE(), DATE_FORMAT() | date('now'), datetime('now'), strftime() |
| Конкатенация строк | CONCAT(a, b) | a \|\| b |
| Автоинкремент | id INT AUTO_INCREMENT PRIMARY KEY | id INTEGER PRIMARY KEY (алиас rowid) |
| GROUP BY | ONLY_FULL_GROUP_BY по умолчанию | Допускает столбцы вне GROUP BY (недетерминированно) |

При переносе SQL-запроса между MySQL и SQLite важно учитывать различия синтаксиса и версий. Выбирайте соответствующий диалект перед анализом запроса.

## Как читать разбор

1. Начинайте с источника данных: откуда запрос берёт строки — таблица, общий табличный запрос или производная таблица.
2. Проходите шаги сверху вниз — это логический порядок обработки, а не физический план СУБД.
3. WHERE и HAVING — разные фильтры: WHERE отбирает строки до группировки, HAVING — группы после.
4. Агрегатные функции работают внутри групп; оконные функции с OVER — по окнам, не схлопывая строки.
5. Нажмите на шаг, чтобы закрепить подсветку соответствующего фрагмента в редакторе.

Курс «SQL Введение» — учите SQL дальше →

## Чего инструмент не умеет

- Не выполняет запрос — вы не увидите его результат и план выполнения.
- Не подтверждает синтаксическую корректность для конкретной версии MySQL.
- Разбирает один SELECT-запрос за раз; DML, DDL и другие команды не поддерживаются.
- Для оконных рамок (ROWS/RANGE BETWEEN) даёт общее пояснение без разбора границ.
- Анализ выполняется локально в вашем браузере; запрос никуда не отправляется.

Справочник по синтаксису →

Песочница — выполнить запрос →

## Хотите научиться писать такие запросы самостоятельно?

Разбор помогает понять конкретный SQL-запрос. В курсах вы последовательно изучите SQL, освоите работу с таблицами, соединениями, подзапросами и агрегатными функциями и научитесь применять эти знания на практике.

Посмотреть курсы SQL
