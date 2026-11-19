---
title: "SQL с нуля до результата — уроки, справочник и песочница"
seo_title: "SQL с нуля до результата — уроки, справочник и песочница"
description: "Структурированный путь изучения SQL: бесплатная книга «SQL Введение», справочник синтаксиса, курсы на Stepik и песочница SQLite в браузере. От базовых SELECT до JOIN, CTE и оконных функций."
canonical_url: "https://sql.sergeyromanenko.com/"
markdown_url: "https://sql.sergeyromanenko.com/index.md"
section: "Home"
language: "ru"
robots: "index, follow, max-image-preview:large"
author: "Сергей Романенко"
---

# SQL с нуля до результата

Структурированный путь изучения SQL: от базовых запросов и фильтрации до JOIN, подзапросов, CTE и оконных функций. [Книга «SQL Введение»](https://sql.sergeyromanenko.com/books/sql-introduction/) и [справочник синтаксиса](https://sql.sergeyromanenko.com/reference/) объясняют теорию. [Курсы на Stepik](https://sql.sergeyromanenko.com/courses/) дают проверенные задания и последовательную программу из семи этапов. Песочница SQLite в браузере позволяет сразу применять полученные знания на учебных базах — без установки и регистрации.

[Открыть песочницу](https://sql.sergeyromanenko.com/sandbox/)

[Посмотреть учебный путь](https://sql.sergeyromanenko.com/roadmap/)

Сегодня в песочнице

SQLite

Учебная база «Интернет-магазин»: клиенты, товары, заказы и строки заказов. Восемь заданий с подсказками и эталонными решениями.

```sql
-- Выручка по категориям
SELECT c.name, SUM(oi.quantity * oi.unit_price)
  FROM categories c
  JOIN products AS p
    ON p.category_id = c.id
  JOIN order_items AS oi
    ON oi.product_id = p.id
  JOIN orders AS o
    ON o.id = oi.order_id
 WHERE o.status = 'paid'
 GROUP BY c.name;
```

[Запустить запрос](https://sql.sergeyromanenko.com/sandbox/#share=eJydWG1v20YS_isLfpF9oATuknotUpziMKlbW87J8jUBDBiMxDiEZVKlqDZpUUC2r3cBYiBNeukVadqghwPuq9LEiGDHvr-w-48Os8sllyKRlwL6IHCf2Z155pnhLL_RvnTDsRf4Wgvr2viLodbSymVEH7MHbMqO2D_oKZ0h-j96geAfO6Qn9CW9YFM6Zw_pm21_016zV3qoX_GdfVdHm1vrS4FX-WLi-JEX3UN_QoFXmfhetDMKvb67vO0jdLW7sY76TuTuBqHnjlEfHn66sdpBozAYTPrRGLU30QieIrTRQaNKDL634w3QJdSveIPEJAgHbrjjRe4-twq8xCzwKvF-wmyUMxMWqUGF4wKvEm8K8M8_sbs2CirjyIkmY3QJlUaONyht--had2PrOrp8M479I03Xxm40GWkt7Xq3fW29jW4Hoevt-jt77j2w3Oh8tO1v-ytdu92zUa99ec1WaVgCR7wBWu307Gt2F13vrq63uzfRZ_ZNHZbgENSzb_RQZ6OHOltra2irs_qXLXvbX85vnFD54dvyxyrl0rRrX7W7dmfF3lT8XvIGy9yCJxh17fZa6uDKJ_bKZ2hJLH18CRkCOo6C_l6ybYK-Yl9tb631kCHtBI7bFQbZn4yjYB8S-QejdPcdb1hIqiABJFzATeg6kTvYcaLsYqGPsdLe5aAMReU7cUklXoac8M4PKPAmZprLNhthwi5fW-2gJSFqHZVGrj_w_F34O77jjUYuf9p3_L47HLqD0nJxItQqfFeksrjeGqZgDWKEyrxir9k9G620N1faV-xYbUlpv20fWQYJW0lnylnFrCSAj6Va0_ZVrG5lPSPV1c6m3e3BQRuZOvcGOtfjMvpre23L3oQzlrCOSvQXesGO2CF9wY7oKZ2XxPlLBNZ-o2_ojE3ZIfsbvaDn7IFcNWH1e3rKDugJO2AH7IjjknWLr7Mj-orO6YV8WoWnz2AnOmeH0NHBIud32kak17raGnRR9bqo6HcEhK6HAcJWSUdYR41ms2noCBM1xiy87YUImwJeszi8ocacRV-DCsc1AcdYbF9VOVhgEN0o6YjoqCq2JobKzCJ23fM9ATdjx60YXiuEO3cFui42r8fguvB7xo7YfWAesow2o8nAC0o6soAPjjelM40ig7YXCnSDgy0JbgL4Kb2gZzyv8OaO_bZ0VBVRSkawkRMAIvWSjqo6IsJpLPfFOI81icCaAluTUCJ8OKMz-judw8TAjtgUPHH7d0o6MnVUF57IzGOezGfsAbvPjkEjAmVZnIjEX0tsPKMv6Ak9Y8doa_NyeUVgY3cTf3kK_0tP2HdABqKv6Bl7iNhBNkt0JqyxkIpRULXp-yWVP39n6PzdoCuvgrz4v6fncAji6pizKT2nF_R3fmrJ8X3nz-5dZ380dCvhpBQTzA7oqYQQg1TLGJcNK9MHHsXT1wGiPwFU7AoGt4LQGy9u-htHnLLDMn1OT2B-Y1OoGDalL9NTSBmTTD95zHEzRJ-yI_qantMT9vfU-y_dMOc9pOY1HMaO431rZQOXjUamD_1Az-gJfYF4sFN6QV9L73eH7q3FPX_hRwIrc_oCKAR-1N1xM9PP_snTe8weIvqYl8Fp6vPACe-9B-W1skHKRkIGr-4nYuSFRF7wLc-k09AHF_d8IgdlSBM9XyCb74-TlPKG8CPPEZfKz8AOPaGv6Il06us7RWJ5j7zyo0i9pLaSf9EZ-w5YQjG5c8ERP8i54-SiKUyrWTaqJbXp_BTHOkP0Oa_8s5R4L_TeR-t8W4JLmf70lNfNnJ5BFf_Kpinze17oDYcfKBhLyaxoaj8DF1BN4Pp_2CP6KtZl7NjQCb1xIfm8lajeW2WcaF20wWd0xl_Lc_oG0UfQtqT3-87e2Nv_YOVUy0ZKUPwOjGn_gdtwnbLjVDz--3JfLeNEKaLX_spL9SWi_xaRsgPpfTB0d_-YHiHJpUyXfs7LKQ7iCZuy-yn5o2BY4H6hImtcOrkGLodv6N7KhK0rQ7Mez8iL_RurbYZwd2BGTlsxUQGNRYCp7kAgbGWkTjuime0KygSe9jVLLWdj8aAafw2nhZlzta66apYxXpjok-5QU1G5gJo6qquFhBcBULFYRTQLQoaqa6glUy2IGaqnqYrezJ1lqrRUIfmLCBimDFV4pDBuUGFVgeEcwbimEliLqVmMqw5DZ4KqF_HTUPmpy3SriCYMgAmkAV02zw4x1Ew04B24KE6Qb6qsZoEoCFG11yzzwXkxKKKyjI2CmEiGZYAouimuRnlLTKowvkbI65yeXNF05eZVUJ04vUekRRlHTsT8mNYiEdN1PO2n9Uc4lzgevNOaEyby4pGWmikyhMUUm1aYxVWE4-tBWlNVwQ-Jh-q0lmBBnJ8-BmSN_3B8c1CqpsYLR0RsKIVS57WCxYCvlEdDCBLHI7pSFg3BEc5wBHUgSpxkyQD589IW8WFlpR6vCGaVhfTshQxJhedzQQyx0uAOKDFKMZvKxU4RMT88lxFQblzZJJsTrthqEQMEnspgs_ki8FgQTTJEE6CgUajFhljJq4sAB80ifZn8GlokABOLFSwCUpJggrSw4Jtkc22CiAvJNi2xksucCfubBUoza2IhT7UJkrEK82M2xFIBo2aTs5lTrmUIprElL3aZr02rnSv2DeQN7u7IDxM78msE_1Isv_YonyjAPmct5oIdORLwr7_ii5MyJbzNcuBErmKVjhOFRrzlCdPESDxcki3wLXZxVIuWacsEW03XbgfhvhNpLS1ybg1dTddCdzwZRmOt5U-GQ10b-bta6xvttjd04SarteB7f1mCdG3cd4au1iK6dsvp7-2GwcQfaC1t5IzcUNO1kTOA15DWIoau9QM_cjxfa2lfeQNX-_bb_wOnUwjf)

Ctrl / ⌘ + Enter

Отдельных курсов по SQL на Stepik

ЗАЧЕМ ИЗУЧАТЬ SQL

## SQL востребован в профессиях, связанных с данными

SQL помогает извлекать, объединять и анализировать информацию из баз данных. Поэтому он нужен не только разработчикам: с ним работают аналитики данных, продуктовые и системные аналитики, тестировщики и другие IT-специалисты. Требования к вакансиям показывают, насколько часто этот навык встречается на рынке труда.

### SQL на российском рынке труда

Для специалистов, ориентированных на российский рынок труда, SQL остаётся востребованным профессиональным навыком. Особенно часто он встречается в вакансиях, связанных с аналитикой: работодателям нужны специалисты, которые умеют самостоятельно получать, объединять и анализировать данные.

вакансий аналитиков данных

содержат упоминание SQL

Россия · Анализ вакансий на 31 октября 2026 года

вакансий продуктовых аналитиков

содержат упоминание SQL

Россия · Анализ вакансий на 31 октября 2026 года

вакансий системных аналитиков

содержат упоминание SQL

Россия · Анализ вакансий на 31 октября 2026 года

### Международный рынок: дополнительный контекст

Востребованность SQL не ограничивается российским рынком. Международная выборка технологических вакансий также показывает, что этот навык регулярно встречается в требованиях работодателей.

Эти показатели относятся к исследованной выборке технологических вакансий и не являются универсальной оценкой всего мирового рынка труда.

Анализ выборки технологических вакансий, май–ноябрь 2026

технологических вакансий

содержали упоминание SQL

Выборка из 52 000+ вакансий · май–ноябрь 2026

вакансий с упоминанием SQL

указывали его как обязательный навык

В октябре 2026 года доля технологических вакансий с упоминанием SQL достигла 23%. Это на 3,1 процентного пункта выше среднего показателя предыдущего квартала.

### Мировой рынок труда: перспективы до 2030 года

Долгосрочные прогнозы международного рынка труда указывают на дальнейшее развитие профессий, связанных с информационными технологиями, анализом данных и разработкой программного обеспечения. Согласно отчёту World Economic Forum Future of Jobs Report 2025, исследование охватывает более 1 000 работодателей из 55 экономик мира, представляющих свыше 14 миллионов работников.

По оценке Всемирного экономического форума, к 2030 году структурные изменения мирового рынка труда могут привести к созданию 170 миллионов новых рабочих мест и вытеснению 92 миллионов существующих. Ожидаемый чистый прирост составит 78 миллионов рабочих мест, или около 7% от текущей мировой занятости.

Среди наиболее быстрорастущих профессиональных направлений находятся работа с большими данными, аналитика данных, искусственный интеллект и разработка программного обеспечения. В их числе специалисты по большим данным, аналитики и специалисты по данным, эксперты по искусственному интеллекту и машинному обучению, а также разработчики программного обеспечения.

Эти прогнозы не являются отдельной оценкой спроса на SQL, однако показывают глобальные перспективы профессиональных направлений, в которых умение работать с информацией, анализировать данные и понимать их структуру занимает важное место.

170 млн

Новых рабочих мест

Прогнозируемое создание к 2030 году

92 млн

Рабочих мест

Прогнозируемое вытеснение к 2030 году

+78 млн

Чистый прирост занятости

Около 7% от текущей мировой занятости

Источник: [World Economic Forum, Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) · прогноз на 2025–2030 годы · более 1 000 работодателей из 55 экономик мира

SQL В ЭПОХУ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА

## ИИ может написать SQL-запрос. Понять и проверить его всё ещё важно.

Современные инструменты искусственного интеллекта уже умеют создавать SQL-запросы по описанию задачи, объяснять существующий код и помогать его улучшать. Но сгенерированный запрос ещё не гарантирует правильный результат.

Чтобы уверенно работать с данными, важно понимать структуру базы, связи между таблицами, условия выборки и смысл полученных результатов. SQL становится не только инструментом написания запросов, но и способом понимать, проверять и контролировать работу искусственного интеллекта с данными.

### ИИ ускоряет работу, а не отменяет SQL

Инструменты искусственного интеллекта уже способны создавать SQL-запросы по описанию задачи на обычном языке, объяснять логику существующего кода и помогать изменять запросы.

Например, [Gemini в Google BigQuery](https://docs.cloud.google.com/bigquery/docs/write-sql-gemini) позволяет генерировать SQL, объяснять запросы и работать с ними с помощью естественного языка.

Это снижает порог входа и ускоряет повседневную работу. Но чтобы получить действительно полезный результат, необходимо понимать, что именно делает сгенерированный запрос.

### Нужно понимать, какие данные запрашивать

Чтобы получить правильный ответ, недостаточно просто попросить искусственный интеллект написать SQL.

Необходимо понимать, какие таблицы содержат нужную информацию, как они связаны между собой, какие поля используются для объединения данных и какие условия необходимо применить.

Знание SELECT, WHERE, [JOIN](https://sql.sergeyromanenko.com/reference/#join), GROUP BY, агрегатных функций и других конструкций SQL помогает правильно формулировать задачи, понимать предложенный код и находить ошибки в логике запроса.

### Сгенерированный запрос необходимо проверять

Искусственный интеллект может предложить запрос, который выглядит корректным, но содержит логические ошибки или возвращает данные, не соответствующие поставленной задаче.

Нужно уметь проверять условия фильтрации, связи между таблицами, группировки, работу с NULL и корректность полученных результатов.

Знание SQL позволяет не просто принимать готовый ответ ИИ, а понимать, почему запрос работает именно так и можно ли доверять его результату.

Google прямо предупреждает в [документации по Gemini в BigQuery](https://docs.cloud.google.com/bigquery/docs/write-sql-gemini): сгенерированный запрос может выглядеть правдоподобно, но оказаться фактически неверным, поэтому результат нужно проверять перед использованием.

### Ценность аналитического мышления возрастает

В эпоху искусственного интеллекта особенно важно уметь самостоятельно рассуждать о данных, формулировать вопросы, находить взаимосвязи и оценивать правильность полученных результатов.

SQL развивает практические навыки работы с информацией: от простых выборок до объединения таблиц и сложного анализа.

ИИ может стать эффективным помощником в этой работе, а знание SQL позволяет специалисту осознанно использовать его возможности.

Опрос Stack Overflow Developer Survey 2026 показывает, что доверие разработчиков к искусственному интеллекту во многом связано с возможностью проверить его результаты. 48% опрошенных доверяют ИИ, когда могут легко проверить ответ, и только 6,6% выбрали вариант доверия к нему при выполнении задач, включая важные рабочие решения.

Источник: [Stack Overflow Developer Survey 2026](https://survey.stackoverflow.co/2026/ai/data/ai-trust) · 14 304 респондента · это данные об общем доверии к ИИ, а не исследование SQL

разработчиков доверяют результатам ИИ, когда могут легко проверить их правильность

разработчиков доверяют ИИ при выполнении задач, включая важные рабочие решения

Всемирный экономический форум в отчёте [Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/3-skills-outlook) относит навыки работы с искусственным интеллектом и большими данными к числу наиболее быстрорастущих профессиональных компетенций. При этом аналитическое мышление остаётся одним из важнейших навыков для работодателей: его считают необходимым около семи из десяти опрошенных компаний.

Источник: World Economic Forum, Future of Jobs Report 2025 · Skills Outlook. Это более широкий контекст рынка труда, а не прямое исследование спроса на SQL.

Изучайте SQL, чтобы эффективнее использовать возможности искусственного интеллекта. ИИ поможет быстрее создавать запросы, а знание SQL позволит понимать, проверять и контролировать результат.

[Начать изучение SQL](https://sql.sergeyromanenko.com/courses/sql-introduction/)

[Попробовать SQL в браузере](https://sql.sergeyromanenko.com/sandbox/)

01 · Маршрут обучения

## От первых запросов до продвинутой аналитики

Последовательный путь из семи этапов, который поможет освоить SQL с нуля, научиться работать с данными и решать задачи реального мира. Каждый следующий этап опирается на знания предыдущего.

[Посмотреть полный маршрут →](https://sql.sergeyromanenko.com/roadmap/)

1. 01
  **Основы SQL и первые запросы**
  Познакомьтесь с реляционными базами данных, таблицами и типами данных. Научитесь извлекать нужную информацию с помощью SELECT, фильтровать результаты и сортировать данные.
2. 02
  **Агрегация и группировка данных**
  Научитесь анализировать большие наборы данных с помощью COUNT, SUM, AVG, GROUP BY и HAVING. Разберитесь, как получать сводные показатели и контролировать корректность результатов.
3. 03
  **Связи между таблицами и JOIN**
  Освойте принципы реляционных связей и научитесь объединять данные из нескольких таблиц. Изучите INNER JOIN, LEFT JOIN и научитесь находить пропущенные и дублирующиеся записи.
4. 04
  **Условия, логика и работа с NULL**
  Разберитесь в логике SQL и научитесь строить сложные условия. Освойте CASE, IN, BETWEEN, IS NULL и трёхзначную логику, чтобы правильно обрабатывать разные сценарии и исключения.
5. 05
  **CTE и построение сложных запросов**
  Научитесь разбивать сложные SQL-запросы на понятные логические блоки. Используйте Common Table Expressions (CTE), чтобы писать более структурированный, читаемый и удобный для поддержки код.
6. 06
  **Оконные функции и продвинутая аналитика**
  Освойте ROW_NUMBER, RANK, LAG, LEAD и другие оконные функции. Научитесь рассчитывать рейтинги, сравнивать показатели, строить накопительные итоги и анализировать данные без потери строк.
7. 07
  **Практика, повторение и подготовка к собеседованию**
  Закрепите полученные знания на практических задачах. Повторите ключевые концепции, научитесь объяснять ход решения и подготовьтесь к типичным SQL-вопросам на технических собеседованиях.

02 · Курсы на Stepik

## Продолжить с заданиями по SQL

[Все курсы и программа](https://sql.sergeyromanenko.com/courses/)

### [SQL Введение](https://sql.sergeyromanenko.com/courses/sql-introduction/)

Начальный

Бесплатно

[Подробнее](https://sql.sergeyromanenko.com/courses/sql-introduction/)

### [SQL для начинающих](https://sql.sergeyromanenko.com/courses/sql-for-beginners/)

Начальный

Платно

[Подробнее](https://sql.sergeyromanenko.com/courses/sql-for-beginners/)

### [Практический Тренажер по SQL](https://sql.sergeyromanenko.com/courses/sql-practical-trainer/)

Начальный

Платно

[Подробнее](https://sql.sergeyromanenko.com/courses/sql-practical-trainer/)

### [SQL Оконные функции](https://sql.sergeyromanenko.com/courses/sql-window-functions/)

Продвинутый

Платно

[Подробнее](https://sql.sergeyromanenko.com/courses/sql-window-functions/)

Доступ — бесплатный или платный; условия указаны на Stepik. Рейтинг показывается только при наличии отзывов. [Программа «SQL с нуля до результата»](https://sql.sergeyromanenko.com/courses/sql-from-zero-to-hero/) доступна отдельной страницей.

03 · Практика

## Не просто изучайте SQL. Работайте с данными.

Практикуйтесь прямо в браузере на двух готовых учебных базах: «Игроки» и «Интернет-магазин». Исследуйте таблицы, проверяйте гипотезы и решайте практические задачи. SQLite уже работает в браузере, поэтому ничего устанавливать не нужно.

[Открыть SQL-песочницу →](https://sql.sergeyromanenko.com/sandbox/)

Учебная база · Игроки

SQLite

```sql
-- Пример: анализ статистики игроков
SELECT
  nickname,
  level,
  rating
FROM players
ORDER BY rating DESC
LIMIT 10;
```

[Запустить запрос](https://sql.sergeyromanenko.com/sandbox/#share=eJylWltv21YS_isHfFEKUAJ5SOriYoHKtpwasR2vpDQNYIA4lmiZEEWqJOVLiwLOZduHFk2722KLbNt0u5c-LdZ1olZ1bO9fOPxHi5lDiRfLSdw-JNCQFDn8Zuabb0b-QNqz_MD2XGlBlaXgPUdakIpFwp9GR3zCz_g4Olog_Jif82P-gk_4LyS6Hz3gx9EDPsFPE37KJ4RP-LPoiF_wU37BT7bcVmOtsdTecglx7U7fZQNLBsOx9iwHP_kstN3elrvSvL1Ohg47tPxgy73dXG40yeK9-DRZbrSWtty11fXVNlGVNyVZCqxwNJQWpM1m_eZ6nex4vmX3XLNvHQbkD-T2xptb7pa71GzU2w3Sri-uNcjqCtm43SaNd1db7db0UeQGOEGI3SWrG-3GzUaTbDZX1-vNe-RW4x6p32nfXt1YajbWGxttWVw6fRHyTr259Ha9ecNQ3sA7b9xZW4uvsQbMdmYXqMrlKzp2ePiyO3S8kRv68y8hy42V-p21Ninw7_lFdD-6zyfR40L8TcQW3iZ_yxjLuWfcvhnaoZN5qfhkb2Q73TnH9203yNxs5pYy9cQLAusV1-zbrumz0CLLjaXV9fraDUOm0yc4LAhNx-vZLlmutxtTZ62eHYTwMp5rdvGrEOTpE7bcNzD2qxutRrMND7-dBHuWhCJCMoZBjtMxBkhOwSGLt5fxZeX4heSZ03LKRfmyY29sue_U1-40WlvujULdGe6yW67d2w0LMikwMM0-2m8dMrdrHZT8EZzh30BM-Sk_4ccFmeiGTKiqKDIp3PScLl7xFyjK6BG_4OfRJ4T_Jzrix9EjPuGTgkxUqsikqsikrJTwa1Sh5aJSLlKlICyjqKhF1SgAzjcKSyz848iyXDjZYaH5HhhvATxTh_6OdX8aPSjyp3wcPQAy4D9FD6Mj_gwfKJOqAU9a9D33fasgi9wiqiETTZGJppU0LeWIWivMLKOoKrEj7d2R27X8VujbfbhJIRQHzACP5FD6FggGkZrwn_gkOgLMCjKp1mSi6ejOss0Gnisg-xGdPo8-4WPCvwTAkKIQv2-BtcBAwA1dkYmuKjIxyqWqngZQjf3Wi0q1SGnsd92xO9aKdyDCancsc8c7qNUyEH7FT5Erx0in5yn0NBWAwkC1bGfP8vH6v_IL_oJfRA-Ew1_x5_i1C-TWZ0C0n_MTIOKCTCqGTCrgrlqq0DTMxizeqlpUtNjddXaw7Nt7iPCAHZhdMHLgfsfPYjgNSD_9GulHATkV8s_QSlVjHnxGUdGKqh77swElcNdzduAs1oO57zk7Gfie8GP-C2Rh9Cm8sCYTWkOfNh2o2dEAr_q3SEz4H_z6mp9Hj0TY-QUgDU5pGFijpFTSSFVngVVpUVFjz1oh85dHAdZrEDLf7I6CfLFC7vzMz_mE_0rinHwWh-k5oEFloqpGJrqiOHQqaluvlmg17YuaFAcFz6a-WJaT0EcA5pQ-0kj9yMf8RfQYSoKfxzEsqzKhZeMSXq9fE7SmYBpAdWSTLE0qBlgxqRxuW_4t2-0hq4Bh9m23lwMPiOWMH8OTgekgcWpGNtX4hD8X4fwBC0ioD-S5siETNfZJTROdWkl8qhSVSuzT5q5nufZBcwXODoVh-tlEE_30AcSxCO9e5F8iIg-hFAADmi2F69QpflWtiUrNxryWOAwpGDt80_UG1rrtCk7ogWUOwMzB-I_oEQKo6YBKnkpeURU1QybVKvpUU9M-6YlPtaI2DWzL3rZ8m7lrtocdI4ht07G9bNd4grRwH9F4nNAzlYkmQPxt9KwDgDp9Gb_o4PGsv9213e7SLnN7yHj7tts1O2jmUHyKLpwhw6hVmdSqc1oahZYGVauWyhkGKSdVq6cYxHYsN2yFvsUGAi2woaFZbJBB689xzpzzMf8ZkqUqE1UzfkdbMKoyKVMkmGz3pUlboEn3XWROaHdaoeejp9tomgHYOaCexEV4jv-eYbCA6wAQWr1Myy9tFxpEksbtIuNnmllokU6JcNO33Y71LtYwfjQPckC-AH9waJlERwAElO68WMqkClWZVUmKUUhb00iueL4VhG-P3FCEYgdtcxcP5AD6Fz_mPyGtXfCTOO-hQdPaZQ5-Vc-Cb2jKy7NdVaFrxGJkMPLbdk84yQYj3wzBugKikxndncYZQ43Lvf6Cn-GbYM49xYnvI3D2SXQUfQb5yJ-LLgFkjP0_H8s0wZWT1r_osE6_ZTFMOPhsBha71CMuoo9FqtRQWKTci2UmaExUvQbNxnLW1w0QbGotfmzT3rP8dWbjG4L68c0Bs7v5euQvkHaSBIfiV-nvkWoQTV2QrULnkS1kXJFOqatlsakwCiwmZFFuVkAdeYbSSCSajjltXGNegNRUQecZtKSpV_Z2xUikyHBoNVjPsWIpMhxapgV2BsLvoiM-zmpdDTp2ntRe0uOBF6pCJOmZhqklHKYkDXPD88PdtalGcsEynTkT1g_RQyiBghhRavPIAToARYmWSymlkCJ6mrRFeJ2673v7Mc9DVjGwM5h8zX_m4xkplHWZ0Mplxnz9bohylpaFCIICmVtyWqL-V-xg1_IHDJv3ztTI4fM5kAImyZ9mopvWsNLmKFl4i3IZOnOJavN6Is4fapI-nj9Y9G03JilsMea2OJCfO9EJlGNQPVQmVMvy0yv4kypQs1WR3Eb5CpGoF-mUG26x95m7xDCB-vDZ7LB8-mSnEWiz8zJIF5MxzSWQoiUJZCRtbR32Pcx2Z6P4ID4wZx6_episVDAl8urqn1iHE34a3Ufexlx6xF9En8GheM0AjaYmuNuoXNFolIQF6t2B7TNnEfuM-Gxuz9H3L1kcgN7UBHbrLIgb6zWSv0yRTsWkrpXn-wwTgDoDOeh4-zdHhwJgMMze6DADbm77AvObUIKvyaaAo6qJhCtfpWcqCXOsW6Hl-XYo5vGpkQNy3lQHL6xWrqn2VZzOoSgMtaRm6iHZFijVRO_HaXQnEPfvCtMcBbla_S8_jR5GD6bEJlhprhR8bTVRwdWDQLJ61bhkJOzfPIR6bdpd4aqPpumDnYPz--hxqoCpjrjMm9GrgnT0aq4J0EKqXScLrD3LvwsP8oUHIfSA_fhABq0f-AlGCGeNGgxhGQIpYN6P-QlW7ZjwL_iYP-NjQA50BupmMTDreklP76jS6wMtteTzgoB1-jNwOsKei05qcINQCA1dwVhk6uAa6wNQaEjFEMrKFUWhJ-Ryj_mLFkNPD5lvblssl22QR9F91LEn_AXiCDBQ5TqLUshSNU4wPVMLKd1YTuTYIrP7zGlZzBETEligWJ0cgF9HR9lqAC1Rvaz9v8EUFD-dXIh6fYqY_4KhhpL_FPb6RENhHZNz7Spypkm41-yhFQb9RQ-ZzhGWue1lqe5vfML_x8fRR-ilqsMiYJ4UAmDLMIvkOlm1kOpkM5LdDPre3tqhi_vQIRimc-ge5KdtJFnR1yGXVeTxNJO9RtOCdldVsT4rGeWR7C5UJVnUrjCn47mtjjfC9r6DphmAndUdqEFPkKv-B-pe5FcNhpvXX0-B6MAdFeT8VcrDSDZ8dSdkdmuXxdqMgWkGaOew-wJ10Tk_BhkLMIDMEE3qt8rIGq7p413a3ALFMXPWtdojhy2yfsxzI4eZ22BlSW6msqmKTWcOw2rVeBNaKRkZhk2ppNSS4tbID_qLto_o98Ewt22_e4nAHs72TfAAtXJp5Hj5DygQOVWMaVlyTRStUk3Y6hYbdHZZ2GdLPtsWwjE-YHZ8tp0BBXVQnFnIXdMdQRFl5Vn0MeQRFseE_wrkoWEr_B3kAbxLMRG1kqHOIw8jA_I7nuP1umza8veEKVp-FmgxJMOUO23ZiN71CxkHGABcyS450j9h0NQEumtbTvcuc5CIA7TMfeY4ufHhDP0bJ7OxigvYyxsElHmacKCiXtEJKgm_NmF_6OMSysePZp7fvoiOosezBxsQRO03t0-YUtVa3Kj0K5SQnjSqddZzrXDTs10kugGa5hDsnNY95s8gNjhi4e8WU6TK0Eyr1xm1VKAh7KmGWqpetUdIrdSWdi0rsNa8OE86aJoO2JcGrot4IgXxiHN7RSY1Om-pR8Vvjnpul6GkfnPUEh5bs5nokJfXTmOh0bCmTlK6W0yhWWheI8Uxftg-jHLJoFeUoYabvDe3XEmWdjx_wEJpQQrZtmNJsuRbwcgJA2nBHTmOLA3dnrTwgbQDO2U2sKQF-LON4vQiWQo6zLGkBSpL26zT7_neyO1KC9KQDS1fkqUh63ZtuAVVZKnj4bApLUj7dteSPvzw_1O0mg8)

Учебная база · Интернет-магазин

SQLite

```sql
-- Клиенты без заказов
SELECT c.name, c.city
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.id
WHERE o.id IS NULL
ORDER BY c.name;
```

[Запустить запрос](https://sql.sergeyromanenko.com/sandbox/#share=eJydWG1v20YS_isLfpEDUAZ3Sb0WKU6xmdRXR87J8l0CGDAYiXEIy5RKUb34igJ-uR4CxECb9nJXuGmDHA64r0oTIYJd-zfM_qPD7PJlKRJJGkAfBO4zuzPPPDOc5Vfal24w9oa-1qS6Nv5ioDW1cpnAGVzAHGZwyY_5EwKvYAZvCbyFKZzDFN7CFfy67W_a6_ZKl_SWfWff1UlvueeFB9v-zc7GbdKbjMPhvhuMSWuT9Lb9dftml_xxY61NhkE_ejwkG20yXI6hO16fXCe9Za-_7f_lM7tjk-Gy1ydrm6S9tb6-7W90Vu0OuXEvOvATTdfGbjgZaU3tTqd163aLPBgGrrfr7-y5B2NynWy0P9n2t_2Vjt3q2qTburFuk54TurvDwHPHZGnbJwQPaHftW3aH3Oms3W517pHP7Xs6LuEhpGvf7ZL2Rlf4QLbaa3_asrf9a_mNR8GwP-mFH7OteBw5drCjmHbsm3bHbq_Ym4rfS17_mrAYBV7PJR27tZ46uPKZvfI5WZJLn14nhoSOw2FvL9k2Qa_aN1tb611ixHYSJ-wKg0yz-pFRuvuONygkVZLghQdF3ASuE7r9HSfMLhb6GOnrfQ6qqssRoxIfh5zwLg4o8CZi2gkn44UIE3bF2lqbLJVGjtcv6aQ0cv2-5-_i3_FDbzRyxdOe4_fcwcDtl64VJ0L4sOOF7v77I42w7w5TsoYxYlGu2ut21yYrrc2V1qodqU3o-337xGWQsPXFxPFDTGvOKmIlAXwaq3Xie-HOO9StrGekutbetDtdPGgjU-deXxd6vEb-3FrfsjfxjCWqkxL8DFf8hB_DK34C5zAvyfOXGK69hN9gyg_5Mf87XMElfxKvmrj6HZzzI5jxI37ETwQuWbfEOj-BNzCHq_hpBZ8-x51gzo_hSlrk_E7bSOy1rrYGXVa9Liv6PQGRO8GQUKukE6qTeqPRMHRCmRpjFt7yAkJNCa9aAl5XY86ib2GF06qEUyq3r6gcLDBI7pZ0wnRSkVszQ2VmEXvb8z0JNyPHrQheLYQ7jyS6JjevReCa9HvKT_hjZB6zTDbDSd8blnRiIR8Cb8bO1IsMWl4g0XUBtmJwA8FncAUXIq_nMI39tnRSkVHGjFAjJwDCaiWdVHTCpNM03pfSPNZkEmtKbDWGMunDBUzhV5jDlB_zE36Inri9hyWdmDqpSU_izFORzOf8CX_MT1EjEmVZgojEX0tuPBUv_wt-SrY2b5RXJDZyN_FXpPB_MOPfIBkE3sAF_5bwo2yWYCqtqZSKUVC16fsllb94Z-ji3aArr4K8-L-DSzyECHXM-SFc4pwiTi05vu_8wX3k7I8G7nIwKUUE8yM4jyHMYJUypWXDyvSBp0g_zPkRgR8RKndFg_vDwBsvbvpSIM75cRlewIwfw4wfYsXwQ3idnsLKlGX6yfcCNyVwxk_gLVzCjP8j9f5LN8h5fyYGsSlc8tNo32rZoGWjnulDP8AFzOAVEcEewpWc3dBgd-DeX9zzZ3EksjKHV0gh8qPuThuZfvZPkd5T_i2B70UZnKc-953g4AMor5YNVjYSMkR1P4PXQvPwEq7Elhex09gHF_d8hoUXET2HywWyxf40SaloCP8SORJS-QnZgRm8gVns1N8eFonlA_IqjmK1ktpK_g1T_g2yRCJy55IjcZDz0MlFU5hWs2xUSmrT-TGKdUrghaj8i5R4L_A-ROtiW0ZLmf50JupmDhdYxb_ww5T5PS_wBoPfKRhLyaxsaj8hF1hN6Pp_-VN4E-kycmzgBN64kHzRSlTvrTJNtC7b4HO8nwhffiPwFNtW7P2-szf29n-3ciplIyUoegdGtP8gbIRO-WkqHv9Dua-UaaIU2Wt_EaX6msB_ZKT8KPZ-OHB3P06PmORSpku_EOUUBfGMH_LHKfmj4aDA_UJFVoV0cg08Hr6xeysTtq4MzXo0Iy_2b6q2GSbcwRk5bcVMBdQXAaa6A8OwlZE67YhmtisoE3ja1yy1nI3Fg6riNZwWZs7VmuqqWaZ0YaJPukNVReUCauikphYSXQRgxVIV0SgIGauurpZMpSBmrJ6GKnozd5ap0lLB5C8icJgyVOGxwrhRhRUFRnME06pKYDWiZjGuGg6dCapWxE9d5acWp1tFNHAATCB17LJ5dpihZqKO78BFcaJ8U2U1CkTBmKq9RlkMzotBMZVlahTExDIsI0TRTXE1xrfEpAqja0R8ndOTK5qu3LwKqpOm94i0KKPImZwf01pkcrqOpv20_pjgkkaDd1pz0iS-eKSlZsoMUTnFphVmCRXR6HqQ1lRF8sOioTqtJVyQ56ePEVkVPxrdHJSqqYrCkREbSqHURK1QOeAr5VGXgqTRiK6URV1yRDMcYR3IEmdZMlD-orRlfFRZqUUrklllIT17IUOxwvO5YIZcqQsHlBhjMZvKxU4RsTg8lxFUblTZLJsTodhKEQMMn8bBZvPF8LEkmmWIZkhBvVCLdbmSVxdDDhpF-jLFNbRIACaVK1QGpCTBRGlRyTfL5tpEEReSbVpyJZc5E_c3C5RmVuVCnmoTJWMV5sesy6UCRs2GYDOnXMuQTFMrvthlvjattVftu8TrP9qJP0zsxF8j8DtR8rVH-USB9jlrORfsxCOB-PArvzgpU8K7LPtO6CpW6ThRaCRanjRNjOTDpbgFvsMuimrRMm2ZaKvp2oNhsO-EWlMLnfsDV9O1wB1PBuFYa_qTwUDXRv6u1vxKe-ANXLzJak38wF6OQbo27jkDV2syXbvv9PZ2g-HE72tNbeSM3EDTtZHTx9eQ1mSGrvWGfuh4vtbU_ur1Xe3rr_8PiV3aIA)

[Как работает LEFT JOIN](https://sql.sergeyromanenko.com/reference/#join)

SQLite выполняется непосредственно в браузере. Обе базы уже загружены и готовы к работе. Установка программ и настройка сервера не требуются.

04 · Как устроен сайт

## Факты отдельно, объяснения отдельно

### Проверяемые цифры

Статистика курсов приходит из публичного API Stepik Stats и сохраняется снимком. Сборка сайта не зависит от доступности API.

[Методика и источник →](https://sql.sergeyromanenko.com/statistics/)

### Свои тексты

Статьи и задания написаны для этого проекта. Я не публикую платные материалы курсов и не выдаю чужие тексты за свои.

[О проекте →](https://sql.sergeyromanenko.com/about/)

### Локальная песочница

SQL выполняется в вашем браузере. Запросы не отправляются на сервер, аккаунт не нужен, база исчезает после обновления.

[Конфиденциальность →](https://sql.sergeyromanenko.com/privacy-policy/)

### Честные ограничения

Песочница — SQLite, а курсы в основном MySQL. Это не замена курсу и не автоматическая проверка домашних заданий.

[Что важно знать →](https://sql.sergeyromanenko.com/about/#limitations)

05 · Вопросы

## Коротко о главном

**С чего начать, если я никогда не работал с SQL?**

Начните с курса [«SQL Введение»](https://sql.sergeyromanenko.com/courses/sql-introduction/). Он предназначен для начинающих и последовательно знакомит с основами реляционных баз данных и языка SQL. Посмотреть все этапы обучения можно в [учебном маршруте](https://sql.sergeyromanenko.com/roadmap/). А применять полученные знания на практике можно сразу в [SQL-песочнице](https://sql.sergeyromanenko.com/sandbox/), прямо в браузере.

**Нужны ли знания программирования для изучения SQL?**

Нет. Для начала изучения SQL не требуется опыт программирования или предварительная работа с базами данных. Вводный курс построен специально для новичков: новые понятия и конструкции языка разбираются последовательно, от простого к сложному, с практическими заданиями после изучения материала.

**Нужно ли что-нибудь устанавливать, чтобы работать с SQL?**

Нет. [SQL-песочница](https://sql.sergeyromanenko.com/sandbox/) запускает SQLite непосредственно в браузере с помощью WebAssembly. Учебные базы данных уже подготовлены, поэтому устанавливать СУБД, настраивать сервер или создавать собственное окружение не нужно. Запросы выполняются локально в браузере, а данные учебной базы хранятся в памяти вкладки и сбрасываются после обновления страницы.

**Чем SQLite отличается от MySQL?**

SQLite и MySQL — это разные системы управления реляционными базами данных (СУБД), использующие язык SQL. Основные конструкции языка, такие как SELECT, WHERE, JOIN и GROUP BY, работают в обеих системах, но могут различаться синтаксис, типы данных, функции и отдельные особенности выполнения запросов. В [песочнице](https://sql.sergeyromanenko.com/sandbox/) используется SQLite, а [курсы на Stepik](https://sql.sergeyromanenko.com/courses/) в основном построены вокруг MySQL. Поэтому некоторые запросы и примеры могут потребовать адаптации при переносе между этими СУБД.

**Сайт действительно бесплатный?**

Да. [Справочник](https://sql.sergeyromanenko.com/reference/), учебные задания и [SQL-песочница](https://sql.sergeyromanenko.com/sandbox/) на этом сайте доступны бесплатно и без регистрации. [Курсы на Stepik](https://sql.sergeyromanenko.com/courses/) могут быть бесплатными или платными. Стоимость и условия доступа указаны на странице каждого курса.

**Откуда берутся цифры и статистика на сайте?**

Статистика курсов и автора основана на публичных данных Stepik Stats; рядом с показателями указываются даты снимков. Данные о востребованности SQL на рынке труда представлены отдельно: для российского рынка и международной выборки технологических вакансий указаны соответствующие периоды анализа. Глобальные прогнозы занятости основаны на исследованиях Всемирного экономического форума. Источники и даты публикации данных приводятся непосредственно рядом с соответствующими показателями. Подробнее о статистике курсов можно узнать на странице [методики и источников](https://sql.sergeyromanenko.com/statistics/).

**Это официальный сайт Stepik?**

Нет. Это независимый образовательный проект Сергея Романенко. На сайте собраны учебные материалы, [книга](https://sql.sergeyromanenko.com/books/sql-introduction/), [справочник SQL](https://sql.sergeyromanenko.com/reference/), примеры запросов и [интерактивная песочница](https://sql.sergeyromanenko.com/sandbox/). Курсы автора размещены на образовательной платформе [Stepik](https://stepik.org/), а сам сайт дополняет обучение теорией, справочными материалами и практикой. Проект не является официальным сайтом или подразделением Stepik.

06 · Практика без установки

Достаточно открыть браузер,
чтобы начать работать с SQL.

Интерактивная SQL-песочница с двумя готовыми учебными базами: «Игроки» и «Интернет-магазин». Выполняйте запросы, исследуйте данные и решайте практические задачи. Никаких установок и настройки окружения.

[Попробовать SQL песочницу бесплатно](https://sql.sergeyromanenko.com/sandbox/)

07 · Автор проекта

На Stepik с 2022 года

## Учит тот, кто пишет код

Сергей Романенко, инженер-программист и независимый автор курсов на Stepik. Более 17 лет коммерческой разработки: архитектура приложений, веб-разработка, автоматизация и тестирование.

Его курсы построены вокруг практики: последовательная программа, упражнения сразу после объяснений, тренажёры с проверкой решений и учебные базы для реальных задач. Этот сайт продолжает ту же логику: [книга](https://sql.sergeyromanenko.com/books/sql-introduction/) и [справочник](https://sql.sergeyromanenko.com/reference/) объясняют материал, курсы на Stepik дают структуру и обратную связь, [песочница](https://sql.sergeyromanenko.com/sandbox/) позволяет применить SQL сразу в браузере.

![Сергей Романенко с фотоаппаратом. Хойан, Вьетнам.](https://sql.sergeyromanenko.com/author/sergey-romanenko.jpg)

*Сергей Романенко*

Победитель [Stepik Awards 2023](https://stepstat.ru/awards?year=2023&nomination=%D0%9F%D1%80%D0%BE%D1%80%D1%8B%D0%B2%20%D0%B3%D0%BE%D0%B4%D0%B0) в номинации «Прорыв года».

[Подробнее об авторе](https://sergeyromanenko.com/about/)

[Профиль на Stepik](https://stepik.org/users/awilum)

[Все курсы автора →](https://stepstat.ru/user/561566563/courses)
