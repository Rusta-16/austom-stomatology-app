# AGENTS.md

## Проект

Лендинг стоматологической клиники «Аюстом» (Ростов-на-Дону). Одностраничное Next.js-приложение с под-маршрутом для врачей и API-прокси к мессенджеру Max.ru.

**Стек:** Next.js 16 (App Router) · React 19 · React Compiler (экспериментальный) · Tailwind CSS v4 · SCSS · HeroUI (формы врачей) · react-imask (маска телефона)

## Команды

```bash
npm run dev      # dev-сервер (next dev)
npm run build    # production-сборка
npm run lint     # eslint (flat config, next/core-web-vitals)
```

Тестов нет, форматтера нет, pre-commit хуков нет, CI нет.

## Структура

```
src/
  app/
    page.jsx                      # Главная — собирает все секции
    layout.js                     # Корневой layout: импортирует globals.scss, шрифт Montserrat, Header, Footer, YandexMetrika
    doctors/page.jsx              # Вход/регистрация врача (формы HeroUI, авторизация не реализована)
    api/max/route.js              # POST-прокси к мессенджеру Max.ru (отправка заявок)
    robots.js / sitemap.js
    components/                   # Секции страницы (StartPage, Services, Team, Doctors и т.д.)
    components/ui/                # Header, Footer, модалки форм (контекст ShowForm, EntryForm, TrueForm)
    components/ui/Buttons/        # CTA-кнопки, открывающие форму записи
    forms/                        # Вход/регистрация врача (LoginForm, RegistrForm — HeroUI)
    styles/
      globals.scss                # Главный SCSS-вход — импортирует все партиалы через @use
      globals.css / .map          # Скомпилированный артефакт (не редактировать; исходник — .scss-партиалы)
      _project-variables.scss     # Цвета ($pink-color: #FFC6C4), размеры шрифтов, брейкпоинты
      _*.scss                     # Стилевые партиалы к каждому компоненту
public/                           # Статика, фото врачей, PDF (лицензии, прайс)
```

## Ключевые соглашения

- **Client vs Server:** компоненты явно помечаются `'use client'`. Большинство компонентов секций — server components. Слайдеры, формы и интерактивный UI — client components.
- **Стили:** SCSS-партиалы импортируются через `@use` в `globals.scss`. Плавающая типографика через `clamp()`. Mobile-first, брейкпоинт `704px`. Не редактировать `globals.css` напрямую — он компилируется из SCSS.
- **Алиас путей:** `@/*` → `./src/*` (jsconfig.json).
- **Язык:** весь пользовательский контент — на русском. Коммиты тоже на русском.
- **Состояние:** React Context (`ShowForm.jsx`) для видимости формы записи. Внешних библиотек состояния нет.
- **Слайдеры:** самописные — `useRef` + touch-события + CSS-трансформы. Библиотек каруселей нет.
- **Отправка формы:** валидация на клиенте в `EntryForm.jsx` → POST на `/api/max` → прокси на API Max.ru (`TOKEN` + `CHAT_ID` из `.env`).
- **Метрика:** счётчик Яндекс.Метрики (91536508) в `YandexMetrika.jsx`; также `head`-верификация в `layout.js`.

## Подводные камни

- `globals.css` генерируется автоматически из SCSS. Редактируйте `.scss`-файлы, а не готовый CSS.
- Next.js 16 + React Compiler — bleeding-edge. Проверяйте совместимость при добавлении новых зависимостей.
- `visual-studio/` — несвязанная тема Dracula, игнорируйте её.
- `pg` есть в `package.json`, но в коде не используется.
- Авторизация врачей (вход/регистрация) заглушена — `handleSubmit` закомментирован.
- `/api/max` требует env-переменные `TOKEN` и `CHAT_ID` (Max.ru). Тело запроса: `{ fio, tel, comment }`.